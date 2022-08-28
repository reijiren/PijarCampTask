// 1. Filter
/* Digunakan untuk melakukan filtering pada array.
Filter biasanya digunakan ketika kita ingin mendapatkan nilai pada array dengan kondisi tertentu,
contohnya seperti mencari nilai yang lebih besar dari 5, atau lebih kecil dari 5, atau semacamnya.
*/
const umur = [33, 40, 20, 10, 5, 23];
const hasil = umur.filter(cekRemaja);

function cekRemaja(age){
    return age > 18;
}
//console.log(hasil);

// 2. Push
// Digunakan untuk menambahkan value ke dalam array yang sudah ada.
const mobil = ["BMW", "Mercedes", "Toyota"]
console.log("Before push: " + mobil);

mobil.push("Mitsubishi");
console.log("After  push: " + mobil);

// 3. Pop
// Digunakan untuk mengambil elemen terakhir dari sebuah array. 
const buah = ["Pisang", "Apel", "Jeruk", "Pepaya"]
const ambil = buah.pop();

console.log("Buah yang diambil: " + ambil);
console.log("Buah yang tersisa: " + buah);

// 4. Reduce
// Digunakan untuk melakukan pengurangan dari setiap angka yang ada 
// didalam array, mulai dari elemen pertama.
const uang = [10000, 5000, 500, 1000];
const jumlah = uang.reduce(redFunc);

function redFunc(total, uang){
    return total - uang;
}
console.log("Hasil reduce: " + jumlah);