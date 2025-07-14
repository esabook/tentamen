export function categories() {
  // SD, SMP, SMA/SMK
  // kelas, mapel, kelompok

  return ['SD', 'SMP', 'SMA/SMK', 'PPDB', 'Survey', 'Wali'].map((v) => ({
    name: v,
  }));
}

export function tags() {
  return [
    'Matematika',
    'Fisika',
    'Kimia',
    'Biologi',
    'Sejarah',
    'Geografi',
    'Bahasa Inggris',
    'Bahasa Indonesia',
    'Koding dan Kecerdasan Artifisial',
  ].map((v) => ({
    name: v,
  }));
}
