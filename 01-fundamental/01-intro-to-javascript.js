
    console.log("Hello world");

let city = "Bandung";
console.log(city);

city = "Jogja";
console.log(city + " dingin");

/* 
    conoth


*/

/* ---------------------------------- intro --------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                      a                                     */
/* -----------------------------------option + shift + p untuk membuka ------------------------------------------------------------------------ */
/*
    let and const
    1. variabel yang dibuat menggunakan let.const hanya bisa diakses di dalam scope tempat dia dibuat atau scopet yang lebih dalam
    2. akan error kalau diakses sebelum dibuat

    var
    1. variabel yang dibuat menggunakan var akan selalu bersifat global
    2. tidak akan error walau diakses sebelum dibuat

*/

{
    //global scope
    let age = 50;
    console.log(age);
    // console.log(address);
    console.log(gender);

    {
        //lv1
        let address = "Asia Afrika";
        var gender = "male";
        console.log(age);
        console.log(address);
        console.log(gender);
            {
                //lv 2 scope
                console.log(address);
                console.log(gender);
            }
    }
}
// semua value bisa digunakan kalo value sdh dibuat, itu sebabnya pada line 26 jadi undefined (hoisting)

