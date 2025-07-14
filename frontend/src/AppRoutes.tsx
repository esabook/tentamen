import React from 'react';
import { type RouteObject } from 'react-router-dom';

const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const NotFound404 = React.lazy(() => import('./pages/NotFound404'));
const Statistik = React.lazy(() => import('./pages/beranda/Statistik'));
const Leaderboard = React.lazy(() => import('./pages/beranda/Leaderboard'));
const Pengumuman = React.lazy(() => import('./pages/beranda/Pengumuman'));
const Kalender = React.lazy(() => import('./pages/beranda/Kalender'));
const Berita = React.lazy(() => import('./pages/beranda/Berita'));
const Notifikasi = React.lazy(() => import('./pages/beranda/Notifikasi'));
const Pesan = React.lazy(() => import('./pages/beranda/Pesan'));
const Modul = React.lazy(() => import('./pages/data-modul/Modul'));
const PaketSoal = React.lazy(() => import('./pages/data-modul/PaketSoal'));
const ImportSoal = React.lazy(() => import('./pages/data-modul/ImportSoal'));
const DaftarSoal = React.lazy(() => import('./pages/data-modul/DaftarSoal'));
const FileManager = React.lazy(() => import('./pages/data-modul/FileManager'));
const Peserta = React.lazy(() => import('./pages/data-peserta/Peserta'));
const Kelas = React.lazy(() => import('./pages/data-peserta/Kelas'));
const ImportPeserta = React.lazy(() => import('./pages/data-peserta/ImportPeserta'));
const CetakKartu = React.lazy(() => import('./pages/data-peserta/CetakKartu'));
const JadwalUjian = React.lazy(() => import('./pages/data-ujian/JadwalUjian'));
const DataUjian = React.lazy(() => import('./pages/data-ujian/DataUjian'));
const EvaluasiUjian = React.lazy(() => import('./pages/data-ujian/EvaluasiUjian'));
const HasilUjian = React.lazy(() => import('./pages/data-ujian/HasilUjian'));
const RekapHasilUjian = React.lazy(() => import('./pages/data-ujian/RekapHasilUjian'));
const PengaturanUjian = React.lazy(() => import('./pages/data-ujian/PengaturanUjian'));
const TokenUjian = React.lazy(() => import('./pages/data-ujian/TokenUjian'));
const Database = React.lazy(() => import('./pages/alat/Database'));
const BackupRestore = React.lazy(() => import('./pages/alat/BackupRestore'));
const UmpanBalik = React.lazy(() => import('./pages/pengaturan/UmpanBalik'));
const LogPerubahan = React.lazy(() => import('./pages/pengaturan/LogPerubahan'));
const Versi = React.lazy(() => import('./pages/pengaturan/Versi'));
const SyaratKetentuan = React.lazy(() => import('./pages/pengaturan/SyaratKetentuan'));
const KebijakanPrivasi = React.lazy(() => import('./pages/pengaturan/KebijakanPrivasi'));
const Kontak = React.lazy(() => import('./pages/pengaturan/Kontak'));
const Dokumentasi = React.lazy(() => import('./pages/pengaturan/Dokumentasi'));
const Tentang = React.lazy(() => import('./pages/pengaturan/Tentang'));
const Bantuan = React.lazy(() => import('./pages/pengaturan/Bantuan'));
const Integrasi = React.lazy(() => import('./pages/pengaturan/Integrasi'));
const Keamanan = React.lazy(() => import('./pages/pengaturan/Keamanan'));
const Aplikasi = React.lazy(() => import('./pages/pengaturan/Aplikasi'));
const SistemServer = React.lazy(() => import('./pages/pengaturan/SistemServer'));
const Bahasa = React.lazy(() => import('./pages/akun/Bahasa'));
const Tema = React.lazy(() => import('./pages/akun/Tema'));
const Profil = React.lazy(() => import('./pages/akun/Profil'));
const RolePage = React.lazy(() => import('./pages/akun/role/Page'));

const dashboardRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <h2>Selamat datang di Dashboard</h2>,
      },
      {
        path: 'statistik',
        element: <Statistik />,
      },
      {
        path: 'leaderboard',
        element: <Leaderboard />,
      },
      {
        path: 'pengumuman',
        element: <Pengumuman />,
      },
      {
        path: 'kalender',
        element: <Kalender />,
      },
      {
        path: 'berita',
        element: <Berita />,
      },
      {
        path: 'notifikasi',
        element: <Notifikasi />,
      },
      {
        path: 'pesan',
        element: <Pesan />,
      },
      {
        path: 'modul',
        element: <Modul />,
      },
      {
        path: 'paket-soal',
        element: <PaketSoal />,
      },
      {
        path: 'import-soal',
        element: <ImportSoal />,
      },
      {
        path: 'daftar-soal',
        element: <DaftarSoal />,
      },
      {
        path: 'file-manager',
        element: <FileManager />,
      },
      {
        path: 'peserta',
        element: <Peserta />,
      },
      {
        path: 'kelas',
        element: <Kelas />,
      },
      {
        path: 'import-peserta',
        element: <ImportPeserta />,
      },
      {
        path: 'cetak-kartu',
        element: <CetakKartu />,
      },
      {
        path: 'jadwal-ujian',
        element: <JadwalUjian />,
      },
      {
        path: 'data-ujian',
        element: <DataUjian />,
      },
      {
        path: 'evaluasi-ujian',
        element: <EvaluasiUjian />,
      },
      {
        path: 'hasil-ujian',
        element: <HasilUjian />,
      },
      {
        path: 'rekap-hasil-ujian',
        element: <RekapHasilUjian />,
      },
      {
        path: 'pengaturan-ujian',
        element: <PengaturanUjian />,
      },
      {
        path: 'token-ujian',
        element: <TokenUjian />,
      },
      {
        path: 'database',
        element: <Database />,
      },
      {
        path: 'backup-restore',
        element: <BackupRestore />,
      },
      {
        path: 'profil',
        element: <Profil />,
      },
      {
        path: 'tema',
        element: <Tema />,
      },
      {
        path: 'bahasa',
        element: <Bahasa />,
      },
      {
        path: 'sistem-server',
        element: <SistemServer />,
      },
      {
        path: 'aplikasi',
        element: <Aplikasi />,
      },
      {
        path: 'keamanan',
        element: <Keamanan />,
      },
      {
        path: 'integrasi',
        element: <Integrasi />,
      },
      {
        path: 'bantuan',
        element: <Bantuan />,
      },
      {
        path: 'tentang',
        element: <Tentang />,
      },
      {
        path: 'dokumentasi',
        element: <Dokumentasi />,
      },
      {
        path: 'kontak',
        element: <Kontak />,
      },
      {
        path: 'kebijakan-privasi',
        element: <KebijakanPrivasi />,
      },
      {
        path: 'syarat-ketentuan',
        element: <SyaratKetentuan />,
      },
      {
        path: 'versi',
        element: <Versi />,
      },
      {
        path: 'log-perubahan',
        element: <LogPerubahan />,
      },
      {
        path: 'umpan-balik',
        element: <UmpanBalik />,
      },
      {
        path: 'role',
        element: <RolePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
];

export default dashboardRoutes;
