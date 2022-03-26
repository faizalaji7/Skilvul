<!-- Menambahkan Data Array Multidimensi -->
anggap masing-masing produk mempunyai stok sebanyak 100 buah. Lalu sudah terjual sebanyak angka yang terlihat di kolom Penjualan. Kemudian kita ingin membuat laporan penjualan dengan menambahkan kolom Stok Tersisa di samping kanan kolom Penjualan. Sehingga data pada tabel produk akan menjadi seperti ini:

let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

Maka, untuk menambahkan kolom baru, kita dapat melakukan iterasi pada masing-masing array, lalu menggunakan method array .push() untuk menambah data pada kolom Stok Tersisa.

Berikut adalah beberapa contoh yang dapat digunakan untuk menambah data ke dalam array:

<!-- Menggunakan .for(): -->
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

// total produk dikurangi data yg terjual
for (let i = 0; i < inventory.length; i++) {
  let stokTersisa = 100 - inventory[i][1];
  inventory[i].push(stokTersisa);
}

<!-- Menggunakan .forEach(): -->
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

// total produk dikurangi data yg terjual
inventory.forEach((dataInventory) => {
  let stokTersisa = 100 - dataInventory[1];
  dataInventory.push(stokTersisa);
});

<!-- Menggunakan .map(): -->
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

// total produk dikurangi data yg terjual
inventory.map((dataInventory) => {
  let stokTersisa = 100 - dataInventory[1];
  dataInventory.push(stokTersisa);
});

<!-- Output: -->
[
   ["Kaos Polos", 21, 79],
   ["Jaket Hoodie", 13, 87],
   ["Topi", 7, 93],
]