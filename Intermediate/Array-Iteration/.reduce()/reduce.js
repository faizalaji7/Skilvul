// ** Contoh 1
let arrAngka = [1, 2, 3, 4, 5];
// cara 1
// let hasil = arrAngka.reduce((total, value) => {
//   return total + value;
// });

// console.log(hasil);

// ** cara 2
// let hasil = arrAngka.reduce((total, value) => total + value);

// ** Contoh 2 Menggunakan initial value pada .reduce()
let hasil = arrAngka.reduce((total, value) => {
  return total + value;
}, 7); // initial valuenya adalah 5

console.log(hasil);
console.log();
// ==========================================================================
// ** Contoh 3
let fruits = ['Jambu', 'Apel', 'Mangga', 'Jambu', 'Jeruk', 'Apel']

let fruitList = fruits.reduce((list,fruit) => {
  if(list[fruit]) { // memeriksa apakah buah tersebut sudah ada dalam objek atau belum
    list[fruit] = list[fruit] + 1; // jika ada, nilainya + 1
  } else {
    list[fruit] = 1; // jika belum ada, beri nilai 1
  }
  return list; // mengembalikan objek
}, {}); // initial valuenya adalah objek

console.log(fruitList);
console.log();
// ==========================================================================
// ** Contoh 4
// 1. Lakukan operasi perhitungan pada array nilai menggunakan .reduce(). 
// Tambahkan callback function dengan parameter total dan item. 
// Lalu berikan return statement di dalam callback function yang mengembalikan nilai penjumlahan dari variabel total dan item. 
// Gunakan operator + untuk melakukan penjumlahan.
// 2. Buat variabel baru bernama jumlahNilai. Assign seluruh kode sebelumnya ke variabel jumlahNilai menggunakan operator =.
// 3. Buatlah variabel baru bernama rataRata di luar blok kode .reduce().
// Lalu assign variabel rataRata dengan proses perhitungan rata-rata nilai yang ada pada data array nilai.
// Caranya lakukan pembagian dari data total nilai pada array sebelumnya yang telah kita lakukan .reduce() yaitu jumlahNilai dibagi (gunakan operator /) dengan panjang data array nilai (gunakan property bawaan array yaitu .length)
// Nilai rata-rata = Jumlah nilai/banyaknya data
// 4. Lakukan console.log() untuk menampilkan nilai rataRata dan pastikan harus bernilai 84. Cek tab Console untuk melihat hasilnya

let nilai = [100, 80, 80, 70, 90];

// Buat kode kamu di bawah ini
let jumlahNilai = nilai.reduce((total, item) => {
    return total + item;
});
console.log(jumlahNilai)

let rataRata = jumlahNilai/nilai.length
console.log(rataRata)