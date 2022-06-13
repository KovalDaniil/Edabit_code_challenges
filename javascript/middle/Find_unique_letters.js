// Find the Unique Letters

function findLetters(str){
	let newArr = str.split("");
    let duplicates = newArr.filter((item, index) => index !== newArr.indexOf(item));

    let values = newArr.filter(value => duplicates.includes(value))
   
    let intersection = newArr.filter(element => !values.includes(element));

	console.log(intersection)
}

findLetters("monopoly")