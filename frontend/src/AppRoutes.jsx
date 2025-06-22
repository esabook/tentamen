import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Statistik from "./pages/Beranda/Statistik";
import Leaderboard from "./pages/Beranda/Leaderboard";
import Pengumuman from "./pages/Beranda/Pengumuman";
import Kalender from "./pages/Beranda/Kalender";
import Berita from "./pages/Beranda/Berita";
import Notifikasi from "./pages/Beranda/Notifikasi";
import Pesan from "./pages/Beranda/Pesan";
import Modul from "./pages/Data Modul/Modul";
import PaketSoal from "./pages/Data Modul/PaketSoal";
import ImportSoal from "./pages/Data Modul/ImportSoal";
import DaftarSoal from "./pages/Data Modul/DaftarSoal";
import FileManager from "./pages/Data Modul/FileManager";
import Peserta from "./pages/Data Peserta/Peserta";
import Kelas from "./pages/Data Peserta/Kelas";
import ImportPeserta from "./pages/Data Peserta/ImportPeserta";
import CetakKartu from "./pages/Data Peserta/CetakKartu";
import JadwalUjian from "./pages/Data Ujian/JadwalUjian";
import DataUjian from "./pages/Data Ujian/DataUjian";
import EvaluasiUjian from "./pages/Data Ujian/EvaluasiUjian";
import HasilUjian from "./pages/Data Ujian/HasilUjian";
import RekapHasilUjian from "./pages/Data Ujian/RekapHasilUjian";
import PengaturanUjian from "./pages/Data Ujian/PengaturanUjian";
import TokenUjian from "./pages/Data Ujian/TokenUjian";
import Database from "./pages/Alat/Database";
import BackupRestore from "./pages/Alat/BackupRestore";
import UmpanBalik from "./pages/Pengaturan/UmpanBalik";
import LogPerubahan from "./pages/Pengaturan/LogPerubahan";
import Versi from "./pages/Pengaturan/Versi";
import SyaratKetentuan from "./pages/Pengaturan/SyaratKetentuan";
import KebijakanPrivasi from "./pages/Pengaturan/KebijakanPrivasi";
import Kontak from "./pages/Pengaturan/Kontak";
import Dokumentasi from "./pages/Pengaturan/Dokumentasi";
import Tentang from "./pages/Pengaturan/Tentang";
import Bantuan from "./pages/Pengaturan/Bantuan";
import Integrasi from "./pages/Pengaturan/Integrasi";
import Keamanan from "./pages/Pengaturan/Keamanan";
import Aplikasi from "./pages/Pengaturan/Aplikasi";
import SistemServer from "./pages/Pengaturan/SistemServer";
import Bahasa from "./pages/Akun/Bahasa";
import Tema from "./pages/Akun/Tema";
import Profil from "./pages/Akun/Profil";
import ProtectecRoute from "./components/ProtectedRoute";

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
