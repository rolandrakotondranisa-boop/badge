import React from "react";

export default function BadgeForm({ form, setForm, onSave, onReset }) {
  function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, photo: reader.result });
    reader.readAsDataURL(file);
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200";

  const labelClass = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h3 className="mb-5 text-lg font-black text-slate-800">Informations du badge</h3>

      <div className="space-y-4">
        {/* Photo upload */}
        <div>
          <label className={labelClass}>Photo</label>
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 overflow-hidden rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
              {form.photo ? (
                <img src={form.photo} alt="preview" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-2xl text-slate-300">
                  
                </div>
              )}
            </div>
            <label className="cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white hover:bg-green-700">
              Choisir
              <input type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
            </label>
          </div>
        </div>

        {/* Nom */}
        <div>
          <label className={labelClass}>Nom et Prénom</label>
          <input
            type="text"
            className={inputClass}
            value={form.nomPrenom}
            onChange={(e) => setForm({ ...form, nomPrenom: e.target.value })}
            placeholder="Ex: RAKOTO Jean"
          />
        </div>

        {/* Qualification */}
        <div>
          <label className={labelClass}>Qualification / Poste</label>
          <input
            type="text"
            className={inputClass}
            value={form.qualification}
            onChange={(e) => setForm({ ...form, qualification: e.target.value })}
            placeholder="Ex: Designer Graphique"
          />
        </div>

        {/* Matricule */}
        <div>
          <label className={labelClass}>N° Matricule</label>
          <input
            type="text"
            className={inputClass}
            value={form.matricule}
            onChange={(e) => setForm({ ...form, matricule: e.target.value })}
            placeholder="Ex: MAT-001"
          />
        </div>

        {/* Date */}
        <div>
          <label className={labelClass}>Date d'embauche</label>
          <input
            type="date"
            className={inputClass}
            value={form.dateEmbauche}
            onChange={(e) => setForm({ ...form, dateEmbauche: e.target.value })}
          />
        </div>

        {/* Lieu */}
        <div>
          <label className={labelClass}>Lieu</label>
          <input
            type="text"
            className={inputClass}
            value={form.lieu}
            onChange={(e) => setForm({ ...form, lieu: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onSave}
          className="flex-1 rounded-lg bg-green-700 px-4 py-3 text-sm font-black text-white shadow-md transition hover:bg-green-800"
        >
           Enregistrer
        </button>
        <button
          onClick={onReset}
          className="rounded-lg bg-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-300"
        >
          ↺ Reset
        </button>
      </div>
    </div>
  );
}