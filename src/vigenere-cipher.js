const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(machineType) {
		if(machineType || machineType == undefined)
		{
			return new DirectVigenereCipheringMachine();
		}
		else if(!machineType)
		{
			return new ReverseVigenereCipheringMachine();
		}
	}
	encrypt(messageString, keyString) {
		if(!messageString && !keyString)
		{
			throw new Exception('Parameter missing!');
		}
		const keyCodeChars = this.createCodeChars(keyString.toLowerCase());
    const messageCodeChars = this.createCodeChars(messageString.toLowerCase());

    const equalKeyCodeChars = this.createEqualStrings(messageCodeChars, keyCodeChars);
    const difKeyCodeChars = this.findDifferantForCodeChars(equalKeyCodeChars);
    const encryptCodeChars = this.getEncryptChars(messageCodeChars, difKeyCodeChars);
    const encryptString = this.getString(encryptCodeChars);
    return encryptString.toUpperCase();
	}    
	decrypt(messageString, keyString) {
		if(!encryptedString && !keyString)
		{
			throw new Exception('Parameter missing!');
		}
		const keyCodeChars = this.createCodeChars(keyString.toLowerCase());
		const messageCodeChars = this.createCodeChars(messageString.toLowerCase());

		const equalKeyCodeChars = this.createEqualStrings(messageCodeChars, keyCodeChars);
		const difKeyCodeChars = this.findDifferantForCodeChars(equalKeyCodeChars);
		const decryptCodeChars = this.getDecryptChars(messageCodeChars, difKeyCodeChars);
		const decryptString = this.getString(decryptCodeChars);
		return decryptString.toUpperCase();
	}

	createCodeChars(string) {
		let stringChars = string.split('');
		let codeChars = [];
		for(let i = 0; i < stringChars.length; i++)
		{
			codeChars.push(stringChars[i].charCodeAt());
		}
		return codeChars;
	}
	createEqualStrings(messageChars, keyChars) {
    let additionKeyChars = [];
    if(messageChars.length > keyChars.length)
    {
			for(let i = keyChars.length, j = 0; i < messageChars.length; i++, j++)
			{
				additionKeyChars.push(keyChars[j]);
				if(j === keyChars.length - 1) 
				{
					j = 0;
				} 
			}
    }
    return keyChars.concat(additionKeyChars);
	}
	findDifferantForCodeChars(codeChars) {
		const aCharCode = 'a'.charCodeAt();
		let charDiffs = [];
		for(let i = 0; i < codeChars.length; i++)
		{
			let diff = codeChars[i] - aCharCode;
			charDiffs.push(diff);
		}
		return charDiffs;
	}
	getEncryptChars(messageCodeChars, difKeyCharCode) {
    const minCodeChar = 'a'.charCodeAt();
    const maxCodeChar = 'z'.charCodeAt();
    let encryptCodeChars = [];

    for(let i = 0, j=0; i < messageCodeChars.length; i++, j++)
    {
			if(messageCodeChars[i] >= minCodeChar && messageCodeChars[i] <= maxCodeChar)
			{
				let encryptCodeChar = messageCodeChars[i] + difKeyCharCode[j];
				encryptCodeChar = encryptCodeChar <= maxCodeChar ? encryptCodeChar : minCodeChar + (encryptCodeChar - maxCodeChar - 1);
				encryptCodeChars.push(encryptCodeChar);
			}
			else
			{
				encryptCodeChars.push(messageCodeChars[i]);
				j--;
			}
    }
    return encryptCodeChars;
  }
	getDecryptChars(messageCodeChars, difKeyCodeChars) {
    const minCodeChar = 'a'.charCodeAt();
    const maxCodeChar = 'z'.charCodeAt();
    let decryptCodeChars = [];

    for(let i = 0, j = 0; i < messageCodeChars.length; i++, j++)
    {
			if(messageCodeChars[i] >= minCodeChar && messageCodeChars[i] <= maxCodeChar)
			{
				let decryptCodeChar = messageCodeChars[i] - difKeyCodeChars[j];
				decryptCodeChar = decryptCodeChar >= minCodeChar ? decryptCodeChar : maxCodeChar - (difKeyCodeChars[j] - (messageCodeChars[i] - minCodeChar) - 1);
				decryptCodeChars.push(decryptCodeChar);
			}
			else
			{
				decryptCodeChars.push(messageCodeChars[i]);
				j--;
			}        
    }
    return decryptCodeChars;
  }
	getString(codeChars) {
		let string = '';
		for(let i = 0; i < codeChars.length; i++)
		{
			string += String.fromCharCode(codeChars[i]);
		}
		return string;
	}
}

module.exports = VigenereCipheringMachine;
