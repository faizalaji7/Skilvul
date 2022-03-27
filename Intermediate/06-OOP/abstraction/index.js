// 1. Buatlah class bernama PersegiPanjangdan buatlah sebuah constructor yang memiliki parameter panjang dan lebar di dalam class.
// Di dalam constructor, assign parameter panjang ke dalam properti this.panjang. Lalu assign parameter lebar ke dalam properti this.lebar.
// 2. Buatlah sebuah method luas() di dalam class untuk menghitung luas dari persegi panjang.
// Di dalamnya tambahkan variabel baru bernama hasil yang menerima nilai dari perkalian menghitung luas persegi panjang (luas = panjang * lebar) dari properti panjang dan lebar.
// Lalu di bawah kode tersebut lakukan return pada variabel hasil.
// 3. Di luar blok kode constructor, buatlah sebuah method keliling() di dalam class untuk menghitung keliling dari persegi panjang.
// Di dalamnya tambahkan variabel baru bernama hasilyang menerima nilai dari perkalian menghitung keliling persegi panjang (keliling = 2 * (panjang + lebar)) dari properti panjang dan lebar.
// Lalu di bawah kode tersebut lakukan return pada variabel hasil.
// 4. Di luar blok kode class, buat sebuah instance objek bernama persegiPanjang dari class PersegiPanjang dengan argumen panjang bernilai 4 dan lebar bernilai 3.
// Lakukan console.log() pada instance objek persergiPanjang yang sudah dibuat dengan memanggil method luas() dan keliling().
// Cek tab Console untuk melihat hasil.

class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas() {
    let hasil = this.panjang * this.lebar;
    return hasil;
  }

  keliling() {
    let hasil = 2 * (this.panjang + this.lebar);
    return hasil;
  }
}

let persegiPanjang = new PersegiPanjang(4, 3);
console.log(persegiPanjang.luas());
console.log(persegiPanjang.keliling());
