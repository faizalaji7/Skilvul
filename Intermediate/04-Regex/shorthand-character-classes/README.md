# Shorthand Character Classes
Shorthand Character Classes pada umumnya digunakan untuk membedakan huruf dan angka, namun bisa juga dipakai untuk membedakan karakter lainnya (karakter spesial).

Beberapa karakter spesial yang sering digunakan dalam character classes adalah:

* .: Digunakan untuk menggantikan karakter apapun.
* \d: Digunakan untuk mencocokkan semua angka (digit). Karakter spesial ini sama dengan [0-9]
* \D: Adalah negasi dari \d. Digunakan untuk mencocokkan karakter selain angka. Karakter spesial ini sama dengan ^[0-9]
* \w: Digunakan untuk mencocokkan semua huruf dan angka termasuk dengan garis bawah (_). Karakter spesial ini sama dengan [A-Za-z0-9_].
* \W: Adalah negasi dari \w. Digunakan untuk mencocokkan karakter selain huruf, angka dan underscore. Karakter spesial ini sama dengan [^A-Za-z0-9_].
* \s: Digunakan untuk mencocokkan semua white space karakter, termasuk di dalamnya spasi dan tab.
* \S: Adalah negasi dari \s. Digunakan untuk mencocokkan karakter selain spasi dan tab.
* \: Untuk mengindikasikan karakter huruf yang diikuti spesial karakter seperti ?[]()\/|$^*.+, baik di awal, di tengah, ataupun di akhir sebuah kata. Misalnya, terdapat kata abc*, maka kita harus menambahkan \ di depan karakter *, sehingga pola regex yang dibuat adalah /abc\*/.

## Contoh penggunaan .:
const regex = /.o/gi;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['do']
Kode di atas akan menghasilkan array ['do'] , karena huruf sebelum karakter o yang digantikan . adalah karakter d.

## Contoh penggunaan \d:
const regex = /\d/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: ["5", "4", "9", "9"]
Kode di atas menghasilkan array ["5", "4", "9", "9"], karena akan mencocokkan karakter digit yang ada pada variabel word.

## Contoh penggunaan \D:
const regex = /\D/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: ["P", "S", " ", "s", "e", "h", "a", "r", "g", "a", " ", "$"]
Kode di atas menghasilkan array ["P", "S", " ", "s", "e", "h", "a", "r", "g", "a", " ", "$"], karena akan mencocokkan karakter selain digit yang ada pada variabel word.

## Contoh penggunaan \w:
const regex = /\w/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: ["P", "S", "5" "s", "e", "h", "a", "r", "g", "a", "4", "9", "9"]
Kode di atas menghasilkan array ["P", "S", "5" "s", "e", "h", "a", "r", "g", "a", "4", "9", "9"], karena akan mencocokkan karakter huruf dan digit yang ada pada variabel word.

## Contoh penggunaan \W:
const regex = /\W/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: [" ", " ", "$"]
Kode di atas menghasilkan array [" ", " ", "$"], karena akan mencocokkan karakter selain huruf dan digit yang ada pada variabel word.

## Contoh penggunaan \s:
const regex = /\s/gi;
const word = "Indonesia Raya";
console.log(word.match(regex)); // Output: [" "]
Kode di atas menghasilkan array [" "], karena akan mencocokkan karaketer whitespace yang ada pada variabel word.

## Contoh penggunaan \S:
const regex = /\S/gi;
const word = "Indonesia Raya";
console.log(word.match(regex)); // Output: ["Indonesia", "Raya"]
Kode di atas menghasilkan array ["Indonesia", "Raya"], karena akan mencocokkan karaketer selain whitespace yang ada pada variabel word.

## Contoh penggunaan \:
const regex = /halo\?/gi;
const word = "halo?";
console.log(word.match(regex)); // Output: ["halo?"]
Kode di atas menghasilkan array ["halo?"], karena akan mencocokkan karaketer spesial yang ada pada variabel word.

