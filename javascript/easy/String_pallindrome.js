// Is the String a Palindrome?
// С помощью методов
function checkPalindrome(str) {	
	let reverseArr = str.split('').reverse().join('')
	if (str === reverseArr) {
		console.log('True!!!')
	} else {
		console.log('False!!!')
	}	
};

checkPalindrome("stressed")
// без методов
function palindrome(str) {
	var re = /[^A-Za-z0-9]/g;
	str = str.toLowerCase().replace(re, '');
	var len = str.length;
	for (var i = 0; i < len/2; i++) {
	  if (str[i] !== str[len - 1 - i]) {
		  return false;
	  }
	}
	return true;
   }
   palindrome("A man, a plan, a canal. Panama");