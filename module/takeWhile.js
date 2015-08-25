/**
 * @module 1-liners/takeWhile
 * 
 * @description
 *
 * Take items of an array while they fulfill a predicate.
 * 
 * @example
 * 
 * 	var takeWhile = require('1-liners/takeWhile');
 * 
 * 	takeWhile(i => i % 2 === 0, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
 * 
 */
export default (pred, arr) => arr.filter(val => pred(val));
