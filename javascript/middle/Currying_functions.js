  // Currying Functions - каррирование 
  function multiply(arr){
	return (int) => {
	return (Int2) => {
	return arr.map(num => num*int/Int2)
	}
	}
}

multiply([1, 2, 3])(2)(5)
// Второй пример
function multiply2(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
multiply2(1)(2)(3) // 6