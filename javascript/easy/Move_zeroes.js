// Move Zeroes
function moveZeros(arr) {
	let count = 0; 
  for (let i = 0; i < arr.length; i++)
	  if (arr[i] != 0)
		  arr[count++] = arr[i]; 
							 
  while (count < arr.length)
	  arr[count++] = 0;
  console.log(arr)
}

moveZeros([1, 0, 1, 2, 0, 1, 3])