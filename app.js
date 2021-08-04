// Function
// Logical Operators
// Ternary
// If else

// Functions

/*

let name = prompt("Ismingiz nima?");

function greeting(name) {
  alert(`Assalomu alaykum, ${name}`);
}

greeting(name);

*/

// Logical Operators

// >, <=, >= <, ==, ===, !=, !==;

// console.log(2 < 3);

// Ternary;

// ? :; shart bo'lsa(?) ..... bo'lmasa(:) ....;

/*

let age = prompt("Yoshni kiriting");

let isAllowed = age > 18;

let javob = isAllowed ? "Mumkin" : "Mumkin emas";

console.log(javob);

*/

// If else;

// Kinoteatrga kirishda bilet narxini belgilash;

let age = prompt("Yoshni kiriting");

if (age >= 0 && age < 10) {
  console.log("Siz ga bilet narxi 5000 so'm");
} else if (age >= 10 && age < 50) {
  console.log("Sizga bilet narxi 10,000");
} else if (age >= 50 && age <= 100) {
  console.log("Sizga tekin");
} else {
  console.log("Yosh to'g'ri emas");
}

//

// let carName;

// // carName = prompt("Mashinani ismi nima");

// // null / undefined
// // || => yoki, && va, ham;

// carName = carName || null || "Nexia";

// console.log((5 > 6 || 6 > 7) && true);
