// Find the First Non-Repeated Character

function firstNonRepeatedCharacter(string) {
	for (var i = 0; i < string.length; i++) {
	  var c = string.charAt(i);
	  if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
		return c;
	  }
	}
	return "False";
  }
  firstNonRepeatedCharacter("it was then the frothy word met the round night")