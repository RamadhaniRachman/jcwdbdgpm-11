// Callback: sebuah fungsi yang kita berikan ke fungsi lain

function greet(name: string): string {
  return `Hello ${name}!`;
}

function processUser(name: string, callback: (name: string) => string): string {
  return callback(name);
}

const result = processUser("Madha", greet);
console.log(result);

/*
1. 
function greet(name: string): string {
  return `Hello ${name}!`;
}
  
processUser(name: string, callback: (name: string) => string): string {
  return callback(name);
}

2. 
processUser("Madha", greet);

3.
processUser("Madha", greet) {
  return greet("Madha");
}

4.
processUser("Madha", greet) {
  return function greet("Madha") {
    return `Hello ${"Madha"}!`;
  }
}

5. 
processUser("Madha", greet) {
  return `Hello ${"Madha"}!`
}

6.
const result = `Hello ${"Madha"}!`

7.
console.log("Hello Madha!")
*/

// Kenapa kita butuh callback?
// Karena kita akdang punya beberapa fungsi yang ingin kita atur urutan eksekusi nya

function boilWater(callback: () => void) {
  console.log("Water boiled");
  callback();
}

function addCoffee(callback: () => void) {
  console.log("Coffee added");
  callback();
}

function serveCoffee(callback: () => void) {
  console.log("Coffee served !");
  callback();
}
//cara 1
boilWater(() => addCoffee(() => serveCoffee(() => console.log("Enjoy!"))));
//cara 2 yaitu dengan ditambah tanda kurung kurawal untuk memperjelas scope
boilWater(() => {
  addCoffee(() => {
    serveCoffee(() => {
      console.log("Enjoy!");
    });
  });
});
