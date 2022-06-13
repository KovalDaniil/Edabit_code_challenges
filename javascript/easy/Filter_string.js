// Filter a String
function filterString(txt) {
	let upperCaseNumber = (txt.match(/[A-Z]/g)).length.toString();
	let lowerCaseNumber = (txt.match(/[a-z]/g)).length.toString();
	let numbersNumber = (txt.match(/[0-9]/g)).length.toString();
	let specialCharacters = (txt.match(/[!@#\$%\^&\*()]/g)).length.toString();
	let newArr = (upperCaseNumber + lowerCaseNumber + numbersNumber + specialCharacters)
	let result = newArr.split('')
	return result
}

filterString("*$(#Mu12bas43hiR%@*!")
filterString("^^Edabit^^%$#12379")
filterString("**Airforce1**")