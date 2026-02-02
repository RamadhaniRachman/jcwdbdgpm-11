//if
//if else
//if else if else

//umur di bawah 10 tahun => where is your parent?
// umur di bawah 17 tahun => go away
// umur diatas 18 tahun => welcome

let userAge = 10;

//sintaks tapi urutan salah
if (userAge >= 18) {
  console.log("Welcome");
} else if (userAge >= 10) {
  console.log("Where is your parent");
} else {
  console.log("go away");
}

//sintaks dan urutan benar
if (userAge <= 10) {
  console.log("Where is your parent?");
} else if (userAge <= 15) {
  console.log("Wrong place brother");
} else if (userAge <= 17) {
  console.log("go away");
} else {
  console.log("Welcome");
}
