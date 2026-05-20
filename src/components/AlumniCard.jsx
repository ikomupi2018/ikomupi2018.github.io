import { useNavigate } from "react-router-dom";
import { MapPin, Building2 } from "lucide-react";

function getInitials(nama) {
  return nama
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "bg-amber-600",
  "bg-orange-600",
  "bg-red-700",
  "bg-stone-600",
  "bg-yellow-600",
];

function avatarColor(id) {
  return AVATAR_COLORS[Number(id) % AVATAR_COLORS.length];
}

export default function AlumniCard({ alumni }) {
  const navigate = useNavigate();
  const { id, nama, foto_url, role, perusahaan, industri, kota } = alumni;

  return (
    <button
      onClick={() => navigate(`/profile/${id}`)}
      className="group flex flex-col items-start gap-4 rounded-2xl border border-stone-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex w-full items-center gap-3">
        {foto_url ? (
          <img
            src={foto_url}
            alt={nama}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColor(id)}`}
          >
            {getInitials(nama)}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate font-semibold text-stone-900 group-hover:text-amber-600">
            {nama}
          </p>
          <p className="truncate text-xs text-stone-500">{role}</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <Building2 className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{perusahaan}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span>{kota}</span>
        </div>
      </div>

      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
        {industri}
      </span>
    </button>
  );
}
