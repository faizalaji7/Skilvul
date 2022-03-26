// 1. Buatlah variabel firstChar yang isinya merupakan pola regex untuk mencocokan huruf depan variabel word

// 2. Buatlah variabel lastChar yang isinya merupakan pola regex untuk mencocokan huruf terakhir variabel word

// 3. Buatlah variabel lastTwoChars yang isinya merupakan pola regex untuk mencocokan 2 huruf terakhir variabel word

// 4. Lakukan console.log() untuk melihat string matching pada variabel word dengan masing-masing variabel firstChar, lastChar, dan lastTwoChars .
// Gunakan method .match().

const word = 'Cakes';
const firstChar = /^C/;
const lastChar = /s$/;
const lastTwoChars = /es\b/;

console.log(word.match(firstChar));
console.log(word.match(lastChar));
console.log(word.match(lastTwoChars));
