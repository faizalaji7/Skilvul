Looping pada Array Multidimensi
Array multidimensi ternyata sama dengan array satu dimensi yang membutuhkan nomor index untuk mengakses tiap elemennya, seperti apa yang sudah kita pelajari pada topik-topik sebelumnya.

Kita dapat dengan mudahnya mengakses tiap elemen dengan cara seperti ini:

let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

console.log(inventory[0][0]); // Output: Kaos Polos
console.log(inventory[0][1]); // Output: 21
console.log(inventory[1][0]); // Output: Jaket Hoodie
console.log(inventory[1][1]); // Output: 13
console.log(inventory[2][0]); // Output: Topi
console.log(inventory[2][1]); // Output: 7
Tapi ternyata melakukan hal di atas akan sangat melelahkan, terlebih lagi jika datanya dalam jumlah besar.

Untuk mengatasi hal tersebut, tentunya dapat diatasi dengan mengunakan looping atau perulangan untuk memudahkan kita ketika ingin mengakses datanya satu persatu.

Di bawah ini merupakan contoh penggunaan beberapa perulangan yang dapat digunakan ketika kamu ingin mengakses data pada masing-masing elemen:

Menggunakan .for():
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

for (let i = 0; i < inventory.length; i++) {
  for (let j = 0; j < inventory[i].length; j++) {
    console.log(inventory[i][j]);
  }
}

// Output:
// Kaos Polos
// 21
// Jaket Hoodie
// 13
// Topi
// 7
Menggunakan .forEach():
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

inventory.forEach((baris) => {
  baris.forEach((kolom) => {
    console.log(kolom);
  });
});

// Output:
// Kaos Polos
// 21
// Jaket Hoodie
// 13
// Topi
// 7
Menggunakan .map():
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

inventory.map((baris) => {
  baris.map((kolom) => {
    console.log(kolom);
  });
});

// Output:
// Kaos Polos
// 21
// Jaket Hoodie
// 13
// Topi
// 7
