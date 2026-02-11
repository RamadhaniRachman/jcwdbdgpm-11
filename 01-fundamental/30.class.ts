// Class : blueprint untuk membuat sebuah object
// pada class, wajib menggunakan pascal case bukan camel case
// pascal case = huruf pertama wajib huruf kapital

class UserData {
  name: string;
  age: number;
  gender?: string | null;

  // pada number sdh diberikan default value
  // pada gender diberikan tanda ?: yg berarti boleh kosong
  constructor(nama: string, age: number = 20, gender?: string) {
    this.name = nama;
    this.age = age;
    this.gender = gender;
  }
}

const userData1 = new UserData("John Doe", 70, "Male");
console.log(userData1);

// const userData2 = new UserData("Doe", , "Male"); //eror karena setelah koma isinya age yg malah keisi gender
// console.log(userData2); //

const userData3 = new UserData("John Doe");
console.log(userData3);

/* ----------------------------- ACCESS MODIFIER ---------------------------- */
// cara kita menentuka property class ini bisa diakses dari mana saja
// 1. public : property class ini bisa diakses dari mana saja
// 2. private : propery bisa diakses dari mana saja
// 3. protected
{
  class Product {
    public name: string;
    price: number;
    #sku: string;

    constructor(name: string, price: number, sku: string) {
      this.name = name;
      this.price = price;
      this.#sku = sku;
    }
  }

  const product1 = new Product("Coffee Beans", 21_000, "CB-01");
  console.log(product1);
  console.log(product1.name);
  console.log(product1.price);
  console.log(product1.sku);

  /* ---------------------------- getter and setter --------------------------- */
  // cara kita mengontrol akses data private
  // di bawah ini akan termasuk encapsulation
  class User {
    public name: string;
    private _age: number | string;

    constructor(name: string, age: number) {
      this.name = name;
      this._age = age;
    }

    //getter
    get age() {
      return `Hello namaku ${this.name} dan umurku ${this._age}`;
    }

    //setter
    set age(value: number) {
      if (value < 0) {
        throw new Error("Age cannot be negative");
      }
      this._age = value;
    }
  }

  const user1 = new User("Angelina", 50);
  console.log(user1);
  console.log(user1.age);
  //   user1.age = -10;
  console.log(user1.age);

  /* ----------------------------- OOP PRINCIPLES ----------------------------- */
  // 1. encapsulation
  // 2. inheritance
  // 3. polimorphism
  // 4. abstraction

  // 2. inheritance : pewarisan
  class ProductData {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
      this._name = name;
      this._price = price;
    }

    get name() {
      return this._name;
    }

    set price(value: number) {
      if (value < 0) {
        throw new Error("Price cannot be negative");
      }
      this._price = value;
    }
  }

  class Book extends ProductData {
    author: string;

    constructor(name: string, price: number, author: string) {
      // super berfungsi untuk memanggil properti yg ada di dalam class parent
      super(name, price);
      this.author = author;
    }
  }

  class Fruits extends ProductData {
    weight: number;

    constructor(name: string, price: number, weight: number) {
      super(name, price);
      this.weight = weight;
    }
  }

  const harryPotter = new Book("Harry Potter", 5000, "J.K Rowling");
  console.log(harryPotter);
  console.log(harryPotter.name);
  console.log(harryPotter.author);
  console.log(harryPotter.price); // jadi undefined karena price merupakan properti private
  /* ---------------------------------- NOTES --------------------------------- */
  // new:
  // 1. {}
  // 2. {} == this
  // 3. return {} // kata new dapat berfungsi sebagai return

  /* -------------------------------- Implicit -------------------------------- */
  // = Kita minta TS yg nentuin tipe datanya sendiri
  let age = 10;

  /* -------------------------------- explicit -------------------------------- */
  // = TS ini tipe datamu ya
  let phoneNumber: string;
  let address: string = "Jl.Setia Budi";
}
