// Mengakses Element Tunggal
// Syntax yang digunakan untuk mengakses data di dalam array seperti ini:

namaArray[nomorIndex]
// Contohnya seperti ini:

let namaBuah = ["mangga", "apel", "jeruk", "durian"];

console.log(namaBuah[0]); // Output: mangga
console.log(namaBuah[1]); // Output: apel
console.log(namaBuah[2]); // Output: jeruk
console.log(namaBuah[3]); // Output: durian
// Mengakses Element Terakhir di Array
// Coba kalian perhatikan contoh sebelumnya. durian adalah element terakhir dari array namaBuah. Untuk mengakses element itu, kita bisa hitung berdasarkan nomor index-nya dan kebetulan array namaBuah hanya memiliki 4 element jadi hitungnya masih gampang.

// Coba kalian perhatikan contoh berikut:

let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
// Tentunya akan lebih sulit untuk mengakses element terakhir dari array countries apabila kita harus menghitung nomor indexnya satu-per-satu dimulai dari element pertama.

// Akan tetapi ada cara singkat untuk melakukan semuanya itu!

// Di topik terakhir, kita sudah mempelajari tentang array length di mana syntax array.length itu mengembalikan jumlah data dari sebuah array. Di topik yang sama, kita juga diingatkan kalau nomor index dari sebuah array dimulai dari angka nol. Jadi untuk mengakses element terakhir dari sebuah array, kita bisa menggunakan formula sebagai berikut:

// nomor index element terakhir array = jumlah data array - 1

// Jadi untuk mengakses element terakhir dari array countries di atas bisa menggunakan cara singkat berikut:

// menggunakan formula di atas
let indexElementTerakhir = countries.length - 1;

console.log(countries[indexElementTerakhir]); // Output: Zimbabwe

// atau
console.log(countries[countries.length - 1]); // Output: Zimbabwe
// Mengakses Seluruh Element Array
// Namun, jika kita ingin mengakses seluruh data yang berada di dalam suatu array, maka kita cukup panggil nama dari array tersebut.

// Contoh 1:

let olahraga = ["Berenang", "Sepak Bola", "Bola Basket"];
console.log(olahraga); // Output: ["Berenang", "Sepak Bola", "Bola Basket"]

// Contoh 2:
let fruits = ['Mangga', 'Pisang', 'Jambu'];

console.log(fruits[fruits.length-1]);
console.log(fruits[2]);