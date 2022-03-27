# Polymorphism
Pada child class, selain mewarisi semua sifat dari parent-nya, child class juga bisa memiliki kemampuan yang berbeda dengan parent-nya. Dengan kata lain, child class memiliki metode yang sama dengan parent-nya namun bisa jadi berbeda output dengan sibling atau parent-nya, hal ini dikenal dengan sebutan polymorphism.

Secara bahasa, Polymorphism berasal dari dua kata, yaitu poly yang berarti banyak dan morphism yang berarti bentuk.

Polymorphism ini juga dikenal pada konsep OOP yang berarti kemampuan dari suatu objek untuk memiliki banyak bentuk. Untuk memperjelas maksud di atas, coba perhatikan hirarki berikut:

[](https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/js-intermediate/oop-polymorphism.png)

* Kucing adalah Hewan
* Anjing adalah Hewan
* Anggora adalah Kucing
* Anggora adalah Hewan

Contoh gambar di atas menjelaskan bahwa, child class adalah bagian dari parent class. Tetapi parent class bukanlah bagian dari child class. Walaupun Kucing dan Anjing merupakan bagian dari Hewan, tetapi mereka memiliki karakteristik yang berbeda.

Pada topik sebelumnya, kamu sudah belajar caranya untuk mewarisi suatu class. Maka child class akan memiliki properti dan method dari parent class-nya. Polymorphism di sini mengarah pada method yang dimiliki oleh child class.

Perhatikan contoh kode berikut ini:

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  suara() {
    console.log("Ini suara hewan");
  }
}

class Kucing extends Hewan {
  constructor(nama) {
    super(nama);
  }
}

let kucing = new Kucing("TOM");
kucing.suara(); //Output: Ini suara hewan

Dari contoh kode di atas, objek yang dibuat dari class Kucing, dapat menggunakan method suara() yang dimiliki oleh class Hewan. Tapi ternyata output suara() yang dimiliki oleh class Kucing adalah Ini suara hewan, berbeda dengan yang diharapkan. Lalu bagaimana caranya agar method suara() pada class Kucing dapat menghasilkan suara miaaaw?

Untuk dapat melakukan hal tersebut, kamu perlu membuat method pada child class dengan nama yang sama pada parent class tetapi isinya berbeda. Cara seperti ini disebut dengan overriding.

Sehingga kode yang seharusnya adalah seperti berikut ini:

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  suara() {
    console.log("suara hewan");
  }
}

class Kucing extends Hewan {
  constructor(nama) {
    super(nama);
  }

  // Overriding
  suara() {
    console.log("miaaaw");
  }
}

let kucing = new Kucing("TOM");
kucing.suara(); // Output: miaaaw

Dari kode di atas, di dalam class Kucing dibuat kembali method suara() dengan nama yang sama tetapi isinya berbeda. Sehingga ketika method itu dipanggil, maka akan menghasilkan output miaaaw.
