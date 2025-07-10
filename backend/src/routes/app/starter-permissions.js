export function permissions() {
  const permissions = [
    // Beranda
    {
      name: 'Lihat Statistik',
      category: 'Beranda',
      description: 'Memberikan akses untuk melihat statistik umum platform.',
    },
    {
      name: 'Lihat Leaderboard',
      category: 'Beranda',
      description: 'Memberikan akses untuk melihat papan peringkat hasil ujian.',
    },
    {
      name: 'Kelola Pengumuman',
      category: 'Beranda',
      description: 'Memberikan hak untuk membuat, mengubah, dan menghapus pengumuman.',
    },
    {
      name: 'Lihat Kalender',
      category: 'Beranda',
      description: 'Memberikan akses untuk melihat kalender akademik atau jadwal kegiatan.',
    },
    {
      name: 'Kelola Berita',
      category: 'Beranda',
      description: 'Memberikan hak untuk membuat, mengubah, dan menghapus berita atau artikel.',
    },
    {
      name: 'Lihat Notifikasi',
      category: 'Beranda',
      description: 'Memberikan akses untuk melihat notifikasi sistem.',
    },
    {
      name: 'Kelola Pesan',
      category: 'Beranda',
      description: 'Memberikan hak untuk mengirim dan mengelola pesan internal.',
    },

    // Data Modul
    {
      name: 'Kelola Modul/Topik',
      category: 'Data Modul',
      description:
        'Memberikan hak untuk membuat, mengubah, dan menghapus modul atau topik pembelajaran.',
    },
    {
      name: 'Kelola Paket Soal',
      category: 'Data Modul',
      description: 'Memberikan hak untuk membuat, mengubah, dan mengelola paket soal.',
    },
    {
      name: 'Import Soal',
      category: 'Data Modul',
      description: 'Memberikan hak untuk mengimpor soal dari file eksternal (misal: Word, Excel).',
    },
    {
      name: 'Kelola Daftar Soal',
      category: 'Data Modul',
      description:
        'Memberikan hak untuk melihat, menambah, mengubah, dan menghapus soal individual.',
    },
    {
      name: 'Kelola File Manager',
      category: 'Data Modul',
      description:
        'Memberikan akses ke pengelola file untuk mengunggah dan mengatur media (gambar, audio, video).',
    },

    // Data Peserta
    {
      name: 'Kelola Peserta',
      category: 'Data Peserta',
      description: 'Memberikan hak untuk menambah, mengubah, dan menghapus data peserta ujian.',
    },
    {
      name: 'Kelola Kelas & Kelompok',
      category: 'Data Peserta',
      description: 'Memberikan hak untuk membuat dan mengelola kelas atau kelompok peserta.',
    },
    {
      name: 'Import Peserta',
      category: 'Data Peserta',
      description: 'Memberikan hak untuk mengimpor data peserta dari file eksternal.',
    },
    {
      name: 'Cetak Kartu Ujian',
      category: 'Data Peserta',
      description: 'Memberikan hak untuk mencetak kartu ujian untuk para peserta.',
    },

    // Data Ujian
    {
      name: 'Kelola Jadwal Ujian',
      category: 'Data Ujian',
      description: 'Memberikan hak untuk membuat, mengubah, dan menghapus jadwal ujian.',
    },
    {
      name: 'Lihat Data Ujian',
      category: 'Data Ujian',
      description: 'Memberikan akses untuk memantau data dan status ujian yang sedang berlangsung.',
    },
    {
      name: 'Lakukan Evaluasi Ujian',
      category: 'Data Ujian',
      description:
        'Memberikan hak untuk melakukan penilaian atau evaluasi manual pada jawaban esai.',
    },
    {
      name: 'Lihat Hasil Ujian',
      category: 'Data Ujian',
      description: 'Memberikan akses untuk melihat hasil ujian secara detail per peserta.',
    },
    {
      name: 'Lihat Rekap Hasil Ujian',
      category: 'Data Ujian',
      description: 'Memberikan akses untuk melihat rekapitulasi hasil dari beberapa ujian.',
    },
    {
      name: 'Kelola Pengaturan Ujian',
      category: 'Data Ujian',
      description: 'Memberikan hak untuk mengubah pengaturan umum terkait pelaksanaan ujian.',
    },
    {
      name: 'Kelola Token Ujian',
      category: 'Data Ujian',
      description:
        'Memberikan hak untuk membuat dan mengelola token yang digunakan peserta untuk memulai ujian.',
    },

    // Alat
    {
      name: 'Kelola Database',
      category: 'Alat',
      description: 'Memberikan hak untuk melakukan operasi tingkat lanjut pada database.',
    },
    {
      name: 'Lakukan Backup & Restore',
      category: 'Alat',
      description:
        'Memberikan hak untuk membuat cadangan (backup) dan memulihkan (restore) data sistem.',
    },

    // Kelola Akun
    {
      name: 'Kelola Peran (Role)',
      category: 'Kelola Akun',
      description:
        'Memberikan hak untuk membuat, mengubah, dan menghapus peran (role) pengguna beserta hak aksesnya.',
    },
    {
      name: 'Kelola Akun Pengguna',
      category: 'Kelola Akun',
      description:
        'Memberikan hak untuk membuat, mengubah, dan menghapus akun pengguna (admin, guru, siswa).',
    },
  ];

  return permissions;
}


export function defaultGrantedPermissions(){
     const permissionNames = [
      "Lihat Statistik", "Lihat Leaderboard", "Kelola Pengumuman", "Lihat Kalender",
      "Kelola Berita", "Lihat Notifikasi", "Kelola Pesan", "Kelola Modul/Topik",
      "Kelola Paket Soal", "Import Soal", "Kelola Daftar Soal", "Kelola File Manager",
      "Kelola Peserta", "Kelola Kelas & Kelompok", "Import Peserta", "Cetak Kartu Ujian",
      "Kelola Jadwal Ujian", "Lihat Data Ujian", "Lakukan Evaluasi Ujian",
      "Lihat Hasil Ujian", "Lihat Rekap Hasil Ujian", "Kelola Pengaturan Ujian",
      "Kelola Token Ujian"
    ];

    return permissionNames;
}

export function allGrantedPermissions(){
  const permissionNames = permissions().map(p => p.name);
  return permissionNames;
}