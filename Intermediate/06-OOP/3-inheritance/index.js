// 1. Buatlah class Pelajar yang meng-extends dari class Orang.
// 2. Buatlah constructor yang memiliki parameter nama, umur, dan namaSekolah.
// 3. Di dalam constructor, tambahkan kode method super()yang memiliki argumen nama dan umur .
// 4. Buatlah properti namaSekolahmenggunakan keyword this.
// Assign properti namaSekolah dengan parameter namaSekolah yang dimiliki oleh constructor.
// 5. Di luar blok kode constructor, buatlah method bernama belajar yang mengembalikan nilai string `${this.nama} belajar di ${this.namaSekolah}`.
// 6. Di luar blok kode class, buatlah instance objek dari class Pelajar bernama user. Berikan argumen "Terra", 17, dan "Skilvul".
// 7. Lakukan console.log() pada variabel user. Cek pada tab Console untuk melihat data.

class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
}

class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur);
      this.namaSekolah = namaSekolah;
    }
  
    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
    }
}

let user = new Pelajar('Terra', 17, 'Skilvul');
console.log(user);