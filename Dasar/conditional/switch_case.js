Menggunakan switch dan case
Jika kita memiliki banyak pilihan kondisi, menggunakan perintah if, else if dan else akan kurang efisien karena kode yang ditulis akan menjadi sangat panjang sekali.

"Alternatifnya apa dong?"

Ada cara yang lebih efisien yaitu dengan menggunakan perintah switch dan case.

Syntaxnya seperti ini:

switch (pernyataan) {
  case kondisi1:
    // keputusan yang dijalankan ketika kondisi1 tercapai
    break;
  case kondisi2:
    // keputusan yang dijalankan ketika kondisi2 tercapai
    break;
  case kondisi3:
    // keputusan yang dijalankan ketika kondisi3 tercapai
    break;
  ...
  default:
    // keputusan yang dijalankan ketika semua kondisi tidak tercapai
}
Contoh Penggunaan
Seandainya kita disuruh menulis sebuah aplikasi yang akan menampilkan jenis seragam apa yang harus dikenakan murid sesuai dengan harinya. Contohnya seperti di bawah ini:

let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah); // Output: kemeja putih bawahan merah
Penjelasan kode di atas:

switch digunakan untuk mendeklarasikan pernyataan yang menjadi patokan kondisi. Pada contoh di atas, kita akan melihat variabel hari digunakan sebagai patokan kondisi untuk merubah nilai dari variabel seragamSekolah sesuai dengan nilai hari-nya (kondisi).

case digunakan untuk menulis masing-masing kondisi dari hasil pernyataan yang akan diperiksa. Pada contoh di atas, jika variabel hari bernilai "senin", maka variabel seragamSekolah bernilai "kemeja putih bawahan merah", dan seterusnya.

break digunakan untuk menghentikan program berjalan ketika sudah menemukan kondisi yang tercapai. Pada contoh di atas, program akan berhenti pada case bernilai "senin".

default adalah keputusan yang akan dijalankan apabila hasil pernyataan di switch tidak ada yang sesuai dengan masing-masing kondisi di case (tidak ada kondisi yang tercapai). Fungsinya sama seperti else di topik sebelumnya . Pada contoh di atas, apabila nilai variabelhari yang dimasukkan misalnya "sabtu", maka seragamSekolah akan bernilai "baju bebas".

Apabila kita mempunyai dua atau lebih kondisi yang berbeda, tetapi keputusan yang akan dijalankan sama, kita bisa menggabungkan beberapa perintah case tanpa menggunakan break dan hanya menggunakan break di kondisi terakhir.

Misalnya pada contoh kita di atas, murid diharuskan mengenakan seragam "kemeja putih bawahan merah" untuk hari "senin" sampai "kamis", maka kita bisa mengubah kode di atas menjadi:

let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah); // Output: kemeja putih bawahan merah