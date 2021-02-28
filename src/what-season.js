const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == undefined)
	{
		return 'Unable to determine the time of year!';
	}
	else if(!(date instanceof Date) || isNaN(date)){
		throw Error();
	}

	const seasons = ['winter', 'spring', 'summer', 'autumn'];

	const month = date.getMonth() + 1;
	if(month > 2 && month < 6){
		return 'spring';
	}
	else if(month > 5 && month < 9){
		return 'summer';
	}
	else if(month > 8 && month < 12){
		return 'autumn';
	}
	else{
		return 'winter';
	}
};
