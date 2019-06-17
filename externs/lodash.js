/**
 */
class Lodash {
	/**
	 * Creates an array of elements split into groups the length of `size`.
	 * If `array` can't be split evenly, the final chunk will be the remaining
	 * elements.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to process.
	 * @param {number=} size The length of each chunk
	 * @return {Array} Returns the new array of chunks.
	 */
	chunk(array, size) {
	}

	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array} array The array to inspect.
	 * @param {...Array|undefined} values The values to exclude.
	 * @return {Array} Returns the new array of filtered values.
	 */
	difference(array, values) {
	}

	/**
	 * This method is like `_.difference` except that it accepts `iteratee` which
	 * is invoked for each element of `array` and `values` to generate the criterion
	 * by which they're compared. The order and references of result values are
	 * determined by the first array. The iteratee is invoked with one argument:
	 * (value).
	 *
	 * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array} array The array to inspect.
	 * @param {Array=} values The values to exclude.
	 * @param {Function=} iteratee The iteratee invoked per element.
	 * @return {Array} Returns the new array of filtered values.
	 */
	differenceBy(array, values, iteratee) {
	}

	/**
	 * This method is like `_.difference` except that it accepts `comparator`
	 * which is invoked to compare elements of `array` to `values`. The order and
	 * references of result values are determined by the first array. The comparator
	 * is invoked with two arguments: (arrVal, othVal).
	 *
	 * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array} array The array to inspect.
	 * @param {Array=} values The values to exclude.
	 * @param {Function=} comparator The comparator invoked per element.
	 * @return {Array} Returns the new array of filtered values.
	 */
	differenceWith(array, values, comparator) {
	}

	/**
	 * Creates a slice of `array` with `n` elements dropped from the end.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to query.
	 * @param {number=} n The number of elements to drop.
	 * @return {Array} Returns the slice of `array`.
	 */
	dropRight(array, n) {
	}

	/**
	 * Creates a slice of `array` excluding elements dropped from the end.
	 * Elements are dropped until `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index, array).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to query.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {Array} Returns the slice of `array`.
	 */
	dropRightWhile(array, predicate) {
	}

	/**
	 * Creates a slice of `array` excluding elements dropped from the beginning.
	 * Elements are dropped until `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index, array).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to query.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {Array} Returns the slice of `array`.
	 */
	dropWhile(array, predicate) {
	}

	/**
	 * This method is like `_.findIndex` except that it iterates over elements
	 * of `collection` from right to left.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @param {Array} array The array to inspect.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @param {number=} fromIndex The index to search from.
	 * @return {number} Returns the index of the found element, else `-1`.
	 */
	findLastIndex(array, predicate, fromIndex) {
	}

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array} array The array to flatten.
	 * @return {Array} Returns the new flattened array.
	 */
	flatten(array) {
	}

	/**
	 * Recursively flattens `array`.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to flatten.
	 * @return {Array} Returns the new flattened array.
	 */
	flattenDeep(array) {
	}

	/**
	 * Recursively flatten `array` up to `depth` times.
	 *
	 * @nosideeffects
	 * @since 4.4.0
	 * @param {Array} array The array to flatten.
	 * @param {number=} depth The maximum recursion depth.
	 * @return {Array} Returns the new flattened array.
	 */
	flattenDepth(array, depth) {
	}

	/**
	 * The inverse of `_.toPairs`; this method returns an object composed
	 * from key-value `pairs`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array} pairs The key-value pairs.
	 * @return {Object} Returns the new object.
	 */
	fromPairs(pairs) {
	}

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {...Array|undefined} arrays The arrays to inspect.
	 * @return {Array} Returns the new array of intersecting values.
	 */
	intersection(arrays) {
	}

	/**
	 * This method is like `_.intersection` except that it accepts `iteratee`
	 * which is invoked for each element of each `arrays` to generate the criterion
	 * by which they're compared. The order and references of result values are
	 * determined by the first array. The iteratee is invoked with one argument:
	 * (value).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array=} arrays0 The arrays to inspect.
	 * @param {Array=} arrays1 The arrays to inspect.
	 * @param {Function=} iteratee The iteratee invoked per element.
	 * @return {Array} Returns the new array of intersecting values.
	 */
	intersectionBy(arrays0, arrays1, iteratee) {
	}

	/**
	 * This method is like `_.intersection` except that it accepts `comparator`
	 * which is invoked to compare elements of `arrays`. The order and references
	 * of result values are determined by the first array. The comparator is
	 * invoked with two arguments: (arrVal, othVal).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array=} arrays0 The arrays to inspect.
	 * @param {Array=} arrays1 The arrays to inspect.
	 * @param {Function=} comparator The comparator invoked per element.
	 * @return {Array} Returns the new array of intersecting values.
	 */
	intersectionWith(arrays0, arrays1, comparator) {
	}

	/**
	 * Gets the last element of `array`.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array} array The array to query.
	 * @return {*} Returns the last element of `array`.
	 */
	last(array) {
	}

	/**
	 * Removes all given values from `array` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	 * to remove elements from an array by predicate.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @param {Array} array The array to modify.
	 * @param {...*|undefined} values The values to remove.
	 * @return {Array} Returns `array`.
	 */
	pull(array, values) {
	}

	/**
	 * This method is like `_.pull` except that it accepts an array of values to remove.
	 *
	 * **Note:** Unlike `_.difference`, this method mutates `array`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @return {Array} Returns `array`.
	 */
	pullAll(array, values) {
	}

	/**
	 * This method is like `_.pullAll` except that it accepts `iteratee` which is
	 * invoked for each element of `array` and `values` to generate the criterion
	 * by which they're compared. The iteratee is invoked with one argument: (value).
	 *
	 * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @param {Function=} iteratee The iteratee invoked per element.
	 * @return {Array} Returns `array`.
	 */
	pullAllBy(array, values, iteratee) {
	}

	/**
	 * This method is like `_.pullAll` except that it accepts `comparator` which
	 * is invoked to compare elements of `array` to `values`. The comparator is
	 * invoked with two arguments: (arrVal, othVal).
	 *
	 * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	 *
	 * @nosideeffects
	 * @since 4.6.0
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @param {Function=} comparator The comparator invoked per element.
	 * @return {Array} Returns `array`.
	 */
	pullAllWith(array, values, comparator) {
	}

	/**
	 * Removes elements from `array` corresponding to `indexes` and returns an
	 * array of removed elements.
	 *
	 * **Note:** Unlike `_.at`, this method mutates `array`.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to modify.
	 * @param {...(number|Array<number>)|undefined} indexes The indexes of elements to remove.
	 * @return {Array} Returns the new array of removed elements.
	 */
	pullAt(array, indexes) {
	}

	/**
	 * Removes all elements from `array` that `predicate` returns truthy for
	 * and returns an array of the removed elements. The predicate is invoked
	 * with three arguments: (value, index, array).
	 *
	 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	 * to pull elements from an array by value.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @param {Array} array The array to modify.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {Array} Returns the new array of removed elements.
	 */
	remove(array, predicate) {
	}

	/**
	 * Creates a slice of `array` with `n` elements taken from the end.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to query.
	 * @param {number=} n The number of elements to take.
	 * @return {Array} Returns the slice of `array`.
	 */
	takeRight(array, n) {
	}

	/**
	 * Creates a slice of `array` with elements taken from the end. Elements are
	 * taken until `predicate` returns falsey. The predicate is invoked with
	 * three arguments: (value, index, array).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to query.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {Array} Returns the slice of `array`.
	 */
	takeRightWhile(array, predicate) {
	}

	/**
	 * Creates a slice of `array` with elements taken from the beginning. Elements
	 * are taken until `predicate` returns falsey. The predicate is invoked with
	 * three arguments: (value, index, array).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array} array The array to query.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {Array} Returns the slice of `array`.
	 */
	takeWhile(array, predicate) {
	}

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {...Array|undefined} arrays The arrays to inspect.
	 * @return {Array} Returns the new array of combined values.
	 */
	union(arrays) {
	}

	/**
	 * This method is like `_.union` except that it accepts `iteratee` which is
	 * invoked for each element of each `arrays` to generate the criterion by
	 * which uniqueness is computed. Result values are chosen from the first
	 * array in which the value occurs. The iteratee is invoked with one argument:
	 * (value).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array=} arrays0 The arrays to inspect.
	 * @param {Array=} arrays1 The arrays to inspect.
	 * @param {Function=} iteratee The iteratee invoked per element.
	 * @return {Array} Returns the new array of combined values.
	 */
	unionBy(arrays0, arrays1, iteratee) {
	}

	/**
	 * This method is like `_.union` except that it accepts `comparator` which
	 * is invoked to compare elements of `arrays`. Result values are chosen from
	 * the first array in which the value occurs. The comparator is invoked
	 * with two arguments: (arrVal, othVal).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array=} arrays0 The arrays to inspect.
	 * @param {Array=} arrays1 The arrays to inspect.
	 * @param {Function=} comparator The comparator invoked per element.
	 * @return {Array} Returns the new array of combined values.
	 */
	unionWith(arrays0, arrays1, comparator) {
	}

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each element
	 * is kept. The order of result values is determined by the order they occur
	 * in the array.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array} array The array to inspect.
	 * @return {Array} Returns the new duplicate free array.
	 */
	uniq(array) {
	}

	/**
	 * This method is like `_.uniq` except that it accepts `iteratee` which is
	 * invoked for each element in `array` to generate the criterion by which
	 * uniqueness is computed. The order of result values is determined by the
	 * order they occur in the array. The iteratee is invoked with one argument:
	 * (value).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array} array The array to inspect.
	 * @param {Function=} iteratee The iteratee invoked per element.
	 * @return {Array} Returns the new duplicate free array.
	 */
	uniqBy(array, iteratee) {
	}

	/**
	 * This method is like `_.uniq` except that it accepts `comparator` which
	 * is invoked to compare elements of `array`. The order of result values is
	 * determined by the order they occur in the array.The comparator is invoked
	 * with two arguments: (arrVal, othVal).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array} array The array to inspect.
	 * @param {Function=} comparator The comparator invoked per element.
	 * @return {Array} Returns the new duplicate free array.
	 */
	uniqWith(array, comparator) {
	}

	/**
	 * This method is like `_.zip` except that it accepts an array of grouped
	 * elements and creates an array regrouping the elements to their pre-zip
	 * configuration.
	 *
	 * @nosideeffects
	 * @since 1.2.0
	 * @param {Array} array The array of grouped elements to process.
	 * @return {Array} Returns the new array of regrouped elements.
	 */
	unzip(array) {
	}

	/**
	 * This method is like `_.unzip` except that it accepts `iteratee` to specify
	 * how regrouped values should be combined. The iteratee is invoked with the
	 * elements of each group: (...group).
	 *
	 * @nosideeffects
	 * @since 3.8.0
	 * @param {Array} array The array of grouped elements to process.
	 * @param {Function=} iteratee The function to combine regrouped values.
	 * @return {Array} Returns the new array of regrouped elements.
	 */
	unzipWith(array, iteratee) {
	}

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array} array The array to inspect.
	 * @param {...*|undefined} values The values to exclude.
	 * @return {Array} Returns the new array of filtered values.
	 */
	without(array, values) {
	}

	/**
	 * Creates an array of unique values that is the
	 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the given arrays. The order of result values is determined by the order
	 * they occur in the arrays.
	 *
	 * @nosideeffects
	 * @since 2.4.0
	 * @param {...Array|undefined} arrays The arrays to inspect.
	 * @return {Array} Returns the new array of filtered values.
	 */
	xor(arrays) {
	}

	/**
	 * This method is like `_.xor` except that it accepts `iteratee` which is
	 * invoked for each element of each `arrays` to generate the criterion by
	 * which by which they're compared. The order of result values is determined
	 * by the order they occur in the arrays. The iteratee is invoked with one
	 * argument: (value).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array=} arrays0 The arrays to inspect.
	 * @param {Array=} arrays1 The arrays to inspect.
	 * @param {Function=} iteratee The iteratee invoked per element.
	 * @return {Array} Returns the new array of filtered values.
	 */
	xorBy(arrays0, arrays1, iteratee) {
	}

	/**
	 * This method is like `_.xor` except that it accepts `comparator` which is
	 * invoked to compare elements of `arrays`. The order of result values is
	 * determined by the order they occur in the arrays. The comparator is invoked
	 * with two arguments: (arrVal, othVal).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array=} arrays0 The arrays to inspect.
	 * @param {Array=} arrays1 The arrays to inspect.
	 * @param {Function=} comparator The comparator invoked per element.
	 * @return {Array} Returns the new array of filtered values.
	 */
	xorWith(arrays0, arrays1, comparator) {
	}

	/**
	 * Creates an array of grouped elements, the first of which contains the
	 * first elements of the given arrays, the second of which contains the
	 * second elements of the given arrays, and so on.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {...Array|undefined} arrays The arrays to process.
	 * @return {Array} Returns the new array of grouped elements.
	 */
	zip(arrays) {
	}

	/**
	 * This method is like `_.fromPairs` except that it accepts two arrays,
	 * one of property identifiers and one of corresponding values.
	 *
	 * @nosideeffects
	 * @since 0.4.0
	 * @param {Array=} props The property identifiers.
	 * @param {Array=} values The property values.
	 * @return {Object} Returns the new object.
	 */
	zipObject(props, values) {
	}

	/**
	 * This method is like `_.zip` except that it accepts `iteratee` to specify
	 * how grouped values should be combined. The iteratee is invoked with the
	 * elements of each group: (...group).
	 *
	 * @nosideeffects
	 * @since 3.8.0
	 * @param {Array=} arrays0 The arrays to process.
	 * @param {Array=} arrays1 The arrays to process.
	 * @param {Function=} iteratee The function to combine grouped values.
	 * @return {Array} Returns the new array of grouped elements.
	 */
	zipWith(arrays0, arrays1, iteratee) {
	}

	/**
	 * Creates an object composed of keys generated from the results of running
	 * each element of `collection` thru `iteratee`. The corresponding value of
	 * each key is the number of times the key was returned by `iteratee`. The
	 * iteratee is invoked with one argument: (value).
	 *
	 * @nosideeffects
	 * @since 0.5.0
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} iteratee The iteratee to transform keys.
	 * @return {Object} Returns the composed aggregate object.
	 */
	countBy(collection, iteratee) {
	}

	/**
	 * This method is like `_.find` except that it iterates over elements of
	 * `collection` from right to left.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @param {number=} fromIndex The index to search from.
	 * @return {*} Returns the matched element, else `undefined`.
	 */
	findLast(collection, predicate, fromIndex) {
	}

	/**
	 * Creates a flattened array of values by running each element in `collection`
	 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	 * with three arguments: (value, index|key, collection).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} iteratee The function invoked per iteration.
	 * @return {Array} Returns the new flattened array.
	 */
	flatMap(collection, iteratee) {
	}

	/**
	 * This method is like `_.flatMap` except that it recursively flattens the
	 * mapped results.
	 *
	 * @nosideeffects
	 * @since 4.7.0
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} iteratee The function invoked per iteration.
	 * @return {Array} Returns the new flattened array.
	 */
	flatMapDeep(collection, iteratee) {
	}

	/**
	 * This method is like `_.flatMap` except that it recursively flattens the
	 * mapped results up to `depth` times.
	 *
	 * @nosideeffects
	 * @since 4.7.0
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} iteratee The function invoked per iteration.
	 * @param {number=} depth The maximum recursion depth.
	 * @return {Array} Returns the new flattened array.
	 */
	flatMapDepth(collection, iteratee, depth) {
	}

	/**
	 * This method is like `_.forEach` except that it iterates over elements of
	 * `collection` from right to left.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @alias eachRight
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} iteratee The function invoked per iteration.
	 * @return {Array|Object} Returns `collection`.
	 */
	forEachRight(collection, iteratee) {
	}

	/**
	 * Creates an object composed of keys generated from the results of running
	 * each element of `collection` thru `iteratee`. The order of grouped values
	 * is determined by the order they occur in `collection`. The corresponding
	 * value of each key is an array of elements responsible for generating the
	 * key. The iteratee is invoked with one argument: (value).
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} iteratee The iteratee to transform keys.
	 * @return {Object} Returns the composed aggregate object.
	 */
	groupBy(collection, iteratee) {
	}

	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number=} fromIndex The index to search from.
	 * @return {boolean} Returns `true` if `value` is found, else `false`.
	 */
	includes(collection, value, fromIndex) {
	}

	/**
	 * Creates an object composed of keys generated from the results of running
	 * each element of `collection` thru `iteratee`. The corresponding value of
	 * each key is the last element responsible for generating the key. The
	 * iteratee is invoked with one argument: (value).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} iteratee The iteratee to transform keys.
	 * @return {Object} Returns the composed aggregate object.
	 */
	keyBy(collection, iteratee) {
	}

	/**
	 * Creates an array of elements split into two groups, the first of which
	 * contains elements `predicate` returns truthy for, the second of which
	 * contains elements `predicate` returns falsey for. The predicate is
	 * invoked with one argument: (value).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {Array} Returns the array of grouped elements.
	 */
	partition(collection, predicate) {
	}

	/**
	 * Gets a random element from `collection`.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @param {Array|Object} collection The collection to sample.
	 * @return {*} Returns the random element.
	 */
	sample(collection) {
	}

	/**
	 * Gets `n` random elements at unique keys from `collection` up to the
	 * size of `collection`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Array|Object} collection The collection to sample.
	 * @param {number=} n The number of elements to sample.
	 * @return {Array} Returns the random elements.
	 */
	sampleSize(collection, n) {
	}

	/**
	 * Creates an array of shuffled values, using a version of the
	 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Array|Object} collection The collection to shuffle.
	 * @return {Array} Returns the new shuffled array.
	 */
	shuffle(collection) {
	}

	/**
	 * Creates a function that invokes `func`, with up to `n` arguments,
	 * ignoring any additional arguments.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Function} func The function to cap arguments for.
	 * @param {number=} n The arity cap.
	 * @return {Function} Returns the new capped function.
	 */
	ary(func, n) {
	}

	/**
	 * Creates a function that accepts arguments of `func` and either invokes
	 * `func` returning its result, if at least `arity` number of arguments have
	 * been provided, or returns a function that accepts the remaining `func`
	 * arguments, and so on. The arity of `func` may be specified if `func.length`
	 * is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @param {Function} func The function to curry.
	 * @param {number=} arity The arity of `func`.
	 * @return {Function} Returns the new curried function.
	 */
	curry(func, arity) {
	}

	/**
	 * This method is like `_.curry` except that arguments are applied to `func`
	 * in the manner of `_.partialRight` instead of `_.partial`.
	 *
	 * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Function} func The function to curry.
	 * @param {number=} arity The arity of `func`.
	 * @return {Function} Returns the new curried function.
	 */
	curryRight(func, arity) {
	}

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Function} func The function to debounce.
	 * @param {number=} wait The number of milliseconds to delay.
	 * @param {{leading: (boolean|undefined), maxWait: (number|undefined), trailing: (boolean|undefined)}=} options The options object.
	 * @return {Function} Returns the new debounced function.
	 */
	debounce(func, wait, options) {
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function=} resolver The function to resolve the cache key.
	 * @return {Function} Returns the new memoized function.
	 */
	memoize(func, resolver) {
	}

	/**
	 * Creates a function that is restricted to invoking `func` once. Repeat calls
	 * to the function return the value of the first invocation. The `func` is
	 * invoked with the `this` binding and arguments of the created function.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Function} func The function to restrict.
	 * @return {Function} Returns the new restricted function.
	 */
	once(func) {
	}

	/**
	 * Creates a function that invokes `func` with its arguments transformed.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Function} func The function to wrap.
	 * @param {...(Function|Array<Function>)|undefined} transforms The argument transforms.
	 * @return {Function} Returns the new function.
	 */
	overArgs(func, transforms) {
	}

	/**
	 * Creates a function that invokes `func` with `partials` prepended to the
	 * arguments it receives. This method is like `_.bind` except it does **not**
	 * alter the `this` binding.
	 *
	 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @nosideeffects
	 * @since 0.2.0
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*|undefined} partials The arguments to be partially applied.
	 * @return {Function} Returns the new partially applied function.
	 */
	partial(func, partials) {
	}

	/**
	 * This method is like `_.partial` except that partially applied arguments
	 * are appended to the arguments it receives.
	 *
	 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @nosideeffects
	 * @since 1.0.0
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*|undefined} partials The arguments to be partially applied.
	 * @return {Function} Returns the new partially applied function.
	 */
	partialRight(func, partials) {
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Function} func The function to throttle.
	 * @param {number=} wait The number of milliseconds to throttle invocations to.
	 * @param {{leading: (boolean|undefined), trailing: (boolean|undefined)}=} options The options object.
	 * @return {Function} Returns the new throttled function.
	 */
	throttle(func, wait, options) {
	}

	/**
	 * Creates a function that accepts up to one argument, ignoring any
	 * additional arguments.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Function} func The function to cap arguments for.
	 * @return {Function} Returns the new capped function.
	 */
	unary(func) {
	}

	/**
	 * Creates a function that provides `value` to `wrapper` as its first
	 * argument. Any additional arguments provided to the function are appended
	 * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	 * binding of the created function.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {*} value The value to wrap.
	 * @param {Function=} wrapper The wrapper function.
	 * @return {Function} Returns the new function.
	 */
	wrap(value, wrapper) {
	}

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {*} value The value to clone.
	 * @return {*} Returns the cloned value.
	 */
	clone(value) {
	}

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @nosideeffects
	 * @since 1.0.0
	 * @param {*} value The value to recursively clone.
	 * @return {*} Returns the deep cloned value.
	 */
	cloneDeep(value) {
	}

	/**
	 * This method is like `_.cloneWith` except that it recursively clones `value`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {*} value The value to recursively clone.
	 * @param {Function=} customizer The function to customize cloning.
	 * @return {*} Returns the deep cloned value.
	 */
	cloneDeepWith(value, customizer) {
	}

	/**
	 * This method is like `_.clone` except that it accepts `customizer` which
	 * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	 * cloning is handled by the method instead. The `customizer` is invoked with
	 * up to four arguments; (value [, index|key, object, stack]).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {*} value The value to clone.
	 * @param {Function=} customizer The function to customize cloning.
	 * @return {*} Returns the cloned value.
	 */
	cloneWith(value, customizer) {
	}

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @return {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	isEqual(value, other) {
	}

	/**
	 * This method is like `_.isEqual` except that it accepts `customizer` which
	 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	 * are handled by the method instead. The `customizer` is invoked with up to
	 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function=} customizer The function to customize comparisons.
	 * @return {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	isEqualWith(value, other, customizer) {
	}

	/**
	 * Converts `value` to an array.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {*} value The value to convert.
	 * @return {Array} Returns the converted array.
	 */
	toArray(value) {
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {*} value The value to convert.
	 * @return {number} Returns the converted integer.
	 */
	toInteger(value) {
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {*} value The value to process.
	 * @return {number} Returns the number.
	 */
	toNumber(value) {
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {*} value The value to convert.
	 * @return {string} Returns the converted string.
	 */
	toString(value) {
	}

	/**
	 * Clamps `number` within the inclusive `lower` and `upper` bounds.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {number} number The number to clamp.
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @return {number} Returns the clamped number.
	 */
	clamp(number, lower, upper) {
	}

	/**
	 * Produces a random number between the inclusive `lower` and `upper` bounds.
	 * If only one argument is provided a number between `0` and the given number
	 * is returned. If `floating` is `true`, or either `lower` or `upper` are
	 * floats, a floating-point number is returned instead of an integer.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @nosideeffects
	 * @since 0.7.0
	 * @param {number=} lower The lower bound.
	 * @param {number=} upper The upper bound.
	 * @param {boolean=} floating Specify returning a floating-point number.
	 * @return {number} Returns the random number.
	 */
	random(lower, upper, floating) {
	}

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Object} object The destination object.
	 * @param {...Object|undefined} sources The source objects.
	 * @return {Object} Returns `object`.
	 */
	defaults(object, sources) {
	}

	/**
	 * This method is like `_.defaults` except that it recursively assigns
	 * default properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @nosideeffects
	 * @since 3.10.0
	 * @param {Object} object The destination object.
	 * @param {...Object|undefined} sources The source objects.
	 * @return {Object} Returns `object`.
	 */
	defaultsDeep(object, sources) {
	}

	/**
	 * This method is like `_.find` except that it returns the key of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @nosideeffects
	 * @since 1.1.0
	 * @param {Object} object The object to inspect.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {string|undefined} Returns the key of the matched element, else `undefined`.
	 */
	findKey(object, predicate) {
	}

	/**
	 * This method is like `_.findKey` except that it iterates over elements of
	 * a collection in the opposite order.
	 *
	 * @nosideeffects
	 * @since 2.0.0
	 * @param {Object} object The object to inspect.
	 * @param {Function=} predicate The function invoked per iteration.
	 * @return {string|undefined} Returns the key of the matched element, else `undefined`.
	 */
	findLastKey(object, predicate) {
	}

	/**
	 * The opposite of `_.mapValues`; this method creates an object with the
	 * same values as `object` and keys generated by running each own enumerable
	 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	 * with three arguments: (value, key, object).
	 *
	 * @nosideeffects
	 * @since 3.8.0
	 * @param {Object} object The object to iterate over.
	 * @param {Function=} iteratee The function invoked per iteration.
	 * @return {Object} Returns the new mapped object.
	 */
	mapKeys(object, iteratee) {
	}

	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @nosideeffects
	 * @since 2.4.0
	 * @param {Object} object The object to iterate over.
	 * @param {Function=} iteratee The function invoked per iteration.
	 * @return {Object} Returns the new mapped object.
	 */
	mapValues(object, iteratee) {
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @nosideeffects
	 * @since 0.5.0
	 * @param {Object} object The destination object.
	 * @param {...Object|undefined} sources The source objects.
	 * @return {Object} Returns `object`.
	 */
	merge(object, sources) {
	}

	/**
	 * This method is like `_.merge` except that it accepts `customizer` which
	 * is invoked to produce the merged values of the destination and source
	 * properties. If `customizer` returns `undefined`, merging is handled by the
	 * method instead. The `customizer` is invoked with six arguments:
	 * (objValue, srcValue, key, object, source, stack).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Object} object The destination object.
	 * @param {Object} sources The source objects.
	 * @param {Function} customizer The function to customize assigned values.
	 * @return {Object} Returns `object`.
	 */
	mergeWith(object, sources, customizer) {
	}

	/**
	 * The opposite of `_.pickBy`; this method creates an object composed of
	 * the own and inherited enumerable string keyed properties of `object` that
	 * `predicate` doesn't return truthy for. The predicate is invoked with two
	 * arguments: (value, key).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Object} object The source object.
	 * @param {Function=} predicate The function invoked per property.
	 * @return {Object} Returns the new object.
	 */
	omitBy(object, predicate) {
	}

	/**
	 * Creates an object composed of the `object` properties `predicate` returns
	 * truthy for. The predicate is invoked with two arguments: (value, key).
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {Object} object The source object.
	 * @param {Function=} predicate The function invoked per property.
	 * @return {Object} Returns the new object.
	 */
	pickBy(object, predicate) {
	}

	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	 * entries are returned.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @alias entries
	 * @param {Object} object The object to query.
	 * @return {Array} Returns the key-value pairs.
	 */
	toPairs(object) {
	}

	/**
	 * Creates an array of own and inherited enumerable string keyed-value pairs
	 * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
	 * or set, its entries are returned.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @alias entriesIn
	 * @param {Object} object The object to query.
	 * @return {Array} Returns the key-value pairs.
	 */
	toPairsIn(object) {
	}

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {Object} object The object to query.
	 * @return {Array} Returns the array of property values.
	 */
	values(object) {
	}

	/**
	 * Creates an array of the own and inherited enumerable string keyed property
	 * values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Object} object The object to query.
	 * @return {Array} Returns the array of property values.
	 */
	valuesIn(object) {
	}

	/**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the camel cased string.
	 */
	camelCase(string) {
	}

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {string=} string The string to capitalize.
	 * @return {string} Returns the capitalized string.
	 */
	capitalize(string) {
	}

	/**
	 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	 * corresponding HTML entities.
	 *
	 * **Note:** No other characters are escaped. To escape additional
	 * characters use a third-party library like [_he_](https://mths.be/he).
	 *
	 * Though the ">" character is escaped for symmetry, characters like
	 * ">" and "/" don't need escaping in HTML and have no special meaning
	 * unless they're part of a tag or unquoted attribute value. See
	 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	 * (under "semi-related fun fact") for more details.
	 *
	 * When working with HTML you should always
	 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	 * XSS vectors.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {string=} string The string to escape.
	 * @return {string} Returns the escaped string.
	 */
	escape(string) {
	}

	/**
	 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {string=} string The string to escape.
	 * @return {string} Returns the escaped string.
	 */
	escapeRegExp(string) {
	}

	/**
	 * Converts `string` to
	 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the kebab cased string.
	 */
	kebabCase(string) {
	}

	/**
	 * Converts `string`, as space separated words, to lower case.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the lower cased string.
	 */
	lowerCase(string) {
	}

	/**
	 * Converts the first character of `string` to lower case.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the converted string.
	 */
	lowerFirst(string) {
	}

	/**
	 * Pads `string` on the left and right sides if it's shorter than `length`.
	 * Padding characters are truncated if they can't be evenly divided by `length`.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {string=} string The string to pad.
	 * @param {number=} length The padding length.
	 * @param {string=} chars The string used as padding.
	 * @return {string} Returns the padded string.
	 */
	pad(string, length, chars) {
	}

	/**
	 * Pads `string` on the right side if it's shorter than `length`. Padding
	 * characters are truncated if they exceed `length`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to pad.
	 * @param {number=} length The padding length.
	 * @param {string=} chars The string used as padding.
	 * @return {string} Returns the padded string.
	 */
	padEnd(string, length, chars) {
	}

	/**
	 * Pads `string` on the left side if it's shorter than `length`. Padding
	 * characters are truncated if they exceed `length`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to pad.
	 * @param {number=} length The padding length.
	 * @param {string=} chars The string used as padding.
	 * @return {string} Returns the padded string.
	 */
	padStart(string, length, chars) {
	}

	/**
	 * Repeats the given string `n` times.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {string=} string The string to repeat.
	 * @param {number=} n The number of times to repeat the string.
	 * @return {string} Returns the repeated string.
	 */
	repeat(string, n) {
	}

	/**
	 * Converts `string` to
	 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the snake cased string.
	 */
	snakeCase(string) {
	}

	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @nosideeffects
	 * @since 3.1.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the start cased string.
	 */
	startCase(string) {
	}

	/**
	 * Removes trailing whitespace or specified characters from `string`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to trim.
	 * @param {string=} chars The characters to trim.
	 * @return {string} Returns the trimmed string.
	 */
	trimEnd(string, chars) {
	}

	/**
	 * Removes leading whitespace or specified characters from `string`.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to trim.
	 * @param {string=} chars The characters to trim.
	 * @return {string} Returns the trimmed string.
	 */
	trimStart(string, chars) {
	}

	/**
	 * Truncates `string` if it's longer than the given maximum string length.
	 * The last characters of the truncated string are replaced with the omission
	 * string which defaults to "...".
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to truncate.
	 * @param {{length: (number|undefined), omission: (string|undefined), separator: ((RegExp|string)|undefined)}=} options The options object.
	 * @return {string} Returns the truncated string.
	 */
	truncate(string, options) {
	}

	/**
	 * The inverse of `_.escape`; this method converts the HTML entities
	 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	 * their corresponding characters.
	 *
	 * **Note:** No other HTML entities are unescaped. To unescape additional
	 * HTML entities use a third-party library like [_he_](https://mths.be/he).
	 *
	 * @nosideeffects
	 * @since 0.6.0
	 * @param {string=} string The string to unescape.
	 * @return {string} Returns the unescaped string.
	 */
	unescape(string) {
	}

	/**
	 * Converts `string`, as space separated words, to upper case.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the upper cased string.
	 */
	upperCase(string) {
	}

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {string=} string The string to convert.
	 * @return {string} Returns the converted string.
	 */
	upperFirst(string) {
	}

	/**
	 * Attempts to invoke `func`, returning either the result or the caught error
	 * object. Any additional arguments are provided to `func` when it's invoked.
	 *
	 * @nosideeffects
	 * @since 3.0.0
	 * @param {Function} func The function to attempt.
	 * @param {...*|undefined} args The arguments to invoke `func` with.
	 * @return {*} Returns the `func` result or error object.
	 */
	attempt(func, args) {
	}

	/**
	 * Creates a function that invokes `iteratees` with the arguments it receives
	 * and returns their results.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {...(Function|Array<Function>)|undefined} iteratees The iteratees to invoke.
	 * @return {Function} Returns the new function.
	 */
	over(iteratees) {
	}

	/**
	 * Creates a function that checks if **all** of the `predicates` return
	 * truthy when invoked with the arguments it receives.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {...(Function|Array<Function>)|undefined} predicates The predicates to check.
	 * @return {Function} Returns the new function.
	 */
	overEvery(predicates) {
	}

	/**
	 * Creates a function that checks if **any** of the `predicates` return
	 * truthy when invoked with the arguments it receives.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {...(Function|Array<Function>)|undefined} predicates The predicates to check.
	 * @return {Function} Returns the new function.
	 */
	overSome(predicates) {
	}

	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified,
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number=} step The value to increment or decrement by.
	 * @return {Array} Returns the range of numbers.
	 */
	range(start, end, step) {
	}

	/**
	 * This method is like `_.range` except that it populates values in
	 * descending order.
	 *
	 * @nosideeffects
	 * @since 4.0.0
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number=} step The value to increment or decrement by.
	 * @return {Array} Returns the range of numbers.
	 */
	rangeRight(start, end, step) {
	}

	/**
	 * Invokes the iteratee `n` times, returning an array of the results of
	 * each invocation. The iteratee is invoked with one argument; (index).
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function=} iteratee The function invoked per iteration.
	 * @return {Array} Returns the array of results.
	 */
	times(n, iteratee) {
	}

	/**
	 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	 *
	 * @nosideeffects
	 * @since 0.1.0
	 * @param {string=} prefix The value to prefix the ID with.
	 * @return {string} Returns the unique ID.
	 */
	uniqueId(prefix) {
	}
}


/**
 * @type {Lodash}
 */
window.lodash;
