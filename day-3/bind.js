// Penggunaan bind pada function

// membuat object person1
var person1 = { 
  				firstName: "Jon", 
  				lastName: "Kuperman" 
			};

// membuat object person2
var person2 = { firstName: "Kelly",
				 lastName: "King"
			};

function say() {
  // function memiliki environment variabe this yg bisa di assign menggunakan fungsi bind
  console.log(this);
  console.log("Hello " + this.firstName + " " + this.lastName);
}

// bind person1 ke function say
var sayHelloJon = say.bind(person1);
sayHelloJon(); 

// // bind person2 ke function say
var sayHelloKelly = say.bind(person2);
sayHelloKelly(); 

//kalaiu menggunakan apply bisa di gunakan tanpa harus menampung ke dalam variabel terlebih dahulu
// say.apply(person1);
// say.apply(person2);