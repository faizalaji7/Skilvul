// Data/element dari suatu array bisa kita ubah dengan syntax seperti ini:

namaArray[nomorIndex] = nilaiBaru;
// Contohnya:

let namaBuah = ["Mangga", "Apel", "Jeruk"];

namaBuah[1] = "Semangka";

console.log(namaBuah); // Output: ["Mangga", "Semangka", "Jeruk"]
// Apakah kalian masih ingat di beberapa topik sebelumnya, kita sempat membahas tentang penggunaan let dan const di mana variabel yang dideklarasikan dengan menggunakan const tidak bisa diubah datanya terkecuali variabel itu adalah tipe objek atau array.

// Jadi untuk array JavaScript, pengubahan nilai element seperti berikut tidak akan memunculkan error walaupun variabel array-nya dideklarasikan dengan const:

const namaArray = [nilaiElement1, nilaiElement2];

// mengubah data di element pertama
namaArray[0] = nilaiElementBaru;

// menambah element baru ke array
namaArray[2] = nilaiElement3;

// contoh:
let warna = ['hitam', 'merah', 'ungu', 'kuning'];

// Tulis kode kalian di bawah ini
warna[3] = "biru";

console.log(warna);