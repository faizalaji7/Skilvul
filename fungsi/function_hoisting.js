// Ada hal keren yang dimiliki oleh fungsi JavaScript, yaitu kita bisa memanggilnya terlebih dahulu, padahal deklarasi fungsi ada di baris setelahnya.

// "Apa kerennya? Perasaan biasa saja" mungkin kalian akan berpikir seperti itu.

// Contoh:

console.log(operasiPerkalian(5, 5)); // Output: 25

function operasiPerkalian(angka1, angka2) {
  return angka1 * angka2;
}
// Secara logika, harusnya kita mendeklarasikan fungsi terlebih dahulu, setelah itu barulah kita menggunakan fungsi tersebut (pada contoh di atas, fungsi operasiPerkalian dipanggil di dalam console.log padahal deklarasinya ditulis setelah console.log). Nah, keistimewaan inilah yang disebut dengan Function Hoisting.

// Tapi, ini tidak berlaku jika fungsi tersebut dideklarasi di dalam sebuah variabel.

// Contoh:

console.log(operasiPerkalian(5, 5)); // Output: Uncaught ReferenceError: Cannot access 'operasiPerkalian' before initialization

const operasiPerkalian = function(angka1, angka2) {
  return angka1 * angka2;
};