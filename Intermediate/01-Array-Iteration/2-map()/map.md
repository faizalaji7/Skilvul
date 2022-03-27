.map()
Selain .forEach(), ada juga metode perulangan pada array yang lain, yaitu .map(). Berbeda dengan .forEach(), .map() digunakan untuk melakukan perulangan sambil mengecek/melakukan operasi terhadap setiap elemen array, lalu memberikan nilai balik berupa array baru tanpa mengubah nilai pada array yang lama.

Callback function pada .map() memiliki 3 parameter dasar yang dapat digunakan sesuai kebutuhan:

value yaitu isi dari tiap elemen yang diproses.
index (optional) yaitu nomor index tiap elemen.
array (optional) yaitu array itu sendiri.
Struktur kode dari .map():

arr.map((value, index, array) => {
  // kode program
});
Mungkin kamu masih bingung kapan harus menggunakan .forEach() dan kapan harus menggunakan .map(). Mari kita lihat kasus di bawah ini:

// Diberikan data input dan output berikut
// input = [100, 50, 60, 10]
// expected output = [10, 5, 6, 1]
jika kita lihat, expected output menghasilkan sebuah array baru. Perbandingan nilai array input dan output adalah 10. Sehingga dapat kita buat fungsi menggunakan .map() sebagai berikut:

let input = [100, 50, 60, 10];

let output = input.map(item => {
  return item/10;
});

console.log(output);
// Output [10, 5, 6, 1]

console.log(input);
// Output [100, 50, 60, 10] --> Nilai array pertama tidak berubah
Dari kode di atas, dapat kita lihat bahwa output merupakan array baru hasil modifikasi input menggunakan .map(). Parameter item pada fungsi di atas merepresentasikan value (callback function), yaitu elemen dari input yang kemudian setiap nilainya dibagi dengan 10 lalu di return sebagai nilai elemen pada array output.

Kasus di atas juga dapat dipecahkan menggunakan .forEach() dengan cara sebagai berikut:

let input = [100, 50, 60, 10];
let output = [];

input.forEach(item => {
  output.push(item/10);
});

console.log(output);
// Output [10, 5, 6, 1]
Pada kode di atas, output merupakan array baru. Tiap elemen di dalamnya dihasilkan dari elemen input yang dibagi dengan 10, kemudian di push() ke dalam variabel output.

Bedanya penggunaan .map() dengan .forEach() adalah:

Menggunakan .map() dalam menghasilkan array baru terlihat lebih simpel dan tidak kompleks.
Terdapat return yang mengembalikan nilai baru untuk disimpan ke dalam variabel baru.
Kamu juga dapat menggunakan implicit return value (penghilangan penulisan return) pada arrow function dalam mengimplementasi .map() sehingga menjadi seperti berikut ini:

let input = [100, 50, 60, 10];
let output = input.map(item => item/10);
console.log(output);
// Output [10, 5, 6, 1]