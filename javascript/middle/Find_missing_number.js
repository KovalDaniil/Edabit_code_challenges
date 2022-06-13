// Find the Missing Number

function missingNum(arr) {
    let n = arr.length;
	
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= arr[i];
        return total;
}	
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])