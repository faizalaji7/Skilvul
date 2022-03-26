// 1. Buatlah format quantifiers untuk bisa match dengan string gooaaaaal.
// Buatlah sebuah variabel bernama text yang berisi data string gooaaaaal.

// 2. Buatlah variabel quantifierRegex dan assign format quantifiers menggunakan x{n} pada karakter o dan a untuk mencari string gooaaaaal ke dalam variabel tersebut.

// 3. Buatlah sebuah variabel bernama result. Lakukan pencarian dari pola regex quantifierRegex untuk string yang ditampung di dalam variabel text sebelumnya.
// Gunakan method .test() yang mengembalikan nilai true jika string yang kamu cari ditemukan dan akan mengembalikan nilai false jika tidak ditemukan.

// 4. Lakukan console.log() pada variabel result. Cek pada tab Console untuk melihat dta.

// Buat kode kamu di bawah ini
const text = 'gooaaaaal';
const quantifierRegex = /go{2}a{5}l/ig;
const result = quantifierRegex.test(text);

console.log(result);
console.log(text.match(quantifierRegex));

