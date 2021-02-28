const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let counter = 0;
   matrix.forEach(function(submatrix){
		submatrix.forEach(function(element){
				if(typeof element == 'string' && element == '^^')
			{
				counter++;
			}
		});
   });
   return counter;
};
