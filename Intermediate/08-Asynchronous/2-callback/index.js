// 1. Buatlah function JavaScript bernama mandi lalu lakukan console.log() yang berisi nilai string "Mandi"
// 2. Buatlah function JavaScript bernama sarapan.
// Di dalam function tersebut gunakan setTimeout() dengan argumen pertama function yang mengembalikan console.log() berisi nilai string "Sarapan tertunda 3 detik" dan argumen kedua berupa durasi waktunya sebesar 3000 (milidetik).
// Catatan: 1000 milidetik = 1 detik
// 3. Buatlah function JavaScript bernama berangkatSekolah lalu lakukan console.log() yang berisi nilai string "Berangkat Sekolah".
// 4. Jika kita memanggil ketiga function dengan urutan mandi, sarapan dan berangkatSekolah maka sarapan menjadi paling terakhir dieksekusi.
// Ubahlah function sarapan menjadi selesai dieksekusi sebelum berangkatSekolah menggunakan callback 5.
// Panggillah kembali ketiga function di atas dengan urutan mandi, sarapan, lalu berangkatSekolah.

function mandi() {
    console.log('Mandi');
}

function sarapan(callback) {
    setTimeout(function () {
        console.log('Sarapan tertunda 3 detik');
        callback();
    }, 3000);
}

function berangkatSekolah() {
    console.log('Berangkat Sekolah');
}

mandi();
sarapan(berangkatSekolah);