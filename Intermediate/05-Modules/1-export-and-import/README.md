# Export and Import
Module pada file JavaScript membutuhkan penghubung antar satu file dengan file yang lain.

Untuk bisa menghubungkan file antar JavaScript kita bisa menggunakan export dan import sehingga memungkinkan untuk saling menggunakan kode antar module.

## Export
Export digunakan untuk meng-export variabel pada file JavaScript. Variabel yang di_export_ dapat berisi data seperti string, object, array, hingga function. Hal ini dilakukan agar file JavaScript tersebut dapat dijadikan sebuah module, sehingga variabel yang telah di-export dapat digunakan pada file JavaScript lain dengan menggunakan import.

Penggunaan export diawali dengan kata kunci export kemudian diikuti oleh nama variabel yang ingin di-export atau bisa digunakan di akhir kode kita, dengan nama variabel yang ingin di export.

* Contoh dasar melakukan export pada variabel :

export let name = "Thoriq";

* Kita tidak bisa langsung meng-export data tanpa disimpan ke dalam variabel terlebih dahulu seperti ini:

export 'Thoriq';

* Kita juga bisa melakukan export pada objek JavaScript:

export let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

* Selain variabel dan objek kita juga bisa meng-export sebuah function:

export function sayHello(user) {
  console.log(`Hello, ${user}!`);
}

* Lalu kita juga bisa meng-export variabel objek dan function sekaligus:

export let name = "Thoriq";

export let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

export function sayHello(user) {
  console.log(`Hello, ${user}!`);
}

* Atau juga bisa melakukan export secara terpisah untuk semua kode yang ingin kita export seperti contoh di bawah ini:

let name = "Thoriq";

let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

function sayHello(user) {
  console.log(`Hello, ${user}!`);
}

// Mengexport variable name, object orang dan function sayHello sekaligus
export { name, orang, sayHello };

# Import
Import diibaratkan sebagai pasangan dari export. Jadi import digunakan untuk menggunakan variabel yang sudah di-export dari module lainnya.

* Contoh dasar melakukan import variabel :

import { data } from "./namaModul.js";

* Contoh penggunaan dari import dengan menggunakan file export dari contoh di atas :

// index.js
import { name, orang, sayHello } from "./user.js";

// Menggunakan hasil import
console.log(name); // Output: Thoriq
console.log(orang); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(orang.nama); // Output: Hello, Thoriq!