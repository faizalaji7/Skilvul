// Mengubah Element Array Menjadi String dengan toString()
// Method toString() akan menggabungkan semua element array dan mengubahnya ke tipe data string dengan penghubung tanda koma , di antara element array.

Contoh:

let array = [1, 2, 3, "halo", false, true];

console.log(array.toString()); // Output: 1,2,3,halo,false,true
// Bisa dilihat dari contoh di atas, di dalam array terdapat data dengan tipe number, string, bahkan boolean, namun hasil dari method toString() mengubah mereka semua menjadi string.

// Menggabungkan Element Array dengan join()
// Method join() menggabungkan semua element array, kemudian mengubahnya menjadi string. Konsepnya hampir sama dengan method toString(), namun perbedaannya kita bisa menambahkan karakter tertentu sebagai penghubung antara element array.

// array.join(penghubung);
// Penjelasan syntax di atas:

// Parameter penghubung adalah optional parameter, yaitu parameter yang boleh diisi, boleh juga dikosongkan. penghubung menentukan karakter apa yang mau ditambahkan sebagai penghubung antara element array. Secara default, apabila dikosongkan, array.join() akan menggunakan tanda koma , sebagai penghubung element array.
// Contoh:

let array = [1, 2, 3, "halo", false, true];

console.log(array.join()); // Output: 1,2,3,halo,false,true
console.log(array.join(" ")); // Output: 1 2 3 halo false true
console.log(array.join("#")); // Output: 1#2#3#halo#false#true
console.log(array.join("...")); // Output: 1...2...3...halo...false...true
// Menambah dan Mengeluarkan (Menghapus) Element Array dengan pop(), push(), shift(), dan unshift()
// pop(), mengeluarkan element terakhir dari sebuah array.

// Contoh:

  let array = [1, 2, 3, "halo", false, true];

  array.pop();

  console.log(array); // Output: [1, 2, 3, "halo", false]
// push(), menambah element di bagian akhir dari sebuah array.

// Contoh:

let array = [1, 2, 3, "halo", false, true];

array.push("Selamat Pagi");

console.log(array); // Output: [1, 2, 3, "halo", false, true, "Selamat Pagi"]
// shift(), mengeluarkan element pertama dari sebuah array.

// Contoh:

let array = [1, 2, 3, "halo", false, true];

array.shift();

console.log(array); // Output: [2, 3, "halo", false, true]
// unshift(), menambah element di bagian awal array.

// Contoh:

let array = [1, 2, 3, "halo", false, true];

array.unshift("Selamat Pagi");

console.log(array); // Output: ["Selamat Pagi", 1, 2, 3, "halo", false, true]
// Menambah, Menghapus, dan Mengganti Element Array dengan splice()
// Digunakan untuk menambah, menghapus, dan mengganti element di sebuah array.

// array.splice(index, jumlah, item1, ..., itemX);
// Penjelasan syntax di atas:

// Parameter index adalah required parameter, yaitu parameter yang wajib diisi ketika memanggil array method splice. index menjelaskan posisi di mana element harus ditambah atau dihapus.
// Parameter jumlah adalah optional parameter, yaitu parameter yang boleh diisi, boleh juga dikosongkan. jumlah menentukan jumlah element yang mau dihapus di array.
// Parameter item1, ..., itemX adalah optional parameter. item1, ..., itemX merupakan element baru yang mau ditambah ke dalam array.
// Contoh:

let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];

buah.splice(2, 0, "Lemon", "Kiwi");

console.log(buah); // Output: ["Pisang", "Jeruk", "Lemon", "Kiwi", "Apel", "Mangga"]
// Penjelasan contoh di atas:

// Parameter pertama bernilai 2, mendefinisikan posisi di mana element baru harus ditambahkan, yaitu di index ke 2 atau element ke 3 (ingat, index di array dimulai dari angka 0).
// Parameter kedua bernilai 0, mendefinisikan jumlah element yang harus dihapus, yaitu berjumlah 0 (tidak ada yang dihapus).
// Parameter ketiga, keempat, dan seterusnya di method splice() mendefinisikan element baru yang ingin ditambahkan ke dalam array. Jika parameter ketiga dan seterusnya tidak dituliskan, maka tidak ada element yang ditambahkan. Pada contoh di atas, element ketiga dan keempat adalah "Lemon" dan "Kiwi", maka kedua element tersebut ditambahkan pada array buah.
// Menggabungkan Lebih Dari Satu Array dengan concat()
// Method concat() digunakan untuk menggabungkan 2 array atau lebih.

// array1.concat(array2, array3, ..., arrayX)
// Contoh:

let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);

console.log(makanan); // Output: ["pisang", "apel", "jeruk", "tomat", "bayam", "wortel", "kedelai", "kacang tanah", "kacang polong"]
// Mengambil Element Array dengan slice()
// Method slice() digunakan untuk mengambil beberapa element pada array, dan menaruhnya pada array baru.

// array.slice(mulai, akhir)
// Penjelasan syntax di atas:

// Parameter mulai adalah optional parameter. mulai menentukan permulaan index dari element yang akan diambil.
// Parameter akhir adalah optional parameter. akhir menentukan batas akhir index element yang akan diambil (tanpa diikutsertakan). Apabila dikosongkan, maka semua element dimulai dari index mulai sampai ke element terakhir dari array akan diambil.
// Contoh:

let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]
// Mengurutkan Array dengan sort()
// Method sort() akan mengurutkan element di suatu array, bisa dari nilai yang terkecil hingga yang terbesar, bisa juga sebaliknya. Secara default, sort() mengurutkan element array dari nilai string yang terkecil hingga yang terbesar.

array.sort(fungsiPembanding)
Contoh:

// Contoh array dengan tipe data string
let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort();

console.log(buah); // Output: ["Apel", "Jambu", "Jeruk", "Mangga"]

// Contoh array dengan tipe data number
let bilangan = [30, 1, 2, 3.5, 10, 100];

bilangan.sort();

console.log(bilangan); // Output: [1, 10, 100, 2, 3.5, 30]
// Perhatikan contoh kode di atas! Pada tipe data string, method sort() masih aman digunakan. Ia mengurutkan element pada array buah secara benar.

// Namun jika digunakan pada tipe data number, aneh sekali urutannya bukan? Kenapa angka 100 diurutkan lebih depan dari angka 2?

// Ini dikarenakan method sort() secara default mengurutkan element array berdasarkan nilai string-nya. Element array dengan angka 100 dianggap lebih kecil dari element array dengan angka 2 dikarenakan string "1" di 100 lebih kecil dari string "2" di angka 2.

// Nah, untuk mengatasi hal tersebut, kita bisa menggunakan ** compare function** atau fungsi pembanding sebagai parameter di method sort seperti contoh di bawah ini:

let bilangan = [30, 1, 2, 3.5, 10, 100];


let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil)); // Output: [1, 2, 3.5, 10, 30, 100]
console.log(bilangan.sort(urutDariTerbesar)); // Output: [100, 30, 10, 3.5, 2, 1]
// Penjelasan kode di atas:

// Fungsi pembanding akan menghitung apakah a dikurang b akan menghasilkan nilai negatif, positif, atau 0.

// Jika bernilai negatif, maka a akan diurutkan sebelum b.
// Jika bernilai positif, maka b akan diurutkan sebelum a.
// Jika bernilai 0, posisi dari a dan b tidak akan diubah.
// Memutar urutan Array dengan reverse()
// Method reverse() akan mengurutkan element pada array dari index yang terbesar hingga index yang terkecil, bukan nilai yang terbesar hingga yang terkecil.

array.reverse()
Contoh:

let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.reverse();

console.log(buah); // Output: ["Jambu", "Mangga", "Apel", "Jeruk"]
// Lalu, bagaimana caranya untuk mengurutkan nilai element pada array dari yang terbesar hingga yang terkecil? Caranya adalah menggunakan kombinasi dari method sort() dan reverse().

let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort().reverse();

console.log(buah); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"]
// Penjelasan contoh di atas:

// Array buah akan diurutkan terlebih dahulu element-elementnya dari nilai yang terkecil, hingga yang terbesar dengan menggunakan sort().

buah.sort(); // output: ["Apel", "Jambu", "Jeruk", "Mangga"]

// Kemudian, elementnya akan dibalik urutannya berdasarkan index dari yang terbesar hingga yang terkecil dengan menggunakan reverse().

// posisi setelah sort() ["Apel", "Jambu", "Jeruk", "Mangga"]
buah.reverse(); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"]
// 📝 Catatan:

// Kita akan membahas array method lainnya di kelas JavaScript berikutnya.

let array = ['Mangga', 'Pisang', 'Jambu', 1, 3, 5, 7];
array.push("Ohaio"); // menambah element di bagian terakhir
array.shift(); //mengeluarkan element pertama
array.pop(); //mengeluarkan element terakhir dari sebuah array
console.log(array.toString()); //menggabungkan dan mengubah element menjadi tipe data String
console.log(array.join(",")); //menggabungkan element di array dengan menambah penghubung