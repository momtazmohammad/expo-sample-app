export function numAddCama(numvar) {
  return String(~~numvar)
    .replace(/[^0-9.]/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
