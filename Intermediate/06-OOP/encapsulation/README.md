# Encapsulation
Objek yang kamu buat selama ini sudah menerapkan konsep yang bernama encapsulation. Konsep ini dimaksudkan untuk membungkus data variabel dan fungsi menjadi satu kesatuan. Dengan membungkusnya, bisa menjadikannya sebuah objek yang memiliki properti dan method.

Tujuan lain dari encapsulation adalah membatasi hak akses pada properti yang dimiliki oleh suatu objek. Sehingga data tetap terjaga dan hanya bisa diakses melalui method.

📝Catatan:

JavaScript tidak memiliki fitur khusus untuk membatasi akses sebuah properti. Cara di bawah hanya bertujuan untuk memberi pemahaman terkait encapsulation.
Kamu dapat mencobanya dengan cara seperti ini:

class NamaClass {
  constructor(nilai) {
    var _properti = nilai;

    // getter
    this.getProperti = function () {
      return _properti;
    };

    // setter
    this.setProperti = function (nilaiBaru) {
      _properti = nilaiBaru;
    };
  }

  // Method
}

Contoh penerapan encapsulation pada class:
class Hewan {
  constructor(nama) {
    let _nama = nama;
    this.getNama = function () {
      return _nama;
    };
    this.setNama = function (nama) {
      _nama = nama;
    };
  }
}

Penjelasan dari kode di atas adalah sebagai berikut:

* Deklarasikan properti seperti mendeklarasikan variabel biasa.
* Kemudian beri tanda _ untuk membedakan antara properti dari parameter constructor
* Method setter dan getter untuk mengakses nilai properti.

Sekarang properti pada class Hewan sudah tidak bisa diakses secara langsung seperti ini:

let kucing = new Hewan("TOM");
console.log(kucing.nama) // Output: undefined

Untuk mengakses properti tersebut, kamu perlu menggunakan getter untuk mengambil nilai atau setter untuk mengubah nilai:

let kucing = new Hewan("TOM");
console.log(kucing.nama) // Output: undefined

Untuk mengakses properti tersebut, kamu perlu menggunakan getter untuk mengambil nilai atau setter untuk mengubah nilai:

let kucing = new Hewan("TOM"); // membuat instance object
console.log(kucing.getNama()); // memanggil getter. Output: TOM

// Update nama hewan
kucing.setNama('Delta'); // memanggil setter
console.log(kucing.getNama()); // memanggil getter. Output: Delta