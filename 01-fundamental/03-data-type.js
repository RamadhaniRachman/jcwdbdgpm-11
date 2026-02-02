/* ------------------------------------ string ----------------------------------- */
//fungsinya untuk menyimpan sebuah informasi yang berbentuk teks
"abc"
"1234"
'abc'
`abc`

/* --------------------------------- number --------------------------------- */
//fungsinya untuk menyimpan value yg akan digunakan dalam operasi matematika
10;
15 * 10;
5.120;

/* --------------------------------- boolean -------------------------------- */
//fungsinya untuk menyimpan value yg isinya hanya ada 2 kemungkinan
true;
false;

/* -------------------------------- undefined ------------------------------- */
//fungsinya untuk merepresentasikan value yg kosong (dari awal kosong)
undefined;
let name;
let score;
console.log(name, score);

/* ---------------------------------- null ---------------------------------- */
//fungsinya untuk merepresentasikan value yg kosong (awalnya ada namun dikosongin)
null;
let value = "hello";
value = null;
qconsole.log(value);

/* ------------------------------ non primitive ----------------------------- */
// 1. array
// 2 .object
//      - date
//      - ...

console.log(new Date()); // tanggal hari ini 
console.log(new Date("2020-03-01")); // ngeset tanggal menjadi seperti dalam value
console.log(new Date(1)) // menambahkan 1 millisecond ke waktu awal yaitu 1970
