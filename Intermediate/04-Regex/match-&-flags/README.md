# Match & Flags
## Match
.match() sama seperti .exec() yaitu sebuah method bawaan (built-in) dari JavaScript. Namun .match() jika disisipkan suatu flag akan menghasilkan hasil yang beda dengan .exec(). Contoh penggunaan .match():

const regex = /i/;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['i']
Pada hasil console di atas ada lebih dari 1 karakter i tetapi match hanya pada 1 karakter. Karakter i match pada indeks ke-7. Ini terjadi karena karakter I yang pertama bersifat uppercase (huruf besar) namun kita hanya mendaftarkan pola regex karakter i lowercase (huruf kecil).

Untuk bisa menjadikan regex lebih spesifik sesuai dengan kebutuhan kita, maka dapat menggunakan flags.

## Flag
Special Character yang sering digunakan untuk flag adalah:

* g, untuk mencari ke dalam seluruh string yang ingin dicari.
* i, untuk mengabaikan aturan case-sensitive. Tidak mempermasalahkan besar kecilnya sebuah karakter. Tidak membedakan antara A dan a.
Contoh penggunaan flag g:

const regex = /n/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['n', 'n']
Flags juga bisa digunakan dengan menggabungkan beberapa special character. Contoh penggunaan flag g dan i:

const regex = /i/ig;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['I', 'i']
Kamu bisa lihat kode di atas, kita sudah mengatasi permasalahan case-sensitive dengan menggunakan flag i. Maka program sudah bisa mendapatkan karakter I dan i.