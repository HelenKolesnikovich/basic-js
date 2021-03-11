const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray : [],
  getLength(chain) {
      return this.chainArray.length;    
  },

  addLink(value) {
      value = typeof value === 'string' ? value : String(value);
      this.chainArray.push(value);
  return this;
  },

  removeLink(position) {

      if(typeof position !== 'number' || (position < 1 && position > chainArray.length - 1) || !Number.isInteger(position))
      {
          return 'Error';
      }

      this.chainArray.splice(position - 1, 1);
  return this;
  },

  reverseChain() {
      this.chainArray = this.chainArray.reverse();
  return this;
  },

  finishChain() {
      let str = this.chainArray.join(' )~~( ');
      let resultStr = '( '.concat(str, ' )');
      return resultStr;
  }
};

module.exports = chainMaker;
