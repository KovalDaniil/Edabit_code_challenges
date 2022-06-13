// Trace of a Square Matrix
function getTrace(matrix){
    let sum = 0;
    for(let i = 0; i < matrix.length; i++)
        sum += matrix[i][i]; // на каждой итерации просто прибапвляем индекс массива    
    return sum;
}; 

getTrace([
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
])