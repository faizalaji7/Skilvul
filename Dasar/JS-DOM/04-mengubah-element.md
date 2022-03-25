Kita sudah belajar bagaimana caranya mengakses suatu element HTML di topik sebelumnya. Kali ini, kita akan membahas bagaimana cara mengubah element HTML tersebut.

element.innerHTML
Kita bisa menggunakan DOM Property innerHTML untuk mengambil/mengubah isi HTML dari sebuah element.

Contoh:

<!-- html -->
<p id="demo">Hello, World!</p>
// js
let demo = document.getElementById("demo");

console.log(demo.innerHTML); // Output: Hello, World!

// Ubah konten <p id="demo"> menjadi Hello, Dunia!
demo.innerHTML = "Hello, Dunia!";

console.log(demo.innerHTML); // Output: Hello, Dunia!
Penjelasan kode di atas:

Di baris console.log(demo.innerHTML);, kita hanya menampilkan nilai properti innerHTML dari element <p id="demo">. Waktu kode itu dijalankan, isi konten HTML dari element <p id="demo"> masih bernilai Hello, World!.
Kode berikutnya yaitu demo.innerHTML = "Hello, Dunia!"; kita akan memberikan nilai baru ke properti innerHTML-nya <p id="demo">.
Apabila kita cek halaman website kita di browser, <p id="demo"> yang tadinya menampilkan Hello, World! akan berubah menjadi Hello, Dunia! setelah kode JavaScript di atas dijalankan.
element.attribute
Nah, mungkin kalian sudah bisa menebak kira-kira apa itu element.attribute. element.attribute merupakan DOM Property yang bisa digunakan untuk mengambil/mengubah/menambah nilai attribute dari sebuah element.

Contoh:

<!-- html -->
<img src="https://bit.ly/2FKluzq" alt="Cat" id="cat-image" />

![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-javascript/element-attribute-cat.png)

// js
let catImage = document.getElementById("cat-image");

console.log(catImage.src); // Output: https://bit.ly/2FKluzq
console.log(catImage.alt); // Output: Cat

catImage.src = "https://bit.ly/3j6YdWJ";
catImage.alt = "Fish";
catImage.width = "400";

console.log(catImage.src); // Output: https://bit.ly/3j6YdWJ
console.log(catImage.alt); // Output: Fish
console.log(catImage.width); // Output: 400

![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-javascript/element-attribute-fish.png)

Penjelasan kode di atas:

Di baris console.log(catImage.src);, kita hanya menampilkan nilai attribute src dari element <img id="cat-image">. Waktu kode itu dijalankan, nilai attribute src dari element <img id="cat-image"> masih bernilai https://bit.ly/2FKluzq.
Di baris console.log(catImage.alt);, kita hanya menampilkan nilai attribute alt dari element <img id="cat-image">. Waktu kode itu dijalankan, nilai attribute alt dari element <img id="cat-image"> masih bernilai Cat.
Kode berikutnya yaitu cat.src = "https://bit.ly/3j6YdWJ"; kita akan memberikan nilai baru ke attribute src-nya <img id="cat-image">.
Begitu juga di kode berikutnya yaitu cat.alt = "Fish"; kita akan memberikan nilai baru ke attribute alt-nya <img id="cat-image">.
Kode berikutnya yaitu catImage.width = "400"; kita akan menambah attribute width ke element <h1 id="demo"> dengan nilai 400.
Apabila kita cek halaman website kita di browser, <img id="cat-image"> yang tadinya menampilkan foto kucing akan berubah menjadi foto ikan setelah kode JavaScript di atas dijalankan.
element.setAttribute(attribute, nilai)
setAttribute(attribute, nilai) fungsinya hampir sama dengan element.attribute = nilai hanya saja setAttribute itu termasuk DOM Method sedangkan element.attribute itu DOM Property.

Contoh:

<!-- html -->
<img src="https://bit.ly/2FKluzq" alt="Cat" id="cat-image" />
// js
let catImage = document.getElementById("cat-image");

catImage.setAttribute("src", "https://bit.ly/3j6YdWJ");
catImage.setAttribute("alt", "Fish");
catImage.setAttribute("width", "400");

console.log(catImage.src); // Output: https://bit.ly/3j6YdWJ
console.log(catImage.alt); // Output: Fish
console.log(catImage.width); // Output: 400
element.style.property
Kegunaan dari element.style.property adalah untuk mengambil/mengubah/menambah CSS dari element HTML.

Contoh:

<!-- html -->
<h1 id="demo" style="color: blue;">Hello, World!</h1>

![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-javascript/element-style-property-blue.png)

// js
let demo = document.getElementById("demo");

console.log(demo.style.color); // Output: blue

demo.style.color = "red";
demo.style.fontSize = "18px";

console.log(demo.style.color); // Output: red
console.log(demo.style.fontSize); // Output: 18px

![alt text](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-javascript/element-style-property-red.png)

Penjelasan kode di atas:

Di baris console.log(demo.style.color);, kita hanya menampilkan nilai properti style color dari element <h1 id="demo">. Waktu kode itu dijalankan, nilai properti style color dari element <h1 id="demo"> masih bernilai blue.
Kode berikutnya yaitu demo.style.color = "red"; kita akan memberikan nilai baru ke properti style color dari element <h1 id="demo">.
Kode berikutnya yaitu demo.style.fontSize = "18px"; kita akan menambah properti style fontSize ke element <h1 id="demo">.
Apabila kita cek halaman website kita di browser, <h1 id="demo"> yang tadinya menampilkan tulisan Hello, World! dengan warna biru akan berubah menjadi tulisan warna merah dengan ukuran tulisan 18px setelah kode JavaScript di atas dijalankan.