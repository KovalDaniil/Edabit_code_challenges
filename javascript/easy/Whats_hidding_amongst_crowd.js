// What's Hiding Amongst the Crowd?
function detectWord(str) {
	let result = str.match(/[a-z]/g);
	return result.join('')
}

detectWord("UcUNFYGaFYFYGtNUH")