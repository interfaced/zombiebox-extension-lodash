const path = require('path');
const fs = require('fs');

const ast = require('ast-types').builders;
const esprima = require('esprima');
const escodegen = require('escodegen');
const doctrine = require('doctrine');
const buildLodash = require('lodash-cli');

const METHODS = [
	'chunk',
	'difference',
	'differenceBy',
	'differenceWith',
	'dropRight',
	'dropRightWhile',
	'dropWhile',
	'findLastIndex',
	'flatten',
	'flattenDeep',
	'flattenDepth',
	'fromPairs',
	'intersection',
	'intersectionBy',
	'intersectionWith',
	'last',
	'pull',
	'pullAll',
	'pullAllBy',
	'pullAllWith',
	'pullAt',
	'remove',
	'takeRight',
	'takeRightWhile',
	'takeWhile',
	'union',
	'unionBy',
	'unionWith',
	'uniq',
	'uniqBy',
	'uniqWith',
	'unzip',
	'unzipWith',
	'without',
	'xor',
	'xorBy',
	'xorWith',
	'zip',
	'zipObject',
	'zipWith',

	'countBy',
	'findLast',
	'flatMap',
	'flatMapDeep',
	'flatMapDepth',
	'forEachRight',
	'groupBy',
	'includes',
	'keyBy',
	'partition',
	'sample',
	'sampleSize',
	'shuffle',

	'ary',
	'curry',
	'curryRight',
	'debounce',
	'memoize',
	'once',
	'overArgs',
	'partial',
	'partialRight',
	'throttle',
	'unary',
	'wrap',

	'clone',
	'cloneDeep',
	'cloneDeepWith',
	'cloneWith',
	'isEqual',
	'isEqualWith',
	'toArray',
	'toInteger',
	'toNumber',
	'toString',

	'clamp',
	'random',

	'defaults',
	'defaultsDeep',
	'findKey',
	'findLastKey',
	'mapKeys',
	'mapValues',
	'merge',
	'mergeWith',
	'omitBy',
	'pickBy',
	'toPairs',
	'toPairsIn',
	'values',
	'valuesIn',

	'camelCase',
	'capitalize',
	'escape',
	'escapeRegExp',
	'kebabCase',
	'lowerCase',
	'lowerFirst',
	'pad',
	'padEnd',
	'padStart',
	'repeat',
	'snakeCase',
	'startCase',
	'trimEnd',
	'trimStart',
	'truncate',
	'unescape',
	'upperCase',
	'upperFirst',

	'attempt',
	'over',
	'overEvery',
	'overSome',
	'range',
	'rangeRight',
	'times',
	'uniqueId'
];

const JSDOC_TAGS_RENAMING = {
	'returns': 'return'
};

const JSDOC_TAGS_BLACKLIST = [
	'category',
	'memberOf',
	'static',
	'example',
	'see'
];

const BUNDLE_FILE_PATH = path.join(__dirname, '..', 'vendor', 'lodash.js');
const EXTERNS_FILE_PATH = path.join(__dirname, '..', 'externs', 'lodash.js');
const README_FILE_PATH = path.join(__dirname, '..', 'README.md');
const README_TEMPLATE_FILE_PATH = path.join(__dirname, '..', 'templates', 'README.md.jst');

const TAB = '\t';
const NEW_LINE = '\n';
const LINE_STARTER = `${TAB} * `;

const {
	ExpressionStatement,
	CallExpression,
	VariableDeclaration,
	FunctionDeclaration
} = esprima.Syntax;

let lodashPath;
try {
	lodashPath = require.resolve('lodash');
} catch (e) {
	throw new Error('Can\'t resolve lodash path');
}

const lodashAST = esprima.parse(fs.readFileSync(lodashPath, 'utf-8'), {
	attachComment: true
});

const lodashIIFE = lodashAST.body.find((node) =>
	node.type === ExpressionStatement &&
	node.expression.type === CallExpression
);

if (!lodashIIFE) {
	throw new Error('Lodash source code is not wrapped to IIFE');
}

const lodashIIFEBody = lodashIIFE.expression.callee.object.body.body;

fs.writeFileSync(EXTERNS_FILE_PATH, generateExterns(lodashIIFEBody), 'utf-8');
console.log(`Externs written at ${EXTERNS_FILE_PATH}`);

fs.writeFileSync(README_FILE_PATH, generateReadme(lodashIIFEBody), 'utf-8');
console.log(`Readme written at ${README_FILE_PATH}`);

buildLodash([
	`include=${METHODS.join(',')}`,
	'iife=;(function() {%output%}).call(this); window.lodash=window._; delete window._;',
	'--output', BUNDLE_FILE_PATH,
	'--production'
], (data) => {
	// Remove line with build command from JSDoc
	data.source = data.source.replace(/(\* Build:(.*)\n) /, '');

	fs.writeFileSync(data.outputPath, data.source);
	console.log(`Bundle written at ${BUNDLE_FILE_PATH}`);
});

function generateExterns(lodashIIFEBody) {
	const contextRunnerVariable = lodashIIFEBody.find((node) =>
		node.type === VariableDeclaration &&
		node.declarations.find((declaration) => declaration.id.name === 'runInContext')
	);

	if (!contextRunnerVariable) {
		throw new Error('Expected presence of runInContext variable in lodash source code');
	}

	const contextRunnerBody = contextRunnerVariable.declarations[0].init.body.body;

	const externsProperties = METHODS.map((methodName) => {
		const declaration = contextRunnerBody.find((node) =>
			(node.type === FunctionDeclaration && node.id.name === methodName) ||
			(node.type === VariableDeclaration && node.declarations.find((declaration) =>
				declaration.id.name === methodName
			))
		);

		if (!declaration) {
			throw new Error(`Can't find declaration of method ${methodName}`);
		}

		const JSDocBlock = declaration.leadingComments.find((node) =>
			node.type === 'Block' &&
			node.value.startsWith('*') // Guard for lodash's positional markers
		);

		if (!JSDocBlock) {
			throw new Error(`Method ${methodName} has no JSDoc`);
		}

		const JSDocAST = doctrine.parse(JSDocBlock.value, {
			sloppy: true,
			unwrap: true
		});

		modifyJSDoc(JSDocAST);

		const params = JSDocAST.tags.filter((tag) => tag.title === 'param')
			.map((tag) => ast.identifier(tag.name));

		const func = ast.functionExpression(null, params, ast.blockStatement([]));

		const property = ast.property('init', ast.identifier(methodName), func);
		const block = ast.block(renderJSDoc(JSDocAST));

		// Assign to leadingComments for sake of escodegen
		property.leadingComments = [block];

		return property;
	});

	const externsAST = ast.program([
		ast.variableDeclaration('const', [
			ast.variableDeclarator(
				ast.identifier('lodash'),
				ast.objectExpression(externsProperties)
			)
		])
	]);

	return escodegen.generate(externsAST, {
		comment: true,
		format: {
			indent: {
				style: TAB
			}
		}
	}) + NEW_LINE;
}

function generateReadme(lodashIIFEBody) {
	const lodashVersionVariable = lodashIIFEBody.find((node) =>
		node.type === VariableDeclaration &&
		node.declarations.find((declaration) => declaration.id.name === 'VERSION')
	);

	if (!lodashVersionVariable) {
		throw new Error('Expected presence of VERSION variable in lodash source code');
	}

	const lodash = require('lodash');
	const lodashVersion = lodashVersionVariable.declarations[0].init.value;

	return lodash.template(fs.readFileSync(README_TEMPLATE_FILE_PATH, 'utf-8'))({
		version: lodashVersion,
		methods: METHODS.map((name) => `* [${name}](https://lodash.com/docs/${lodashVersion}#${name})`)
			.join(NEW_LINE)
	});
}

function modifyJSDoc(JSDocAST) {
	const {
		OptionalType,
		RestType,
		RecordType,
		FieldType,
		UnionType,
		UndefinedLiteral
	} = doctrine.Syntax;

	// Add @nosideeffects tag for Closure Compiler optimisation
	JSDocAST.tags.unshift({
		title: 'nosideeffects',
		description: null
	});

	// Discard some tags
	JSDocAST.tags = JSDocAST.tags.filter((tag) => !JSDOC_TAGS_BLACKLIST.includes(tag.title));

	// Rename some tags
	JSDocAST.tags.forEach((tag) => {
		if (JSDOC_TAGS_RENAMING[tag.title]) {
			tag.title = JSDOC_TAGS_RENAMING[tag.title];
		}
	});

	const params = JSDocAST.tags.filter((tag) => tag.title === 'param');

	/*
	 * Don't allow rest param that not in the end, e.g.:
	 *
	 * @param {...Array} arrays
	 * @param {Function=} comparator
	 *
	 * will be translated to
	 *
	 * @param {Array} arrays
	 * @param {Array=} arraysSup
	 * @param {Function=} comparator
	 */
	params.forEach((tag, index) => {
		const previousParam = params[index - 1];
		const nextParam = params[index + 1];

		const isPlainRest = tag.type && tag.type.type === RestType;
		const isOptionalRest = tag.type && tag.type.type === OptionalType && tag.type.expression.type === RestType;

		if (nextParam) {
			let expression;

			if (isPlainRest) {
				tag.type = expression = tag.type.expression;
			}

			if (isOptionalRest) {
				tag.type.expression = expression = tag.type.expression.expression;
			}

			/*
			 * Add supplementary param when rest param is the first,
			 * e.g. "xorBy" method has the next params signature:
			 *
			 * @param {...Array=} arrays The arrays to inspect.
			 * @param {Function=} iteratee The iteratee invoked per element.
			 *
			 * To be able to compile such method we have to insert supplementary param and restrict arity
			 */
			if (expression && !previousParam) {
				const tagName = tag.name;

				tag.name = `${tagName}0`;

				// Add supplementary param tag
				JSDocAST.tags.splice(JSDocAST.tags.indexOf(tag) + 1, 0, {
					title: 'param',
					name: `${tagName}1`,
					description: tag.description,
					type: {
						type: OptionalType,
						expression
					}
				});
			}
		}
	});

	/*
	 * Don't allow optional params that not at the end, e.g.:
	 *
	 * @param {Array=} array
	 * @param {Function} comparator
	 *
	 * will be translated to
	 *
	 * @param {Array} array
	 * @param {Function} comparator
	 */
	params.forEach((tag, index) => {
		const isOptional = tag.type && tag.type.type === OptionalType;

		const nextParam = params[index + 1];
		const isNextOptional = (
			nextParam &&
			nextParam.type &&
			nextParam.type.type === OptionalType
		);

		if (isOptional && nextParam && !isNextOptional) {
			tag.type = tag.type.expression;
		}
	});

	/*
	 * Change notation for optional rest params, e.g.:
	 *
	 * @param {...Array} [array]
	 *
	 * will be translated to
	 *
	 * @param {...Array|undefined) array
	 *
	 * instead of
	 *
	 * @param {...Array=) array
	 *
	 * by default, which is invalid notation for Closure Compiler
	 */
	params.forEach((tag) => {
		const isOptionalRest = tag.type.type === OptionalType && tag.type.expression.type === RestType;

		// Replace "=" notation to "|undefined" notation
		if (isOptionalRest) {
			tag.type = {
				type: UnionType,
				elements: [
					tag.type.expression,
					{type: UndefinedLiteral}
				]
			}
		}
	});

	/*
	 * Collapse object properties to record, e.g.:
	 *
	 * @param {Object} [options]
	 * @param {number} [options.wait]
	 *
	 * will be translated to
	 *
	 * @param {{wait: number|undefined}=} options
	 */
	JSDocAST.tags = JSDocAST.tags.reduce((handledTags, tag) => {
		if (tag.name && tag.name.indexOf('.') !== -1) {
			const masterTag = handledTags.find((candidateTag) =>
				candidateTag.name && tag.name.startsWith(candidateTag.name)
			);

			if (masterTag) {
				let masterType;
				if (masterTag.type.type === OptionalType) {
					if (masterTag.type.expression.type !== RecordType) {
						masterTag.type.expression = {
							type: RecordType,
							fields: []
						};
					}

					masterType = masterTag.type.expression;
				} else {
					if (masterTag.type !== RecordType) {
						masterTag.type = {
							type: RecordType,
							fields: []
						};
					}

					masterType = masterTag.type;
				}

				// Replace "=" notation to "|undefined" notation
				let tagType = tag.type;
				if (tagType.type === OptionalType) {
					tagType = {
						type: UnionType,
						elements: [
							tagType.expression,
							{type: UndefinedLiteral}
						]
					}
				}

				masterType.fields.push({
					type: FieldType,
					key: tag.name.split('.')[1],
					value: tagType
				});

				return handledTags;
			}
		}

		return handledTags.concat([tag]);
	}, []);
}

function renderJSDoc(JSDocAST) {
	let description = '';
	if (JSDocAST.description) {
		description = JSDocAST.description.replace(new RegExp(NEW_LINE, 'g'), `${NEW_LINE}${LINE_STARTER}`);
		description = `${LINE_STARTER}${description}${NEW_LINE}${LINE_STARTER}${NEW_LINE}`;
	}

	const renderedTags = JSDocAST.tags.map((tag) => {
		const chunks = [
			`${LINE_STARTER}@${tag.title}`
		];

		if (tag.type) {
			chunks.push(`{${doctrine.type.stringify(tag.type, {
				topLevel: true
			})}}`);
		}

		if (tag.name) {
			chunks.push(tag.name);
		}

		if (tag.description) {
			// Replace new line characters to inline description text
			chunks.push(tag.description.replace(new RegExp(NEW_LINE, 'g'), ''));
		}

		return chunks.join(' ');
	});

	return `*${NEW_LINE}${description}${renderedTags.join(NEW_LINE)}${NEW_LINE}${TAB} `;
}
