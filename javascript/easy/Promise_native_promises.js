// Promises III: Native Promise, Introducing the Executor
// Below promise is resolved
let promise = new Promise((resolve, reject) => {
	setTimeout(() => {           // executor
		  let newArr = ['a','b','c','d'];
	  resolve(newArr);
	}, 3000);
  }).then(
	  res => { 
		console.log("Promise is fulfilled and returned next: " + res);
	  },
	  error => {
		console.log("Something bad happened to promise, so it Rejected: " + error);
	  }
	);
	
// Below promise is rejected
let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		  let newArr = ['a','b','c','d'];
	  reject(newArr);
	}, 3000);
  }).then(
	  res => { 
		console.log("Promise is fulfilled and returned next: " + res);
	  },
	  error => {
		console.log("Something bad happened to promise, so it Rejected: " + error);
	  }
	);