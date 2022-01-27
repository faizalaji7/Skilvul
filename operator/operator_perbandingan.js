// Operator == (Loose Equality)
let bilangan = 10;
console.log(bilangan == 10); // Output: true
console.log(bilangan == 8); // Output: false
console.log(bilangan == "10"); // Output: true
// Mari kita coba perhatikan bilangan == "10". Kenapa outputnya bisa true? Karena di dalam JavaScript jika operand-nya berbeda tipe data, maka salah satunya akan dipaksa berubah tipe datanya (type coercion) agar mereka sama dan bisa dibandingkan

// 📝 Catatan:
// Yang dimaksud dengan operand adalah nilai yang digunakan di dalam sebuah proses operasi. Misalnya dalam operasi penjumlahan 1 + 2, yang tergolong operand adalah angka 1 dan 3.
// Biar lebih paham, mari kita coba perhatikan contoh di bawah ini:
console.log("3.14" == 3.14) // Output: true 
// Kenapa kode di atas menghasilkan output true?

// Sebab "3.14" diubah dulu menjadi tipe data number agar bisa dibandingkan nilainya. Lalu baru dibandingkan 3.14 === 3.14.

// Jadi pada dasarnya == akan berusaha mengubah tipe data jika tipe dari kedua berbeda. Lalu bagaimana kalau kita ingin membandingkan nilai dan tipe datanya juga? Mari kita lihat contoh selanjutnya.


// Operator === (Strict Equality)
let bilangan = 10;
console.log(bilangan === 10); // Output: true --> nilai dan tipe data sama
console.log(bilangan === "10"); // Output: false --> nilai sama tetapi tipe data tidak sama
// Kali ini, outputnya akan berupa true apabila kedua operand memiliki nilai dan tipe data yang sama. Makanya pada baris kedua contoh kode di atas menghasilkan output false sebab kita membandingkan bilangan 10 dengan string "10" yang berbeda tipe datanya.


// Operator !=
let bilangan = 10;
console.log(bilangan != 8); // Output: true --> nilai tidak sama tetapi tipe data sama
console.log(bilangan != "8"); // Output: true --> nilai dan tipe data tidak sama
console.log(bilangan != 10); // Output: false --> nilai dan tipe data sama
console.log(bilangan != "10"); // Output: false --> nilai sama tetapi tipe data tidak sama
// Mungkin kalian agak bingung kalau melihat contoh di atas. Yang perlu kalian ketahui adalah operator != akan menghasilkan output false apabila kedua operand memiliki nilai yang sama, tidak terpengaruh sama tipe datanya.


// Operator !==
let bilangan = 10;
console.log(bilangan !== 8); // Output: true --> nilai tidak sama tetapi tipe data sama
console.log(bilangan !== "8"); // Output: true --> nilai dan tipe data tidak sama
console.log(bilangan !== 10); // Output: false --> nilai dan tipe data sama
console.log(bilangan !== "10"); // Output: true --> nilai sama tetapi tipe data tidak sama
// Kali ini nilai dan tipe data akan dicek. Operator ini hanya akan mengeluarkan output false apabila **nilai dan tipe data dari kedua operand sama. **


// Operator >(Lebih Dari)
let bilangan = 10;
console.log(bilangan > 10); // Output: false
console.log(bilangan > 11); // Output: false
console.log(bilangan > 8); // Output: true


// Operator < (Kurang Dari)
let bilangan = 10;
console.log(bilangan < 10); // Output: false
console.log(bilangan < 8); // Output: false
console.log(bilangan < 11); // Output: true


// Operator >=(Lebih Dari atau Sama Dengan)
let bilangan = 10;
console.log(bilangan >= 10); // Output: true
console.log(bilangan >= 8); // Output: true
console.log(bilangan >= 11); // Output: false


// Operator <= (Kurang Dari atau Sama Dengan)
let bilangan = 10;
console.log(bilangan <= 10); // Output: true
console.log(bilangan <= 11); // Output: true
console.log(bilangan <= 8); // Output: false


// Operator Ternary
// Digunakan untuk memberikan nilai pada variabel sesuai dengan kondisi yang ditentukan.
// Syntaxnya adalah:

// variabel = (kondisi true) ? nilai1 : nilai2;
// Artinya apabila kondisi true, maka variabel akan diberi nilai1
// Apabila kondisi false, maka variabel akan diberi nilai2
// Contoh:
let makanan = "daging";
let jenisHewan = makanan === "daging"  ? "karnivora" : "herbivora";
console.log(jenisHewan); // Output: "karnivora"
// Pada kode di atas, kondisi yang diberikan adalah makanan === "daging". Karena kondisi tersebut bernilai true, maka yang dikembalikan oleh operator ini adalah "karnivora".

// Seandainya variabel makanan tidak bernilai "daging", maka kondisi makanan === "daging" akan bernilai false dan nilai yang akan dikembalikan adalah "herbivora".