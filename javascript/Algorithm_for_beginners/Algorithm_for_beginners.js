// АЛГОРИТМ ЛИНЕЙНОГО ПОИСКА. Выяснить, есть число в данном массиве или нет.
// простой цикл for проверяет каждый элемент, пока не найдет нужный.
// Линейная временная сложность: O (n)
const array2 = [3, 8, 12, 6, 10, 2];

// Find 10 in the given array.
function checkForN(arr, n) {    
for(let i = 0; i < array2.length; i++) {        
if (n === array2[i]) {            
return `${true} ${n} exists at index ${i}`;        
}
}
  return `${false} ${n} does not exist in the given array.`;
}

checkForN(array2, 10);
// АЛГОРИТМ ДВОИЧНОГО ПОИСКА. Можно удалить сразу несколько элементов.
// Работает только с сортированным массивом. Следует подходу «разделяй и властвуй»
// Логарифмическая временная сложность: O (log n)
function binarySearch(array, element) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  while (array[middleIndex] !== element && firstIndex <= lastIndex) {
      if(array[middleIndex] > element) {
              lastIndex = middleIndex - 1;
      }else {
              firstIndex = middleIndex + 1
      }        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  }    return array[middleIndex] === element ? middleIndex : -1;
}

const array = [2, 3, 6, 8, 10, 12];
binarySearch(array, 8); // OutPut -> 3
// АЛГОРИТМ НАИВНОГО ПОИСКА 
// Внутри цикла есть цикл (вложенный цикл). Оба цикла выполняются n раз.
// Квадратичная временная сложность: O (n ^ 2)
function naiveSearch(mainStr, subStr) {
  if (subStr.length > mainStr.length) return false;
  for(let i = 0; i < mainStr.length; i++) {
     for(let j = 0; j < subStr.length; j++) {
          if(mainStr[i + j] !== subStr[j]) break;
          if(j === subStr.length - 1) return true;
       }
  }
  return false;
}
// АЛГОРИТМ ПУЗЫРЬКОВОЙ СОРТИРОВКИ
// Переставляем большее число в конец, сравнивая каждое число с предыдущим.
// Квадратичную временную сложность O (n ^ 2)
function bubbleSort(array) {
  let isSwapped;
  for(let i = array.length; i > 0; i--) {
      isSwapped = false;
      for(let j = 0; j < i - 1; j++) {
          if(array[j] > array[j + 1]) {
              [array[j], array[j+1]] = [array[j+1], array[j]];
              isSwapped = true;
          }
      }
      if(!isSwapped) {
          break;
      }
  }
  return array;
}
// АЛГОРИТМ СОРТИРОВКИ СЛИЯНИЕМ
// Алгоритм следует подходу «разделяй и властвуй»
// Логарифмической временная сложность O (log n) 
function mergeSortedArray(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  while(i < array1.length && j < array2.length) {
      if(array1[i] < array2[j]) {
          result.push(array1[i]);
          i++;
      } else {
          result.push(array2[j]);
          j++;
      }
  }
  while (i < array1.length) {
      result.push(array1[i]);
      i++;
  }
  while (j < array2.length) {
      result.push(array2[j]);
      j++;
  }
  return result;
}

// Сортировка пузырьком
function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) { // j уменьшается на каждой итерации
    for (let i = 0; i < j; i++) {  // пока i меньше j, растет на каждой итерации
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

// 2й способ
function bubbleSortConcept2(arr) {
  let swapped;

  do {
    swapped = false;
    console.log(arr);
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        // Save the value to a variable so we don't lose it
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    })
  } while (swapped);
}