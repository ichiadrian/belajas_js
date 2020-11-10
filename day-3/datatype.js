// string datatype
let address = 'Jl. Niagara';

// object datatype
const a = {id : 1, 
           name: 'Ryan', 
           address: address   // memasukkan variabe address ke object a
          }

          // atau bisa ditulis sebagai berikut
// const a = {
//             id: 1,
//             name: "tom",
//             address // cukup ditulis address artinya key-nya adalah address dan value-nya adalah address
//           };


console.log(a); //+++++++++++++++++++++++++++++++++++++++++++
console.log(Object.values(a)); //+++++++++++++++++++++++++++++++++++++++++++
console.log(a.address); //+++++++++++++++++++++++++++++++++++++++++++

console.log("====================================");
// membuat function dengan input default value
function nama(name, sayHi='', text=''){
  console.log('hello '+name+' '+sayHi+' '+text);//++++++++++++++++++++++++++++++++++++++++++++
}

nama('tom', 'how are you','today'); // mengirim 3 variable name, sayHi, text
nama('mike', 'hi');                 // mengirim 2 variable name, sayHi, sedangkan text menggunakan default value
nama('bob');                        // mengirim 1 variabe name, sayHi dan text menggunakan default value

console.log("====================================");

// jika variable input lebih dari 3, lebih baik kirim berupa object
function name({name, address}){
  // object input {name, address}
  console.log('name: '+name+' '+ 'address: '+address);//++++++++++++++++++++++++++++++++++++++
}

// object yg akan dijadikan sebagai input
const data = {
  address: "Jl. Pemuda", 
  name: "tom" 
}

name(data);


// untuk function nama menggunakan input berupan data string sedangkan untuk function name menggunakan input data object
