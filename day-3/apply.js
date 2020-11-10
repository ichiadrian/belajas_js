// menggunakan fungsi apply pada function

var person1 = { firstName: "Tom",
				 lastName: "Cat" 
			};
var person2 = { firstName: "Brown",
				 lastName: "Sugar" 
			};

function say(greeting, greeting2="") {
  // function memiliki environment variabe this yg bisa di assign sekaligus dijalankan menggunakan apply
  console.log(this);
  console.log(
    greeting + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}

// execute say dengan fungsi apply, 
// menggunakan satu input variable yaitu greeting = "Helo", sedangkan greeting2 menggunakan default value
say.apply(person1, ["Hello"]);

// execute say dengan fungsi apply, 
// menggunakan satu input variable yaitu greeting = "Helo", dan greeting2 = "are you well?"
say.apply(person2, ["Hello", "are you well?"]);

// perbedaan dengan call terletak pada input varible diletakkan didalam array
