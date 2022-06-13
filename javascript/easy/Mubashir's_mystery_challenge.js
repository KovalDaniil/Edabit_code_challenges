// Mubashir's Mystery Challenge

function mubashirFunction(a, b) {
	if(b == 0){
		return "Cant divide on zero!"
	}	else if	(a !== b) {
		return a*b
	} else if (a == b) {
		return a/b
	} 
}

mubashirFunction(0, 1)