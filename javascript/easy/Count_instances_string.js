// Count Instances of a Character in a String
function charCount(myChar, str) {
	let result = [];
	let arr = str.split('');
	for (i=0; i < arr.length; i++) {
		if (myChar == arr[i]) {
			result +=arr[i]
		}
	}
	let charNumber = result.length;
	console.log(charNumber);
}

charCount("b", "big fat bubble")