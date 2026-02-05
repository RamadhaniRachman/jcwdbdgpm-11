{
  // Destructure : melucuti/mengambil value element/property ke dalam variabel individual

  //1. Mengambil value TANPA destructure
  const score = [10, 20, 30];
  const people = { name: "John Doe", age: 20, gender: "Male" };

  const score1 = score[0];
  const score2 = score[1];
  const score3 = score[2];

  console.log(score1);
  console.log(score2);
  console.log(score3);

  const name = people.name;
  const age = people.age;
  const gender = people.gender;

  console.log(name);
  console.log(age);
  console.log(gender);

  // 2.  Mengambil value dengan destructure
  const scoresArray = [10, 20, 30];
  const peopleObject = {
    nameObject: "John Doe",
    ageObject: 20,
    genderObject: "Male",
  };

  const [scoreArray1, scoreArray2, scoreArray3, scoreArray4, scoreArray5] =
    scoresArray; // pada array, urutan di dalam array [] sangat penting. Karena apabila tidak sesuai maka value juga akan berubah
  console.log(scoreArray1);
  console.log(scoreArray2);
  console.log(scoreArray3);
  console.log(scoreArray4); //undefined karena scoreArray4 dan scoreArray5 tidak ada pada array sebelum di destuctured
  console.log(scoreArray5);

  const { nameObject, genderObject, ageObject } = peopleObject; // pada object, urutan dalam kurung kurawal tidak terlalu penting. Yang penting value/nama sesuai
  console.log(nameObject);
  console.log(genderObject);
  console.log(ageObject);
}
