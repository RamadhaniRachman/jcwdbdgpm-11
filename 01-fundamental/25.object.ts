// object : kumpulan data yg sering terlihat

/* ---------------------------- Pembuatan Object ---------------------------- */
/*
const ObjectName ={
    key1 = value1, // (primitive/non primitive data type) property
    key2 = value2, // property
    key3 = value3 // (function) method
}
*/

const car1 = {
  brand: "Toyota",
  model: "Alphard",
  color: "Black",
  year: new Date("2020"),
  price: 1_400_000_000,
  printInfo: function () {
    return `Mobilku adalah ${car1.brand} keluaran tahun ${car1.year}`;
  },
};

const car2 = {
  brand: "Honda",
  model: "Odyysey",
  color: "White",
  year: new Date("2018"),
  price: 500_000_000,
  printInfo() {
    return `Mobilku adalah ${this.brand} keluaran tahun ${car2.year}`; //this menjamin menunjuk ke scope object tempat dia berada
  },
};

/* ------------------ Mengakses data di dalam sebuah Object ----------------- */
// Akses property:
// - dot(.) notation;
// - square bracke ([]) notation

console.log(car1);
console.log(car2);
console.log(car1.brand);
console.log(car2.price);
console.log([car1]);
console.log(["car1"]);
console.log(car2["brand"]);

// Akses method
console.log(car2.printInfo);
console.log(car2["printInfo"]());
console.log(car1["price"]);

/* ------------------------------ Tambah value ------------------------------ */
console.log(car1.engine);
car1.engine = "2000cc";
console.log(car1.engine);

// example object + object + array
// name.key = {object: ["array"]}
car1.engineType = {
  firstType: ["01", "02", "03"],
  secType: "vEngine",
};
console.log(car1.engineType.firstType[1]);

/* ------------------------------ update value ------------------------------ */
console.log(car1.year);
car1.year = new Date("2026");
console.log(car1.year);

/* ----------------------------- Menghapus array ---------------------------- */
console.log(car1.price);
delete car1.price;
console.log(car1.price);

/* ---------------------------- optional chaining --------------------------- */
console.log(car1.country);
console.log(car1.country?.province);
// console.log(car1.country.province);

/* ------------------------- Object built in method ------------------------- */
// Object.keys : mengambil key dari suatu object
console.log(Object.keys(car1));
console.log(Object.keys(car1)[0]);

// Object.values : mengambil values dari suatu object
console.log(Object.values(car1));
console.log(Object.values(car1)[0]);

// Object.entries : mengambil object dan values dari suatu object
console.log(Object.entries(car1));
console.log(Object.entries(car1)[0]);
