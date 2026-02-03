/* ---------------------------- short circuit and --------------------------- */
// Akan mengambil nilai falsy pertama atau truthy terakhir jika tidak ada nilai falsy
console.log(10 && null);
console.log("" && null);
console.log(0 && null);
console.log(10 && 100);

// isLogin && <LoginButoon>

/* ---------------------------- short circuit or ---------------------------- */
// kebalikan dari short circuit and
// // Akan mengambil nilai truthy pertama atau falsy terakhir jika tidak ada nilai truthy

console.log(10 || null);
console.log("" || null);
console.log(0 || null);
console.log(10 || 100);

const gender =
  prompt("Input your gender!") || "Non binary; prompt is not defined";

/* -------------------- logical operator vs shor circuits ------------------- */
// logical:10 === 5 && 5 < 10
// short circuit: 10 && 5
