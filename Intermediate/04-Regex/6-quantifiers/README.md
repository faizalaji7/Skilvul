# Quantifiers digunakan untuk mengidentifikasi jumlah karakter.

## Beberapa karakter spesial yang sering digunakan dalam quantifiers adalah:

* x*: Karakter yang diikuti dengan * dibolehkan tidak tampil sama sekali atau boleh tampil satu kali dan seterusnya.
* x+: Karakter yang diikuti dengan + harus minimal tampil 1 kali dan seterusnya.
* x?: Karakter yang diikuti dengan ?sifatnya menjadi optional, dibolehkan tidak tampil sama sekali atau boleh tampil hanya satu kali.
* x{n}: Karakter yang diikuti dengan {n} (n adalah integer positif) dibolehkan muncul sebanyak minimal n kali.
* x{n,}: Karakter yang diikuti dengan {n,} (n adalah integer positif) dibolehkan minimal tampil n kali dan seterusnya.
* x{n,m}: Karakter yang diikuti dengan {n,m} (n & m adalah integer positif dan m > n) dibolehkan minimal tampil n kali dan maksimal m kali.

Quantifiers bersifat greedy. Jika ada quantifiers roa{3,7}r lalu dilakukan string matching dengan pola yang mendekati seperti "roaaar", "roaaaar", dan "roaaaaaaar". Maka hasil yang didapatkan adalah karakter a yang kuantitasnya terbesar yaitu "roaaaaaaar". Untuk membuatnya menjadi non-greedy, kita bisa menggunakan karakter ?.

## Contoh penggunaan x*:
const regex = /roa*r/gi;
const word = "Ror";
console.log(word.match(regex)); // Output: ["Ror"]

const regex2 = /roa*r/gi;
const word2 = "Roaaar";
console.log(word2.match(regex2)); // Output: ["Roaaar"]

const regex3 = /roa*r/gi;
const word3 = "Roaaaaaar";
console.log(word3.match(regex3)); // Output: ["Roaaaaaar"]
Contoh di atas karakter *, boleh tidak tampil sama sekali atau lebih dari 1 kali.

## Contoh penggunaan x+:
const regex = /ro+ar/gi;
const word = "Raaar";
console.log(word.match(regex)); // Output: null 
Contoh di atas akan mengembalikan nilai null karena karakter o harus ada minimal 1.

## Contoh penggunaan x?:
const regex = /roa?r/gi;
const word = "Ror";
console.log(word.match(regex)); // Output: ["Ror"]

const regex2 = /roa?r/gi;
const word2 = "Roar";
console.log(word2.match(regex2)); // Output: ["Roar"]

const regex3 = /roa?r/gi;
const word3 = "Roaaar";
console.log(word3.match(regex3)); // Output: null
Kita bisa lihat perbedaan antara karakter * dan ?, yaitu karakter ? hanya diperbolehkan maksimal 1 karakter yang sama. Jika lebih makan akan dianggap null.

## Contoh penggunaan x{n}:
const regex = /roa{3}/gi;
const word = "Roaaar";
console.log(word.match(regex)); // Output: ["Roaaa"]

const regex = /roa{3}/gi;
const word = "Roaaaaaar";
console.log(word.match(regex)); // Output: ["Roaaa"]
Contoh di atas akan mengambil karakter a sebanyak 3 karakter.

## Contoh penggunaan x{n,}:
const regex = /roa{1,}/gi;
const word = "Roaaar";
console.log(word.match(regex)); // Output: ["Roaaa"]

const regex = /roa{1,}/gi;
const word = "Roaaaaaar";
console.log(word.match(regex)); // Output: ["Roaaaaaa"]

const regex = /roa{1,}/gi;
const word = "Ror";
console.log(word.match(regex)); // Output: null
Contoh di atas akan mengambil karakter a minimal 1 dan seterusnya.

## Contoh penggunaan x{n,m}:
const regex = /roa{1,2}/gi;
const word = "Roaaar";
console.log(word.match(regex)); // Output: ["Roaa"]
Contoh di atas akan mengambil karakter a minimal 1 dan maksimal 2.