//Is One Array a Subset of Another?

function isSubset(arr1, arr2) {
	
	let result = arr1.every((e) => arr2.includes(e)); 
	return result
}

isSubset([1, 2], [3, 5, 9, 1]) 