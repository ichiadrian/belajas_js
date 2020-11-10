// // try in browser

// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next());
// // expected output: 10

// console.log(gen.next());


// // ---------------------------------

// function* idMaker(x) {
//   let index = 0;
//   yield index++;
//   yield index++;
//   yield index++;
// }

// var gen = idMaker(2);

// console.log(gen.next()); // 0
// console.log(gen.next()); // 1
// console.log(gen.next()); // 2
// console.log(gen.next()); // 2
// console.log(gen.next()); // 2
