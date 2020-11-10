// menggunakan fungsi call pada function

var person1 = { firstName: "Tom", 
				lastName: "Cat" 
			};
var person2 = { firstName: "Brown",
				lastName: "Sugar" 
			};


function say(greeting, greeting2="") {
  // function memiliki environment variabe this yg bisa di assign sekaligus dijalankan menggunakan call
  console.log(this);
  console.log(
    greeting + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}

// execute say dengan fungsi call, 
// menggunakan satu input variable yaitu greeting = "Helo", sedangkan greeting2 menggunakan default value
say.call(person1, "Hello");

// execute say dengan fungsi call, 
// menggunakan satu input variable yaitu greeting = "Helo", dan greeting2 = "are you well?"
say.call(person2, "Hello", "are you well?"); 


//=================== perbedaan dengan apply terletak pada input varible diletakkan tidak didalam array ==========================
