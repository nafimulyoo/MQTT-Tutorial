# MQTT Tutorial by @berkembang.hmft
## Deskripsi
Repositori ini berisi contoh aplikasi yang menggunakan protokol MQTT (Message Queuing Telemetry Transport) untuk mengontrol lampu menggunakan ESP32 dan Node.js. Aplikasi ini menggunakan ESP32 sebagai klien MQTT dan Node.js sebagai server MQTT dan WebSocket untuk mengontrol lampu melalui halaman web.

## Setup ESP32 Client
1. Buka file main.ino menggunakan Arduino IDE.
2. Sambungkan ESP32 ke komputer Anda melalui USB.
3. Pilih board ESP32 yang sesuai dan port yang digunakan oleh ESP32.
4. Klik tombol upload untuk mengunggah kode ke ESP32.

## Menjalankan Server WebSocket dan Express.js
1. Buka terminal pada direktori nodejs-client.
2. Jalankan perintah `npm install` untuk menginstal semua dependensi.
3. Jalankan perintah `node index.js` untuk menjalankan server.

## Mengontrol Lampu
1. Buka halaman web pada 1http://localhost:3000`.
2. Tekan tombol EN di ESP32 untuk memulai menjalankan program.
3. Tekan tombol "Turn On" atau "Turn Off" pada halaman web untuk mengontrol lampu.
4. Untuk melihat hasil, amati bahwa lampu built-in pada ESP32 akan merespons tombol yang kita klik karena menggunakan protokol MQTT.

## Dengan Menggunakan Aplikasi MQTT Client
1. Instal; aplikasi MQTT Client pada perangkat mobile Anda, seperti MyMQTT pada Android.
2. Gunakan aplikasi untuk memberikan sinyal on dan off ke broker MQTT.
 
## Penulis
Nafi Mulyo Kusumo. Dipost pada konten HMFTSignal di Instagram @berkembang.hmft.
