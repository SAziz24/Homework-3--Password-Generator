// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let tempPassword = '';

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  }


  const length = window.prompt('what is your password length');
	const lower = window.confirm('do you want to use lowercase');
	const upper = window.confirm('do you want to use Uppercase');
	const number = window.confirm('do you want to use Number');
	const symbol = window.confirm('do you want to use Symbol');


  const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
      console.log('funcName', funcName)
			tempPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = tempPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
