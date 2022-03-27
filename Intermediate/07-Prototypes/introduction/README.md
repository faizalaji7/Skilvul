# Apa itu Prototyping pada JavaScript?
JavaScript adalah bahasa pemrograman yang memiliki fitur prototype. Properti prototype pada JavaScript awalnya menggunakan objek kosong dan dapat ditambahkan anggota ke dalamnya jika dibutuhkan. Jadi, setiap kita membuat objek atau function, JavaScript akan menambahkan properti prototype secara otomatis.

* Contoh syntax membuat prototype dalam JavaScript:

// Mendeklarasikan function baru
function namaObject() {}

// Menambahkan properti secara langsung menggunakan prototyping
namaObject.prototype.namaProperti = "isi properti";

//Melihat prototype dari function
console.log(namaObject.prototype);

// Melihat hasil data
console.log(namaObject.prototype.namaProperti);
Hasil dari console.log kode di atas adalah sebagai berikut:

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/prototype-introduction-01.png)

# Function Constructor
Jika kita ingin membuat banyak objek dari class maka kita bisa membuat instance dari class tersebut seperti yang telah kita pelajari pada topik OOP sebelumnya:

// Membuat constructor
function Person(name, age, hobby, job) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.job = job;
}

// Membuat instance
let myFather = new Person("William", 30, "Play games", "Entrepreneur");
let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

// Melihat hasil data
console.log(myFather.name); // 'William'
console.log(myMother.name); // 'Jessica'
Hasil dari console.log kode di atas sebagai berikut:

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/prototype-introduction-02.png)

Namun saat ini kita tidak bisa menambahkan data constructor secara langsung. Perhatikan kode di bawah ini:

function Person(name, age, hobby, job) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.job = job;
}

// Tidak bisa menambahkan properti secara langsung
Person.nationality = "Indonesia";

let myFather = new Person("William", 30, "Play games", "Entrepreneur");
let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

// Melihat hasil data
console.log(myFather.name); // Output: 'William'
console.log(myFather.nationality); // Output: undefined

Pada kode di atas, kita mencoba untuk menambahkan properti baru bernama nationality dengan value Indonesia. Namun saat instance objek memanggil properti tersebut, kita mendapatkan nilai undefined.

Pada topik selanjutnya kita akan membahas bagaimana cara mengatasinya menggunakan prototype.