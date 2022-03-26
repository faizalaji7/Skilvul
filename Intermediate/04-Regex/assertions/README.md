# Assertions
Assertion digunakan untuk mencocokan karakter yang terdapat dalam suatu kata/kalimat.

Beberapa karakter spesial yang sering digunakan dalam assertion adalah:

* ^: Digunakan untuk **mencocokkan awal **dari suatu string. Karakter spesial ini berbeda penggunaannya ketika digunakan dalam kategori Group and Ranges.
* $: Digunakan untuk **mencocokkan akhir **dari suatu string.
* \b: Digunakan untuk memberi batasan dari suatu string. Huruf karakter sesudah karakter spesial ini harus tidak diikuti oleh huruf karakter lain.
* x(?=y) (lookahead): Hasilnya akan berupa 'x' hanya jika setelah 'x' diikuti oleh 'y' tanpa spasi.
* (?<=y)x (lookbehind): Hasilnya akan berupa 'x' hanya jika sebelum 'x' adalah 'y' tanpa spasi.

* Contoh penggunaan karakter spesial ^:
const regex = /^I/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['I']
const regex = /^i/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: null

* Contoh penggunaan karakter spesial $:
const regex = /a$/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['a']
const regex = /A$/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: null

* Contoh penggunaan karakter spesial \b:
const regex = /ee\b/gi;
const word = "Tree";
console.log(word.match(regex)); // Output: ['ee']

* Contoh di atas akan menghasilkan array ['ee'] karena tidak ada lagi huruf setelah kata ee.
const regex = /oo\b/gi;
const word = "Moon";
console.log(word.match(regex)); // Output: null
Kode di atas akan menghasilkan null karena masih ada huruf n dalam kalimat Moon.

* Contoh penggunaan x(?=y) (lookahead):
const regex = /Moon(?=Child)/
const word = "MoonChild"
console.log(word.match(regex)); // Output: ["Moon"]

const regex = /Moon(?=Child)/
const word = "Moon child"
console.log(word.match(regex)); // Output: null

* Contoh penggunaan (?<=y)x (lookbehind):
const regex = /(?<=Jekyll)Hyde/
const word = "JekyllHyde"
console.log(word.match(regex)); // Output: ["Hyde"]

const regex = /(?<=Jekyll)Hyde/
const word = "HydeJekyll"
console.log(word.match(regex)); // Output: null