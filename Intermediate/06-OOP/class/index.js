// 1. Buatlah sebuah class bernama Orang.
// 2. Buatlah constructor yang memiliki parameter berupa properti yaitu nama dan umur.
// Di dalam constructor, assign parameter nama ke dalam variabel nama dengan keyword this di depan variabelnya.
// Lalu assign parameter umur ke dalam variabel umur dengan keyword this di depan variabelnya.
// 3. Buatlah method bernama bekerja di luar blok kode constructor yang mengembalikan data string `${this.nama} sedang bekerja seperti biasa`.
// 4. Di luar blok kode class, buatlah sebuah objek bernama user1 sebagai instance dari class Orang.
// Isi argumen parameter nama dengan data string "auzan" dan argumen parameter umur dengan data number 8.
// 5. Lakukan console.log() pada method bekerja() melalui objek user1 yang telah dibuat sebelumnya. Cek pada tab Console untuk melihat data.

class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja() {
        return `${this.nama} sedang bekerja seperti biasa`;
    }
}

let user1 = new Orang('auzan', 8);
console.log(user1.bekerja());