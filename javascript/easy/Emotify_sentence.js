// 11. Emotify the Sentence
function emotify(str) {
	if (str.includes("smile")) {
		return  "smile"
	}
else if (str.includes("sad")) {
		return  "saaad"
	}
	else if (str.includes("mad")) {
		return  "maaad!"
	}
	else {
		return "whats your mood today?"
	}
}
emotify("Make me smile")

// Еще одно решение с использованием тернарного оператора
function emotify(str) {
  let result = str.includes("smile") ? "Make me :D" :
    str.includes("sad") ? 'Make me :(' :
    str.includes("mad") ? 'Make me :P' :
    str.includes("grin") ? 'Make me :)' :
    "Write your mood!!!";
  
  return(result);
  }
  
  emotify("Make me smile")