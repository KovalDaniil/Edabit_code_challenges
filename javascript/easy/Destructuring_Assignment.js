// Destructuring Assignment
var massive = [1, 2, 3, 4, 5, 6, 7, 8];

var [one, two, three, four, five, six, seven, eight] = massive;

var foo = ["one", "two", "three"];

// без деструктурирования
var one   = foo[0];
var two   = foo[1];
var three = foo[2];
// с деструктурированием
var [one, two, three] = foo;