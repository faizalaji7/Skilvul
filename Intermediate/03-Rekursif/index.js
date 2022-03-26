// 1. Buatlah fungsi rekursif bernama balikKata, untuk melakukan reverse pada sebuah string (contoh: skilvul menjadi luvliks).

// Fungsi tersebut memiliki 1 buah parameter yaitu str sebagai text string yang akan di-reverse.

// 2. Buatlah base case yang akan mengembalikan (gunakan return) string kosong "" jika str hanya berupa string kosong (gunakan if else sebagai conditional).


// 3. Di dalam else scope, buatlah recursion call yang akan me-return function balikKata() dengan argumen str yang dimulai dari index ke-1 (gunakan method substr()).

// Kemudian gabungkan dengan statement str index ke-0 (contoh: str[0]) menggunakan operator +.

// Contoh menggunakan substr():

// let nama = "Terra";
// console.log(nama.substr(1));
// // Output: "erra"

// 4. Lakukan console.log() pada recursive function balikKata() dengan memberikan argumen berupa data string "Skilvul". Cek tab Console untuk melihat hasil.

function balikKata(str) {
    if (str === "") {
        return "";
    } else {
        return balikKata(str.substr(1)) + str[0];
    }
}
console.log(balikKata("Skilvul"));