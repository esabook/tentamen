import { Routes, Route } from "react-router-dom";
import React from "react";

function lazy(params) {
  return React.lazy(() => import( /* @vite-ignore */ params));
}
const Login = lazy("./pages/Login");
const Dashboard = lazy("./pages/Dashboard");
const NotFound = lazy("./pages/NotFound");
const Statistik = lazy("./pages/Beranda/Statistik");
const Leaderboard = lazy("./pages/Beranda/Leaderboard");
const Pengumuman = lazy("./pages/Beranda/Pengumuman");
const Kalender = lazy("./pages/Beranda/Kalender");
const Berita = lazy("./pages/Beranda/Berita");
const Notifikasi = lazy("./pages/Beranda/Notifikasi");
const Pesan = lazy("./pages/Beranda/Pesan");
const Modul = lazy("./pages/Data Modul/Modul");
const PaketSoal = lazy("./pages/Data Modul/PaketSoal");
const ImportSoal = lazy("./pages/Data Modul/ImportSoal");
const DaftarSoal = lazy("./pages/Data Modul/DaftarSoal");
const FileManager = lazy("./pages/Data Modul/FileManager");
const Peserta = lazy("./pages/Data Peserta/Peserta");
const Kelas = lazy("./pages/Data Peserta/Kelas");
const ImportPeserta = lazy("./pages/Data Peserta/ImportPeserta");
const CetakKartu = lazy("./pages/Data Peserta/CetakKartu");
const JadwalUjian = lazy("./pages/Data Ujian/JadwalUjian");
const DataUjian = lazy("./pages/Data Ujian/DataUjian");
const EvaluasiUjian = lazy("./pages/Data Ujian/EvaluasiUjian");
const HasilUjian = lazy("./pages/Data Ujian/HasilUjian");
const RekapHasilUjian = lazy("./pages/Data Ujian/RekapHasilUjian");
const PengaturanUjian = lazy("./pages/Data Ujian/PengaturanUjian");
const TokenUjian = lazy("./pages/Data Ujian/TokenUjian");
const Database = lazy("./pages/Alat/Database");
const BackupRestore = lazy("./pages/Alat/BackupRestore");
const UmpanBalik = lazy("./pages/Pengaturan/UmpanBalik");
const LogPerubahan = lazy("./pages/Pengaturan/LogPerubahan");
const Versi = lazy("./pages/Pengaturan/Versi");
const SyaratKetentuan = lazy("./pages/Pengaturan/SyaratKetentuan");
const KebijakanPrivasi = lazy("./pages/Pengaturan/KebijakanPrivasi");
const Kontak = lazy("./pages/Pengaturan/Kontak");
const Dokumentasi = lazy("./pages/Pengaturan/Dokumentasi");
const Tentang = lazy("./pages/Pengaturan/Tentang");
const Bantuan = lazy("./pages/Pengaturan/Bantuan");
const Integrasi = lazy("./pages/Pengaturan/Integrasi");
const Keamanan = lazy("./pages/Pengaturan/Keamanan");
const Aplikasi = lazy("./pages/Pengaturan/Aplikasi");
const SistemServer = lazy("./pages/Pengaturan/SistemServer");
const Bahasa = lazy("./pages/Akun/Bahasa");
const Tema = lazy("./pages/Akun/Tema");
const Profil = lazy("./pages/Akun/Profil");
const ProtectecRoute = lazy("./components/ProtectedRoute");

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Dashboard />}>
        <Route index element={<h2>Selamat datang di Dashboard</h2>} />
        <Route path="statistik" element={<Statistik />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="pengumuman" element={<Pengumuman />} />
        <Route path="kalender" element={<Kalender />} />
        <Route path="berita" element={<Berita />} />
        <Route path="notifikasi" element={<Notifikasi />} />
        <Route path="pesan" element={<Pesan />} />
        <Route path="modul" element={<Modul />} />
        <Route path="paket-soal" element={<PaketSoal />} />
        <Route path="import-soal" element={<ImportSoal />} />
        <Route path="daftar-soal" element={<DaftarSoal />} />
        <Route path="file-manager" element={<FileManager />} />
        <Route path="peserta" element={<Peserta />} />
        <Route path="kelas" element={<Kelas />} />
        <Route path="import-peserta" element={<ImportPeserta />} />
        <Route path="cetak-kartu" element={<CetakKartu />} />
        <Route path="jadwal-ujian" element={<JadwalUjian />} />
        <Route path="data-ujian" element={<DataUjian />} />
        <Route path="evaluasi-ujian" element={<EvaluasiUjian />} />
        <Route path="hasil-ujian" element={<HasilUjian />} />
        <Route path="rekap-hasil-ujian" element={<RekapHasilUjian />} />
        <Route path="pengaturan-ujian" element={<PengaturanUjian />} />
        <Route path="token-ujian" element={<TokenUjian />} />
        <Route path="database" element={<Database />} />
        <Route path="backup-restore" element={<BackupRestore />} />
        <Route path="profil" element={<Profil />} />
        <Route path="tema" element={<Tema />} />
        <Route path="bahasa" element={<Bahasa />} />
        <Route path="sistem-server" element={<SistemServer />} />
        <Route path="aplikasi" element={<Aplikasi />} />
        <Route path="keamanan" element={<Keamanan />} />
        <Route path="integrasi" element={<Integrasi />} />
        <Route path="bantuan" element={<Bantuan />} />
        <Route path="tentang" element={<Tentang />} />
        <Route path="dokumentasi" element={<Dokumentasi />} />
        <Route path="kontak" element={<Kontak />} />
        <Route path="kebijakan-privasi" element={<KebijakanPrivasi />} />
        <Route path="syarat-ketentuan" element={<SyaratKetentuan />} />
        <Route path="versi" element={<Versi />} />
        <Route path="log-perubahan" element={<LogPerubahan />} />
        <Route path="umpan-balik" element={<UmpanBalik />} />
      </Route>
      <Route
        path="*"
        element={
          <ProtectecRoute>
            <NotFound />
          </ProtectecRoute>
        }
      />
    </Routes>
  );
}
