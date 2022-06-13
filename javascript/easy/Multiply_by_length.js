// Multiply by Length
function multiplyByLength(arr) {
	let result = arr.map(item => item*arr.length) 
	return result
}

multiplyByLength([1, 0, 3, 3, 7, 2, 1])