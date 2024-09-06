# WHOIS Lookup

WHOIS Lookup Project adalah aplikasi sederhana yang dibuat menggunakan Next.js untuk mengambil dan menampilkan informasi WHOIS dari domain yang dimasukkan.

## Disclaimer
**This program is intended for educational and informational purposes only. The author is not responsible for any illegal use of this program. Use it responsibly.**


## Fitur Utama

- Pengguna dapat memasukkan nama domain untuk melihat data WHOIS-nya.
- Data WHOIS ditampilkan dalam format JSON.
- Penanganan error jika terjadi kegagalan pengambilan data.

## Cara Kerja

1. **User Interface**:
   - Pengguna memasukkan nama domain di kolom input.
   - Klik tombol "Lookup" untuk memulai pencarian.
   - Hasil pencarian WHOIS ditampilkan di layar.

2. **API Request**:
   - Aplikasi mengirimkan permintaan GET ke API [WhoisXML](https://www.whoisxmlapi.com/).
   - Hasil respon berupa informasi WHOIS dalam format JSON akan dikirim kembali dan ditampilkan.

3. **Handling Error**:
   - Jika domain tidak valid atau API gagal merespons, pesan error akan ditampilkan kepada pengguna.

## Prasyarat

- **Node.js**: Harus terinstal di mesin lokal.
- **API Key**: Anda membutuhkan API Key dari [WhoisXML API](https://www.whoisxmlapi.com/) untuk mengakses data WHOIS.

## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/ferdysetiawan/whois.git

2. Masuk ke direktori project:
    ```sh
    cd whois-lookup
    ```
3. Instal dependensi:
    ```sh
    npm install
    ```
4. Buat file .env.local di root project dan masukkan API Key Anda:
    ```sh
    WHOISXML_API_KEY=your_api_key_here
    ```
5. Jalankan server development:
    ```sh
    npm run dev
    ```

## Penggunaan
1. Buka aplikasi pada browser.
2. Masukkan nama domain di kolom input.
3. Klik tombol "Lookup".
4. Data WHOIS akan ditampilkan dalam format JSON.
5. Jika ada error, pesan error akan ditampilkan.

## Struktur File
`page.js`: Berisi logika client-side untuk input domain dan tampilan hasil WHOIS.
`route.js`: Berfungsi untuk menangani request ke API WhoisXML dan mengirimkan hasilnya kembali ke page.js.

## Lisensi
Project ini dilisensikan di bawah MIT License. Lihat detail [LICENSE](LICENSE).

## Penulis
Proyek ini dibuat untuk tujuan belajar. Gunakanlah secara bertanggung jawab dan beretika.
