// Summing a Slice

function sliceSum(arr, n) {
	
	let newArr = arr.slice(0, n);
	let result =  newArr.reduce((sum, current) => sum + current, 0);
	return result
}

sliceSum([4, 2, 5, 7], 4) 