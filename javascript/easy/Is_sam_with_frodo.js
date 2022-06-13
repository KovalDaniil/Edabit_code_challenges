// Is Sam with Frodo?
function middleEarth(arr) {
	let newArr = arr.join('').toString();
	let pattern = /FrodoSam|SamFrodo/;
	let result = pattern.test(newArr);
		return result
   }
   
   middleEarth(["Orc", "Sam", "Frodo", "Legolas"])