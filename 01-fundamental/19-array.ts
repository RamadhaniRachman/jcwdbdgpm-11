/* ------------------------------ Membuat array ----------------------------- */
const arrayOfNumbers1 = [];
const arrayOfNumbers2 = new Array();
console.log(arrayOfNumbers1.length);
console.log(arrayOfNumbers2.length);

const arrayOfStrings1 = ["A", "B", "C"];
const arrayOfStrings2 = new Array("A", "B", "C");
console.log(arrayOfStrings1);
console.log(arrayOfStrings2);

const arrayOfRandoms = ["a", 1, null, undefined, [10, 20, 30]]; // dalam array bisa berisikan berbagai macam tipe data

/* -------------------------- mengakses nilai array ------------------------- */
console.log(arrayOfRandoms);
console.log(arrayOfRandoms[0]);
console.log(arrayOfRandoms[3]);
console.log(arrayOfRandoms[arrayOfRandoms.length - 1]); //untuk mencari array terakhir
console.log(arrayOfRandoms[4][2]); //untuk mencari nilai array yg berada di dalam array

/* ------------------------- mengupdate nillai array ------------------------ */
const scores = [10, 20, 30, 40];
console.log(scores);
console.log(scores.length);
scores[2] = 5000;
console.log(scores);
console.log(scores[2]);

/* ---------------------- menambah dan mengurangi array --------------------- */
// push : untuk menambah elemen array baru di paling akhir;
// unshift : untuk menambah elemen array baru di paling awal
// pop : untuk mengurangi elemen array di akhir
// shift : untuk mengurangi elemen array di awal

const point = [100, 200, 300];
console.log(point);
console.log(point.length);

point.push(500);
console.log(point);
console.log(point.length);

point.unshift(3000);
console.log(point);
console.log(point.length);

point.pop();
console.log(point);
console.log(point.length);

point.shift();
console.log(point);
console.log(point.length);

/* ------------------------------ iterasi/loop ------------------------------ */
const employees = ["Wawa", "Wiwi", "Wuwu", "Wowo"];

// for let => gunakan ketika butuh index dan value dari array yg sedang di loop
for (let i = 0; i <= employees.length - 1; i++) {
  console.log(i);
  console.log(employees[i]);
}

const fileSize = [1.2, 10, 0.5, 3, 9];
for (let i = 0; i < fileSize.length; i++) {
  // pada baris di bawah ini untuk mendapatkan value yang too large (yg diincer)
  if (fileSize[i] > 2) {
    // baris di bawah ini untuk menampilkan output beserta indexnya
    console.log(`File #${i + 1} is too large`);
  }
}

// for of
// jadi pada variabel name akan dimasukkan isi dari array employees lalu akan memunculkan nilai valuenya
for (const name of employees) {
  console.log(name);
}

// for in
// jadi pada variabel name akan dimasukkan isi dari array employees lalu akan memunculkan nilai index
for (const index in employees) {
  console.log(index);
}

/* ------------------------------ array method ------------------------------ */
/* ------------------------------ add or remove ----------------------------- */
// push(), pop(), shift(), unshift()
// 1. splice : memotong suatu array dan (optional) meanambahkan elemen baru dan memodifikasi original array
const buah = ["Apple", "Mango", "Jackfruit", "Grape"];
// buah.splice(0)
// buah.splice(1, 2)
// buah.splice(1, 2, "Banana");
const spliceResult = buah.splice(2, 0, "Banana");
console.log(buah);
console.log(spliceResult);

/* -------------------------- accessing dan slicing ------------------------- */
const cities = ["Jakarta", "Jogja", "Jember", "Bandung"];

// 1. slice : memotong suatu rray tanpa memodifikasi original array
const sliceResult = cities.slice(0, 2);
const sliceResult2 = cities.slice(-1); // fungsinya untuk mencari dari urutan paling akhir
const sliceResult3 = cities.slice(1, -1); // fungsinya untuk mencari dari urutan paling akhir

console.log(cities);
console.log(sliceResult);
console.log(sliceResult2);
console.log(sliceResult3);

// 2. indexOf : mencari nilai index dari sebuah value
const indexOfResult = cities.indexOf("Melbourne");
console.log(indexOfResult);
console.log(cities.indexOf("Bandung"));

// 3. includes : memeeriksa apakah suatu value ada di dalam array atau tidak
const includesResult = cities.includes("Bandung");
console.log(includesResult);
