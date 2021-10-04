import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str === '') {
    return '';
  }
  let newLine = ''
  let splittedString = str.split('');
  let currentElement = splittedString[0];
  let n = 1;
  splittedString.slice(1, splittedString.length).forEach(function(element) {
    if (currentElement == element) {
      n++;
    } else if (n > 1) {
      newLine += n + currentElement;
      currentElement = element;
      n = 1;
    } else {
      newLine += currentElement;
      currentElement = element;
      n = 1
    }
  })

  if (n > 1) {
    newLine += n + currentElement;
  } else {
    newLine += currentElement;
  }
  return newLine;
}
