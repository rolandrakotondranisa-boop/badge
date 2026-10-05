import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import BadgeForm from "./components/BadgeForm";
import BadgePreview from "./components/BadgePreview";
import BadgeList from "./components/BadgeList";
import { getBadges, addBadge, deleteBadge } from "./utils/storage";

const AUTH_KEY = "tantana-auth";
const LOGIN_USER = "TANTANA";
const LOGIN_PASSWORD = "badge@gr034";

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
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(AUTH_KEY) === "true";
  });
  const [loginForm, setLoginForm] = useState({
    username: LOGIN_USER,
    password: LOGIN_PASSWORD,
  });
  const [loginError, setLoginError] = useState("");

  const rectoRef = useRef(null);
  const versoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_KEY, String(isAuthenticated));
    }
  }, [isAuthenticated]);

  function resetForm() {
    setForm(initialForm);
  }

  function handleLogin(event) {
    event.preventDefault();

    const isCorrectUser = loginForm.username.trim().toUpperCase() === LOGIN_USER;
    const isCorrectPassword = loginForm.password === LOGIN_PASSWORD;

    if (isCorrectUser && isCorrectPassword) {
      setIsAuthenticated(true);
      setLoginError("");
      return;
    }

    setLoginError("Nom ou mot de passe incorrect.");
  }

  function handleLogout() {
    setIsAuthenticated(false);
    setLoginForm({ username: LOGIN_USER, password: LOGIN_PASSWORD });
    setLoginError("");
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

  if (!isAuthenticated) {
    return (
      <div className="login-shell">
        <div className="login-panel">
          <section className="login-hero">
            <div className="login-brand">
              <img
                className="brand-mark"
                src="/templates/logo.png"
                alt="Logo TANTANA"
              />
              <div>
                <p className="brand-label">TANTANA</p>
                <span className="brand-subtitle">Plateforme</span>
              </div>
            </div>

            <div className="login-copy">
              <span className="eyebrow">Plateforme citoyenne</span>
              <h1>Bienvenue sur Plateforme Tantana – Mpanorina ny Hoavin&apos;i Madagasikara</h1>
              <p>
                Espaces citoyens de réflexion, de formation et de mobilisation, la
                plateforme Tantana rassemble les jeunes, leaders et citoyens engagés
                autour d&apos;une vision commune : bâtir un Madagascar prospère,
                transparent et inclusif. À travers la promotion de la bonne gouvernance,
                du développement durable, des droits humains et de l&apos;innovation
                numérique, nous cultivons le leadership civique et la cohésion sociale
                basés sur l&apos;intégrité, la redevabilité et la solidarité. Connectez-vous
                pour rejoindre le mouvement et façonner l&apos;avenir de notre nation.
              </p>
            </div>
          </section>

          <section className="login-card">
            <div className="login-card-head">
              <p>Connexion</p>
              <h2>Accéder à votre espace</h2>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <label className="field">
                <span>Nom</span>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(event) =>
                    setLoginForm((previous) => ({ ...previous, username: event.target.value }))
                  }
                  placeholder="TANTANA"
                />
              </label>

              <label className="field">
                <span>Mot de passe</span>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(event) =>
                    setLoginForm((previous) => ({ ...previous, password: event.target.value }))
                  }
                  placeholder="badge@gr034"
                />
              </label>

              {loginError ? <p className="login-error">{loginError}</p> : null}

              <button type="submit" className="login-button">
                Se connecter
              </button>
            </form>
          </section>
        </div>
      </div>
    );
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
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                🇲🇬 React + Vite + Tailwind
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:bg-red-700"
              >
                Déconnexion
              </button>
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
