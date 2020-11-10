// async function f() {
//   return 1;
// }
// const v = f();
// console.log('----',v);

// const { reject } = require("async");

// // -----------------------------------------------------
// async function f() {
//   return 1;
// }

// f()
// .then(x => console.log(x)); // 1


// // -----------------------------------------------------
// async function f() {
//   return Promise.resolve(1);
// }

// f().then(x => console.log(x)); // 1


// // -----------------------------------------------------
// // works only inside async functions
// async function f() {
//   return 1;
// }

// let value = await f(x);


// // -----------------------------------------------------
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();
// // // let modify it from last callback sample code



// -----------------------------------------------------
// function f() {
//   let promise = Promise.resolve(1);
//   let result = promise; // Syntax error
//   return result;
// }
// // const v = f();
// // console.log(v);

// // solution for returning value
// f()
// .then(x=> console.log(x));


// // Error handling
// // -----------------------------------------------------
// async function f() {
//   await Promise.reject(new Error("Whoops!"));
// }
// v = f();
// console.log(v);

// // same as
// async function f() {
//   throw new Error("Whoops!");
// }
// v = f();
// console.log(v);


// // -----------------------------------------------------
// async function FLong() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("done!"), 1000);
//   });
//   return promise;
// }
// async function f() {
//   try {
//     const response = await FLong();
//     // .then( result => console.log('--result inside--', result))
//     // .catch( error => reject(new Error('long running error!')))
//     others_process;
//     others_process;
//     others_process;
    
//     // console.log(response);
//   } catch(err) {
//     console.log('error shows: ', err); // TypeError: failed to fetch
//   } finally {
//     console.log('finally');
//   }
// }

// f();



// // -----------------------------------------------------
// async function FLong() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   return promise;
// }

// async function f() {
//   let response = await FLong();
//   console.log(response);
// }

// f()
// // f() becomes a rejected promise
// f()
// .then(()=>console.log('success'))
// .catch(()=>console.log('error')); // TypeError: failed to fetch // (*)


// Promise.all
// -----------------------------------------------------
async function FLong(x) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`done! => ${x}`), 1000);
  });
  return promise;
}

async function f(){
  let arrOfPromise = [];
  for (let c=0; c<=4; c++){
    const promiseOut = FLong(c);
    arrOfPromise.push(promiseOut);
  }
  const results = await Promise.all(arrOfPromise);
  console.log('----', results);
}

f();
