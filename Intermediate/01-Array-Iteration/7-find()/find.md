.find()
Pencarian merupakan salah satu algoritma dasar pada pemrograman. Dimulai dari melakukan iterasi pada sekumpulan data dan kemudian mengembalikan nilai jika sesuai dengan kondisi yang dicari. Array pada JavaScript juga memiliki built-in method ** .find() yang dapat digunakan untuk melakukan pencarian**.

.find() memberikan nilai balik berupa nilai tunggal (single value) dari elemen pertama yang ditemukan jika memenuhi suatu kondisi pada return statement.

Callback function pada .find() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:

value yaitu isi dari tiap elemen yang diproses
index (optional) yaitu nomor index tiap elemen
array (optional) yaitu array itu sendiri
Struktur kode dari .find():

arr.find((value, index, array) => {
  // kode program
});
Mungkin terlihat hampir sama seperti .filter(). Namun .filter() memberikan hasil dalam bentuk array, sedangkan .find() hanya memberikan hasil single value.

Contoh lebih detail mengenai perbedaan .filter() dan .find() dapat kita lihat pada kode di bawah ini:

let people = [
  {
    name: 'Jane',
    age: 20
  },
  {
    name: 'Doe',
    age: 15
  }
];

let janeFind = people.find(item => item.name === 'Jane');

let janeFilter = people.filter(item =>  item.name === 'Jane');

console.log(janeFind);
// Output: {name: 'Jane', age: 20} --> bentuk object

console.log(janeFilter);
// Output: [{ name: 'Jane', age: 20 }] --> bentuk array of object
Contoh lainnya:

let number=[1, 2, 3, 4, 5, 6, 7];

let moreThanThree = number.find(data => data > 3);
let lebihDariTiga = number.filter(data => data > 3);

console.log(moreThanThree)
// Output: 4

console.log(lebihDariTiga)
// Output: [4,5,6,7]
Sehingga dari kedua contoh di atas, kita dapat mengambil kesimpulan bahwa .find() baik digunakan jika kita hanya membutuhkan single value dari elemen array yang kita cari sesuai dengan kondisi yang kita butuhkan.