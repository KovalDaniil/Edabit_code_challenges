// 9. Convert to Decimal Notation

function convertToDecimal(perc) {
	let array = perc;
	let newArray = array.map(myFunction);
	
	function myFunction(value) {
    let num = parseInt(value);
		return num * 0.01;
}
	console.log(newArray)
}

convertToDecimal(["1%", "2%", "3%"])