// ** Latihan
// 1. Hapus data array inventory pada index ke-1 menggunakan method .splice().
// Contoh menggunakan .splice():

// var myCourse = ['html', 'css', 'javascript'];
// var removed = myCourse.splice(2, 1);

// removed is ["javascript"]
// myCourse is ["html", "css"]

// 2. Variabel item dan jumlahTerjual sudah dideklarasikan sebelumnya.
// Simpan nilai Topi dari array inventory ke dalam variabel item dan simpan nilai 7 ke dalam variabel jumlahTerjual dari data array inventory.

// 3. Lakukan console.log() pada variabel item dan jumlahTerjual sehingga menampilkan hasil seperti ini "Total penjualan Topi ada sebanyak 7 item" menggunakan string literal pada ES6.

// Contoh menggunakan string literal:

// let nama = 'Terra';
// console.log(`Hallo, nama saya ${nama}`)
// Expected Output:
// Hallo, nama saya Terra

let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];
  
  let item;
  let jumlahTerjual;
  
  // Buat kode kamu di bawah ini
  inventory.splice(1, 1)
  item = inventory[1][0]
  jumlahTerjual = inventory[1][1]
  
  console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);
  