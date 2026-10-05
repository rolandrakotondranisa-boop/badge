import React from "react";
import {
  TantanaLogo,
  MadagascarSilhouette,
  IdCardIcon,
  CalendarIcon,
  LocationIcon,
  PersonIcon,
  EyeIcon,
  TargetIcon,
  PeopleIcon,
  LeafIcon,
  QRCodeSVG,
  EngagementIcon,
  SolidariteIcon,
  InnovationIcon,
  ResponsabiliteIcon,
  ExcellenceIcon,
} from "./Icons";

/* ───────── RECTO ───────── */
function Recto({ form, refProp }) {
  const formattedDate = form.dateEmbauche
    ? new Date(form.dateEmbauche).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "—";

  return (
    <div
      ref={refProp}
      className="badge-font relative mx-auto overflow-hidden bg-white"
      style={{ width: 350, height: 450, borderRadius: 16 }}
    >
      {/* Top clip hole */}
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
        <div className="h-4 w-16 rounded-b-lg bg-slate-300" />
        <div className="mx-auto h-3 w-10 rounded-b-md bg-slate-400" />
      </div>

      {/* Top-right corner decoration (red/gold/green stripes) */}
      <div className="absolute right-0 top-0 z-10">
        <svg width="80" height="60" viewBox="0 0 80 60">
          <path d="M80,0 L80,20 Q60,10 40,30 Q50,15 80,0 Z" fill="#c0392b" />
          <path d="M80,0 L80,15 Q55,8 35,25 Q48,12 80,0 Z" fill="#d4a843" />
          <path d="M80,0 L80,10 Q50,5 30,20 Q45,8 80,0 Z" fill="#1a7a3a" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 flex h-[64px] items-center justify-center px-4 pt-2 text-center">
        <h1
          className="font-black tracking-tight text-green-800"
          style={{ fontSize: 17 }}
        >
          PLATEFORME TANTANA
        </h1>
        <div className="absolute left-4 top-3">
          <TantanaLogo size={42} />
        </div>
      </div>

      {/* Green banner */}
      <div className="mx-4 mt-0 flex items-center justify-center" style={{ marginBottom: 8 }}>
        <div
          className="rounded-full px-3 py-1 text-center text-[11px] font-bold text-white"
          style={{
            backgroundColor: "#1a5c2e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 22,
            marginBottom: 0,
          }}
        >
          « MPANORINA NY HOAVIN'Y MADAGASIKARA »
        </div>
      </div>

      {/* Madagascar silhouette + Photo area */}
      <div className="relative mt-2 flex items-start px-4">
        <div className="flex-shrink-0">
          <MadagascarSilhouette className="h-24 w-10 opacity-40" />
        </div>
        <div className="flex-1 flex justify-center">
          <div
            className="overflow-hidden rounded-xl border-2 border-green-700 bg-white"
            style={{ width: 104, height: 104 }}
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt="photo"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-slate-50">
                <PersonIcon size={38} color="#ccc" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Qualification bar - CORRIGÉ */}
      <div className="mx-4 mt-2" style={{ marginBottom: 8 }}>
        <div
          className="rounded-xl border-2 border-green-700 px-3 text-center"
          style={{
            backgroundColor: "#f0fdf4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 32,
            padding: "6px 12px",
          }}
        >
          <span
            className="font-black tracking-wide text-green-800"
            style={{ fontSize: 12, lineHeight: 1.2 }}
          >
            {form.qualification || "DESIGNER GRAPHIQUE"}
          </span>
        </div>
      </div>

      {/* Name bar - CORRIGÉ */}
      <div className="mx-4 mt-0 flex items-center gap-2" style={{ marginBottom: 10 }}>
        <div
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "#1a7a3a" }}
        >
          <PersonIcon size={18} color="#fff" />
        </div>
        <div
          className="min-w-0 flex-1 rounded-full px-3 text-xs font-black leading-tight text-white"
          style={{
            backgroundColor: "#1a5c2e",
            overflowWrap: "anywhere",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: 32,
            padding: "8px 12px",
          }}
        >
          {form.nomPrenom || "NOM ET PRÉNOM"}
        </div>
      </div>

      {/* Info rows */}
      <div className="mx-4 mt-2 flex items-center gap-2" style={{ marginBottom: 12 }}>
        <div className="flex-shrink-0 rounded-md border border-slate-200 bg-white p-1 shadow-sm">
          <QRCodeSVG size={52} />
        </div>
        <div className="min-w-0 flex-1 space-y-0.5">
          <div className="flex min-w-0 items-center gap-1.5">
            <IdCardIcon size={18} />
            <p className="min-w-0 text-[10px] leading-tight text-slate-800">
              <span className="font-bold text-slate-500">N° Matricule : </span>
              <span className="font-bold" style={{ overflowWrap: "anywhere" }}>{form.matricule || "—"}</span>
            </p>
          </div>
          <div className="flex min-w-0 items-center gap-1.5">
            <CalendarIcon size={18} />
            <p className="min-w-0 text-[10px] leading-tight text-slate-800">
              <span className="font-bold text-slate-500">Date d'embauche : </span>
              <span className="font-bold">{formattedDate}</span>
            </p>
          </div>
          <div className="flex min-w-0 items-center gap-1.5">
            <LocationIcon size={18} />
            <p className="min-w-0 text-[10px] font-bold leading-tight text-slate-800" style={{ overflowWrap: "anywhere" }}>
              {form.lieu || "Antananarivo, Madagascar"}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 350 60" preserveAspectRatio="none" className="w-full">
          <path
            d="M0,30 Q87,0 175,20 T350,10 L350,60 L0,60 Z"
            fill="#1a7a3a"
          />
          <path
            d="M0,35 Q87,10 175,25 T350,15 L350,60 L0,60 Z"
            fill="#c0392b"
            opacity="0.9"
          />
          <path
            d="M0,40 Q87,15 175,30 T350,20 L350,60 L0,60 Z"
            fill="#d4a843"
            opacity="0.8"
          />
        </svg>
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2 px-4">
          <LeafIcon size={18} color="#fff" />
          <span className="text-xs font-bold text-white">
            Éducation &nbsp;|&nbsp; Développement &nbsp;|&nbsp; Innovation
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────── VERSO ───────── */
function Verso({ refProp }) {
  return (
    <div
      ref={refProp}
      className="badge-font relative mx-auto overflow-hidden bg-white"
      style={{ width: 350, height: 450, borderRadius: 16 }}
    >
      {/* Top clip hole */}
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
        <div className="h-4 w-16 rounded-b-lg bg-slate-300" />
        <div className="mx-auto h-3 w-10 rounded-b-md bg-slate-400" />
      </div>

      {/* Top-left corner decoration */}
      <div className="absolute left-0 top-0 z-10">
        <svg width="80" height="60" viewBox="0 0 80 60">
          <path d="M0,0 L0,20 Q20,10 40,30 Q30,15 0,0 Z" fill="#c0392b" />
          <path d="M0,0 L0,15 Q25,8 45,25 Q32,12 0,0 Z" fill="#d4a843" />
          <path d="M0,0 L0,10 Q30,5 50,20 Q35,8 0,0 Z" fill="#1a7a3a" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 flex h-[76px] items-center justify-center px-4 pt-4 text-center">
        <h1
          className="font-black tracking-tight text-green-800"
          style={{ fontSize: 17 }}
        >
          PLATEFORME TANTANA
        </h1>
        <div className="absolute right-4 top-8">
          <TantanaLogo size={42} />
        </div>
      </div>

      {/* Madagascar silhouette on right */}
      <div className="absolute right-2 top-12 z-0">
        <MadagascarSilhouette className="h-20 w-8 opacity-30" />
      </div>

      {/* Green banner */}
      <div className="mx-4 mt-0 flex items-center justify-center" style={{ marginBottom: 8 }}>
        <div
          className="rounded-full px-3 py-1 text-center text-[10px] font-bold text-white"
          style={{
            backgroundColor: "#1a5c2e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 20,
            marginBottom: 0,
          }}
        >
          « MPANORINA NY HOAVIN'Y MADAGASIKARA »
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-2 px-4">
        {/* NOTRE MISSION - CORRIGÉ */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <div
              className="flex flex-shrink-0 items-center justify-center rounded-full"
              style={{ width: 28, height: 28, backgroundColor: "#1a7a3a" }}
            >
              <EyeIcon size={16} />
            </div>
            <div
              className="flex-1 rounded-r-full text-xs font-black text-white"
              style={{
                backgroundColor: "#1a7a3a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: 28,
                padding: "6px 12px",
              }}
            >
              NOTRE MISSION
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] leading-snug text-slate-700">
            Favoriser un développement durable et inclusif à Madagascar par
            l'éducation, l'innovation et la valorisation des talents.
          </p>
        </div>

        {/* NOS VALEURS - CORRIGÉ */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <div
              className="flex flex-shrink-0 items-center justify-center rounded-full"
              style={{ width: 28, height: 28, backgroundColor: "#1a3a6a" }}
            >
              <TargetIcon size={16} />
            </div>
            <div
              className="flex-1 rounded-r-full text-xs font-black text-white"
              style={{
                backgroundColor: "#1a3a6a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: 28,
                padding: "6px 12px",
              }}
            >
              NOS VALEURS
            </div>
          </div>
          <div className="verso-values mt-2 flex justify-between gap-1">
            <div className="flex flex-col items-center gap-1">
              <EngagementIcon />
              <span className="text-center text-[10px] font-bold text-slate-700">
                Engagement
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <SolidariteIcon />
              <span className="text-center text-[10px] font-bold text-slate-700">
                Solidarité
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <InnovationIcon />
              <span className="text-center text-[10px] font-bold text-slate-700">
                Innovation
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ResponsabiliteIcon />
              <span className="text-center text-[10px] font-bold text-slate-700">
                Responsabilité
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ExcellenceIcon />
              <span className="text-center text-[10px] font-bold text-slate-700">
                Excellence
              </span>
            </div>
          </div>
        </div>

        {/* NOTRE VISION - CORRIGÉ */}
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <div
              className="flex flex-shrink-0 items-center justify-center rounded-full"
              style={{ width: 28, height: 28, backgroundColor: "#c0392b" }}
            >
              <PeopleIcon size={16} />
            </div>
            <div
              className="flex-1 rounded-r-full text-xs font-black text-white"
              style={{
                backgroundColor: "#c0392b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: 28,
                padding: "6px 12px",
              }}
            >
              NOTRE VISION
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-2 w-full border-t border-slate-200 pt-2 text-center">
          <p
            className="w-full text-center font-bold italic text-green-800"
            style={{ fontSize: 12, lineHeight: 1.25 }}
          >
            « Ensemble
            <br />
            pour une Madagascar
            <br />
            plus forte ! »
          </p>
        </div>

        {/* Signature */}
        <div className="w-20 flex-shrink-0 text-right">
          <div className="border-b border-slate-400 pb-1 text-[10px] text-slate-500">
            Signature
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 350 60" preserveAspectRatio="none" className="w-full">
          <path
            d="M0,30 Q87,0 175,20 T350,10 L350,60 L0,60 Z"
            fill="#1a7a3a"
          />
          <path
            d="M0,35 Q87,10 175,25 T350,15 L350,60 L0,60 Z"
            fill="#c0392b"
            opacity="0.9"
          />
          <path
            d="M0,40 Q87,15 175,30 T350,20 L350,60 L0,60 Z"
            fill="#d4a843"
            opacity="0.8"
          />
        </svg>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <svg width="16" height="16" viewBox="0 0 20 20">
              <rect x="4" y="3" width="12" height="14" rx="2" fill="#fff" />
              <rect x="7" y="5" width="6" height="3" rx="1" fill="#1a7a3a" />
              <rect x="9" y="8" width="2" height="7" rx="0.5" fill="#1a7a3a" />
              <rect x="12" y="3" width="4" height="14" rx="1" fill="#c0392b" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── MAIN PREVIEW ───────── */
export default function BadgePreview({ form, rectoRef, versoRef }) {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
      <div>
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
          Recto
        </p>
        <Recto form={form} refProp={rectoRef} />
      </div>
      <div>
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
          Verso
        </p>
        <Verso refProp={versoRef} />
      </div>
    </div>
  );
}