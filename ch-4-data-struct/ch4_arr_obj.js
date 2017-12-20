let arr = [0, 1, 2, 3, 4, 15];
let obj = {
  1: 'hello',
  two: 'world',
}

let range = function(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

let sum_range = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

let reverse = function(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

let reverseInPlace = function(arr) {
  
}