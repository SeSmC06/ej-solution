// looping a triangle
// 7 lines
// # starts @ 1
// one more # is added each loop
let triangle = '#';
// for (let i = 0; i < 7; i++) {
//   console.log(triangle);
//   triangle += '#';  
// }

// fizzbuzz
// for (var i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else {
//     console.log(i);
//   }
// }

// chess board

let size = 10;
let board = '';

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size * 2; y++) {
    if ((x + y) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);