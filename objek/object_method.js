// Seperti yang kita bahas di topik sebelumnya, objek itu memiliki properti dan nilai. Selama ini kalian baru belajar untuk menambahkan nilai yang berupa string atau number, misalnya seperti ini

const user = {
   nama: "Stefan",
   umur: 21
}
// Sebenarnya tipe data dari nilai sebuah properti itu tidak terbatas kepada string dan number saja. Kita juga bisa memberi nilai berupa sebuah fungsi.

"Ha? Berarti ada fungsi di dalam objek gitu?"

// Benar banget! Fungsi yang terhubung pada sebuah objek kita sebut dengan istilah method.

// Jadi, objek sebenarnya bisa menampung fungsi di dalam propertinya, seperti ini contohnya:

let objek = {
   namaProperti1: nilaiProperti1,
//    namaProperti2: function() {...} // nilai dari namaProperti2 adalah method dari variabel objek
};
// Contoh:

let kalkulator = {
  namaOperasi: 'penjumlahan',
  jumlah: function(angka1, angka2) {
    return angka1 + angka2;
  }
};
"Lalu bagaimana cara mengakses method yang berada di dalam objek? Apakah sama dengan cara mengakses properti objek biasa?"

// Hampir mirip, hanya tinggal tambahkan tanda kurung () dan isi parameter di dalam tanda kurung tersebut jika method tersebut membutuhkan parameter.

Contoh:

let kalkulator = {
  namaOperasi: 'penjumlahan',
  jumlah: function(angka1, angka2) {
    return angka1 + angka2;
  }
};

console.log(kalkulator.jumlah(2, 3)); // Output: 5
// 📝 Catatan:

// Karena method merupakan properti dari suatu objek, maka untuk menambahkan method baru ke dalam objek caranya sama seperti menambahkan properti baru ke dalam objek.
// Kalian sekarang mungkin berpikir "Kenapa tidak buat fungsi sendiri saja di luar objeknya?"

// Menambahkan fungsi sebagai method dari sebuah objek itu memilki beberapa kelebihan:

// Menghindari konflik penamaan fungsi
// Misalkan kita mempunyai dua objek, kucing dan anjing. Lalu kita ingin membuat dua buah fungsi suara yang mengembalikan suara dari kedua hewan tersebut. Tentu kita tidak bisa melakukannya seperti di bawah ini. Sebab saat kita mendefinisikan fungsi yang namanya sama dengan fungsi sebelumnya, fungsi baru itu akan menimpa fungsi yang lama.

const kucing = {
  // isi properti dan nilai objek kucing
};

function suara() { return "Meong"; }

const anjing = {
  // isi properti dan nilai objek anjing
};

//fungsi ini akan menimpa fungsi suara yang pertama
function suara() { return "Gukguk"; }

console.log(suara()); // Output: Gukguk
// Dengan membuat fungsi suara sebagai method dari masing-masing objek, kita tetap dapat menghindari konflik tersebut. Sebab fungsi suara sekarang akan terhubung dengan objek yang berbeda. Jadi pada saat pemanggilannya, kita juga mengawalinya dengan nama objek di mana method tersebut didefinisikan.

const kucing = {
  // isi properti dan nilai objek kucing,
  suara: function() { return "Meong"; }
};

const anjing = {
  // isi properti dan nilai objek anjing
  suara: function() { return "Gukguk"; }
};

//panggil method suara dalam masing-masing objek
console.log(kucing.suara()); //Output: Meong
console.log(anjing.suara()); // Output: Gukguk
// Definisi fungsi yang terpusat
// Kita ambil contoh objek di awal tadi

const user = {
   nama: "Stefan",
   umur: 21
};
// Katakanlah kita ingin menggunakan kalimat perkenalan "Nama saya Stefan. Saya berumur 21 tahun"di beberapa fungsi lainnya. Cara manual tentu dengan menulisnya satu per satu seperti ini

function fungsiA() {
  //isi dari fungsiA
  console.log(`Nama saya ${user.nama}. Saya berumur ${user.umur} tahun`);
}

function fungsiB() {
  //isi dari fungsiB
  console.log(`Nama saya ${user.nama}. Saya berumur ${user.umur} tahun`);
}

function fungsiC() {
  //isi dari fungsiC
  console.log(`Nama saya ${user.nama}. Saya berumur ${user.umur} tahun`);
}
// Tapi misalkan sekarang kita ingin menambahkan properti baru makananFavorit: "Pizza" ke objek user. Tentu kita juga ingin mengubah kalimat perkenalannya menjadi "Nama saya Stefan. Saya berumur 21 tahun. Saya suka Pizza". Tapi karena kita membuat kalimatnya secara manual pada fungsiA, fungsiB, dan fungsiC, kita harus mengubah secara manual juga di ketiga fungsi tersebut.

"Repot banget dong kalau begitu"

// Nah, dengan membuat sebuah method di objek user yang mengembalikan kalimat perkenalan tadi, kita cukup memanggil method tersebut di tempat kita ingin menggunakan kalimat tersebut saja.

// buat method perkenalanDiri yang mengembalikan kalimat perkenalan
const user = {
   nama: "Stefan",
   umur: 21,
   makananFavorit: "Pizza",
   perkenalanDiri: () => { 
      return `Nama saya ${this.nama}. Saya berumur ${this.umur}. Saya suka ${this.makananFavorit}`;
   }
};

// panggil method tersebut di dalam fungsi yang kita inginkan
function fungsiA() {
  // isi dari fungsiA
  console.log(user.perkenalanDiri());
}

function fungsiB() {
  // isi dari fungsiB
  console.log(user.perkenalanDiri());
}

function fungsiC() {
  // isi dari fungsiC
  console.log(user.perkenalanDiri());
}
// Sekarang, jika ada perubahan pada kalimat perkenalan, kita hanya perlu mengubahnya di satu tempat saja: di method perkenalanDiri() pada objek user.