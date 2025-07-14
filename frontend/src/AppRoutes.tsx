import React from 'react';
import { type RouteObject } from 'react-router-dom';

const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const NotFound404 = React.lazy(() => import('./pages/NotFound404'));
const Statistik = React.lazy(() => import('./pages/Beranda/Statistik'));
const Leaderboard = React.lazy(() => import('./pages/Beranda/Leaderboard'));
const Pengumuman = React.lazy(() => import('./pages/Beranda/Pengumuman'));
const Kalender = React.lazy(() => import('./pages/Beranda/Kalender'));
const Berita = React.lazy(() => import('./pages/Beranda/Berita'));
const Notifikasi = React.lazy(() => import('./pages/Beranda/Notifikasi'));
const Pesan = React.lazy(() => import('./pages/Beranda/Pesan'));
const Modul = React.lazy(() => import('./pages/Data Modul/Modul'));
const PaketSoal = React.lazy(() => import('./pages/Data Modul/PaketSoal'));
const ImportSoal = React.lazy(() => import('./pages/Data Modul/ImportSoal'));
const DaftarSoal = React.lazy(() => import('./pages/Data Modul/DaftarSoal'));
const FileManager = React.lazy(() => import('./pages/Data Modul/FileManager'));
const Peserta = React.lazy(() => import('./pages/Data Peserta/Peserta'));
const Kelas = React.lazy(() => import('./pages/Data Peserta/Kelas'));
const ImportPeserta = React.lazy(() => import('./pages/Data Peserta/ImportPeserta'));
const CetakKartu = React.lazy(() => import('./pages/Data Peserta/CetakKartu'));
const JadwalUjian = React.lazy(() => import('./pages/Data Ujian/JadwalUjian'));
const DataUjian = React.lazy(() => import('./pages/Data Ujian/DataUjian'));
const EvaluasiUjian = React.lazy(() => import('./pages/Data Ujian/EvaluasiUjian'));
const HasilUjian = React.lazy(() => import('./pages/Data Ujian/HasilUjian'));
const RekapHasilUjian = React.lazy(() => import('./pages/Data Ujian/RekapHasilUjian'));
const PengaturanUjian = React.lazy(() => import('./pages/Data Ujian/PengaturanUjian'));
const TokenUjian = React.lazy(() => import('./pages/Data Ujian/TokenUjian'));
const Database = React.lazy(() => import('./pages/Alat/Database'));
const BackupRestore = React.lazy(() => import('./pages/Alat/BackupRestore'));
const UmpanBalik = React.lazy(() => import('./pages/Pengaturan/UmpanBalik'));
const LogPerubahan = React.lazy(() => import('./pages/Pengaturan/LogPerubahan'));
const Versi = React.lazy(() => import('./pages/Pengaturan/Versi'));
const SyaratKetentuan = React.lazy(() => import('./pages/Pengaturan/SyaratKetentuan'));
const KebijakanPrivasi = React.lazy(() => import('./pages/Pengaturan/KebijakanPrivasi'));
const Kontak = React.lazy(() => import('./pages/Pengaturan/Kontak'));
const Dokumentasi = React.lazy(() => import('./pages/Pengaturan/Dokumentasi'));
const Tentang = React.lazy(() => import('./pages/Pengaturan/Tentang'));
const Bantuan = React.lazy(() => import('./pages/Pengaturan/Bantuan'));
const Integrasi = React.lazy(() => import('./pages/Pengaturan/Integrasi'));
const Keamanan = React.lazy(() => import('./pages/Pengaturan/Keamanan'));
const Aplikasi = React.lazy(() => import('./pages/Pengaturan/Aplikasi'));
const SistemServer = React.lazy(() => import('./pages/Pengaturan/SistemServer'));
const Bahasa = React.lazy(() => import('./pages/Akun/Bahasa'));
const Tema = React.lazy(() => import('./pages/Akun/Tema'));
const Profil = React.lazy(() => import('./pages/Akun/Profil'));
const RolePage = React.lazy(() => import('./pages/Akun/Role/Page'));

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
