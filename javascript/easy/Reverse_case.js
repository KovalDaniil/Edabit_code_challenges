// 10. Reverse the Case
function reverseCase(str) {
	
    function reverseCase(str) {
      return [...str].map(c => c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()).join("")
    }
  
    // второе решение
    function reverseCase(str) {
      return str.split('').map(a => a == a.toLowerCase() ? a.toUpperCase()
             : a.toLowerCase()).join('');
    }
       
  }
  
  reverseCase("Happy Birthday")