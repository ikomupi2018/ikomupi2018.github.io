import { Link } from "react-router-dom";
import {
  Users,
  GraduationCap,
  Briefcase,
  Search,
  Calendar,
  Instagram,
  Linkedin,
  ArrowRight,
  Quote,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { icon: Users, value: "60+", label: "Teman Terhubung" },
  { icon: GraduationCap, value: "Ilmu Komunikasi", label: "2018" },
  { icon: Briefcase, value: "15+", label: "Sektor Industri" },
];

const features = [
  {
    icon: Search,
    title: "Direktori Terintegrasi",
    description:
      "Cari dan temukan kontak teman-teman 2018 berdasarkan domisili atau industri.",
  },
  {
    icon: Calendar,
    title: "Event & Networking",
    description:
      "Update jadwal kumpul angkatan dan reuni agar tidak ada yang ketinggalan.",
  },
  {
    icon: Briefcase,
    title: "Peluang Karir",
    description:
      "Kolaborasi dan referensi pekerjaan antar sesama alumni lintas industri.",
  },
];

const spotlights = [
  {
    name: "Alanis Rani Rayhana",
    role: "Alumni IKOM UPI 2018",
    quote:
      "Jadi alumni Ilkom UPI bukan cuma soal gelar — tapi tentang cara berpikir kritis yang dibentuk sejak kelas pertama. Itu yang sampai sekarang paling terasa manfaatnya di dunia kerja.",
    initials: "AR",
  },
  {
    name: "Wanda Putri Rachmalita",
    role: "Alumni IKOM UPI 2018",
    quote:
      "Ilkom 2018 ngajarin saya bahwa komunikasi itu bukan cuma bicara — tapi tentang memahami. Pelajaran itu yang bikin saya bertahan dan berkembang di industri yang terus berubah.",
    initials: "WP",
  },
  {
    name: "Den Reza Alfian Farid",
    role: "Alumni IKOM UPI 2018",
    quote:
      "Yang paling berharga dari Ilkom bukan hanya ilmunya, tapi orangnya. Angkatan 2018 itu penuh orang-orang yang saling menguatkan — dan energi itu masih terasa sampai sekarang.",
    initials: "DR",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/8 px-6 py-8 text-center ring-1 ring-white/10 backdrop-blur-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
        <Icon className="h-6 w-6 text-amber-400" />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm font-medium text-stone-400">{label}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-stone-900">{title}</h3>
      <p className="text-sm leading-relaxed text-stone-500">{description}</p>
    </div>
  );
}

function SpotlightCard({ name, role, quote, initials }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      <Quote className="h-8 w-8 text-amber-200" />
      <p className="flex-1 text-base leading-relaxed text-stone-600">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">{name}</p>
          <p className="text-xs text-stone-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-stone-950 px-6 text-center">
        {/* Cinematic background image */}
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            filter: "brightness(0.35) saturate(0.6)",
          }}
        />

        {/* Dark gradient overlays for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/20 to-stone-950/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-stone-950/50 via-transparent to-stone-950/50" />

        {/* Warm amber tint layer */}
        <div className="pointer-events-none absolute inset-0 bg-amber-950/20 mix-blend-multiply" />

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 ring-1 ring-amber-500/30">
            Ilmu Komunikasi UPI · Angkatan 2018
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Merajut Koneksi,
            <br />
            <span className="text-amber-400">Membangun Kolaborasi.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-stone-400 md:text-lg">
            Wadah resmi jaringan Ilmu Komunikasi UPI 2018. Tetap terhubung
            dengan teman seangkatan, kembangkan karir, dan bangun sinergi
            bersama.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/directory"
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-amber-400/30 active:translate-y-0"
            >
              Eksplor Direktori
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/register"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-stone-300 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
            >
              Daftar Jejaring
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="bg-stone-900 px-6 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-stone-900">
              Semua yang Kamu Butuhkan
            </h2>
            <p className="text-base text-stone-500">
              Fitur lengkap untuk mempererat koneksi angkatan 2018.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Pesan Ketua Angkatan ──────────────────────────────────────────── */}
      <section className="bg-stone-950 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-amber-500">
            Pesan dari Ketua Angkatan 2018
          </p>

          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            {/* Photo */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/40 to-transparent blur-md" />
              <img
                src="/naufal.png"
                alt="Muhammad Naufal Fadhilah"
                className="relative h-64 w-52 rounded-2xl object-cover object-top ring-1 ring-white/10"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col justify-center">
              {/* Big opening quote mark */}
              <span className="mb-4 block font-serif text-7xl leading-none text-amber-500/30 select-none">
                "
              </span>
              <blockquote className="-mt-8 text-lg font-medium leading-relaxed text-stone-200 md:text-xl">
                Teman-teman Ilkom 2018 yang luar biasa — perjalanan kita bersama
                tidak berhenti di hari wisuda. Kita sudah membuktikan bahwa dari
                satu angkatan bisa lahir jurnalis, analis, kreator, pendidik,
                pengusaha, dan banyak lagi. Platform ini hadir supaya koneksi kita
                tetap hidup, kolaborasi terus terjadi, dan tidak ada satu pun dari
                kita yang melangkah sendirian. Mari jaga silaturahmi dan terus
                tumbuh bersama.
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <div className="text-right">
                  <p className="font-semibold text-white">
                    Muhammad Naufal Fadhilah
                  </p>
                  <p className="text-sm text-amber-400">
                    Ketua Angkatan · Ilmu Komunikasi UPI 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alumni Spotlight ──────────────────────────────────────────────── */}
      <section className="bg-amber-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-stone-900">
              Alumni Bercerita
            </h2>
            <p className="text-base text-stone-500">
              Dengar langsung dari teman-teman yang sudah aktif di komunitas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spotlights.map((member) => (
              <SpotlightCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-stone-950 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-stone-500">
            © 2026 Ilmu Komunikasi UPI 2018. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-stone-600 transition-colors hover:text-amber-500"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-stone-600 transition-colors hover:text-amber-500"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
