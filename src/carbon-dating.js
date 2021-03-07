const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity || typeof sampleActivity != 'string' || !(Number(sampleActivity)))
  {
      return false;
  }
  if(Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) < 1)
  {
      return false;
  }

  const year = Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(year);
};
