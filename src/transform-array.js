import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    } else if (arr[i] === '--double-next' && arr[i + 1]) {
      result.push(arr[i + 1], arr[i + 1])
    } else if (arr[i] === '--double-prev' && result.length > 0) {
      let previousElement = result[result.length - 1]
      result.push(previousElement, previousElement);
    } else if (arr[i] === '--discard-prev' && result.length > 0) {
      result.pop();
    } else if (arr[i] === '--discard-next' && arr[i + 1]) { 
      i++;
    }
  }
  return result;
}
