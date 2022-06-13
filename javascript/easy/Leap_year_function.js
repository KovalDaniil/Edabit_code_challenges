// Leap Year Function
function leapYear(year) {
	return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

leapYear(1990)