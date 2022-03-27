.forEach()
Dalam mengakses elemen array, biasanya kita melakukan perulangan dengan menggunakan for, while dan do-while. Namun selain menggunakan perulangan tersebut, JavaScript juga menyediakan banyak metode untuk mengakses elemen array, diantaranya adalah dengan menggunakan .forEach().

.forEach() digunakan untuk melakukan iterasi dalam mengakses elemen array dengan 3 parameter callback sebagai berikut:

value yaitu isi dari tiap elemen yang diproses.
index (optional) yaitu nomor index tiap elemen.
array (optional) yaitu array itu sendiri.
Berbeda dengan melakukan perulangan menggunakanfor, while dan do-while. Melakukan perulangan dengan .forEach() mempunyai struktur kode seperti di bawah ini:

array.forEach((value, index, array) => {
// kode program
})

Untuk lebih jelasnya, contoh penggunaan .forEach() dapat dilihat seperti berikut ini:

let colors = ['blue', 'red', 'yellow', 'green'];

colors.forEach(data => {
  console.log(data)
});

/* Output: 
blue
red
yellow
green
*/
Dari kode di atas dapat kita lihat bahwa variabel data merepresentasikan elemen dari array colors.

Kita juga dapat menggunakan parameter index untuk mendapatkan/mengakses index dari setiap elemen array:

let colors = ['blue', 'red', 'yellow', 'green'];

colors.forEach((data, idx) => {
  if(idx % 2 === 0) { // melakukan pengecekan jika index elemen adalah bilangan genap
    console.log(data, idx)
  } else {
    console.log('not allowed', idx)
  }
});

/* Output: 
blue 0
not allowed 1
yellow 2
not allowed 3
*/
Dari contoh ke-2, terdapat variabel idx sebagai callback yang mewakili index setiap elemen array.

Sama halnya dengan menggunakan for, while, dan do-while, kita dapat melakukan berbagai macam action saat iterasi dalam elemen array yang sedang berjalan. Penggunaan .forEach() dan perulangan lainnya untuk memberikan pilihan bagi programmer dalam kemudahan menulis serta membaca kode.