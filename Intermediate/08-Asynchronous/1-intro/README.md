Bahasa pemrograman JavaScript termasuk ke dalam single-thread language atau synchronous yang artinya hanya dapat mengeksekusi satu perintah pada satu waktu dan harus menunggu satu perintah tersebut selesai sebelum melanjutkan perintah selanjutnya.

Untuk bisa mengeksekusi urutan perintah dari kode yang kita tulis ada 2 istilah yang digunakan pada JavaScript yaitu synchronous dan asynchronous.

# Apa itu synchronous?
Synchronous adalah saat kita mengeksekusi perintah satu persatu dan berurutan. Analoginya seperti kita sedang mengantri di kasir atau loket. Ketika ada 1 perintah masuk maka dia akan dieksekusi terlebih dahulu. Jika perintah belum selesai dan sudah ada perintah baru maka perintah kedua (yang baru) akan mengantri sampai perintah 1 selesai. Proses seperti ini disebut blocking dan membuat perintah kita tereksekusi dengan lambat.

Contoh :

console.log("antrian 1");
console.log("antrian 2");
console.log("antrian 3");

// output
// antrian 1
// antrian 2
// antrian 3
Kode di atas bersifat synchronous yaitu kode dijalankan baris per baris. Maka output kode di atas tereksekusi sesuai urutan perintahnya.

Salah satu konsep lain di pemrograman adalah kebalikan dari synchronous yaitu asynchronous.

# Apa itu Asynchronous?
Asynchronous yang biasa dikenal juga dengan sebutan non-blocking mengizinkan komputer kita untuk memproses perintah lain sambil menunggu suatu proses lain yang sedang berlangsung. Ini artinya kita bisa melakukan lebih dari 1 proses sekaligus (multi-thread). Eksekusi perintah dengan asynchronous tidak akan melakukan blocking atau menunggu perintah sebelumnya selesai. Jadi sambil menunggu kita bisa mengeksekusi perintah lain.

Analoginya seperti saat kita mencuci baju di mesin cuci. Agar lebih produktif, sambil menunggu cucian selesai kita bisa melakukan pekerjaan lain misalnya menyapu dan mengepel. Artinya disini kita melakukan 3 proses sekaligus.

# Menjalankan Asynchronous pada JavaScript
Jika JavaScript secara default bersifat synchronous, maka bagaimana jika ingin menerapkan proses asynchronous ? Ada beberapa cara untuk membuat proses asynchronous. Kami membatasi hanya memberikan 2 cara ini:

* 1. setTimeout(function, milliseconds) digunakan untuk simulasi pemanggilan kembali proses asynchronous yang sedang/sudah selesai dijalankan. Pemanggilan hanya dilakukan 1 kali.
* 2. setInterval(function, milliseconds) digunakan untuk simulasi pemanggilan proses asynchronous yang sedang/sudah dijalankan dalam interval waktu tertentu. Pemanggilan dilakukan berkali-kali sesuai interval waktu yang ditentukan.

* Contoh asynchronous menggunakan setTimeout():

setTimeout(() => {
  console.log("Cuci baju"); // proses asynchronous
}, 1000);
console.log("Menyapu");
console.log("Mengepel");
console.log("Memasak");

// 1000 ms = 1 second

// Output:
// Menyapu
// Mengepel
// Memasak
// Cuci baju

* Contoh asynchronous menggunakan setInterval():

setInterval(() => {
  console.log("Cuci baju"); // proses asynchronous
}, 3000);
console.log("Menyapu");
console.log("Mengepel");
console.log("Memasak");

// 3000 ms = 3 second

// Output:
// Menyapu
// Mengepel
// Memasak
// Cuci baju (x time)

// Cuci baju akan dijalankan setiap 3 detik sekali
Kita bisa lihat bahwa hasilnya urutan pertama adalah Menyapu, Mengepel, Memasak, dan Cuci Baju. Ini terjadi karena cara kerja asynchronous tidak akan menunggu suatu perintah sampai selesai, namun langsung mengeksekusi perintah lainnya.

# Menerapkan Asynchronous pada Aplikasi JavaScript
Dari contoh simulasi di atas model eksekusi asynchronous lebih effisien dibandingkan synchronous. Namun, permasalahan terjadi saat menggunakan asynchronous, ada satu perintah yang bergantung pada output eksekusi asynchronous sebelumnya. Dengan kata lain fungsi berjalan kejar-kejaran (race condition), sehingga data yang kita inginkan menjadi kosong. Sebagai contoh:

const user = getUser(); // fungsi async untuk mengambil data user dari API
console.log(user) // Output: null
Dari kode di atas, ada kemungkinan user masih bernilai null. Hal ini terjadi karena fungsi getUser() adalah fungsi asynchronous yang belum selesai dijalankan, namun perintah console.log() sudah menuntut untuk dijalankan.

Untuk mengatasi masalah tersebut, kita dapat menggunakan:

* 1. Callback.
* 2. Promises.
* 3. Async / Await.

Lalu dalam kondisi apa saja kita perlu menggunakan asynchronous? Teknik asynchronous paling banyak digunakan dalam mengelola komunikasi ke server seperti proses request API (mengambil data dari server), operasi file, koneksi ke database, real time communication (messenger/chat), dan sebagainya.