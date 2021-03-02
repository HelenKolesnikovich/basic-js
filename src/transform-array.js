const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr))
    {
        throw "Error";
    }

    let copyArray = arr.slice();

    for(let i = 0; i < copyArray.length; i++)
    {
        if(typeof copyArray[i] === 'string')
        {
            if(copyArray[i] === '--discard-next')
            {
                if((copyArray.length - 1) === i)
                {
                    copyArray.splice(i, 1);
                }
                else
                {
                    copyArray.splice(i, 2);
                    i--;
                }
            }
            else if(copyArray[i] === '--discard-prev')
            {
                if(copyArray[i] === 0)
                {
                    copyArray.splice(0, 1);
                }
                else
                {
                    copyArray.splice(i - 1, 2);
                    i -= 2;
                }
            }
            else if(copyArray[i] === '--double-next')
            {
                if((copyArray.length - 1) === i)
                {
                    copyArray.splice(i, 1);
                }
                else
                {
                    let additionElement = copyArray[i + 1];
                    copyArray.splice(i, 1, additionElement);
                    i++;
                }
            }
            else if(copyArray[i] === '--double-prev')
            {
                if(i === 0)
                {
                    copyArray.splice(0, 1);
                }
                else
                {
                    let additionElement = copyArray[i - 1];
                    copyArray.splice(i, 1, additionElement);
                }
            }
        }
    }
    return copyArray;
};
