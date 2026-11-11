# DESAIN.md

# Rancangan UI/UX
## Aplikasi Pembelajaran Teorema Pythagoras

## 1. Arah Desain
Desain dibuat sederhana, ramah siswa SMP, konsisten, dan responsif. Informasi disajikan sedikit demi sedikit agar siswa dapat fokus pada konsep dan langkah yang sedang dipelajari.

## 2. Prinsip UI/UX
- Gunakan bahasa Indonesia yang singkat dan mudah dipahami.
- Gunakan ruang kosong yang cukup dan hindari halaman terlalu padat.
- Gunakan warna dengan kontras yang memadai.
- Pertahankan posisi label sisi a, b, dan c secara konsisten.
- Bedakan sisi miring (c) dari sisi siku-siku (a dan b), tetapi jangan mengandalkan warna saja; sertakan label.
- Tombol cukup besar untuk disentuh pada smartphone.
- Berikan umpan balik dekat dengan bagian yang sedang dikerjakan.
- Hindari animasi atau dekorasi yang tidak mendukung pembelajaran.

## 3. Struktur Halaman
### A. Beranda
Komponen:
- Nama aplikasi dan navigasi.
- Judul: “Belajar Teorema Pythagoras”.
- Deskripsi satu atau dua kalimat.
- Ilustrasi segitiga siku-siku.
- Tombol “Mulai Belajar”.
- Akses cepat ke “Simulasi” dan “Latihan”.

### B. Materi
Urutan konten:
1. Apa itu segitiga siku-siku?
2. Mengenali dua sisi siku-siku dan sisi miring.
3. Rumus a² + b² = c².
4. Contoh sederhana dengan langkah yang dapat dibuka satu per satu.
5. Ringkasan konsep.

### C. Panduan Penyelesaian
Alur:
1. Siswa memilih apa yang dicari: sisi miring atau sisi siku-siku.
2. Siswa melihat diagram dan memasukkan panjang sisi yang diketahui.
3. Aplikasi menampilkan rumus yang sesuai.
4. Langkah perhitungan ditampilkan bertahap.
5. Aplikasi menampilkan hasil dan pemeriksaan singkat.

Untuk sisi miring: c = √(a² + b²).
Untuk sisi siku-siku: a = √(c² − b²) atau b = √(c² − a²).
Validasi bahwa c adalah sisi terpanjang dan nilai di dalam akar tidak negatif.

### D. Simulasi
Komponen:
- Diagram segitiga siku-siku.
- Kontrol untuk mengubah panjang a dan b.
- Nilai c dihitung otomatis dari √(a² + b²).
- Label ukuran diperbarui mengikuti nilai.
- Pesan ringkas yang menjelaskan hubungan perubahan sisi.

### E. Latihan
Komponen:
- Satu soal ditampilkan pada satu waktu.
- Diagram atau ilustrasi jika diperlukan.
- Kolom jawaban atau pilihan jawaban.
- Tombol “Periksa Jawaban”.
- Umpan balik singkat.
- Tombol “Lihat Pembahasan” dan “Soal Berikutnya”.

Jenis soal:
- Menentukan sisi miring.
- Menentukan sisi siku-siku.
- Menghitung kuadrat dan akar.
- Soal kontekstual yang meminta siswa menafsirkan hasil.

### F. Hasil Latihan
Komponen:
- Jumlah jawaban benar.
- Ringkasan tipe soal yang sudah dikerjakan.
- Saran materi untuk diulang.
- Tombol kembali ke materi atau mengulang latihan.

## 4. Alur Pengguna
Beranda → Materi → Panduan Penyelesaian → Simulasi → Latihan → Hasil Latihan.

Siswa juga dapat membuka Simulasi atau Latihan langsung dari navigasi beranda.

## 5. Responsivitas
### Smartphone
- Satu kolom.
- Navigasi ringkas.
- Diagram memenuhi lebar area konten.
- Tombol dan input mudah disentuh.
- Tidak memerlukan scroll horizontal.

### Desktop dan laptop
- Konten dapat menggunakan lebar maksimum yang nyaman dibaca.
- Diagram dan penjelasan dapat ditampilkan berdampingan jika ruang cukup.
- Navigasi utama terlihat jelas.

## 6. Aksesibilitas dan Kompatibilitas
- Gunakan elemen HTML semantik.
- Sediakan label untuk setiap input.
- Pastikan teks dan tombol memiliki kontras yang cukup.
- Jangan menyampaikan informasi hanya melalui warna.
- Pastikan fungsi utama dapat diakses dengan keyboard.
- Uji pada Chrome, Firefox, Microsoft Edge, dan Safari versi modern.

## 7. Gaya Visual
- Nuansa bersih dan edukatif.
- Tipografi sans-serif yang mudah dibaca.
- Warna utama dan aksen digunakan konsisten.
- Kartu materi dan latihan memiliki hierarki visual yang jelas.
- Ilustrasi matematika harus akurat, bukan sekadar dekorasi.

## 8. Catatan Validasi Desain
Rancangan ini merupakan rancangan awal berdasarkan petikan wawancara satu siswa. Uji kegunaan dengan beberapa siswa dan revisi berdasarkan temuan sebelum menyimpulkan bahwa desain mengurangi cognitive load atau meningkatkan literasi matematis.
