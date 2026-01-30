//mdn string methods

/* --------------------------------- method --------------------------------- */
/* ------------------------------ string method ----------------------------- */
console.log("MaU makAN".toUpperCase);
console.log("MaU makAN".toLowerCase);

console.log("Hari ini cerah sekali".slice(0,5));

console.log("Noel sedang jalan jalan di depan rumah Noel".replaceAll("Noel", "****"));

console.log("Noel sedang jalan jalan di depan rumah Noel".split(" ").join(""));

/* ---------------------------------- notes --------------------------------- */
let array = ["A", "B", "C"]
console.log(array[1]);

/* ------------------------------ number method ----------------------------- */


/* ------------------------------- date method ------------------------------ */
const birthdate = new Date("1998-05-02");

console.log(birthdate.getFullYear());
console.log(birthdate.getMonth()); //bulan dimulai dari 0, makanya munculnya 4 bukan
console.log(birthdate.getDay())
console.log(birthdate.getDate());
console.log(birthdate.getHours());
console.log(birthdate.getMilliseconds())

birthdate.setMonth(11);

console.log(birthdate)

