export function normalizeSearchQuery(value) {
  if (Array.isArray(value)) {
    return normalizeSearchQuery(value[0]);
  }

  if (value === undefined || value === null) {
    return "";
  }

  const normalized = String(value).replace(/\s+/g, " ").trim();

  if (!normalized) {
    return "";
  }

  return normalized.length > 100 ? normalized.slice(0, 100).trim() : normalized;
}
