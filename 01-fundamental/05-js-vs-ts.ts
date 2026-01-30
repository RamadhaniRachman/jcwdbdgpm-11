{
    let price : number = 50_000; //contoh explicit annotation
    let discount : number = 50/ 100;

    console.log(price - price * discount);

    //discount = false ; 
    discount = 25/100;

    console.log(price - price * discount);

    /* ---------------------------------- Notes --------------------------------- */
    // TS = Static type
    //implicit annotation (annotation = pemberian tipe data)
    //explicit annotation
}