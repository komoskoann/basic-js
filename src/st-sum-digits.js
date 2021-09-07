import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let sum1 = n.toString().split('').map(item => +item).reduce(function(a,b){return(a+b)});
  if(sum1.toString().length === 1) {
    return sum1;
  } else{
    return sum1.toString().split('').map(item => +item).reduce(function(a,b){return(a+b)});
  }
}
