# Apa itu Group ?
Group adalah pengelompokkan karakter yang di-capture ke dalam regex menggunakan tanda kurung ().
Group memberikan 2 hasil, yaitu:

* 1. Menghasilkan suatu bagian dari fungsi .match() menjadi item terpisah.
* 2. Ketika kita menambahkan quantifier seperti tanda + setelah tanda kurung (), maka semua yang di dalam tanda kurung akan dianggap menjadi satu bagian.
Pada umumnya kita menggunakan group saat kita ingin mengelompokkan suatu kata yang kita inginkan dengan pola regex. Seperti mengelompokkan domain email atau mengelompokkan kata tertentu yang kita harapakan tampil pada UI (User Interface).

## Beberapa karakter spesial yang sering digunakan dalam group adalah:

* (x): Digunakan untuk mencocokan karakter dalam ()menjadi beberapa grup.
* (?<Name>x): Digunakan untuk mencocokan karakter dalam ()menjadi beberapa grup yang diberi nama.

## Contoh penggunaan (x):
// menjadikan isi dari First_Name dan Last_Name sebuah grup ()
const regex = /First_Name: (\w+), Last_Name: (\w+)/;
const word = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

let match = word.match(regex);
console.log(match) // Output: ["First_Name: John, Last_Name: Doe", "John", "Doe"]
console.log(`hello ${match[1]} ${match[2]}`); // Output: hello John Doe

Dari kode di atas, kita dapat lihat bahwa hasil dari console.log(match) adalah ["First_Name: John, Last_Name: Doe", "John", "Doe"], dimana index ke-0 adalah hasil yang match sepenuhnya, index ke-1 adalah hasil dari tanda kurung pertama (grup-1), index ke-2 adalah hasil dari tanda kurung kedua (grup-2), dan akan begitu selanjutnya mengikuti jumlah tanda kurung yang kita pakai.

## Contoh penggunaan (?<Name>x):
// menjadikan isi dari First_Name dan Last_Name sebuah grup () dengan nama 'firstname', 'lastname'
const regex = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/g; 
const word = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

let match = regex.exec(word);
console.log(match.groups) // Output: { "firstname": "John", "lastname": "Doe" }
Dari kode di atas, kita dapat mengambil kata yang terdapat dalam tanda kurung (firstname, lastname) dengan menggunakan objek groups.

# Apa itu Range?
Range adalah pengelompokkan karakter yang memiliki rentang, seperti a-z (a sampai z) atau 1-4 (1 sampai 4), yang kemudian di-capture ke dalam regex menggunakan tanda [].

Beberapa karakter spesial yang sering digunakan dalam range adalah:

* x|y: Digunakan untuk memberikan alternatif pilihan, jika tidak cocok dengan X maka pilih Y, begitu juga sebaliknya.
* [xyz] atau [x-z]: Digunakan untuk membuat kumpulan karakter. Di topik sebelumnya kita telah membahas character classes, karakter \d adalah kumpulan karakter angka dari 0-9.
* [^xyz] atau [^x-z] : Digunakan untuk mencari karakter selain dari kumpulan karakter yang telah kita definisikan.

## Contoh penggunaan x|y:
const regex = /PS5|XBOX/gi;
const word = "PS5 berwarna hitam";
console.log(word.match(regex)); // Output: ['PS5']

const regex = /PS5|XBOX/gi;
const word = "XBOX berwarna hijau";
console.log(word.match(regex)); // Output: ['XBOX']

## Contoh penggunaan [xyz]:
const regex = /[aiueo]/gi;
const word = "PS5 berwarna hitam";
console.log(word.match(regex)); // Array ["e", "a", "a", "i", "a"]

## Contoh penggunaan [^xyz]:
const regex = /[^aiueo]/gi;
const word = "PS5 berwarna hitam";
console.log(word.match(regex)); // Array ["P", "S", "5", " ", "b", "r", "w", "r", "n", " ", "h", "t", "m"]

Pada umumnya kita menggunakan range untuk mencocokan password, seperti apakah password tersebut memiliki panjang minimum 6 karakter yang terdiri dari angka, simbol, huruf besar dan sebagainya. Sebagai contoh, kita asumsikan kita memiliki standar berikut untuk membuat password:

* 1. Terdapat sekurang-kurangnya 1 angka
* 2. Tedapat sekurang-kurangnya 1 huruf kecil
* 3. Terdapat sekurang-kurangnya 1 huruf besar
* 4. Terdapat sekurang-kurangnya 1 spesial karakter
* 5. Terdiri dari minimal 8 karakter, maksimal 32 karakter
Maka pola regex untuk password tersebut adalah:

[0-9] // --> syarat nomor 1, menggunakan range
[a-z] // ---> syarat nomor 2, menggunakan range
[A-Z] // --> syarat nomor 3, menggunakan range
[*.!@#$%^&(){}[]:;<>,.?/~_+-=|\] // --> syarat nomor 4, menggunakan range
{8,32} // --> syarat nomor 5, menggunakan quantifiers

// sehingga polanya:
const regex = ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$
Dari pola di atas, dapat kita pahami:

* (?= ), assertions : melihat ke karakter yang diinput apakah memenuhi pola setelah tanda ?=.
* ., character class : mencocokan semua karakter dalam range kecuali line breaks.
* *, quantifiers: mencocokan semua karakter dalam range untuk boleh tidak tampil sama sekali atau tampil berkali-kali.