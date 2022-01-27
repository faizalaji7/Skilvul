// Parameter adalah syarat input yang harus dimasukkan ke dalam suatu fungsi dan dideklarasikan bersama dengan deklarasi fungsi. Sementara argument adalah nilai yang dimasukan ke dalam suatu fungsi, sesuai dengan persyaratan parameter, di mana argument dituliskan bersamaan dengan pemanggilan fungsi.

// Bisa digambarkan seperti ini:

function operasiPerkalian(angka1, angka2){
  return angka1 * angka2;
}

console.log(operasiPerkalian(2, 6)) // Output: 12
// Penjelasan kode di atas:

// angka1 & angka2 adalah parameter. Pada contoh di atas, parameter harus bertipe number, agar bisa diolah oleh fungsi, yaitu perkalian kedua parameter.

// 2 & 6 adalah argument. Sesuai kan dengan syarat parameter? Yap, mereka bertipe number.