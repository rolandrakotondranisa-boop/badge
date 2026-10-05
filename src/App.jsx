import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import BadgeForm from "./components/BadgeForm";
import BadgePreview from "./components/BadgePreview";
import BadgeList from "./components/BadgeList";
import { getBadges, addBadge, deleteBadge } from "./utils/storage";

const initialForm = {
  photo: "",
  nomPrenom: "",
  qualification: "",
  matricule: "",
  dateEmbauche: "",
  lieu: "Antananarivo, Madagascar",
};

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [badges, setBadges] = useState(getBadges());

  const rectoRef = useRef(null);
  const versoRef = useRef(null);

  function resetForm() {
    setForm(initialForm);
  }

  function handleSave() {
    if (!form.photo) return alert("Veuillez ajouter une photo.");
    if (!form.nomPrenom.trim()) return alert("Veuillez saisir le nom et prénom.");
    if (!form.qualification.trim()) return alert("Veuillez saisir la qualification ou le poste.");
    if (!form.matricule.trim()) return alert("Veuillez saisir le numéro matricule.");
    if (!form.dateEmbauche) return alert("Veuillez sélectionner la date d'embauche.");
    if (!form.lieu.trim()) return alert("Veuillez saisir le lieu.");

    try {
      const newBadge = addBadge(form);
      setBadges((previous) => [newBadge, ...previous]);
      alert("Badge enregistré avec succès.");
    } catch (error) {
      console.error("Erreur enregistrement badge :", error);
      alert("Impossible d'enregistrer le badge. Vérifiez l'espace de stockage disponible.");
    }
  }

  function handleDelete(id) {
    if (!window.confirm("Voulez-vous vraiment supprimer ce badge ?")) return;
    try {
      setBadges(deleteBadge(id));
    } catch (error) {
      console.error("Erreur suppression badge :", error);
      alert("Impossible de supprimer le badge. Le stockage local est indisponible.");
    }
  }

  function handleSelect(badge) {
    setForm({
      photo: badge.photo || "",
      nomPrenom: badge.nomPrenom || "",
      qualification: badge.qualification || "",
      matricule: badge.matricule || "",
      dateEmbauche: badge.dateEmbauche || "",
      lieu: badge.lieu || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function canvasOf(element) {
    if (!element) throw new Error("Badge introuvable pour l'export.");
    await document.fonts.ready;
    await Promise.all(
      Array.from(element.querySelectorAll("img"), (image) =>
        image.decode().catch(() => undefined)
      )
    );
    return html2canvas(element, {
      scale: 4,
      useCORS: true,
      backgroundColor: "#ffffff",
      width: element.offsetWidth,
      height: element.offsetHeight,
      scrollX: 0,
      scrollY: 0,
    });
  }

  async function downloadPNG(element, filename) {
    if (!element) return;
    const canvas = await canvasOf(element);
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function generatePDF() {
    try {
      const rectoCanvas = await canvasOf(rectoRef.current);
      const versoCanvas = await canvasOf(versoRef.current);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [70, 90],
      });

      pdf.addImage(rectoCanvas.toDataURL("image/png"), "PNG", 0, 0, 70, 90);
      pdf.addPage();
      pdf.addImage(versoCanvas.toDataURL("image/png"), "PNG", 0, 0, 70, 90);

      const safeName =
        form.nomPrenom.trim().replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "") ||
        "badge";
      pdf.save(`Badge_${safeName}.pdf`);
    } catch (error) {
      console.error("Erreur PDF :", error);
      alert("Impossible de générer le PDF.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="no-print border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-black text-slate-900">
                Gestion des Badges
              </h1>
              <p className="text-sm text-slate-500">Plateforme TANTANA — Madagasikara</p>
            </div>
            <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
              🇲🇬 React + Vite + Tailwind
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <aside className="no-print space-y-6">
            <BadgeForm
              form={form}
              setForm={setForm}
              onSave={handleSave}
              onReset={resetForm}
            />
            <BadgeList
              badges={badges}
              onDelete={handleDelete}
              onSelect={handleSelect}
            />
          </aside>

          <section>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-800">Aperçu du badge</h2>
                <p className="text-sm text-slate-500">
                  Le recto est personnalisé. Le verso reste fixe.
                </p>
              </div>
              <div className="no-print flex flex-wrap gap-2">
                <button
                  onClick={() =>
                    downloadPNG(rectoRef.current, `Badge_Recto_${form.matricule || "badge"}.png`)
                  }
                  className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
                >
                  ⬇ Recto PNG
                </button>
                <button
                  onClick={() =>
                    downloadPNG(versoRef.current, `Badge_Verso_${form.matricule || "badge"}.png`)
                  }
                  className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
                >
                  ⬇ Verso PNG
                </button>
                <button
                  onClick={generatePDF}
                  className="rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
                >
                   Générer PDF
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-200 p-6 shadow-inner">
              <BadgePreview form={form} rectoRef={rectoRef} versoRef={versoRef} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}