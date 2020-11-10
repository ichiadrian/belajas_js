/*
    cara menggunakan function yg berada di file lain
    ./ => artinya current directory, directory yg sama dengan file yg menggunakannya,
    karena ada 2 function berupa object: 
    module.exports = { rpToDollar, rpToDollar2 }
*/
const { dollarToRP, euoToRP  } = require("./returnFunction");


console.log(dollarToRP(2));
console.log(euoToRP(2));
