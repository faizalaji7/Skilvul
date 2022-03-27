Setiap tipe data di JavaScript memiliki prototype bawaannya masing-masing berupa property dan method.

Berikut ini adalah hasil dari prototype tipe data String jika dilakukan console.log():

// Digunakan untuk melihat properti apa saja yang dimiliki oleh prototype String
console.log(String.prototype);

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/prototyping-data-string-01.png)

Jika dari list tersebut kamu tidak menemukan method built-in atau property yang kamu butuhkan, maka ini saatnya untuk kamu membuat property tambahan atau custom pada tipe data string menggunakan prototype. Tidak hanya pada tipe data string, tapi kamu juga bisa menambahkannya pada semua tipe data.

dataType.prototype.namaMethod = function(n){
  // kode program
}
Agar dapat memahami dengan baik, mari kita perhatikan contoh berikut:

Tipe data string memiliki prototype method repeat(). Sekarang kita akan membuat method baru dengan menggunakan method repeat() :

// Kita membuat properti tambahan untuk String
// Method untuk mengulang string selama yang kita butuhkan

String.prototype.repeatString = function (n) {
  return this.repeat(n);
};
console.log("Skilvul".repeatString(3));
Berikut hasil console.log() saat memanggil method repeatString() yang baru saja kita buat pada tipe data string :

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/prototyping-data-string-02.png)

Jika kita cek kembali dengan melakukan console.log() pada prototype string, maka hasilnya method yang kita tambahkan sudah terdaftar pada prototype tipe data string seperti berikut ini :

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/prototyping-string-03.png)

