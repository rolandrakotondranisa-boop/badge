import React from "react";
export default function BadgeBack() {
 return <article className="badge badge-back badge-font" style={{ width: "70mm", height: "90mm" }}>
  <div className="back-ribbons"><i/><i/><i/></div>
  <header className="brand back-brand"><div className="brand-mark"><span/><span/><span/></div><div><b>PLATEFORME</b><small>TANTANA</small></div></header>
    <section className="back-section mission"><h3>NOTRE MISSION</h3><p>Favoriser un d&eacute;veloppement durable et inclusif &agrave; Madagascar par l&apos;&eacute;ducation, l&apos;innovation et la valorisation des talents.</p></section>
    <section className="back-section values"><h3>NOS VALEURS</h3><ul><li>Engagement</li><li>Solidarit&eacute;</li><li>Innovation</li><li>Responsabilit&eacute;s</li><li>Excellence</li></ul></section>
  <section className="back-section vision"><h3>NOTRE VISION</h3><p>Ensemble<br/>pour une Madagascar<br/>plus forte !</p></section>
  <footer className="signature">TANTANA</footer>
 </article>;
}
