export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <div className="card bg-base-100 shadow-xl p-8">
        <h2 className="card-title mb-4">404 - Halaman Tidak Ditemukan</h2>
        <a href="/home" className="btn btn-primary">Kembali ke Dashboard</a>
      </div>
    </div>
  );
}
