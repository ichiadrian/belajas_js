let name = 'John';
const greeting = () => {
  let name = 'Adam';
  return `Hello ${name}!`;
}
console.log(greeting()); // 'Hello Adam!'
console.log(name); // John
