// How Many Vowels?
// С помощью regex
function countVowels(str) {
	let regex = /[aeiouy]/g;
	  let result =(str.match(regex)).length
	  console.log(result);
  }
  
  countVowels("Celebration")

// Че за х?
function countVowels(str) {
	let newArr = str.split('');
	  for (let x of newArr) {
		  let text = "";
	if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u" || x == "y") {
		   text += x;
	  }
	  let result = text.length
		  console.log(result)
  }
  }
  
  countVowels("Celebration")