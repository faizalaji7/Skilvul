// 1. Kita akan membuat program pola regex untuk mencari kata Skilvul dalam kalimat Saya belajar coding di Skilvul setiap hari dengan flag i (case-sensitive).

// Buatlah sebuah variabel bernama myRegex dan assign sebuah pola regex berupa teks string skilvul menggunakan regex literal dan flag i ke dalam variabel myRegex.

// 2. Buatlah sebuah variabel words yang menampung data string kalimat "Saya belajar coding di Skilvul setiap hari

// 3. Buatlah sebuah variabel bernama result. Lalu lakukan string matching pada variabel wordsdengan sebuah pola regex dalam variabel myRegex sebelumnya menggunakan method .match().

// 4. Lakukan console.log() pada variabel result. Cek pada tab Console untuk melihat data.

// Buat kode kamu di bawah ini
const myRegex = /Skilvul/i;
const words = "Saya belajar coding di Skilvul setiap hari";
const result = words.match(myRegex);
console.log(result);
