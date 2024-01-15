const tagihan = 1000;
const jumlahBeli = 4;
let diskon = 0.05;
let totalHarga = tagihan * jumlahBeli;

if (jumlahBeli > 3) {
    diskon = 0.35;
}

console.log(`Harga : ${tagihan}`);
console.log(`Jumlah Beli : ${jumlahBeli}`);
console.log(`Total Harga : ${totalHarga}`);
console.log(`Nilai potongan Diskon : ${diskon * totalHarga}`);
console.log(`Sesudah diskon : ${totalHarga - diskon * totalHarga}`);
