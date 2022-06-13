// Absolute Sum
// Сначала через map абсолютное значение, потом reduce - общую сумму
function getAbsSum(arr) {
	let absl= arr.map( el => {
		return Math.abs(el)
	})

let result = absl.reduce((sum, current) => sum + current, 0);
	return result
	
  };

getAbsSum([-3, -4, -10, -2, -3])