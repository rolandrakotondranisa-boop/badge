# Badge Manager - React + Vite + Tailwind

Application sans backend pour créer et gérer des badges TANTANA.

## Fonctionnalités

- Formulaire photo, nom/prénom, qualification/poste, matricule, date d'embauche et lieu.
- Recto et verso reconstruits en composants HTML/CSS au format portrait de 70 × 90 mm.
- QR Code généré automatiquement.
- Enregistrement dans localStorage.
- Liste, consultation et suppression des badges.
- Export PNG séparé pour chaque face.
- Export PDF haute résolution de deux pages au format portrait de 70 × 90 mm.

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée par Vite, généralement http://localhost:5173.

## Modèles de référence

Les images originales sont conservées dans `public/templates/` comme références visuelles uniquement. Elles ne sont pas chargées pour afficher ou exporter les badges.

Les faces sont définies dans `src/components/BadgeFront.jsx` et `src/components/BadgeBack.jsx`. Les styles d'impression et les dimensions sont dans `src/index.css`.

## Important

Le QR code est généré dans `src/utils/qrCode.js` à partir des informations du formulaire.
