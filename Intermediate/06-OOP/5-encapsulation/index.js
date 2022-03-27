// 1. Buatlah sebuah class yang bernama Pelajar.
// 2. Buatlah sebuah constructor yang memiliki parameternama dan sekolah.
// Di dalamnya buatlah variabel bernama _nama dan _sekolah yang masing-masing menerima input dari parameter constructor yaitu nama dan sekolah.
// 3. Buat method setter bernama this.setNama dengan parameter nama di dalam constructor class Pelajar.
// Di dalamnya assign parameter nama ke dalam properti _nama.
// 4. Buat method setter bernama this.setSekolah dengan parameter sekolah di dalam constructor class Pelajar.
// Di dalamnya assign parameter sekolah ke dalam properti _sekolah.
// 5. Buatlah method getter bernama this.getNama di dalam constructor yang akan mengembalikan nilai dari properti _nama.
// 6. Buatlah method getter bernama this.getSekolah di dalam constructor yang akan mengembalikan nilai dari properti _sekolah.
// 7. Buat method belajar() di luar blok kode constructor yang akan mengembalikan teks string `${this.getNama()} belajar di ${this.getSekolah()}`.
// 8. Buatlah instance objek bernama pelajar dari class Pelajar.
// Beri argumen berupa string "Alpha" dan "Skilvul".
// Kemudian lakukan console.log() pada objek pelajar dengan menggunakan method belajar(). Cek tab Console untuk melihat data.

class Pelajar {
  constructor(nama, sekolah) {
    let _nama = nama;
    let _sekolah = sekolah;
    this.getNama = function () {
      return _nama;
    };
    this.getSekolah = function () {
      return _sekolah;
    };
    this.setNama = function (nama) {
      _nama = nama;
    };
    this.setSekolah = function (sekolah) {
      _sekolah = sekolah;
    };
  }
  belajar() {
    return `${this.getNama()} belajar di ${this.getSekolah()}`;
  }
}

let pelajar = new Pelajar("Alpha", "Skilvul");
console.log(pelajar.belajar());
