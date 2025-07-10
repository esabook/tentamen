export function roles() {
  return [
    { name: 'Admin', description: 'Akses penuh ke seluruh sistem.' },
    {
      name: 'Operator',
      description: 'Membantu admin mengelola data operasional seperti ujian dan peserta.',
    },
    {
      name: 'Guru',
      description: 'Mengelola materi, soal, dan pelaksanaan ujian untuk kelasnya.',
    },
    { name: 'Siswa', description: 'Mengikuti ujian dan melihat hasil.' },
    {
      name: 'Wali Siswa',
      description: 'Memantau perkembangan dan hasil belajar siswa.',
    },
  ];
}
