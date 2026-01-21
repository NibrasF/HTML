// console.error('Ini adalah pesan error yang ditampilkan manual');
try {
// Kode yang mungkin menghasilkan error
let hasil = functionNull();
} catch (error) {
console.error('Terjadi kesalahan:' + error.message);
}