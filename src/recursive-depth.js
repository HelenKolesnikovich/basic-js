const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {  
  calculateDepth(arr) {
    if(!Array.isArray(arr))
    {
      return 'Error!';
    }
    
    let depth;
    let innerDepthValues = [];
    arr.forEach(function(item) {                //cycle for initial array
      depth = 1;
      if(Array.isArray(item))
      {
        innerDepthValues.push(++depth);
        getSimpleArray(item);
      }
    });

    function getSimpleArray(arr) {
      for(let i = 0; i < arr.length; i++)
      {
        if(Array.isArray(arr[i]))
        {
          innerDepthValues.push((innerDepthValues[innerDepthValues.length-1]) + 1);
          getSimpleArray(arr[i]);
        }
      }
    }
    for(let i = 0; i < innerDepthValues.length; i++)
    {
      depth = innerDepthValues[i] > depth ? innerDepthValues[i] : depth;
    }
    return depth;
  }
}