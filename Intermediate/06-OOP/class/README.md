# Class
Objek pada JavaScript, dapat langsung dibuat dengan cara menggunakan objek literal seperti berikut ini:

let hewan = {
  nama: "Kucing",
  kaki: 4,
  tidur: function () {
    return `${this.nama} sedang tidur`;
  },
};

Dengan cara di atas, kamu dapat langsung membuat properti ataupun method pada objek yang ingin dibuat. Ketika kamu ingin membuat objek yang serupa, pasti kamu membuatnya seperti ini:

let hewan = {
  nama: "Kucing",
  kaki: 4,
  tidur: function () {
    return `${this.nama} sedang tidur`;
  },
};

let hewan2 = {
  nama: "Ayam",
  kaki: 2,
  tidur: function () {
    return `${this.nama} sedang tidur`;
  },
};

Kode di atas mungkin masih terlihat sederhana karena objek yang dibuat masih sedikit. Tapi bagaimana jika objek yang ingin dibuat ada banyak? Pasti kode yang dimiliki menjadi tidak efisien karena ada banyak kode yang sama dibuat secara berulang-ulang.

# Bagaimana cara mengatasinya?
Untuk mengatasi hal tersebut, kamu dapat menggunakan fitur class yang terdapat pada JavaScript.

Penulisan class hadir pada JavaScript ES6. Dengan adanya class, kamu dapat membuat objek yang merupakan instance (perwujudan) dari sebuah class. Mudahnya, kamu akan membuat cetakannya terlebih dahulu sebelum kamu membuat objeknya. Berikut ini cara membuat suatu class:

class NamaClass {
  constructor() {
    // properti
  }
  // method
}

Contoh pembuatan class Hewan dengan properti nama dan kaki dilengkapi dengan method .tidur():

class Hewan {
  constructor(nama, kaki) {
    this.nama = nama; // properti
    this.kaki = kaki; // properti
  }

  // Method
  tidur() {
    return `${this.nama} sedang tidur`;
  }
}

Dari kode di atas, ada beberapa komponen yang perlu kamu perhatikan ketika membuat class:

* Constructor, yaitu method yang wajib ada pada class jika ingn menyimpan suatu properti. Ketika suatu objek dibuat menggunakan class, maka constructor-nya juga ikut terpanggil. Parameter pada constructor berguna untuk memberikan data kepada properti.

* Properti, yaitu data objek yang akan disimpan. Properti berada di dalam constructor dan diawali oleh kata kunci this. Kata kunci this mewakili kepemilikan dari class itu sendiri.

* Class method, merupakan method yang dapat dimiliki dari sebuah objek. Biasanya dibuat di bawah constructor.

Setelah class selesai dibuat, yang perlu dilakukan adalah membuat instance dari class tersebut. Objek dapat dibuat menggunakan kata kunci new kemudian dilanjutkan dengan nama class-nya. Jangan lupa untuk memberi argumen pada class yang dipanggil jika ingin memberikan data secara langsung sesuai dengan parameter yang terdapat pada constructor.

let namaObjek = new NamaKelas(args1, args2);

Contoh membuat objek dari class Hewan yang telah kita buat di atas:

let hewan1 = new Hewan("Kucing", 4);
let hewan2 = new Hewan("Ayam", 2);

console.log(hewan1.nama); // Output: Kucing
console.log(hewan2.nama); // Output: Ayam
console.log(hewan1.tidur()); // Output: Kucing sedang tidur
console.log(hewan2.tidur()); // Output: Ayam sedang tidur
Setiap objek yang dibuat, akan memiliki properti dan method yang sama seperti milik class-nya. Dengan memberikan argumen pada class yang digunakan, objek akan memiliki nilai properti dan method berdasarkan argumen yang sudah diberikan.