// Operator && (AND)
kondisi1 && kondisi2
// Operator ini hanya akan menghasilkan output true apabila kedua operand-nya bernilai true (kondisi1 dan kondisi2 bernilai true).

// Operator || (OR)
kondisi1 || kondisi2
// Operator ini akan menghasilkan output true apabila salah satu dari operand-nya bernilai true (kondisi1 bernilai true atau kondisi2 bernilai true).

// Operator ! (NOT)
!kondisi
// Operator ini akan bernilai true apabila operand-nya bernilai false (negation). Dan sebaliknya, operator akan mengembalikan false apabila operand-nya bernilai true.

let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 === 6 && bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 && bilangan2 < 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 === 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 < 4); // Output: false

console.log(bilangan1 === 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 || bilangan2 < 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 < 4); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true