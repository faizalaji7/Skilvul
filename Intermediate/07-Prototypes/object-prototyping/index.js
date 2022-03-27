// 1. Tambahkan method study() menggunakan prototype yang akan mengembalikan (gunakan return) string "I study at " + this.school pada objek Student di bawah method greeting().

// 2. Di bawah kode instance objek myStudent, lakukan console.log() untuk memanggil data name, school, method greeting(), dan method study() dari instance objek myStudent.

function Student(name, grade, score) {
  this.name = name;
  this.grade = grade;
  this.score = score;
}

Student.prototype.school = "Skilvul";

Student.prototype.greeting = function () {
  return "Hello " + this.name;
};

Student.prototype.study = function () {
  return "I study at " + this.school;
};

// Buat kode kamu dibawah ini
let myStudent = new Student("Sarah", 20, 100);
console.log(myStudent.name);
console.log(myStudent.school);
console.log(myStudent.greeting());
console.log(myStudent.study());