console.log(1);
console.log(2);

for (let i = 0; i < 1_000_000_000; i++) {}
console.log(3);

setTimeout(() => {
  (console.log(4), 1000);
});
setTimeout(() => {
  (console.log(5), 0);
});

console.log(6);

setInterval(() => console.log("hello", 10000)); // akan ngeprint hello dan 10000

// setInterval(() => {
//   (console.log(10), 2000); // akan ngeprint angka 10 setiap 2 detik
// });

// Menghentikan interval setelah 10 detik:
const hiInterval = setInterval(() => console.log("Hi"), 2000); // akan ngeprint Hi selama 5 detik
// const hiInterval = setInterval(function () { console.log("Hi")}, 5000); // versi function biasa

setTimeout(() => clearInterval(hiInterval), 10000); // kemudian dengan adanya clear interval akan ngebreak loop dari hiInterval setelah 10 detik

// Fungsi yg membuat kode menjadi ascyncronus
// 1. setTimeout
// 2. setInterval
// fetch
