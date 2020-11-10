// // ---------------------------------------------
// // Initializing a function with a function expression
// const x = function() {}


// // Initializing a class with a class expression
// const y = class {}
// // #############################################


// ---------------------------------------------
// Initializing a constructor function
// try in chrome
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const user = new User("tom", 20);

// // Initializing a class definition
// class UserClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const user = new UserClass("tom", 20);

// // #############################################


// ---------------------------------------------
function User(name, age) {
    this.name = name;
    this.age = age;
}
// // Adding a method to the constructor
// User.prototype.greet = function () {
//   return `your ${this.name} with age: ${age}`;
// };
// User1 = new User("Varg", 20);



// class UserClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Adding a method to the constructor
//   greet() {
//     return `your ${this.name} with age: ${age}`;
//   }
// }

// const userClass1 = new UserClass("Varg", 20);
// #############################################


// ---------------------------------------------
// // Creating a new constructor from the parent
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.greet = (name, age)=>{
//     return `your name is ${name} with age: ${age}`;
// }

// function Employees(name, age, empno) {
//     // Chain constructor with call
//     // User.call(this, name, age);
//     const x = new User(name, age);
//     console.log(x.greet(name, age));
//     return `your name is ${this.name} with age: ${this.age}`;
//     this.empno = empno;
// }
// emp = new Employees("mike", 20, "1122334455");
// // emp.greet();
// console.log(emp);



// class UserClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Adding a method to the constructor
//   greet() {
//     return `your name is ${this.name} with age: ${this.age}`;
//   }
// }

// class EmployeeClass extends UserClass {
//   constructor(name, age, empno) {
//     // Chain constructor with super
//     super(name, age);

//     // Add a new property
//     this.empno = empno;
//   }
// }
// emp2 = new EmployeeClass("mike", 20, "1122334455");
// const text = emp2.greet();
// console.log(text);
// // #############################################



// // ---------------------------------------------
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Adding a method to the constructor
// User.prototype.greet = function () {
//   return `${this.name} says hello.`;
// };

// // Creating a new constructor from the parent
// function Employees(name, level, empid) {
//   // Chain constructor with call
//   User.call(this, name, level);

//   this.empid = empid;
// }


// // Initializing a class
// class UserClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Adding a method to the constructor
//     greet() {
//         return `${this.name} says hello.`;
//     }
// }

// // Creating a new class from the parent
// class EmployeesClass extends UserClass {
//     constructor(name, age, empid) {
//         // Chain constructor with super
//         super(name, age);

//         // Add a new property
//         this.empid = empid;
//     }
// }


// // ##############################################

