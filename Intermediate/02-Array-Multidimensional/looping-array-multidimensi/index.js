// ** Contoh:
// cara 1 Menggunakan .for():
let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];
  
  for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].length; j++) {
      console.log(inventory[i][j]);
    }
  }

// cara 2 Menggunakan .forEach():
// let inventory = [
//     ["Kaos Polos", 21],
//     ["Jaket Hoodie", 13],
//     ["Topi", 7],
//   ];
  
//   inventory.forEach((baris) => {
//     baris.forEach((kolom) => {
//       console.log(kolom);
//     });
//   });

// cara 3 Menggunakan .map():
// let inventory = [
//     ["Kaos Polos", 21],
//     ["Jaket Hoodie", 13],
//     ["Topi", 7],
// ];

// inventory.map((baris) => {
//     baris.map((kolom) => {
//       console.log(kolom);
//     });
// });

// ** Latihan
// 1. Tampilkanlah tiap elemen yang terdapat pada array hewan menggunakan .forEach().
// Isi parameter .forEach() dengan callback function yang memiliki argumen parameter bernama baris.

// 2. Lalu di dalam .forEach() lakukan .forEach() kembali pada baris dengan parameter .forEach() berisi callback function yang memiliki argumen parameter bernama kolom

// 3. Lakukan console.log() pada kolom. Cek tab Console untuk melihat data yang ada pada array hewan.

let hewan = [
    ["Harimau", "Karnivora"],
    ["Gajah", "Herbivora"],
    ["Gorila", "Omnivora"],
  ];
    
  // Buat kode kamu dibawah ini
  hewan.forEach(baris => {
    baris.forEach(kolom =>{
      console.log(kolom)
    })
  })