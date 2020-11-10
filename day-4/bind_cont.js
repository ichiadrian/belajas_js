
// membuat object method yg isinya adalah key numbers dengan value array, dan key sum dengan value function
var methods = {
        numbers: [1, 5, 8],
        sum: function () {
          // Function expression
          console.log('nilai this sebelum dirubah: ', this);
          return this.numbers.reduce(function (acc, num) {
            // func. expression
            return (acc + num);
          });
        },
      };

const y = methods.sum();                            // eksekusi function didalam object methods
console.log('hasil proses sum(): ', y);             // tampilkan nilai y

// penggunaan bind
const z = methods.sum.bind({numbers:[2,3,4]});      // isi nilai this dengan object {numbers:[2,3,4]}
console.log(z());                                   // baru di eksekusi

// penggunaan call
const out = methods.sum.call({numbers:[1,2,3]});    // eksekusi function sum dengan menggunakan call
console.log(out);                                   // tampilkan nilai out

// penggunaan apply
const z = methods.sum.apply({ numbers: [1, 2, 3] }); // eksekusi function sum dengan menggunakan apply
console.log(z);

// membuat object person1
const person1 = {
  firstName: "Jon", 
  lastName: "Doe" 
};

// membuat object person2
const person2 = { firstName: "Kelly", lastName: "King" };

function say() {
  // function memiliki environment variabe this yg bisa di assign menggunakan fungsi bind
  console.log(this);
  console.log("Hello " + this.firstName + " " + this.lastName);
}

// bind person1 ke function say
var sayHelloJon = say.bind(person1); // cara lain meng-asign this dengan membuat variable object
sayHelloJon(); 

// bind person2 ke function say
var sayHelloKelly = say.bind(person2);
sayHelloKelly(); 

person2 = {firstName:"tom", lastName: "jerry"};

// js memiliki sifat dynamics data type
let integerVar = 1;             // membuat variable dengan tipe number
console.log(typeof integerVar);

integerVar = 'string';          // variable tipe number diubah menjadi string type
console.log(typeof integerVar);

console.log(1 == '1');          // nilai true, membandingkan number dengan string menggunakan == (tipe disamakan secara dinamis)
console.log(1 === '1');        // nilai false, karena memperhatikan data type 