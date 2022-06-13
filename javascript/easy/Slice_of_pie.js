// Slice of Pie
function equalSlices(total, people, each) {
    let sum = people * each;
  if (sum === 0) {
         return "Zero people. Leave the pie!"
    } else if (total >= sum) {
        return "Enough to all!"
    }
      else {
  return "Bring em more!"
  }
  }
  
  equalSlices(11, 5, 2)