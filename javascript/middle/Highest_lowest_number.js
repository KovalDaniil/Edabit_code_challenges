// Return the Highest and Lowest Numbers
// сначала разбиение, потом порядок
function highLow(str) {
	let newArr = str.split( /\s/g)
	let arrSort = newArr.sort(function(a, b) {
  return b - a;
});
	let result = arrSort[0] + " " + arrSort[arrSort.length - 1]
	return result
}

highLow("1 2 -3 4 5")