// ** Contoh 1
// Misalnya kita memiliki variabel array angka dengan elemen angka 1 sampai 5. Dari data yang sudah ada, kita hanya ingin mendapatkan elemen yang nilainya lebih besar dari angka 2.

// Dengan menggunakan .filter(), kita dapat melakukan hal tersebut seperti ini:
let arrAngka = [1, 2, 3, 4, 5];

// cara 1
// let filterArr = arrAngka.filter((item) => {
//   return item > 2;
// });
// console.log(filterArr);

// cara 2
let filterArr = arrAngka.filter((item) => item > 2);
console.log(filterArr);

// ** Contoh 2
const fruits = ['Jambu', 'Jeruk', 'Apel', 'Mangga', 'Strawberry', 'Jeruk', 'Apel'];

const apples = fruits.filter(item => {
  return item === 'Apel'; // hanya menampilkan elemen array fruits yang bernama 'Apel'
});

console.log(apples);

// ** Latihan
// 1. Lakukan filter pada data array angka menggunakan method .filter().
// Beri callback function dengan parameter item.
// Tambahkan return statement di dalam callback function yang mengembalikan nilai dari variabel item.

// 2. Tambahkan kondisi pada return untuk mengembalikan item jika nilainya merupakan bilangan genap (tanpa menggunakan if).
// Hint:
// Mencari nilai ganjil:
// Jika suatu kondisi pada bilangan x % 2 !== 0 bernilai true,
// maka x adalah bilangan ganjil.

// Mencari nilai genap:
// Jika suatu kondisi pada bilangan x % 2 === 0 bernilai true,
// maka x adalah bilangan genap.
// (15 SkilPoin)

// 3. Buatlah variabel baru bernama genap. Assign seluruh kode kamu sebelumnya ke dalam variabel genap menggunakan operator =.

// 4. Lakukan console.log() pada variabel genap di luar blok kode .filter() dan pastikan data yang ada bernilai [2, 4, 6, 8, 10]. Cek pada tab Console untuk melihat data.

// ** Jawaban
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Buat kode kamu di bawah ini
let genap = angka.filter(item =>{
    return item % 2 === 0
});

console.log(genap);