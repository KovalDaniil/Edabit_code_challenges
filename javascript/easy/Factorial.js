// Algorithms I: Introduction to Recursion
function factorial(num) {
    // TERMINATION
      if (num < 0) return;
     // BASE
      if (num === 0) return 1;
    // RECURSION
      return num * factorial(num - 1);
  }
  
  factorial(5)