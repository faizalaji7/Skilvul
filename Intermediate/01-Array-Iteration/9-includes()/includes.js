// ** Contoh 1
const anime = ['one piece', 'jujutsu', 'naruto', 'kimetsu'];

const isThereOnePiece = anime.includes('one piece');
const isThereBoruto = anime.includes('boruto');

console.log(isThereOnePiece); 
// Output: true
console.log(isThereBoruto); 
// Output: false

// ** Cara lain:
console.log(!!foods.find(data => data === 'one piece'))  // Output: true --> menggunakan find

// ** Latihan
// 1. Buat function bernama checkFood() yang memiliki satu parameter string bernama foodName.

// 2. Di dalam function checkFood(), buatlah dua variabel yang masing-masing akan di-assign dengan nilai boolean hasil dari kondisi yang ada yaitu:
// isNotEmptyString untuk memastikan foodName bukan string kosong "" menggunakan operator !==,
// foodIsIncluded untuk mengecek keberadaan foodName di dalam array foods menggunakan .includes().
// Lalu buat sebuah if-else-statement untuk mengecek kebenaran dari dua variabel yaitu isNotEmptyString dan foodIsIncluded menggunakan operator &&.

// 3. Jika kondisi dalam if (...) bernilai true, tampilkan string "Makanan sudah tersedia" dan isi dari array foods menggunakan console.log().

// 4. Jika false masukkan nilai foodName ke dalam array foods dengan menggunakan method push() array.
// Lalu lakukan console.log() pada array foods.

// 5. Panggil function checkFood() dengan parameter string "Kwetiaw".
const foods = ['siomay', 'dimsum', 'gyoza', 'pangsit'];

// Buat kode kamu di bawah ini
function checkFood(foodName){
    const isNotEmptyString = (foodName !== "")
    const foodIsIncluded = foods.includes(foodName)

    if (isNotEmptyString && foodIsIncluded){
        console.log("Makanan sudah tersedia")
        console.log(foods)
    } else {
        foods.push(foodName)
        console.log(foods)
    }
}

checkFood("Kwetiaw")