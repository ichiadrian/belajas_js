// Let's create an object o from function f with its own properties a and b:
const f = function () {
  this.a = 1;                                 // property a
  this.b = 2;                                 // property b
};

let o = new f();                              // membuat instance o dari function f()
let p = new f();                              // membuat instance p dari function f()
console.log(o);

// add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c =4;
f.prototype.c =5; // karena ini adalah yg paling terakhir, maka nilai dari f.prototype.c = 5
f.b = 3;
console.log('instance o untuk value a: ', o.a); // 1
console.log("instance p untuk value a: ", p.a); // 1

// dalam pencarian nilai dari property
// order yg paling dulu dilihat adalah this kemudian prototype
console.log("instance o untuk value b: ", o.b); // 2 angka 2 yg muncul lebih dulu, karena menempati variable this
console.log("instance p untuk value b: ", p.b); // 2 angka 2 yg muncul lebih dulu, karena menempati variable this


console.log("instance o untuk value c: ", o.c); // 5, angka 5 muncul karena property c tidak ada di this, maka pencarian berlanjut ke prototype
console.log("instance p untuk value c: ", p.c); // 5, angka 5 muncul karena property c tidak ada di this, maka pencarian berlanjut ke prototype

console.log("instance o untuk value d: ", o.d); // undefined, karena property d tidak ada di this dan di prototype
console.log("instance p untuk value d: ", p.d); // undefined


// //------------------------------------------------------
function Car() {
  console.log(this);
}
mvp = new Car();                        // membuat instance dari Car
sedan = new Car();


console.log(mvp.color);                 // undefined, karena tidak memiliki property color

Car.prototype.color = 'original color'; // membuat property color di prototype
console.log(mvp.color);    // 'original color'
 
mvp.color = 'black';       // membuat property color dari instance mvp dengan nilai 'black'
console.log(mvp.color);    // 'black'

console.log(Object.getPrototypeOf(mvp).color);    // 'original color'    jika kita melihat data di prototype color bernilai 'original color'
console.log(Object.getPrototypeOf(sedan).color);  // 'original color'  jika kita melihat data di prototype color bernilai 'original color'
console.log(mvp.color);                           // 'black', karena instance mvp sudah memiliki nilai this berupa color dan nilainya black
console.log(sedan.color);                         // 'original color'
