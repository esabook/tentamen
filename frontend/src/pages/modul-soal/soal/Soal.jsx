export default function DaftarSoal() {
  /*
  halaman untuk daftar soal
  halaman dibagi menjadi 2 bagian kanan dan kiri.
  bagian kanan bersifat collapsible seperti sidebar.
  

  >> bagian kanan:
  header untuk informasi paket soal:
  - tombol preview, publish, close
  - image/cover

  1. Kode (read only)
  2. Judul dan Deskripsi (editable)
  3. Deskripsi
  4. Kategori
  5. Tag
  6. Jumlah Soal target
  7. Jumlah soal yang tersedia

  body:
  grid kolom-baris 5 x 5 atau 5 x number untuk menampung placeholder jumlah soal target.
  terdisi dari:
  1. No (terdapat logo gembok 🔒 di kiri-atas jika nomor soal terkunci dan tidak dapat diacak)
  2. Background hijau jika sudah terdapat soal.
  3. Background abu jika belum terdapat soal.

  
  >> bagian kiri:
  terdapat stepper atau tab:
  1. Informasi dasar
  2. Tambah Pertanyaan
  3. Peraturan Soal dan ujian

  1. Informasi dasar
  - textarea wyswyg petunjuk pengerjaan
  - batas replay audio
  - batas replay video
  - konversi skor nilai [1]x skor nilai per soal. [1] input number 

  peraturan soal (soal rule):
  - dropdown pilih template
  - [checkbox] acak soal
  - [] acak pilihan ganda
  - [] skor tidak menjawab [0]
  - [] skor jawaban salah [2]
  - [] skor jawaban benar [20]
  - [] dapat lompati soal
  - [] redirect soal selanjutnya saat mengirim jawaban
  - [] tampilkan skor sementara
  - button "simpan" sebagai template peraturan soal



  2. Tambah Pertanyaan:
  preview dan formulir pembuatan soal yang terdiri dari:
  1. Input judul
  2. Dropdown tipe pertanyaan/jawaban
  3. Input pertanyaan wyswyg
  4. input jawaban 


  3. Peraturan Soal:
  preview dan formulir pengaturan soal yang terdiri dari:
  1. Masa aktif
   - (radio) batas waktu: date-picker to date-picker
   - () selalu aktif
   - () atur nanti
   2. Batas Kesempatan Ujian ulang
   - () Tidak terbatas
   - () Maksimal: [1] Kali. [1] = input-number
   - () satu peserta per hari: [2] kali. [2] = input-number
   3. Pengaturan sesi jawab
   - Gunakan durasi batas waktu jawan
   - Durasi untuk menyelesaikan soal: [30] menit. [30] = input-number
   - Durasi Fleksibel. tercepat [1] menit. batas terlama [10] menit.


  


  */
  return <div>Halaman Daftar Soal</div>;
}
