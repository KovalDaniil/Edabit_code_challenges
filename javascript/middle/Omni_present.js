// Omnipresent Value
function isOmnipresent(arr, val) {
	let result = arr.every(omni)
	function omni (el) {
		if (el.includes(val)) {
			return true
		} return false
	}
	return result
}
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)