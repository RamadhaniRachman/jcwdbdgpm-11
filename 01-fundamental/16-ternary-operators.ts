// contoh if else
if (10 === 10) {
  console.log("sama");
} else {
  console.log("beda");
}

//ternary operatos
// condition ? kode yang akan dijalankan kalau kondisi benar : kode yg akan dijalankan kalau kondisi salah
10 === 10 ? console.log("sama") : console.log("beda");

//contoh if else lebih panjang
const fruits = "banana";

if (fruits === "apple") {
  console.log("red");
} else if (fruits === "banana") {
  console.log("yellow");
} else {
  console.log("banana");
}

//ternary operatos yg lebih panjang
fruits === "apple"
  ? console.log("red")
  : fruits === "banana"
    ? console.log("yellow")
    : fruits === "grape"
      ? console.log("purple")
      : console.log("black");
