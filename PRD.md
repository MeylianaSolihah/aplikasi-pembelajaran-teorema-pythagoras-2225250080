# PRD.md

# Product Requirements Document
## Aplikasi Pembelajaran Teorema Pythagoras

## 1. Ringkasan Produk
Aplikasi web pembelajaran Teorema Pythagoras untuk siswa SMP kelas VIII. Aplikasi dirancang responsif agar dapat diakses melalui browser pada komputer dan smartphone.

## 2. Latar Belakang dan Masalah
Berdasarkan petikan wawancara dengan satu siswa kelas VIII, ditemukan beberapa kesulitan:
- Menentukan cara mencari sisi siku-siku ketika sisi yang diketahui berbeda.
- Membedakan penggunaan penjumlahan dan pengurangan.
- Melakukan operasi kuadrat dan akar.
- Memahami gambar dan keterangan sisi yang kurang jelas.
- Mengikuti penjelasan yang terlalu panjang.

Siswa menyatakan lebih terbantu oleh gambar segitiga, contoh langkah demi langkah, dan ingin mencoba simulasi dengan panjang sisi yang dapat diubah. Siswa juga tertarik pada latihan soal dengan pembahasan.

Catatan: wawancara satu siswa menjadi dasar kebutuhan awal. Kebutuhan ini perlu divalidasi lebih lanjut kepada siswa lain dan melalui uji coba aplikasi.

## 3. Tujuan Produk
1. Membantu siswa mengenali sisi miring dan sisi siku-siku.
2. Membantu siswa memilih prosedur yang tepat untuk mencari sisi yang belum diketahui.
3. Menyajikan perhitungan kuadrat dan akar secara bertahap.
4. Memberikan representasi visual dan simulasi sederhana.
5. Memberikan latihan soal, termasuk soal kontekstual, beserta umpan balik dan pembahasan.
6. Mendukung pembelajaran yang memperhatikan beban kognitif dan melatih proses literasi matematis.

## 4. Pengguna Sasaran
- Pengguna utama: siswa SMP kelas VIII yang sedang mempelajari Teorema Pythagoras.
- Pengguna pendukung: guru atau mahasiswa calon pendidik yang menggunakan aplikasi sebagai media pembelajaran.

## 5. Kebutuhan Pengguna
| Kode | Kebutuhan |
|---|---|
| U01 | Gambar segitiga siku-siku dengan label sisi yang jelas. |
| U02 | Bantuan menentukan sisi yang diketahui dan sisi yang dicari. |
| U03 | Penjelasan perbedaan prosedur mencari sisi miring dan sisi siku-siku. |
| U04 | Perhitungan kuadrat dan akar yang ditampilkan bertahap. |
| U05 | Materi ringkas dan tidak menampilkan terlalu banyak informasi sekaligus. |
| U06 | Simulasi untuk mengeksplorasi panjang sisi. |
| U07 | Latihan soal dengan pembahasan dan umpan balik. |
| U08 | Tampilan nyaman pada smartphone dan desktop. |

## 6. Fitur Utama
### F01 — Beranda
Menampilkan judul aplikasi, pengantar singkat, dan navigasi ke materi, simulasi, serta latihan.

### F02 — Materi Ringkas
Menjelaskan segitiga siku-siku, sisi siku-siku, sisi miring, dan hubungan a² + b² = c². Materi dibagi menjadi bagian kecil.

### F03 — Panduan Penyelesaian
Memberi pilihan jenis soal: mencari sisi miring atau mencari salah satu sisi siku-siku. Aplikasi menampilkan langkah sesuai pilihan dan data yang dimasukkan.

### F04 — Simulasi Segitiga
Menampilkan diagram segitiga siku-siku dengan panjang sisi yang dapat diubah melalui kontrol. Nilai dan hubungan antarsisi diperbarui secara visual. Masukan harus divalidasi agar membentuk segitiga siku-siku yang sah.

### F05 — Latihan Soal
Menyediakan soal bertingkat dari latihan dasar hingga soal kontekstual. Setelah menjawab, siswa memperoleh umpan balik dan pembahasan.

### F06 — Ringkasan Hasil
Menampilkan jumlah jawaban benar dan materi atau tipe soal yang perlu dipelajari ulang. Tidak perlu akun pada versi awal.

## 7. Ruang Lingkup Versi Awal (MVP)
Termasuk:
- Beranda dan navigasi.
- Materi ringkas dengan diagram.
- Panduan langkah mencari sisi.
- Simulasi panjang sisi.
- Latihan soal dan pembahasan.
- Ringkasan hasil latihan.
- Desain responsif.

Belum termasuk:
- Login dan penyimpanan akun.
- Dashboard guru.
- Database daring.
- Analitik penggunaan lanjutan.
- Klaim pengukuran cognitive load secara klinis atau terstandar.

## 8. Prinsip Pembelajaran
- Kurangi beban kognitif ekstraneous melalui gambar jelas, tata letak konsisten, dan penghilangan dekorasi yang tidak membantu.
- Kelola kompleksitas materi dengan membagi penjelasan menjadi langkah kecil.
- Dukung pemahaman melalui contoh, simulasi, dan latihan.
- Latih literasi matematis melalui soal yang meminta siswa merumuskan situasi, menggunakan matematika, serta menafsirkan hasil dalam konteks.

## 9. Kriteria Penerimaan
1. Aplikasi dapat dibuka pada browser modern desktop dan smartphone.
2. Tata letak menyesuaikan ukuran layar tanpa konten terpotong.
3. Diagram memberi label sisi secara jelas.
4. Panduan membedakan pencarian sisi miring dan sisi siku-siku.
5. Perhitungan dan hasil sesuai rumus Teorema Pythagoras.
6. Masukan kosong, negatif, atau tidak valid ditangani dengan pesan yang jelas.
7. Latihan memberikan umpan balik dan pembahasan.
8. Kontrol utama dapat digunakan dengan sentuhan dan keyboard.

## 10. Asumsi dan Hal yang Perlu Divalidasi
- Wawancara baru melibatkan satu siswa.
- Tingkat kesulitan, jumlah soal, dan gaya visual perlu diuji kepada calon pengguna.
- Dampak aplikasi terhadap cognitive load dan mathematical literacy perlu dievaluasi melalui uji coba dan instrumen yang sesuai.
