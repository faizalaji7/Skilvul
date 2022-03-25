// ** Contoh 1
// Misalnya kita memiliki variabel array angka dengan elemen angka 1 sampai 5. Dari data yang sudah ada, kita hanya ingin mendapatkan elemen yang nilainya lebih besar dari angka 2.

// Dengan menggunakan .filter(), kita dapat melakukan hal tersebut seperti ini:
let arrAngka = [1, 2, 3, 4, 5];

// cara 1
// let filterArr = arrAngka.filter((item) => {
//   return item > 2;
// });
// console.log(filterArr);


// cara 2
let filterArr = arrAngka.filter((item) => item > 2);
console.log(filterArr);

// ** Contoh 2
