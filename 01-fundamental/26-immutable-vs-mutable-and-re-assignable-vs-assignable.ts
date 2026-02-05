/* -------------------------- Mutable vs immutable -------------------------- */

// Mutable => non primitive data type (array/object)
// Immutable => primitive data type ("String", number, boolean, undefined, null )

// Value berbeda karena di-mutate
{
  const scores = [10, 20, 30];
  console.log(scores);

  scores[1] = 50;
  console.log(scores);

  //Value berbeda karena di re-assign
  let points = [10, 20, 30];
  console.log(points);

  points = [100, 200, 300];
  console.log(points);

  // const => non assignable
  // let/var => re - assignable
}
