/* ---------------------------------- basic --------------------------------- */
// function : satu set algoritma yg kita buat untuk dijalankan nanti

// pembuatan fungsi

// function functionName (parameter){
// return
//}

function add(num1: number, num2: number) {
  return num1 + num2; //wajib ada return
}

//pemanggilan fungsi
/*
functionName(argument)
*/

console.log(add(1, 1));
console.log(add(40, 60));
console.log(add(1, 10));

function subtract(firstNumber: number, secondNumber: number) {
  return firstNumber - secondNumber;
}

console.log(subtract(10, 5));
console.log(subtract(100, 20));

/* --------------- Function Declaration vs Function Expression -------------- */
// declaration: kita membuat fungsi menggunakan keyword 'function' secara langsung
// function ini bisa dipanggil dimanapun (hoisting seperti var)
console.log(someFunction());

function someFunction() {
  return "Function declaration";
}

console.log(someFunction());

// expression
// console.log(anotherFunction());
// function ini cuma bisa dipanggil berurutan
const anotherFunction = function () {
  return "Function expression";
};

console.log(anotherFunction());

/* ---------------------------- Default Parameter --------------------------- */
function multiply(num1: number = 5, num2: number = 2): number {
  const result = num1 * num2;
  return result;
}

console.log(multiply());
console.log(multiply(10));

/* ----------------------------- Rest Parameter ----------------------------- */
// tipe data perlu dimasukkan setelah rest parameter
function sumAllParameter(...nums: number[]) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result + nums[i];
  }

  return result;
}

// console.log(sumAllParameter(5, "5")); => akan terjadi error karena tidak boleh ada tipe data selain number
console.log(sumAllParameter(5, 10));
console.log(sumAllParameter(10, 20, 30));

/* ----------------------------- simple exercise ---------------------------- */

/* ---------------------------------- cara1 --------------------------------- */
// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(calculate(5000, 3000));

/* --------------------------------- cara 2 --------------------------------- */
function calculate(...nums: number[]) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return result;
}
console.log(calculate(5000, 3000));

function calculateDisc(price: number) {
  let disc = 0;

  if (price > 100_000) {
    disc = 50 / 100;
  } else if (price > 10_000) {
    disc = 20 / 100;
  } // kalo disc sama seperti awal jadinya else di bawah ini bisa dihapus
  else {
    disc = 0;
  }

  let result = price - price * disc;
  return result;
}

console.log(calculateDisc(200_000));
