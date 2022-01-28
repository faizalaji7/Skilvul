Menggunakan if, else if dan else
Syntax dalam menggunakan if, else if dan else adalah sebagai berikut.

if
Digunakan apabila hanya ada 1 kondisi dan 1 keputusan yang dijalankan.

if (kondisi1) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
}
if...else
Digunakan apabila ada 1 kondisi dan 2 keputusan yang dijalankan.

if (kondisi1) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
} else {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 TIDAK tercapai
}
if...else if...else
Digunakan apabila ada beberapa kondisi dan beberapa keputusan yang dijalankan.

if (kondisi1) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
} else if (kondisi2) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tidak tercapai dan kondisi2 tercapai
} else if (kondisi3) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 dan kondisi2 tidak tercapai, dan kondisi3 tercapai
} ... {
} else {
  // masukkan kode yang akan dijalankan di sini apabila semua kondisi di atas TIDAK tercapai
}
Contoh Penggunaan
Coba bayangkan sebuah aplikasi yang bisa menampilkan kalimat:

"SANGAT MEMUASKAN" jika nilai di atas 80
"MEMUASKAN" jika nilai berada di antara 60 hingga 80, dan
"JANGAN MENYERAH, COBA LAGI!" jika nilai di bawah 60
Ternyata, Andi mendapatkan nilai 95. Maka, Andi seharusnya mendapatkan kalimat "SANGAT MEMUASKAN" bukan?

Bagaimana cara membuat aplikasinya? Yaitu seperti berikut ini:

let nilaiAndi = 95;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}

// Output: SANGAT MEMUASKAN
Penjelasan kode di atas:

if (nilaiAndi > 80) { console.log('SANGAT MEMUASKAN'); }artinya jika variabel nilaiAndi bernilai di atas 80, maka aplikasi akan menampilkan kalimat "SANGAT MEMUASKAN".

else if (nilaiAndi >= 60 && nilaiAndi <= 80) { console.log('MEMUASKAN'); }, artinya jika variabel nilaiAndi berada di atas atau sama dengan 60 dan nilaiAndi berada di bawah atau sama dengan 80 (yang bisa diartikan sebagai jika nilaiAndi berada di antara 60 hingga 80), maka aplikasi akan menampilkan kalimat "MEMUASKAN".

else { console.log('JANGAN MENYERAH, COBA LAGI!');}, artinya selain kedua kondisi yang telah disebutkan di if dan else if, maka aplikasi akan menampilkan kalimat "JANGAN MENYERAH, COBA LAGI!".