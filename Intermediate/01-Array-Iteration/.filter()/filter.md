.filter()
Sebagai front-end developer, terkadang kita memiliki data berbentuk array, namun hanya sebagian dari elemennya saja yang diperlukan. Elemen tersebut diambil berdasarkan kondisi tertentu sesuai dengan kebutuhan tampilan UI (User Interface). Hal ini dapat kamu lakukan menggunakan method .filter() pada variabel array yang kamu miliki. .filter() berfungsi untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada.

Callback function pada .filter() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:

value yaitu isi dari tiap elemen yang diproses.
index (optional) yaitu nomor index tiap elemen.
array (optional) yaitu array itu sendiri.
Struktur kode dari .filter():

arr.filter((value, index, array) => {
  // kode program
});
Penggunaan .filter() sangat cocok ketika kita ingin mendapatkan beberapa elemen dari variabel array berdasarkan kondisi yang diinginkan.

Misalnya kita memiliki variabel array angka dengan elemen angka 1 sampai 5. Dari data yang sudah ada, kita hanya ingin mendapatkan elemen yang nilainya lebih besar dari angka 2.

Dengan menggunakan .filter(), kita dapat melakukan hal tersebut seperti ini:

let arrAngka = [1, 2, 3, 4, 5];

let filterArr = arrAngka.filter((item) => {
  return item > 2;
});

console.log(filterArr);
// Output: [3, 4, 5]
Pada kode di atas, tiap elemen akan diiterasi dan diwakilkan oleh variabel item. Jika benar isi dari variabel item lebih besar dari angka 2, maka item akan ditampilkan.

return item > 2;
Setelah proses iterasi selesai, data yang didapatkan akan disimpan pada variabel filterArr.

let filterArr = arrAngka.filter((item) => {
  return item > 2;
});
Apabila callback function yang kamu buat menggunakan arrow function, kita dapat menggunakan implicit return value (tidak menulis return, karena return sudah diwakilkan oleh simbol arrow pada arrow function) untuk mengubah penulisan kode menjadi lebih singkat seperti ini:

let filterArr = arrAngka.filter((item) => item > 2);
Contoh lain dalam menggunakan .filter()dapat kita lihat pada kode di bawah ini:

const fruits = ['Jambu', 'Jeruk', 'Apel', 'Mangga', 'Strawberry', 'Jeruk', 'Apel'];

const apples = fruits.filter(item => {
  return item === 'Apel'; // hanya menampilkan elemen array fruits yang bernama 'Apel'
});

console.log(apples);
// Output: ['Apel', 'Apel']
Dari kode di atas, dapat kita lihat bahwa kita mendapatkan daftar apples dari fruits yang telah di .filter(). Sehingga .filter() memudahkan kita untuk mendapatkan data dengan kondisi tertentu dari sekumpulan data yang kita punya.