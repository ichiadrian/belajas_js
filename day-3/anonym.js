/* 
Anonymous functions are functions without names. Anonymous functions can be used as 
an argument to other functions or as an immediately invoked function execution.
*/
// var multy = function (a, b) {
//   return a * b;
// };

// const a = multy(2,3);

// console.log(a);

function add(a,b){
  return a * b;
};

// ------------------------------------------------------------
// contoh lain, menjawab kapan dibutuhkan anonymous function
function calc(){
    return {
            // add: function (a,b){
            //         console.log(a+b);
            //       },
            // multi: function(a,b){
            //           console.log(a*b);
            add: function add(a,b){
                    console.log(a+b);
                  },
            multi: function add(a,b){
                      console.log(a*b);
                  }
    }
}
console.log(calc());  // return dari cac() adalah object dari function add dan muti
                      // { add: [Function: add], multi: [Function: multi] }
calc().add(1,2);      //
calc().multi(1,2);