<!-- Mengakses Array Multidimensi -->

Setelah kita mengetahui cara membuat array multidimensi, lalu bagaimana cara mengakses datanya? Apakah cara mengaksesnya sama seperti kita mengakses array satu dimensi?

Ya, tentu saja sama. Kita hanya perlu mengakses nomor index untuk mengakses elemen yang terdapat pada array multidimensi.

Dalam mengakses array multidimensi, kamu perlu memanggil nomor indeks dari baris dan kolomnya:

namaArray[indexBaris][indexKolom];
Contoh:

let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

console.log(inventory[0][0]); // Output: Kaos Polos
console.log(inventory[1][1]); // Output: 13
console.log(inventory[2][0]); // Output: Topi
Sama seperti array satu dimensi, array multidimensi juga dapat menggunakan property dan method bawaan dari tipe data array.

Contoh menggunakan method .push():

let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

inventory.push(["Celana Jeans", 18]);

console.log(inventory);
// Output:
// [
//   ["Kaos Polos", 21],
//   ["Jaket Hoodie", 13],
//   ["Topi", 7],
//   ["Celana Jeans", 18]
// ];