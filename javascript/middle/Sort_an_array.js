// Sort an Array by String Length
// сам не сделал

function sortByLength(arr) {
    return arr.sort(function(a,b){
    return a.length - b.length;
  });
      
  }
  
  sortByLength(["Google", "Apple", "Microsoft"])