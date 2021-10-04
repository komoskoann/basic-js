import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let positive = arr.filter(number => number != -1).sort((a, b) => a - b)
  return arr.map(function(element) {
    if (element == -1) {
      return element;
    } else {
      return positive.shift();
    }
  })
}
