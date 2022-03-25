** .reduce()
Melakukan operasi matematika (penjumlahan, pengurangan, perkalian, dan pembagian) pada elemen array atau sekedar mengubah struktur data array, tak dapat dihindari saat mengembangkan suatu aplikasi. Pada dasarnya ada kebutuhan tampilan UI (User Interface) yang ternyata tidak sejalan dengan data yang didapatkan.

Sebagai contoh: Terdapat baris tabel subtotal pada desain, namun data yang kita dapat dari server tidak ada data subtotal. Sehingga kamu sebagai web developer dituntut untuk memanfaatkan data yang ada dan memodifikasi data yang diterima.

Berikut ini adalah ilustrasi tampilan desain tabel data produk:
![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/reduce-iteration-3.png)

Lalu data yang kita dapatkan dari server atau API adalah sebagai berikut di mana tidak ada data nilai subtotal sehingga kita harus memanipulasi data yang ada:

![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/array-iteration-reduce-02.png)

Hal ini dapat diatasi dengan menggunakan .reduce() pada variabel array di dalam JavaScript. .reduce() digunakan untuk memodifikasi array menjadi:

Sebuah data/nilai baru
Struktur data baru sesuai kebutuhan kita. Umumnya digunakan untuk melakukan operasi matematika.
Menggunakan .reduce()
Callback function pada .reduce() memiliki 5 parameter yang dapat digunakan sesuai kebutuhan:

total yaitu nilai awal (initial value) atau akumulasi dari perhitungan sebelumnya.
value yaitu isi dari tiap elemen yang diproses.
index (optional) yaitu nomor index tiap elemen.
array (optional) yaitu array itu sendiri.
initialValue (optional) yaitu nilai awal yang akan di passed sebagai initial value di poin 1. Dapat diisi apa saja (nomor, teks, array, atau object)
Struktur kode dari .reduce():

arr.reduce((total, value, index, array) => {
  // kode program
}, initialValue);
Untuk memahami lebih lanjut tentang penggunaan .reduce(), kita akan mempelajarinya dengan menggunakan contoh kasus sederhana serta akan kita bandingkan dengan menggunakan .forEach().

Misalnya kita memiliki variabel array angka dengan elemen 1 sampai 5. Kita ingin menjumlahkan tiap elemen yang terdapat pada array tersebut. Dengan menggunakan .forEach(), kita bisa melakukan hal tersebut dengan cara seperti ini:

let arrAngka = [1, 2, 3, 4, 5];
let hasil = 0;

arrAngka.forEach((value) => {
  hasil += value;
});

console.log(hasil);
// Output: 15
Kita harus menyiapkan variabel hasil terlebih dahulu sebagai wadah untuk menampung hasil dari akumulasinya. Kemudian di dalam callback function, hasil akan di-assign kembali dengan nilai dari variabel value yang dijumlahkan dengan nilai hasil saat ini.

Nah, sekarang kita akan ubah kode di atas menggunakan .reduce(), sehingga kodenya menjadi seperti ini:

let arrAngka = [1, 2, 3, 4, 5];

let hasil = arrAngka.reduce((total, value) => {
  return total + value;
});

console.log(hasil);
// Output: 15
Pada kode di atas, kita menggunakan 2 parameter pada callback function. Variabel total sebagai hasil dari akumulasi dan variabel value sebagai elemen yang akan diakumulasi.

Setiap angka akan dijumlahkan dengan variabel total dan kemudian akan dikembalikan hasilnya.

return total + value;
Setelah proses iterasi selesai, variabel hasil digunakan untuk menyimpan nilai dari hasil akumulasi yang sudah dilakukan oleh .reduce().

let hasil = arrAngka.reduce((total, value) => {
  return total + value;
});
Apabila kamu menggunakan arrow function sebagai callback function, kodenya pun akan menjadi lebih pendek seperti ini:

let hasil = arrAngka.reduce((total, value) => total + value);
Menggunakan initial value pada .reduce()
Kamu juga dapat menentukan nilai initialValue pada .reduce() jika memiliki nilai awal yang diinginkan. Sebagai contoh:

let arrAngka = [1, 2, 3, 4, 5];

let hasil = arrAngka.reduce((total, value) => {
  return total + value;
}, 5); // initial valuenya adalah 5

console.log(hasil);
// Output: 20
Dari kode di atas, dapat kita lihat initial valuenya adalah 5. Sehingga saat iterasi pertama dijalankan hingga iterasi terakhir, nilai total dan value nya akan berjalan seperti ini:

iterasi ke 1 --> 5 + 1
iterasi ke 2 --> 6 + 2
iterasi ke 3 --> 8 + 3
iterasi ke 4 --> 11 + 4
iterasi ke 5 --> 15 + 5

hasil = 20
Mengubah struktur data dengan .reduce()
Selain itu, penggunaan .reduce() tidak hanya digunakan untuk operasi matematika, tapi juga dapat merubah struktur data yang kamu terima menjadi struktur data yang kamu butuhkan. Sebagai contoh:

Terdapat data dari API sebagai berikut['Jambu', 'Apel', 'Mangga', 'Jambu', 'Jeruk', 'Apel']. Kamu sebagai front-end developer mau menampilkan data ini ke dalam sebuah list nama buah beserta jumlah buahnya, sehingga bentuk datanya berubah menjadi seperti:

{
  Jambu:2,
  Apel:2,
  Mangga:1,
  Jeruk:1
}
Maka kita dapat menggunakan .reduce() dengan cara seperti ini:

let fruits = ['Jambu', 'Apel', 'Mangga', 'Jambu', 'Jeruk', 'Apel']

let fruitList = fruits.reduce((list,fruit) => {
  if(list[fruit]) { // memeriksa apakah buah tersebut sudah ada dalam objek atau belum
    list[fruit] = list[fruit] + 1; // jika ada, nilainya + 1
  } else {
    list[fruit] = 1; // jika belum ada, beri nilai 1
  }
  return list; // mengembalikan objek
}, {}); // initial valuenya adalah objek

console.log(fruitList);

// Output:
// {
//   Jambu:2,
//   Apel:2,
//   Mangga:1,
//   Jeruk:1
// }

Dari kode di atas, dapat kita lihat bahwa initial value-nya adalah sebuah object { } yang di-assign ke dalam variabel list. Lalu list ini kemudian diisi dengan nama buah dari array fruits yang direpresentasikan oleh variabel fruit.

Banyak cara yang dapat digunakan untuk memodifikasi struktur data array menjadi struktur data yang lain, namun menggunakan .reduce() dapat menjadi solusi yang memudahkan.