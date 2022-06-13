// Primorial of a Number
function primorial(n) {
	var primes = [];
	let i=2;
	let j;
	  while (primes.length<n){
		for (let j=2; j<=i;j++ ){
				  if (i%j===0 && i!=j){
						break;
			}  
			  if (j===i){
		//       console.log("i is:"+i+", j is: "+j);
				primes.push(i)
			  }
		}   
			i++;  
	  }
		for (var k=0; k<primes.length; k++){
			var power; 
			if (k===0){
			  power=primes[k];
			} else {power*=primes[k]}
			return power.length;
		}
	return power
	}
	primorial(6)