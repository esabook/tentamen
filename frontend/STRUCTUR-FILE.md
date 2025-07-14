# Urutan Pengerjaan Halaman Proyek CBT

Dokumen ini menguraikan urutan pengerjaan halaman yang direkomendasikan untuk proyek CBT, dibagi ke dalam beberapa fase logis untuk memastikan pengembangan yang terstruktur dan efisien.

---

## Fase 1: Fondasi Aplikasi & Autentikasi
*Kerangka dasar yang harus ada sebelum fitur lain dapat berfungsi dengan baik.*

1.  ### `Login.jsx`
    -   **Alasan:** Gerbang utama aplikasi. Prioritas absolut untuk membangun manajemen sesi dan otorisasi. Tanpa ini, tidak ada pengguna (baik admin maupun siswa) yang bisa masuk.

2.  ### `Dashboard.jsx`
    -   **Alasan:** *Layout* utama setelah login, berisi navigasi (`AppSidebar`, `NavTopBar`) dan `Outlet` dari `react-router-dom` untuk merender halaman lain. Penting untuk struktur navigasi dasar.

3.  ### `NotFound404.jsx`
    -   **Alasan:** Halaman untuk menangani rute yang tidak valid. Mudah dibuat dan meningkatkan pengalaman pengguna.

---

## Fase 2: Manajemen Akses & Akun (Admin Core)
*Sebelum ada konten ujian, sistem harus bisa mengatur siapa yang boleh melakukan apa.*

1.  ### `Akun/Role/` (Page, Table, Store)
    -   **Alasan:** Jantung dari manajemen hak akses. Memungkinkan admin mendefinisikan peran (Guru, Siswa) dan izin mereka. Fitur lain akan bergantung pada sistem peran ini.

2.  ### `Akun/Profil.jsx` & `Akun/AccountSettings.jsx`
    -   **Alasan:** Fitur dasar yang memungkinkan setiap pengguna untuk melihat dan mengelola data pribadi mereka.

3.  ### `Akun/Logout.jsx`
    -   **Alasan:** Menyediakan fungsionalitas logout yang jelas dan aman.

---

## Fase 3: Manajemen Konten Ujian (Admin)
*Setelah admin memiliki akses, langkah selanjutnya adalah mengisi "bank soal".*

1.  ### `Data Modul/Modul.jsx`
    -   **Alasan:** Membangun struktur untuk mengkategorikan soal (misal: mata pelajaran) adalah langkah pertama yang baik.
2.  ### `Data Modul/DaftarSoal.jsx`
    -   **Alasan:** Inti dari bank soal. Admin memerlukan antarmuka untuk CRUD soal individual.
3.  ### `Data Modul/PaketSoal.jsx`
    -   **Alasan:** Mengelompokkan soal-soal yang sudah dibuat ke dalam paket yang akan digunakan dalam ujian.
4.  ### `Data Modul/ImportSoal.jsx` & `Data Modul/FileManager.jsx`
    -   **Alasan:** Fitur pendukung untuk efisiensi (impor soal massal) dan manajemen media (gambar, audio).

---

## Fase 4: Manajemen Peserta (Admin)
*Ujian tidak akan ada artinya tanpa peserta.*

1.  ### `Data Peserta/Kelas.jsx`
    -   **Alasan:** Mengelompokkan peserta ke dalam kelas/grup untuk mempermudah penugasan ujian.
2.  ### `Data Peserta/Peserta.jsx`
    -   **Alasan:** Halaman untuk CRUD data peserta ujian.
3.  ### `Data Peserta/ImportPeserta.jsx` & `Data Peserta/CetakKartu.jsx`
    -   **Alasan:** Fitur pendukung untuk efisiensi (impor) dan kebutuhan administratif (cetak kartu).

---

## Fase 5: Alur Inti Pelaksanaan Ujian (Admin & Siswa)
*Menyatukan semua modul sebelumnya menjadi fungsi utama CBT.*

1.  ### `Data Ujian/JadwalUjian.jsx` & `Data Ujian/PengaturanUjian.jsx`
    -   **Alasan:** Admin harus bisa menjadwalkan ujian, memilih paket soal, menugaskannya ke kelas, dan mengatur detail seperti durasi dan token.
2.  ### Halaman Pengerjaan Ujian (Siswa) - *Perlu Dibuat*
    -   **Alasan:** Halaman **paling krusial** dari perspektif siswa. Menampilkan soal, pilihan jawaban, timer, dan navigasi ujian. Prioritas utama dalam fase ini.
3.  ### `Data Ujian/TokenUjian.jsx`
    -   **Alasan:** Halaman bagi admin untuk mengelola dan mendistribusikan token ujian.

---

## Fase 6: Evaluasi & Pelaporan (Admin)
*Setelah ujian selesai, admin perlu melihat dan menganalisis hasilnya.*

1.  ### `Data Ujian/HasilUjian.jsx`
    -   **Alasan:** Menampilkan skor mentah per siswa setelah ujian selesai.
2.  ### `Data Ujian/EvaluasiUjian.jsx`
    -   **Alasan:** Penting untuk tipe soal esai yang memerlukan penilaian manual oleh guru/admin.
3.  ### `Data Ujian/RekapHasilUjian.jsx` & `Beranda/Leaderboard.jsx`
    -   **Alasan:** Menyediakan agregasi data dan visualisasi hasil untuk analisis lebih lanjut.

---

## Fase 7: Fitur Pelengkap & Pengaturan Sistem
*Halaman-halaman ini melengkapi aplikasi tetapi bisa dikerjakan di tahap akhir.*

1.  ### `Beranda/*` (Statistik, Pengumuman, Berita, dll.)
    -   **Alasan:** Fitur untuk memperkaya pengalaman pengguna di luar alur ujian inti.
2.  ### `Pengaturan/*` (Aplikasi, Keamanan, Tentang, dll.)
    -   **Alasan:** Halaman untuk konfigurasi sistem tingkat lanjut.
3.  ### `Alat/*` (BackupRestore, Database)
    -   **Alasan:** Fitur untuk administrasi sistem tingkat tinggi, biasanya menjadi prioritas terakhir.

---

Dengan mengikuti urutan ini, Anda membangun aplikasi secara bertahap, memastikan bahwa setiap fitur baru yang dikembangkan sudah memiliki fondasi yang kokoh.