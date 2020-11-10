// this scope didalam function
function usesThis(name) {
    this.name = name;                               // this dari function usesThis

    function returnMe() {
      console.log('Nilai this.name: ', this.name);  // this disini berbeda dengan this di function usesThis
        return this;                                
    }

    return {
        returnMe : returnMe
    }
}

// jalankan usesThis dengan input 'john'
var usesthis = usesThis('John');
console.log(usesthis.returnMe());

// untuk mengatasi permasalahan scope
function usesThat(name) {
    let self = this;                            // menyimpan value this ke self
    this.name = name;
    this.age = 20;

    function returnMe() {
      console.log('Nilai selft.name: ', self);  // sehingga variable self bisa di pakai di inner function
        return self;                            
    }

    return {
        returnMe : returnMe
    }
}

var usesthat = usesThat("Dave");
console.log(usesthat.returnMe());

// atau dengan munggunakan arrow function
function usesArrowFunction(name) {
  this.name = name;

  let returnMe = () => {
    console.log('Nilai this.name: ', this.name); //scope is baked in with 'that' to the "class"
    return this;
  }

  return {
    returnMe: returnMe,
  };
}

var usesthisArrow = usesArrowFunction("Arrow");
console.log(usesthisArrow.returnMe());
