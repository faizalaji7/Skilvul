// ** Latihan
// 1. Lakukan perulangan pada array makanan menggunakan .map(). Beri callback function dengan parameter item.
// Di dalamnya tambahkan return statement yang diikuti variabel item.

// 2. Tambahkan teks string " Goreng" menggunakan operator + setelah variabel item pada return statement. Nilai kembalian berupa item + " Goreng"

// 3. Buat variabel baru bernama gorengMakanan. Assign seluruh kode sebelumnya ke variabel gorengMakanan menggunakan operator =.
// Contoh:
// let listData = list.map((item) => {
//   return item;
// });
// (5 SkilPoin)

// 4. Lakukan console.log() pada variabel gorengMakanan di luar blok kode .map() dan pastikan datanya berupa ['Nasi Goreng', 'Ayam Goreng', 'Pisang Goreng'] pada tab Console.

// ** Jawaban
let makanan = ["Nasi", "Ayam", "Pisang"];

// Buat kode kamu di bawah ini
let gorengMakanan = makanan.map((item) =>{
    return item + " Goreng"
});

console.log(makanan)
console.log(gorengMakanan)
