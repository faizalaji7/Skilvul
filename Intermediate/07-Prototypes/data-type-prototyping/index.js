// 1. Buatlah method baru pada tipe data string bernama tambahKata() yang memiliki parameter str dan mengembalikan method concat() di dalamnya.

// Contoh output dari method yang akan dibuat:

// console.log("Belajar ".tambahKata("coding"));
// Output "Belajar coding"
// Contoh penggunaan method concat():

// let string1 = "Hello ";
// let string2 = "world!";
// let result = string1.concat(string2);
  
// console.log(result) // Output: Hello world!

// 2. Panggil method yang sudah kamu buat yang menggabungkan string "Belajar" dan "coding" seperti ini:

// console.log('Belajar '.tambahKata("coding"));

String.prototype.tambahKata = function(str) {
    return this.concat(str);
}

console.log('Belajar '.tambahKata("coding"));