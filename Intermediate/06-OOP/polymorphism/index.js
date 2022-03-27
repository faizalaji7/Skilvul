// Latihan

// 1. Buatlah class bernama Harimau yang merupakan turunan dari class Hewan.
// 2. Pada class Harimau lakukan overriding pada method makan() yang akan mengembalikan teks string `${this.nama} makan daging`.
// 3. Di luar blok kode class Harimau, buatlah instance objek bernama harimauSumatra dari class Harimau dengan argumen string Harimau Sumatra.
// Lakukan console.log() pada method makan() yang dimiliki oleh objek harimauSumatra. Cek tab Console untuk melihat data.

// Jawaban
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  makan() {
    return `${this.nama} makan`;
  }
}

class Harimau extends Hewan {
  makan() {
    return `${this.nama} makan daging`;
  }
}

let harimauSumatra = new Harimau("Harimau Sumatra");
console.log(harimauSumatra.makan());
