// Jika kita ingin menggunakan nilai yang terdapat di dalam properti suatu objek, maka kita harus mengakses properti objek tersebut.

// Caranya bagaimana?

// Ada 2 cara yaitu:

// Dot Notation
let objek = {
   namaProperti: nilaiProperti
};

// Dot Notation
objek.namaProperti // Output: nilaiProperti
// Contoh:

let orang = {
  nama: 'sarah',
  umur: 24,
  pekerjaan: 'programmer'
};

console.log(orang.nama); // Output: "sarah"
console.log(orang.umur); // Output: 24
console.log(orang.pekerjaan); // Output: "programmer"
// Bracket Notation
let objek = {
   namaProperti: nilaiProperti
};

// Bracket Notation
objek["namaProperti"] // Output: nilaiProperti

// bisa juga menggunakan single quote
objek['namaProperti'] // Output: nilaiProperti
// Contoh:

let orang = {
  nama: 'sarah',
  umur: 24,
  pekerjaan: 'programmer'
};

console.log(orang["nama"]); // Output: "sarah"
console.log(orang['umur']); // Output: 24
console.log(orang["pekerjaan"]); // Output: "programmer"
// 📝 Catatan:

// Perlu kita perhatikan yang berikut ini ketika kita mau mengakses properti objek secara dynamic (dinamis).
// Yang dimaksud dengan mengakses properti objek secara dinamis adalah ketika kita menggunakan nama dari suatu variabel sebagai nama properti saat mengakses properti objek tersebut.

let namaVariabel = namaProperti;

let objek = {
   namaProperti: nilaiProperti
};

// kita bisa mengakses properti objek secara dinamis
// dengan cara berikut
objek[namaVariabel] // Output: nilaiProperti
// Contoh:

const smartphone = {
    kamera: "10MP",
    memori: "128GB"
};

const fitur = "kamera";
// Apabila kita ingin mengakses nilai "10MP" dari objek smartphone dengan menggunakan variabel fitur. Cara yang benar adalah:

console.log(smartphone[fitur]); // Output: 10MP

// karena variabel fitur mempunya nilai kamera
// maka, baris di atas sama hasilnya dengan
console.log(smartphone["kamera"]); // Output: 10MP
console.log(smartphone.kamera); // Output: 10MP
// Kita tidak bisa mengakses properti objek secara dinamis dengan menggunakan dot notation. Jadi:

console.log(smartphone.fitur); // Output: undefined
// Contoh di atas akan menghasilkan output undefined dikarenakan objek smartphone tidak mempunyai properti dengan nama fitur.