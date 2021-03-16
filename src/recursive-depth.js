const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) {
      return 'Error!';
    }

    var subArraysLenghts = [];
	  if(Array.isArray(arr)){
		  if (arr.length>0) {
			  arr.forEach(function(item) {
          var itemDepth=calculateDepth(item);
				  subArraysLenghts.push(1 + itemDepth);
				});
		  } else {
			  subArraysLenghts.push(1);
		  }
	  } else {
		subArraysLenghts.push(0);
	  }			
	
	  return Math.max(...subArraysLenghts);
  }
};


/*function calculateDepth(arr) {
  if(!Array.isArray(arr)) {
    return 'Error!';
  }

  let depth = 1;
  arr.forEach(function(item) {
      let depthCounter = findArrayDepth(item, []);
      depth < (depthCounter + 2) ? depth = (depthCounter + 2) : depth;
  });
  return depth;

  function findArrayDepth(array, depthItem) {
    array.map(function(item) {
      if(Array.isArray(item))
      {
        depthItem.push(1);
        if(item.length > 1)
        {
            item = item.flat(depthItem.length);
            console.log(item);
        }
        return findArrayDepth(item, depthItem);
      }
    });
    return depthItem.length;
  }*/