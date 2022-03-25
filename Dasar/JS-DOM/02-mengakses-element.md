Di topik sebelumnya, kita sudah melihat contoh cara menggunakan JavaScript HTML DOM untuk mengambil nilai dari sebuah element HTML <input>.

Mari kita perhatikan sekali lagi contoh tersebut:

<!-- html -->
<input id="umur" type="text" value="20" />
// js
let umur = document.getElementById("umur").value;

console.log(umur); // Output: 20
Sebelum kita bisa mengambil nilai attribute value dari element HTML <input> di JavaScript, kita terlebih dahulu harus mengakses ke element <input>. Di contoh di atas, kita menggunakan salah satu DOM Method untuk mengakses element HTML yaitu getElementById.

Di topik ini, kita akan bahas lebih lanjut DOM method lainnya untuk mengakses element HTML.

** getElementById(id)
Method yang ini sudah kita lihat beberapa kali dari contoh-contoh sebelumnya. Kita bisa menggunakan getElementById untuk mengakses element HTML berdasarkan nilai id-nya.

** getElementsByTagName(tag)
Untuk mengakses element-element HTML berdasarkan jenis tag-nya, kita bisa menggunakan getElementsByTagName.

Contoh:

<!-- html -->
<h1 id="title">Hello, World!</h1>
<p>Selamat Datang di Skilvul</p>
<h1 class="subtitle">Mari Belajar JavaScript</h1>
let semuaTagH1 = document.getElementsByTagName("h1");

console.log(semuaTagH1); // Output: HTMLCollection(2) [h1#title, h1.subtitle]
console.log(semuaTagH1[0]); // Output: <h1 id="title">Hello, World!</h1>
console.log(semuaTagH1[1]); // Output: <h1 class="subtitle">Mari Belajar JavaScript</h1>
Penjelasan kode di atas:

Ketika kita memanggil document.getElementsByTagName("h1"), document sebagai akar objek dari halaman html kita akan mencari semua element <h1> di bawahnya.
Karena di contoh di atas terdapat 2 <h1>, maka document.getElementsByTagName("h1") akan mengembalikan 2 element <h1>. Untuk mengakses masing-masing element, bisa menggunakan [noIndex], sama seperti cara Array mengakses elementnya.

** getElementsByClassName(className)
Untuk mengakses element-element HTML berdasarkan nilai attribute class-nya, kita bisa menggunakan getElementsByClassName.

Contoh:

<!-- html -->
<h1 class="header">Hello, World!</h1>
<p>Selamat Datang di Skilvul</p>
<span class="header">Mari Belajar JavaScript</span>
let semuaClassHeader = document.getElementsByClassName("header");

console.log(semuaClassHeader); // Output: HTMLCollection(2) [h1.header, span.header]
console.log(semuaClassHeader[0]); // Output: <h1 class="header">Hello, World!</h1>
console.log(semuaClassHeader[1]); // Output: <span class="header">Mari Belajar JavaScript</span>
Penjelasan kode di atas:

Ketika kita memanggil document.getElementsByClassName("header"), document sebagai akar objek dari halaman html kita akan mencari semua element dengan attribute class bernilai header di bawahnya.
Karena di contoh di atas terdapat 2 element yang mempunyai class dengan nilai header, maka document.
getElementsByClassName("header") akan mengembalikan 2 element, yaitu element <h1 class="header> dan <span class="header">. Untuk mengakses masing-masing element, bisa menggunakan [noIndex], sama seperti cara Array mengakses elementnya.

** querySelectorAll(cssSelector)
Untuk mengakses element-element HTML berdasarkan CSS Selector-nya HTML, kita bisa menggunakan querySelectorAll.

Contoh:

<!-- html -->
<h1 class="header">Hello, World!</h1>
<p id="header2">Selamat Datang di Skilvul</p>
<span class="header">Mari Belajar JavaScript</span>
let h1ClassHeader = document.querySelectorAll('h1.header');

console.log(h1ClassHeader); // Output: NodeList [h1.header]
console.log(h1ClassHeader[0]); // Output: <h1 class="header">Hello, World!</h1>

let idHeader2 = document.querySelectorAll('#header2');

console.log(idHeader2); // Output: NodeList [p#header2]
console.log(idHeader2[0]); // Output: <p id="header2">Selamat Datang di Skilvul</p>
Penjelasan kode di atas:

Ketika kita memanggil document.querySelectorAll("h1.header"), document sebagai akar objek dari halaman html kita akan mencari semua element <h1> dengan attribute class bernilai header di bawahnya. Begitu juga ketika memanggil document.querySelectorAll('#header2'), document akan mencari semua element dengan id bernilai header2 di bawahnya.