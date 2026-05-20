// Replace FORM_ID and entry IDs with your actual Google Form field IDs
// Get entry IDs by inspecting the form's "pre-fill" URL
const FORM_ID = null; // e.g. "1FAIpQLSe..."

export async function submitRegistration(data) {
  if (!FORM_ID) {
    // Mock submission — always succeeds after a short delay
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Mock submit:", data);
    return { ok: true };
  }

  const formData = new FormData();
  // Map each field to its Google Form entry ID
  // formData.append("entry.123456789", data.nama);
  // formData.append("entry.987654321", data.role);
  // ... add more fields as needed

  await fetch(
    `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
    { method: "POST", body: formData, mode: "no-cors" }
  );

  return { ok: true };
}
