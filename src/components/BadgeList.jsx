import React from "react";

export default function BadgeList({ badges, onDelete, onSelect }) {
  if (badges.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
        <p className="text-sm text-slate-500">Aucun badge enregistré.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-lg font-black text-slate-800">
        Badges enregistrés ({badges.length})
      </h3>
      <div className="space-y-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-green-400 hover:bg-green-50"
          >
            <div className="h-12 w-12 overflow-hidden rounded-lg bg-slate-200">
              {badge.photo ? (
                <img src={badge.photo} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-xl text-slate-400">
                  👤
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-bold text-slate-800">{badge.nomPrenom}</p>
              <p className="truncate text-xs text-slate-500">{badge.qualification}</p>
              <p className="text-xs text-slate-400">Mat: {badge.matricule}</p>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => onSelect(badge)}
                className="rounded-lg bg-green-100 p-2 text-green-700 hover:bg-green-200"
                title="Charger"
              >
                ✏️
              </button>
              <button
                onClick={() => onDelete(badge.id)}
                className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200"
                title="Supprimer"
              >
                ️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}