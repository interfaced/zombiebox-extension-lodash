# Обоснование выбора тех или иных методов

## Метки

🚀 - метод включен в билд

🚲 - есть нативный аналог

🕑 - есть нативный аналог в ES6+

📉 - низкая применимость

💣 - несовместимость с агрессивной компиляцией

### Array

* chunk 🚀
* compact 🚲
* concat 🚲
* difference 🚀
* differenceBy 🚀
* differenceWith 🚀
* drop 🚲
* dropRight 🚀
* dropRightWhile 🚀
* dropWhile 🚀
* fill 🚲
* findIndex 🚲
* findLastIndex 🚀
* flatten 🚀
* flattenDeep 🚀
* flattenDepth 🚀
* fromPairs 🚀
* head 🚲
* indexOf 🚲
* initial 🚲
* intersection 🚀
* intersectionBy 🚀
* intersectionWith 🚀
* join 🚲
* last 🚀
* lastIndexOf 🚲
* nth 📉
* pull 🚀
* pullAll 🚀
* pullAllBy 🚀
* pullAllWith 🚀
* pullAt 🚀
* remove 🚀
* reverse 🚲
* slice 🚲
* sortedIndex 📉
* sortedIndexBy 📉
* sortedIndexOf 📉
* sortedLastIndex 📉
* sortedLastIndexBy 📉
* sortedLastIndexOf 📉
* sortedUniq 📉
* sortedUniqBy 📉
* tail 🚲
* take 🚲
* takeRight 🚀
* takeRightWhile 🚀
* takeWhile 🚀
* union 🚀
* unionBy 🚀
* unionWith 🚀
* uniq 🚀
* uniqBy 🚀
* uniqWith 🚀
* unzip 🚀
* unzipWith 🚀
* without 🚀
* xor 🚀
* xorBy 🚀
* xorWith 🚀
* zip 🚀
* zipObject 🚀
* zipObjectDeep 💣
* zipWith 🚀

### Collection

* countBy 🚀
* every 🚲
* filter 🚲
* find 🚲
* findLast 🚀
* flatMap 🚀
* flatMapDeep 🚀
* flatMapDepth 🚀
* forEach 🚲
* forEachRight 🚀
* groupBy 🚀
* includes 🚀🕑
* invokeMap 📉
* keyBy 🚀
* map 🚲
* orderBy 🚲
* partition 🚀
* reduce 🚲
* reduceRight 🚲
* reject 🚲
* sample 🚀
* sampleSize 🚀
* shuffle 🚀
* size 🚲
* some 🚲
* sortBy 🚲

### Date

* now 🚲

### Function

* after 📉
* ary 🚀
* before 📉
* bind 🚲
* bindKey 💣
* curry 🚀
* curryRight 🚀
* debounce 🚀
* defer 🚲
* delay 🚲
* flip 📉
* memoize 🚀
* negate 🚲
* once 🚀
* overArgs 🚀
* partial 🚀
* partialRight 🚀
* rearg 📉
* rest 🚲
* spread 🚲
* throttle 🚀
* unary 🚀
* wrap 🚀

### Lang

* castArray 📉
* clone 🚀
* cloneDeep 🚀
* cloneDeepWith 🚀
* cloneWith 🚀
* conformsTo 💣
* eq 🚲
* gt 🚲
* gte 🚲
* isArguments 📉
* isArray 🚲
* isArrayBuffer 🚲
* isArrayLike 📉
* isArrayLikeObject 📉
* isBoolean 🚲
* isBuffer 🚲
* isDate 🚲
* isElement 🚲
* isEmpty 📉
* isEqual 🚀
* isEqualWith 🚀
* isError 🚲
* isFinite 🚲
* isFunction 🚲
* isInteger 🚲
* isLength 📉
* isMap 🚲
* isMatch 💣
* isMatchWith 💣
* isNaN 🚲
* isNative 🚲
* isNil 🚲
* isNull 🚲
* isNumber 🚲
* isObject 🚲
* isObjectLike 🚲
* isPlainObject 🚲
* isRegExp 🚲
* isSafeInteger 🚲
* isSet 🚲
* isString 🚲
* isSymbol 🚲
* isTypedArray 🚲
* isUndefined 🚲
* isWeakMap 🚲
* isWeakSet 🚲
* lt 🚲
* lte 🚲
* toArray 🚀
* toFinite 📉
* toInteger 🚀
* toLength 📉
* toNumber 🚀
* toPlainObject 📉
* toSafeInteger 📉
* toString 🚀

### Math

* add 🚲
* ceil 🚲
* divide 🚲
* floor 🚲
* max 🚲
* maxBy 📉
* mean 📉
* meanBy 📉
* min 🚲
* minBy 📉
* multiply 🚲
* round 🚲
* subtract 🚲
* sum 🚲
* sumBy 📉

### Number

* clamp 🚀
* inRange 🚲
* random 🚀

### Object

* assign 🚲
* assignIn 📉
* assignInWith 📉
* assignWith 📉
* at 💣
* create 🚲
* defaults 🚀
* defaultsDeep 🚀
* findKey 🚀
* findLastKey 🚀
* forIn 🚲
* forInRight 📉
* forOwn 📉
* forOwnRight 📉
* functions 📉
* functionsIn 📉
* get 💣
* has 💣
* hasIn 💣
* invert 📉
* invertBy 📉
* invoke 📉💣
* keys 🚲
* keysIn 🚲
* mapKeys 🚀
* mapValues 🚀
* merge 🚀
* mergeWith 🚀
* omit 💣
* omitBy 🚀
* pick 💣
* pickBy 🚀
* result 💣
* set 💣
* setWith 💣
* toPairs 🚀🕑
* toPairsIn 🚀🕑
* transform 📉
* unset 💣
* update 💣
* updateWith 💣
* values 🚀🕑
* valuesIn 🚀🕑

### Seq

* chain 📉
* tap 📉
* thru 📉
* prototype.at 📉
* prototype.chain 📉
* prototype.commit 📉
* prototype.next 📉
* prototype.plant 📉
* prototype.reverse 📉
* prototype.value 📉

### String

* camelCase 🚀
* capitalize 🚀
* deburr 📉
* endsWith 🚲
* escape 🚀
* escapeRegExp 🚀
* kebabCase 🚀
* lowerCase 🚀
* lowerFirst 🚀
* pad 🚀🕑
* padEnd 🚀🕑
* padStart 🚀🕑
* parseInt 🚲
* repeat 🚀
* replace 🚲
* snakeCase 🚀
* split 🚲
* startCase 🚀
* startsWith 🚲
* template 🚲
* toLower 🚲
* toUpper 🚲
* trim 🚲
* trimEnd 🚀
* trimStart 🚀
* truncate 🚀
* unescape 🚀
* upperCase 🚀
* upperFirst 🚀
* words 📉

### Util

* attempt 🚀
* bindAll 💣
* cond 📉
* conforms 💣
* constant 📉
* defaultTo 📉
* flow 📉
* flowRight 📉
* identity 📉
* iteratee 💣
* matches 💣
* matchesProperty 💣
* method 💣
* methodOf 💣
* mixin 💣
* noConflict 📉
* noop 📉
* nthArg 📉
* over 🚀
* overEvery 🚀
* overSome 🚀
* property 💣
* propertyOf 💣
* range 🚀
* rangeRight 🚀
* runInContext 📉
* stubArray 🚲
* stubFalse 🚲
* stubObject 🚲
* stubString 🚲
* stubTrue 🚲
* times 🚀
* toPath 📉
* uniqueId 🚀
