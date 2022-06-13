// Applying Discounts

function getDiscounts(nums, d) {
	let percent = parseInt(d);
	let result = nums.map((item) => item/100 * percent )
	 return result
}

getDiscounts([10, 20, 40, 80], "75%")