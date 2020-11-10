// function say(message) {
//   console.log(this);
//   if (!message) {
//     console.log('blank');
//   } else {
//     console.log(message +' ' + 'how r u?');
//   }
  
// }

// say('hello');

// module.exports = say;

function say(message){
  console.log('hello '+this.name+' '+' '+'how r u?')
}

say.bind('tom')
say('tom');