// Three Arrays!

function sumCommon(arr1, arr2, arr3) {
	let intersection = arr1.filter(x => arr2.includes(x) && arr3.includes(x));
	let sum = 0;
   for (var i=0; i<intersection.length; i++) {
	   sum = sum + intersection[i];
   } 
   return sum;
}

sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]);
// Сумму находим с помощью reduce
function sumCommon(arr1, arr2, arr3) {
	let intersection = arr1.filter(x => arr2.includes(x) && arr3.includes(x));
	let sum = intersection.reduce((a, b)=> a+b, 0);
   return sum;
}

sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]);