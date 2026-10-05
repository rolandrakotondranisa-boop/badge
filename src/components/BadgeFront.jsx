import React, { useEffect, useState } from "react";
import { generateBadgeQrCode } from "../utils/qrCode";

export default function BadgeFront({ form }) {
  const [qr, setQr] = useState("");
  useEffect(() => {
    let active = true;
    generateBadgeQrCode(form).then((value) => { if (active) setQr(value); }).catch(console.error);
    return () => { active = false; };
  }, [form.nomPrenom, form.qualification, form.matricule, form.dateEmbauche, form.lieu]);
  const date = form.dateEmbauche ? new Date(`${form.dateEmbauche}T00:00:00`).toLocaleDateString("fr-FR") : "";
  return <article className="badge badge-front badge-font" style={{ width: "70mm", height: "90mm" }}>
    <div className="front-ribbon"><i/><i/><i/></div>
    <header className="brand"><div className="brand-mark"><span/><span/><span/></div><div><b>PLATEFORME</b><small>TANTANA</small></div></header>
    <div className="front-slogan">ENSEMBLE, CONSTRUISONS L&apos;AVENIR</div>
    <div className="portrait">{form.photo ? <img src={form.photo} alt="Portrait"/> : <span>PHOTO</span>}</div>
    <div className="identity"><h2>{form.nomPrenom || "NOM ET PR\u00C9NOM"}</h2><p>{form.qualification || "QUALIFICATION / POSTE"}</p></div>
    <div className="front-details"><p><b>N&#176; Matricule :</b> {form.matricule || "-"}</p><p><b>Date d&apos;embauche :</b> {date || "-"}</p><p><b>Lieu :</b> {form.lieu || "-"}</p></div>
    <div className="front-footer"><span>PLATEFORME TANTANA</span>{qr && <img src={qr} alt="QR code"/>}</div>
  </article>;
}
