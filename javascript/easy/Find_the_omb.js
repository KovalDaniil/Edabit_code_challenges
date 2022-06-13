// 5. Find the omb
  // С помощью regex и тернарного оператора
  function omb(str) {
	let findomb = str.match(/omb/gi)
	let result = findomb ? "Duck!!!" : "There is no omb, relax."
	return result
}

omb("There is a omb.")