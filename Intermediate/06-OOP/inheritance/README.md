# Inheritance
Pada topik sebelumnya, kamu sudah belajar membuat objek menjadi lebih efisien menggunakan class. Dari apa yang sudah kamu pelajari, ternyata kamu ingin membuat class yang serupa (memiliki properti dan method yang sama) tetapi ingin menambahkan suatu properti atau method tambahan. Mungkin pada awalnya kamu akan berfikir untuk membuatnya seperti ini:

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/before-inherit.png)

Tapi ternyata berdasarkan gambar di atas, kamu hanya akan mengulangi kesalahan yang sama yaitu membuat kode menjadi tidak efisien. Ingat prinsip DRY (Don't Repeat Yourself).

Untuk mengatasi hal tersebut, pada topik ini kamu akan mempelajari caranya untuk menurunkan/mewariskan properti dan method pada class lain. Istilah ini biasa disebut dengan inheritance. Sehingga nantinya, class yang akan dibuat terlihat seperti ini:

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/after-inherit.png)

Pada gambar di atas terlihat bahwa, class Hewan akan menurunkan semua properti dan method-nya pada class Kucing, Serigala, dan Burung. Sehingga, class yang diturunkan hanya perlu menambahkan properti atau method yang diinginkan.

Sebelum mewariskan suatu class, pastikan kamu sudah memiliki:

* 1. Parent class, yang akan menurunkan properti dan method-nya kepada class lain.
* 2. Child class, yang akan menerima turunan dari parent class.

Untuk dapat menerima turunan dari parent class, child class harus menggunakan kata kunci extends dan diikuti oleh nama parent class-nya.

class NamaClassB extends NamaKelasA {
  // method
}

Jika kamu ingin menambahkan properti dan ingin memberikan datanya secara langsung ketika objek dibuat, kamu harus menggunakan method super() pada constructor child class agar dapat mengakses properti yang sama pada parent class.

class NamaClassB extends NamaKelasA {
  constructor() {
    super();
    // properti
  }
  // method
}

📝  Catatan:

Method super() digunakan untuk memanggil constructor pada parent class
Contoh di bawah ini kita akan membuat sebuah class Hewan. Lalu kita akan membuat class Kucing yang mewarisi sifat dari class Hewan menggunakan extends:

class Hewan {
  constructor(nama, kaki) {
    this.nama = nama;
    this.kaki = kaki;
  }

  tidur() {
    return `${this.nama} sedang tidur`;
  }
}

// class Hewan mewarisi class Kucing
class Kucing extends Hewan {
  constructor(nama, kaki, makanan) {
    super(nama, kaki);
    this.makanan = makanan;
  }

  mencuri() {
    return `${this.nama} mencuri ${this.makanan}`;
  }
}

// membuat objek dari class Kucing
let kucing = new Kucing("Tom", 4, "ikan");
console.log(kucing.nama);
console.log(kucing.tidur());
console.log(kucing.mencuri());

// Output:
// Tom
// Tom sedang tidur
// Tom mencuri ikan

Pada contoh kode di atas, class Hewan mewarisi semua properti dan method miliknya kepada class Kucing dengan menggunakan kata kunci extends.

class Kucing extends Hewan
Class Kucing menggunakan method super() dan memberikan argumen berupa nama dan kaki. Method ini seolah memanggil constructor milik parent class serta memberikan parameter yg dibutuhkan.

super(nama, kaki);