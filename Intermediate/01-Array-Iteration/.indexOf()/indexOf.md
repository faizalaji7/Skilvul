.indexOf()
Pada dasarnya array menyimpan tiap elemen di dalamnya menggunakan penomoran index. Untuk melakukan pengecekan apakah terdapat data yang kita cari dalam elemen array yang kita punya, kita dapat menggunakan method .indexOf(). .indexOf() melakukan iterasi elemen array dari kiri ke kanan kemudian memberikan nilai balik berupa nomor index dari elemen yang dicari atau mengembalikan -1 jika tidak ditemukan.

.indexOf() memiliki 2 argumen pada callback function yang dapat digunakan sesuai kebutuhan:

value yaitu nilai elemen pada array yang ingin dicari
startIndex (optional) yaitu titik awal pencarian
Struktur kode dari .indexOf():

arr.indexOf(value, startIndex);
Sebenarnya .forEach() bisa digunakan untuk mendapatkan nomor index dari elemen yang dicari, tapi .indexOf() menghadirkan solusi yang lebih simpel dan lebih unggul dalam kasus tertentu.

Misalnya kita memiliki variabel array yang berisikan data string nama-nama buah. Kita ingin mendapatkan nomor index dari elemen buah Apel yang pertama, walaupun array tersebut memiliki lebih dari satu buah Apel.

Kita akan menggunakan .forEach() untuk menyelesaikan masalah di atas, sehingga kodenya menjadi seperti ini:

let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel"];
let indexApel = 0;

arrBuah.forEach((item, index) => {
  if (item == "Apel") {
    indexApel = index;
  }
});

console.log(indexApel);
// Output: 3
Kode di atas terdapat 2 elemen string Apel pada index ke-1 dan index ke-3. Hasil nomor index yang didapatkan adalah 3, tidak sesuai dengan yang kita harapkan. Ini terjadi karena .forEach() akan melakukan iterasi pada seluruh data. Akibatnya yang kita dapatkan adalah nomor index dari buah Apel yang terakhir.

Sekarang kita akan ubah kode di atas menggunakan .indexOf(), sehingga kodenya menjadi seperti ini:

let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel"];

let indexApel = arrBuah.indexOf("Apel");

console.log(indexApel);
// Output: 1
Kode di atas terlihat lebih simpel bukan. Buah Apel yang didapatkan adalah buah Apel index pertama pada variabel arrBuah. Dengan begitu nomor index akan dikembalikan dan disimpan pada variabel indexApel.

Tapi bagaimana jika kita ingin mendapatkan buah Apel yang terakhir? Kita dapat menambahkan argumen ke-2 pada .indexOf(), sehingga kodenya menjadi seperti berikut:

let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel", "Mangga"];

let indexApel = arrBuah.indexOf("Apel", 2);

console.log(indexApel);
// Output: 3
.indexOf() di atas akan memulai iterasi dari index ke-2. Maka, semua elemen yang berada pada nomor index yang lebih kecil dari 2 akan dilewatkan begitu saja (tidak diikut sertakan ke dalam iterasi). Maka hasil yang didapatkan adalah buah Apel yang berada pada index ke-3.