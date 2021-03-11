const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const mainSubstring = typeof arguments[0] === 'string' ? arguments[0] : arguments[0] + '';
  const additionalString = String(arguments[1].addition) === 'undefined' ? '' : String(arguments[1].addition);
  const mainSeparator = options.separator ? options.separator + '' : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator + '' : '|'; 

  let additionPart = options.additionRepeatTimes ? getAdditioanlPart(additionalString, additionSeparator, options.additionRepeatTimes) : additionalString;

  let resultSubstring = mainSubstring + additionPart;

  let resultString = options.repeatTimes ? getResultString(resultSubstring, mainSeparator, options.repeatTimes) : resultSubstring;

  return resultString;
}

function getAdditioanlPart(string, separator, repeatTimes) {
  let additionPart = string;
  for(let i = 1; i < repeatTimes; i++)
  {
      additionPart += separator + string;
  }
  return additionPart;
}

function getResultString(substring, separator, repeatTimes) {
  let resultString = substring;
  for(let i = 1; i < repeatTimes; i++)
  {
      resultString += separator + substring; 
  }
  return resultString;
}
  