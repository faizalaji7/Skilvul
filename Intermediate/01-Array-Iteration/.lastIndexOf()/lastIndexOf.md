.lastIndexOf()
Pada topik kali ini, kita akan mempelajari tentang method .lastIndexOf() yang hampir mirip seperti .indexOf(). .lastIndexOf() melakukan iterasi elemen array dari kanan ke kiri kemudian memberikan nilai balik berupa nomor index dari elemen yang dicari atau mengembalikan -1 jika tidak ditemukan.

.lastIndexOf() memiliki 2 argumen yang dapat digunakan sesuai kebutuhan:

value yaitu nilai elemen pada array yang ingin dicari
startIndex (optional) yaitu titik awal pencarian
Struktur kode dari .lastIndexOf():

arr.lastIndexOf(value, startIndex);
Secara fungsionalitas, hampir sama seperti .indexOf(). Perbedaannya terletak pada titik mulai iterasinya. .lastIndexOf() akan melakukan iterasi dari elemen yang paling belakang atau terakhir. Untuk memahaminya lebih lanjut, kita akan bandingkan dengan menggunakan .indexOf().

Misalnya kita memiliki variabel array yang berisikan nama-nama buah. Kita ingin mendapatkan nomor index dari elemen buah Pisang yang terakhir. Dengan .indexOf(), kita bisa menulis kodenya seperti ini:

let arrBuah = ["Pisang", "Apel", "Semangka", "Pisang"];

let indexPisang = arrBuah.indexOf("Pisang", 1);

console.log(indexPisang);
// Output: 3
Pada kode di atas, dilakukan pencarian index dari buah Pisang pada arrBuah. Namun pada arrBuah terdapat 2 elemen string Pisang pada index ke-0 dan index ke-3, sedangkan kita membutuhkan nilai Pisang pada index ke 3.

Karena .indexOf() melakukan iterasi dari kiri, kita perlu menambahkan argumen startIndex untuk memulai pencarian melewati index buah Pisang pada index ke-0. Maka agar berhasil mendapatkan buah Pisang pada index ke-3, kita memulai pencarian dari index ke-1.

Namun menggunakan cara di atas akan sulit jika kita tidak mengetahui ada berapa banyak data buah Pisang dan terdapat di index berapa saja buah Pisang tersebut. Solusi dari permasalahan ini adalah dengan menggunakan .lastIndexOf() sehingga kodenya menjadi seperti ini:

let arrBuah = ["Pisang", "Apel", "Semangka", "Pisang"];

let indexPisang = arrBuah.lastIndexOf("Pisang");

console.log(indexPisang);
// Output: 3
Pada kode di atas, nilai index yang akan dikembalikan adalah nilai index dari elemen yang paling terakhir yaitu index ke-3. Ini disebabkan oleh .lastIndexOf() yang melakukan iterasi dari kanan ke kiri. Nilai index akan langsung dikembalikan ketika data yang dicari sudah ditemukan.

