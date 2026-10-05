import QRCode from "qrcode";

export function generateBadgeQrCode(form) {
  const payload = {
    nomPrenom: form.nomPrenom || "",
    qualification: form.qualification || "",
    matricule: form.matricule || "",
    dateEmbauche: form.dateEmbauche || "",
    lieu: form.lieu || "",
  };

  return QRCode.toDataURL(JSON.stringify(payload), {
    width: 320,
    margin: 1,
    errorCorrectionLevel: "H",
  });
}