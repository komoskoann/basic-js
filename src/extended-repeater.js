import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let repeatTimes = options.repeatTimes
  let separator = options.separator || '+';
  let addition = options.addition
  let additionRepeatTimes = options.additionRepeatTimes
  let additionSeparator = options.additionSeparator || '|'
  let newString = !repeatTimes ? str : '';
  for(let i = 0; i < repeatTimes; i++) {
    newString += str;
    if (additionRepeatTimes) {
      for(let j = 0; j < additionRepeatTimes; j++) {
        newString += addition
        if (additionRepeatTimes > 1) {
          newString += additionSeparator
        }
      }
    } else if (addition) {
      newString += addition
    }
    if (i !== repeatTimes - 1) {
      newString += separator;
    }
    
    
  }
  return newString
}
