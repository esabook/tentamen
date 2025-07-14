export default function PaketSoal() {
  /*
  halaman untuk manajemen paket soal.
---
  halaman dibagi menjadi 2 bagian kanan dan kiri.
  bagian kanan bersifat collapsible seperti sidebar.
  
  bagian kiri:
  terdapat tabel daftar paket soal dengan kolom
  1. Checkbox
  1. Kode. contoh: PS001
  2. Judul dan Deskripsi. Controh: TryOut Matematika 2025 /r Deskripsi Paket Soal ini ...
  3. Kelas. contoh: Kelas 10, PPDB, SPMB
  4. Mapel. contoh: Matematika
  5. Jumlah Soal. contoh: 150
  6. Tag. contoh: latihan, demo
  7. Aksi. contoh: duplikat, edit-paket-soal, delete

  diatas tabel terdapat 
  rata kiri
  1. input search, 
  2. button reset, filter, 

  rata kanan
  1. mode grid/list.
  2. tambah-paket-soal
  3. export
  4. separator
  5. delete

  setiap header dapat digunakan untuk sort secara ACS, DESC
  pada bagian bawah terdapat pagination yang terdiri dari:
  rata kiri
  - menampilkan data [10] dari [100]
  - 50. number untuk item per page
  rata kanan
  - prev
  - <
  - 1
  - 2
  - >
  - next

  ketika row/baris di klik maka bagian kanan akan berubah menjadi: dari empty state menjadi tabel detail paket soal.
---
  bagian kanan terdiri dari hader, body.
  header (collapsible group):
  1. Kode (read only)
  2. Judul dan Deskripsi (editable)
  3. Deskripsi
  4. Kelas
  5. Mapel
  6. Jumlah Soal
  7. Tag
  body:
  berisi tabel untuk menampilkan soal, terdiri dari:
  1. No (terdapat logo gembok 🔒 jika nomor soal terkunci dan tidak dapat diacak)
  2. Soal. 
  3. Tipe Jawaban. Contoh: pilihan ganda
  4. Aksi. Contoh: edit, hapus, salin

---
  ketika klik tombol edit-paket-soal atau tambah-paket-soal, 
  maka bagian kanan menjadi mode form

  */

  return <div>Halaman Paket Soal</div>;
}
