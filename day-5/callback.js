// callback
function p1() {
  console.log("Hello");
  p2(p3);
}

function p2(callback) {
  console.log(typeof callback);
  setTimeout(function () {
    console.log("Javascript");
    callback();
  }, 100);
}

function p3() {
  console.log("Coder");
}

p1();
