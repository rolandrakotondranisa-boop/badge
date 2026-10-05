import React from "react";

export function TantanaLogo({ size = 120 }) {
  return (
    <img
      src="/templates/logo.png"
      alt="Logo Plateforme Tantana"
      width={size}
      height={size}
      style={{ display: "block", objectFit: "contain" }}
    />
  );
}

export function MadagascarSilhouette({ className = "" }) {
  return (
    <svg viewBox="0 0 100 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M55,10 C60,8 65,12 68,18 C72,25 70,35 72,45 C74,55 78,60 75,70 C72,80 68,85 70,95 C72,105 75,110 72,120 C70,130 65,135 68,145 C70,155 68,165 65,175 C62,182 58,188 55,192 C52,188 48,182 46,175 C43,165 42,155 44,145 C46,135 42,130 40,120 C38,110 40,105 38,95 C36,85 40,80 42,70 C44,60 42,55 44,45 C46,35 48,25 50,18 C52,12 53,10 55,10 Z"
        fill="#d0d0d0"
        opacity="0.6"
      />
    </svg>
  );
}

export function PersonIcon({ size = 24, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="12" cy="8" r="4" />
      <path d="M12 14c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5z" />
    </svg>
  );
}

export function IdCardIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" fill="#1a7a3a" />
      <circle cx="8" cy="11" r="2.5" fill="#fff" />
      <path d="M4 17c0-2 2-3 4-3s4 1 4 3" fill="#fff" />
      <rect x="14" y="9" width="6" height="2" rx="1" fill="#fff" />
      <rect x="14" y="13" width="4" height="2" rx="1" fill="#fff" />
    </svg>
  );
}

export function CalendarIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="17" rx="2" fill="#1a7a3a" />
      <rect x="3" y="4" width="18" height="5" rx="2" fill="#145c2c" />
      <rect x="7" y="2" width="2" height="4" rx="1" fill="#1a7a3a" />
      <rect x="15" y="2" width="2" height="4" rx="1" fill="#1a7a3a" />
      <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="6" y="16" width="3" height="2" rx="0.5" fill="#fff" />
    </svg>
  );
}

export function LocationIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1a7a3a" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#fff" />
      <circle cx="12" cy="9" r="2" fill="#1a7a3a" />
    </svg>
  );
}

export function EyeIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  );
}

export function TargetIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="#fff" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

export function PeopleIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org2000/svg">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-1c0-2.5 3-4 6-4s6 1.5 6 4v1" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M21 21v-1c0-1.8-1.5-3-3.5-3.5" />
    </svg>
  );
}

export function LeafIcon({ size = 20, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
    </svg>
  );
}

export function EngagementIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="#1a7a3a" />
      <circle cx="14" cy="16" r="4" fill="#fff" />
      <circle cx="26" cy="16" r="4" fill="#fff" />
      <circle cx="20" cy="24" r="4" fill="#fff" />
    </svg>
  );
}

export function SolidariteIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="#c0392b" />
      <path d="M12 22c0-4 4-7 8-7s8 3 8 7c0 3-2 5-4 5H16c-2 0-4-2-4-5z" fill="#fff" />
      <path d="M16 18l4-4 4 4" fill="none" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

export function InnovationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="#1a7a3a" />
      <path d="M20 10c-3 0-5 2-5 5 0 2 1 3 2 4v3h6v-3c1-1 2-2 2-4 0-3-2-5-5-5z" fill="#fff" />
      <rect x="17" y="24" width="6" height="2" rx="1" fill="#fff" />
      <rect x="18" y="27" width="4" height="2" rx="1" fill="#fff" />
    </svg>
  );
}

export function ResponsabiliteIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="#c0392b" />
      <circle cx="14" cy="17" r="3" fill="#fff" />
      <circle cx="26" cy="17" r="3" fill="#fff" />
      <circle cx="20" cy="24" r="3" fill="#fff" />
      <path d="M10 30c0-3 4-5 10-5s10 2 10 5" fill="#fff" />
    </svg>
  );
}

export function ExcellenceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="#1a7a3a" />
      <path d="M20 12c-2 4-6 6-6 10 0 3 3 6 6 6s6-3 6-6c0-4-4-6-6-10z" fill="#fff" />
      <path d="M20 18v8M17 22h6" stroke="#1a7a3a" strokeWidth="1.5" />
    </svg>
  );
}

export function QRCodeSVG({ size = 120 }) {
  // Simulated QR code pattern
  const cells = [];
  const cellSize = 4;
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1],
    [0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0],
    [1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1],
    [0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1],
    [0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1],
    [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1],
  ];

  for (let row = 0; row < pattern.length; row++) {
    for (let col = 0; col < pattern[row].length; col++) {
      if (pattern[row][col]) {
        cells.push(
          <rect
            key={`${row}-${col}`}
            x={col * cellSize}
            y={row * cellSize}
            width={cellSize}
            height={cellSize}
            fill="#000"
          />
        );
      }
    }
  }

  return (
    <svg width={size} height={size} viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
      <rect width="76" height="76" fill="#fff" />
      {cells}
      {/* Center T logo */}
      <rect x="30" y="30" width="16" height="16" rx="2" fill="#fff" />
      <rect x="33" y="33" width="10" height="10" rx="1" fill="#1a7a3a" />
      <rect x="35" y="35" width="6" height="3" rx="0.5" fill="#fff" />
      <rect x="37" y="38" width="2" height="4" rx="0.5" fill="#fff" />
    </svg>
  );
}