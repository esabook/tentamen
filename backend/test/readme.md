# Catatan TODO untuk folder /test

Untuk project backend seperti ini, sebaiknya folder `/test` berisi:

- **Unit Test**: Pengujian fungsi-fungsi controller, model, dan utilitas secara terpisah. Contoh: menggunakan Jest, Mocha, atau Supertest.
- **Integration Test**: Pengujian endpoint API secara menyeluruh, termasuk skenario sukses dan gagal (misal: login, CRUD data, auth, dsb).
- **Collection Postman**: File koleksi Postman untuk dokumentasi dan pengujian manual endpoint (sudah ada, bisa dilengkapi/deskripsikan tiap request).
- **Mock Data**: Data dummy untuk keperluan testing otomatis.
- **README Test**: Penjelasan singkat cara menjalankan test, dependensi, dan coverage.

Contoh struktur ideal:
```
test/
  ├── unit/
  │     └── human.controller.test.js
  ├── integration/
  │     └── auth.route.test.js
  ├── mock/
  │     └── user.mock.json
  ├── postman-2.1/
  │     └── ...
  └── readme.md
```

> TODO: Tambahkan dan lengkapi test otomatis untuk setiap fitur utama backend agar kualitas dan reliabilitas aplikasi terjaga.
