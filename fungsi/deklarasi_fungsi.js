// Fungsi dapat berdiri sendiri atau disimpan di dalam sebuah variabel.

// Cara mendeklarasikannya seperti ini:

// Fungsi yang berdiri sendiri
function namaFungsi(){
  // Kode yang akan dijalankan
}

// Fungsi yang disimpan di dalam variabel
let namaVariabelFungsi = function(){
  // Kode yang akan dijalankan
}
// Fungsi dapat dipanggil cukup dengan menambahkan tanda kurung () setelah nama fungsi tersebut. Dalam dua contoh di atas, pemanggilan fungsinya adalah sebagai berikut:

namaFungsi();

namaVariabelFungsi();
// Contoh:

// Fungsi yang berdiri sendiri
function sapa() {
  return "Selamat Pagi!";
}

console.log(sapa()); // Output: Selamat Pagi!

// Fungsi disimpan di dalam variabel

let berkenalan = function() {
  return "Hallo, nama saya Sarah.";
};

console.log(berkenalan()); // Output: Hallo, nama saya Sarah.
// Pada contoh kedua di atas, return value-nya adalah "Hallo, nama saya Sarah.". Bedakan return dengan console.log() ya.

console.log() // hanya menampilkan informasi ke dalam tab console JavaScript, sedangkan return akan mengembalikan sebuah nilai ke tempat di mana fungsi itu dipanggil.

// Kalau bingung coba lihat contoh kode berikut:

console.log(berkenalan() + " nama kamu siapa?")
// Kalau kita lihat fungsi berkenalan() tadi, return valuenya adalah "Hallo, nama saya Sarah.". Nilai dari return ini akan dikembalikan ke tempat pemanggilan fungsi tersebut, sehingga kode di atas saat dijalankan sebenarnya akan menjadi:

console.log("Hallo, nama saya Sarah." + " nama kamu siapa?")
// Lalu bagaimana jika kita tidak menulis perintah return?

// Misalnya seperti contoh di bawah ini:

let umur = 21;

function ulangTahun() {
    umur += 1;
}

console.log(ulangTahun()); // Output: undefined
// Fungsi tersebut tidak memiliki perintah return. Di JavaScript, apabila tidak ada perintah return, secara default (standar) fungsi tersebut akan mengembalikan nilai undefined.

