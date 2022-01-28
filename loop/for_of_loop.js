const buku = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (let x of buku) {
  console.log(x);
}

// Contoh lain
let angka = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

// Tulis kode kalian di bawah ini
for (let x of angka){
    if(x % 2 == 1 ){
    ganjil.push(x);
    }
}
console.log(ganjil);