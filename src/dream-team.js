const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
	  return false;
  }

  let dreamTeamName = '';
  members.forEach(function(element){
	if(typeof element == 'string')
	{
		dreamTeamName += element.trimStart().charAt(0);
	}
  });

  if(dreamTeamName.length == 0){
	  return false;
  }  
  else if(dreamTeamName.length > 1){
    return dreamTeamName.toUpperCase().split('').sort().join('');
  }
  else{
	  return dreamTeamName.toUpperCase();
  }
};
