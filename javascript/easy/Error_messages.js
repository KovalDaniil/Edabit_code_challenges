// 2. Error Messages
function error(n) {
    let m1 = "Check the fan: e1"
    let m2 = "Emergency stop: e2"
    let m3 = "Pump Error: e3"
    let m4 = "c: e4"
    let m5 = "Temperature Sensor Error: e5"
      
      if (n == 1) {
          return m1
      } else if (n == 2) {
          return m2
      } else if (n == 3) {
          return m3
      } else if (n == 4) {
          return m4
      } else if (n == 5) {
          return m5
      } else {
          return 101
      }
  }
  
  error(3)
// 3. Еще одно решение через объект по ключу
function error(n) {
	let obj = {
	1 : "Check the fan: e1",
	2 : "Emergency stop: e2",
	3 : "Pump Error: e3",
	4 : "c: e4",
	5 : "Temperature Sensor Error: e5"
	};
	
	return obj[n] || 101;
}
// 4. Через массив
function error(n) {
    return [
      "",
      "Check the fan: e1",
      "Emergency stop: e2",
      "Pump Error: e3",
      "c: e4",
      "Temperature Sensor Error: e5"
    ][n] || 101;
  }