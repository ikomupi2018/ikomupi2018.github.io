import { alumni as mockAlumni } from "../data/alumni.js";

// Replace with your Google Sheet ID and tab name to use real data
const SHEET_ID = null; // e.g. "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms"
const TAB_NAME = "alumni";

export async function fetchAlumni() {
  if (!SHEET_ID) {
    // Simulate network delay for realistic loading state
    await new Promise((r) => setTimeout(r, 600));
    return mockAlumni;
  }

  const url = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal memuat data alumni.");
  return res.json();
}
