// Reverse Words in a String
function reverseWords(string) {
	let newStr = string.replace(/ +/g, ' ').trim(); // избавляемся от лишних пробелов в строке
	  let splitStr = newStr.split(' ');
	  let reverseStr = splitStr.reverse().join(' ')
	  console.log(reverseStr);
  }
  
reverseWords(" the sky is blue") 