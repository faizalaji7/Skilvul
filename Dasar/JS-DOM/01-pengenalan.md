** DOM adalah singkatan dari Document Object Model.

Jadi, ketika halaman website kita diload, browser kita akan membuat Document Object Model dari halaman website kita. Strukturnya kira-kira seperti ini:
![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-javascript/the-html-dom-tree-of-objects.png)

Dengan adanya DOM ini, JavaScript diberi akses untuk membuat HTML menjadi dinamis, seperti:

Mengubah element HTML pada halaman website.
Mengubah attribute HTML pada halaman website.
Mengubah CSS style pada halaman website.
Menambah dan/atau menghapus element maupun attribute HTML.
Menambah HTML event (contoh: efek klik pada mouse, hover pada mouse, dan lain-lain) pada halaman website.
Berinteraksi dengan semua HTML event di website.
Di HTML DOM, semua element HTML dari sebuah website dianggap sebagai objek. Dan sama seperti objek JavaScript pada umumnya, objek element HTML di HTML DOM juga mempunyai properti dan method atau yang lebih dikenal dengan istilah DOM Property dan DOM Method.

Jadi untuk mengubah nilai properti dari element HTML, kita bisa menggunakan DOM Property dan untuk memanggil fungsi dari suatu element HTML, kita bisa menggunakan DOM Method.

Contoh Penggunaan
Misalnya kita mempunyai element HTML sebagai berikut:

<input id="umur" type="text" value="20" />
Untuk mengakses value dari <input> di atas, maka bisa dilakukan dengan cara sebagai berikut:

let umur = document.getElementById("umur").value;

console.log(umur); // Output: 20
Penjelasan kode di atas:

document adalah akar dari semua objek di sebuah website. Jadi untuk mengakses element HTML apapun di satu website, selalu dimulai dengan objek document ini.
getElementById merupakan method dari objek document.
value merupakan properti dari objek element HTML yang dikembalikan dari method getElementById yaitu <input>.
Karena ada banyak sekali jenis properti dan method di JavaScript HTML DOM, di topik selanjutnya kita akan membahas beberapa contoh penggunaan properti dan method yang seringkali digunakan.