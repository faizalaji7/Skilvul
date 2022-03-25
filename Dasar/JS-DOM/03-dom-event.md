Di topik Pengenalan JavaScript HTML DOM, kita tahu bahwa salah satu kegunaan dari DOM adalah untuk berinteraksi dengan HTML Event di suatu website.

Pernahkan ketika kita klik 1 tombol di satu website, terkadang akan muncul popup window yang menyampaikan suatu pesan. Salah satu cara untuk melakukan itu adalah dengan menggunakan DOM Event.

Ada banyak sekali tipe HTML Event di JavaScript. Kali ini kita hanya akan membahas onclick yaitu HTML Event yang akan terjadi ketika user klik suatu element HTML.

Syntax-nya adalah sebagai berikut:

onclick = kodeJavaScript

Contoh Penggunaan
Seandainya kita mempunyai satu <button> yang akan menampilkan popup window dengan pesan "Hello, World!", maka caranya kira-kira seperti ini:

<!-- html -->
<button id="demo">Click Me!<button>
// js
let demo = document.getElementById("demo");
demo.onclick = showMessage;

function showMessage() {
   alert("Hello, World!");
}

![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-javascript/onclick.gif)
Penjelasan kode di atas:

Di baris demo.onclick = showMessage;, kita menambahkan event onclick ke element <button id="demo"> dan memberi nilai showMessage yang merupakan fungsi untuk menampilkan alert dengan tulisan "Hello, World!".
Jadi ketika <button id="demo"> di-klik, maka alert window dengan tulisan "Hello, World!" akan muncul, sesuai dengan gambar di atas.
📝 Catatan:

Contoh di atas adalah salah satu dari banyak syntax untuk menambahkan onclick event di JavaScript.
Masih ada banyak sekali DOM Property, Method, dan Event lainnya di JavaScript. Kita akan bahas fungsi DOM lainnya di kelas JavaScript berikutnya.

