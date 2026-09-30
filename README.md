# 🏁 CSS Pattern Generator

Aplikasi pembuat pola latar belakang CSS (*CSS Pattern Generator*) berbasis web. Alat ini memanfaatkan fitur `radial-gradient` dan `linear-gradient` dari CSS3 untuk membuat pola titik-titik (*dots*), garis-garis (*stripes*), atau papan catur (*checkerboard*) secara instan.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Penggunaan CSS Gradient untuk Pattern Design:**
   - `radial-gradient()` : Membuat pola berbentuk lingkaran/titik.
   - `linear-gradient()` : Membuat pola berulang dengan sudut tertentu (*stripes* / *checkerboard*).
   - `background-size` & `background-position` : Mengontrol skala perulangan ubin (*tiling*) pola.
2. **Dynamic Inline Style Manipulation:**
   Mengubah atribut `style.cssText` elemen DOM langsung dari nilai variabel JavaScript.
3. **Clipboard API Integration:**
   Fitur `navigator.clipboard.writeText()` untuk menyalin teks kode CSS secara praktis.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur antarmuka dan kontrol input pola
├── style.css        # Desain gaya Neobrutalism dan layout aplikasi
└── script.js        # Logika pembentukan string algoritma CSS gradient
