const STORAGE_KEY = "tantana_badges";

export function getBadges() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    const badges = JSON.parse(data);
    return Array.isArray(badges)
      ? badges.filter((badge) => badge && typeof badge === "object")
      : [];
  } catch (error) {
    console.error("Erreur lecture badges :", error);
    return [];
  }
}

export function saveBadges(badges) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(badges));
}

export function addBadge(badge) {
  const badges = getBadges();

  const newBadge = {
    ...badge,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  badges.unshift(newBadge);
  saveBadges(badges);
  return newBadge;
}

export function deleteBadge(id) {
  const badges = getBadges().filter((badge) => badge.id !== id);
  saveBadges(badges);
  return badges;
}