// // ----------------------------------------------------------
// let promise = new Promise(function (resolve, reject) {
//   // the function is executed automatically when the promise is constructed

//   // after 1 second signal that the job is done with the result "done"
//   setTimeout(() => {
//     return resolve("done")
//   }, 1000);
// });

// console.log(promise);

// // ----------------------------------------------------------
// let promise = new Promise(function (resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// console.log(promise);

// // ----------------------------------------------------------
// let promise = new Promise(function (resolve, reject) {
//   resolve("done");

//   reject(new Error("error appear")); // ignored
//   setTimeout(() => resolve("…")); // ignored
// });

// promise
// .then(
//   function (result) {
//     console.log(result)
//     /* handle a successful result */
//   },
//   function (error) {
//     console.log(error);
//     /* handle an error */
//   }
// );


// // ----------------------------------------------------------
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject("done!"), 1000);
// });

// // resolve runs the first function in .then
// promise
// .then(
//   (result) => console.log('resolve: ', result), // shows "done!" after 1 second
//   (error) => console.log('reject: ', error) // doesn't run
// );

// // ----------------------------------------------------------
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // reject runs the second function in .then
// promise
// .then(
//   (result) => console.log(result), // doesn't run
//   (error) => console.log(error) // shows "Error: Whoops!" after 1 second
// );


// // ----------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("done!"), 1000);
// });

// promise
// .then(result => console.log(result)); // shows "done!" after 1 second


// // ----------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 1000);
// });

// // .catch(f) is the same as promise.then(null, f)
// promise
// .then(result => console.log(result))
// .catch(error => console.log(error)); // shows "Error: Whoops!" after 1 second


// // ----------------------------------------------------------
// new Promise((resolve, reject) => {
//   setTimeout(() => reject("result"), 2000);
// })
//   .then((result) => {
//     console.log(result)
//     longRunning
//     .then( out => console.log(out))
//     .catch( error => console.log(error))
//   }) // <-- .then handles the result
//   .catch((error) => console.log("error ", error))
//   .finally(() => console.log("finally"));


// // ----------------------------------------------------------
// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .catch((err) => console.log(err))  // <-- .catch handles the error object
//   .finally(() => console.log("Promise ready"))

// // ----------------------------------------------------------
// // the promise becomes resolved immediately upon creation
// let promise = new Promise(resolve => resolve("done!"));

// promise
// .then(res => console.log(res)); // done! (shows up right now)


// // question
// // ??????????????????????????????????????????????????????????
// // ----------------------------------------------------------
// let promise = new Promise(function (resolve, reject) {

//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
//   // setTimeout(() => console.log("----------"), 1000);

// });

// promise
// .then(res => console.log(res));
