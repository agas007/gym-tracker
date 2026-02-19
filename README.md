
# Gym Tracker

Aplikasi modern untuk manajemen latihan gym yang menghubungkan instruktur (coach) dengan murid (member) secara lebih efisien. Dikembangkan menggunakan teknologi web terbaru untuk performa yang cepat, responsif, dan dapat diakses dari perangkat apapun.

![Gym Tracker Hero](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop)

## Fitur Utama

Aplikasi ini disesuaikan untuk tiga peran pengguna yang berbeda:

### 1. Panel Instruktur (Coach)
*   **Manajemen Murid**: Daftarkan dan kelola profil latihan murid Anda.
*   **Workout Planner**: Buat rencana latihan yang terstruktur (contoh: "12-Week Hypertrophy").
*   **Routine Builder**: Susun rutinitas latihan harian (Push Day, Pull Day, Leg Day) dengan detail set, rep, dan RPE.
*   **Assignment**: Tugaskan rencana latihan spesifik ke murid tertentu dengan satu kali klik.

### 2. Dashboard Murid (Student)
*   **Personalized Plan**: Lihat rencana latihan yang telah disiapkan khusus oleh instruktur.
*   **Workout Logger**: Catat repetisi, beban, dan RPE secara *real-time* saat latihan berlangsung.
*   **Tracking**: Pantau progress latihan harian.

### 3. Panel Admin
*   Kontrol penuh atas data pengguna sistem.

---

## Teknologi yang Digunakan

Dibangun dengan *stack* modern untuk memastikan skalabilitas dan pengalaman pengguna terbaik:

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router) - Server Component & Server Actions.
*   **Bahasa**: [TypeScript](https://www.typescriptlang.org/) - Untuk keamanan tipe data yang ketat.
*   **Database**: [SQLite](https://www.sqlite.org/) (Dev) / PostgreSQL (Prod) via [Prisma ORM](https://www.prisma.io/).
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Desain antarmuka yang modern dan responsif (Mobile First).
*   **Autentikasi**: [Auth.js (NextAuth v5)](https://authjs.dev/) - Keamanan sesi pengguna berbasis peran (Role-Based Access Control).

---

## Cara Menjalankan (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi:

### 1. Clone Repository
```bash
git clone https://github.com/agas007/gym-tracker.git
cd gym-tracker
```

### 2. Install Dependensi
```bash
npm install
# atau
yarn install
```

### 3. Konfigurasi Environment Variable
Buat file `.env` di root folder dan isi dengan konfigurasi berikut:

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="your-generated-secret-key-here" # Generate dengan `openssl rand -base64 32`
```

### 4. Setup Database
Jalankan migrasi database dan isi dengan data awal (seeding):

```bash
npx prisma migrate dev --name init
npx prisma db seed # atau `npx tsx prisma/seed.ts`
```

> **Catatan**: Data awal seperti User Admin, Instructor, dan list Latihan (Exercise) akan otomatis dibuat.

### 5. Jalankan Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## Akun Demo (Seed Data)

Gunakan akun berikut untuk mencoba fitur aplikasi:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@gym.com` | `password123` |
| **Instruktur** | `coach@gym.com` | `password123` |
| **Murid** | `student@gym.com` | `password123` |

---

## Struktur Direktori

```
src/
├── app/                  # App Router
│   ├── (auth)/           # Route login/register
│   ├── admin/            # Halaman khusus Admin
│   ├── instructor/       # Halaman khusus Instruktur
│   ├── student/          # Halaman khusus Murid
│   └── api/              # API Endpoints
├── components/           # Komponen UI Reusable
├── lib/                  # Utility functions (Prisma client, Server Actions)
└── types/                # Definisi Tipe Data TypeScript
prisma/                   # Schema Database & Seed Scripts
```

---

## Kontribusi

Proyek ini terbuka untuk kontribusi! Silakan buat *Pull Request* atau laporkan *Issues* jika menemukan *bug* atau memiliki ide fitur baru.

**Happy Lifting! 💪**
