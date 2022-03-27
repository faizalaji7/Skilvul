# Export As dan Import As
Apakah kamu pernah merasa nama data atau function yang kamu buat ternyata terlalu panjang atau sulit untuk diingat?

Pada topik ini, kita dapat memberi alias (nama pengganti) pada nama data yang ingin kita export maupun import. Sehingga kita tidak perlu mengubah nama pada data aslinya.

## Export As
* Pertama, kamu dapat memberi alias pada nama variabel di suatu tipe data, objek, ataupun function yang ingin di-export dengan menggunakan export as.

export namaVariabelLama as namaVariabelBaru;

* Kita bisa lihat contoh di bawah ini menggunakan export as:

const warna = "Merah";

let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

function katakanHalo(user) {
  console.log(`Hello, ${user}!`);
}

export { warna as color, orang as person, katakanHalo as sayHello };

* Pada file JavaScript lain ketika kita ingin meng-import variabel warna, orang atau katakanHalo, caranya adalah seperti contoh di bawah ini:

import color from "./user.js";
import person from "./user.js";
import sayHello from "./user.js";

// kode di bawah ini akan error
import warna from "./user.js";
import orang from "./user.js";
import katakanHalo from "./user.js";

Bila kita perhatikan kode di atas, kita sudah tidak bisa menggunakan nama variabel yang lama ketika meng-import. Ini dikarenakan variabel yang lama sudah diberikan alias ke nama yang baru ketika di-export.

📝Catatan:

Penggunaan export as hanya bisa dilakukan dengan export secara sekaligus di akhir kode.
// Contoh tidak bisa menggunakan export as

export const warna = "Merah";

export let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

export function katakanHalo(user) {
  console.log(`Hello, ${user}!`);
}
# Import As
Tidak hanya dapat memberi alias pada data yang di-export, kita juga dapat memberi alias pada saat melakukan import data menggunakan import as.

import { namaVariabelLama as namaVariabelBaru } from "./namaModul.js";

* Contoh menggunakan import as:

// file user.js tempat mengexport
export const warnaKesukaan = "Merah";

export let orangBaru = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

export function katakanHalo(user) {
  console.log(`Hello, ${user}!`);
}
// file index.js tempat mengimport
import {
  warnaKesukaan as favoriteColor,
  orangBaru as newPerson,
  katakanHalo as sayHello,
} from "./user.js";

console.log(favoriteColor); // Output: Merah
console.log(newPerson); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(newPerson.nama); // Output: Hello, Thoriq!