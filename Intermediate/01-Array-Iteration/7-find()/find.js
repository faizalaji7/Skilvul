// ** Perbedaan .filter() dan .find() dapat kita lihat pada kode di bawah ini:

let people = [
  {
    name: 'Jane',
    age: 20
  },
  {
    name: 'Doe',
    age: 15
  }
];

let janeFind = people.find(item => item.name === 'Jane');

let janeFilter = people.filter(item =>  item.name === 'Jane');

console.log(janeFind);
// Output: {name: 'Jane', age: 20} --> bentuk object

console.log(janeFilter);
// Output: [{ name: 'Jane', age: 20 }] --> bentuk array of object

// ** Contoh lainnya:
let number=[1, 2, 3, 4, 5, 6, 7];

let moreThanThree = number.find(data => data > 3);
let lebihDariTiga = number.filter(data => data > 3);

console.log(moreThanThree)
// Output: 4

console.log(lebihDariTiga)
// Output: [4,5,6,7]

// ** Latihan:
// 1. Lakukan pencarian pada array hewan menggunakan method .find(). Beri callback function dengan parameter item sebagai value dari data array.

// 2. Di dalam method .find() tambahkan return statement untuk melakukan pencarian nama hewan dengan kondisi nama hewan diawali oleh huruf "J" dan diakhiri huruf "h" (tanpa menggunakan if).

// Gunakan comparison operator dari JavaScript.


// 3. Buatlah variabel cariHewan dan assign seluruh kode kamu sebelumnya ke dalam variabel cariHewan menggunakan operator =.


// 4. Lakukan console.log() di luar blok kode .find() untuk menampilkan data pada variabel cariHewan dan pastikan data berisi teks string Jerapah.

// Cek pada tab Console untuk melihat data.

let hewan = ["Harimau", "Jerapah", "Jajah", "Ular"];

// Buat kode kamu di bawah ini
let cariHewan = hewan.find(item =>{
    return item[0] == 'J' && item [item.length-1] == 'h';
});

console.log(cariHewan)

// ** atau
// let cariHewan = hewan.find(item =>{
//     return item > 'J' && item < 'h';
// });

// console.log(cariHewan)