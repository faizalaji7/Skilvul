// ** Latihan
// 1. Tampilkanlah tiap elemen yang terdapat pada array buah menggunakan .forEach().
// Isi parameter .forEach() dengan callback function yang memiliki argumen parameter bernama item.

// 2. Di dalam method .forEach(), buatlah sebuah variabel sisa.
// Isi variabel sisa dengan data hasil pengurangan total buah sebanyak 50 dengan jumlah masing-masing array buah yang sudah dimakan.

// 3. Lakukan .push() pada item untuk menambahkan data sisa pada masing-masing array.

// 4. Di luar blok .forEach(), lakukanconsole.log() terhadap nilai buah setelah di .push() untuk melihat data dari kolom baru bernama sisa.

let buah = [
    ["Apel", 7],
    ["Jeruk", 4],
    ["Mangga", 2],
  ];
   
  // Kolom 0, nama buah
  // Kolom 1, buah yang sudah dimakan
  // Tulis kode kamu di bawah ini
  buah.forEach(item => {
    let sisa = 50 - item[1]
    item.push(sisa)
  });
  
  console.log(buah)
  // console.log(`${buah}`)
  