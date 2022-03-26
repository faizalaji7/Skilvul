.findIndex()
Jika sebelumnya kamu telah belajar menggunakan .find() untuk mendapatkan suatu nilai elemen yang dicari pada sebuah array, topik kali ini kamu akan belajar mengenai .findIndex() yang digunakan untuk mendapatkan nomor index dari elemen yang dicari.

.findIndex() memberikan nilai balik berupa nomor index dari elemen pertama yang ditemukan jika memenuhi kondisi pada return statement atau -1 jika tidak ditemukan.

Callback function pada .findIndex() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:

value yaitu isi dari tiap elemen yang diproses
index (optional) yaitu nomor index tiap elemen
array (optional) yaitu array itu sendiri
Struktur kode dari .findIndex():

arr.findIndex((value, index, array) => {
  // kode program
});
Secara fungsionalitas, .findIndex() hampir mirip seperti .indexOf() yang digunakan untuk mendapatkan nomor index dari elemen pada sebuah array yang dicari. Akan tetapi .findIndex() dapat melakukan pencarian berdasarkan kondisi yang diinginkan.

Anggap saja kita memiliki variabel array yang isinya terdapat data string nama-nama hewan. Kita ingin mendapatkan nomor index dari elemen pertama yang memiliki awalan huruf "B". Dengan menggunakan .indexOf(), kita hanya bisa melakukan hal seperti ini:

let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];

let index = arrHewan.indexOf("Burung");

console.log(index);
// Output: 2
Yang kita lakukan pada kode di atas adalah mencari nama hewan tersebut secara langsung dengan menuliskan "Burung" di dalam .indexOf().

Mungkin hal di atas masih bisa dilakukan karena data yang dimiliki masih sedikit, namun bagaimana jika datanya sangat banyak, kita tidak mengetahui seluruh data yang ada, dan mengharuskan kita melakukan pencarian dari kondisi tertentu?

Untuk melakukan hal tersebut, kita dapat menggunakan .findIndex()sehingga kita dapat melakukan pencarian berdasarkan kondisi yang diinginkan. Misal, kita hendak mencari nama hewan dengan awalan huruf string "B":

let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];

let index = arrHewan.findIndex((value) => {
  return value[0] === "B"; // Huruf pertama dari value
});

console.log(index);
// Output: 1
Pada kode di atas, pencarian dilakukan berdasarkan suatu kondisi yang diinginkan. Tiap elemen akan ditelusuri dan dikembalikan nilai index-nya jika elemen tersebut memiliki awalan huruf "B".

return value[0] == "B";
Dengan cara ini, kita dapat melakukan pencarian menggunakan suatu kondisi, tanpa harus mengetahui nilai datanya secara langsung.

Jika sudah ditemukan, hasil nomor index yang didapatkan akan disimpan pada variabel index:

let index = arrHewan.findIndex((value) => {
  return value[0] == "B";
});
Apabila callback function yang kamu buat menggunakan arrow function, kita dapat menggunakan implicit return value untuk membuat penulisan kode menjadi lebih pendek sehingga menjadi seperti berikut ini:

let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];

let index = arrHewan.findIndex((value) => value[0] == "B");

console.log(index);
// Output: 1