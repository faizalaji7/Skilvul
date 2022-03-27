// 1. Buat sebuah variabel name yang berisikan data string nama lengkap kamu.
// 2. Buat sebuah variabel regex untuk membuat pola yang mencocokkan string selain huruf vokal.
// (Hint: Gunakan flag g dan i)
// 3. Buat sebuah variabel result yang berisikan .match() antara name dengan pola pada variabel regex yang tadi kita buat.
// Lalu lakukan console.log() pada variabel result.
// 4. Dari langkah sebelumnya, kita telah mendapatkan array yang disimpan pada variabel result. Cek terlebih dahulu console.log() pada variabel result di tab Console.
// Lalu, satukan kembali array result menjadi string kembali menggunakan metode .join(). Simpan proses ini pada variabel newName.
// 5. Terakhir, lakukan console.log() pada variabel newName. Cek tab Console untuk melihat hasil.

// Buat sebuah variabel name berisikan nama anda
// Hilangkan semua huruf vokal pada nama anda
const name = 'Faizal Aji Wibowo';
const regex = /[^aeiou]/ig;
const result = name.match(regex);
const newName = result.join('');

console.log(newName);