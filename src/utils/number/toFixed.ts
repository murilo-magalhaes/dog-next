export default function toFixed(
  num: number | string,
  decimalHouses?: number,
): number {
  return Number(Number(num).toFixed(decimalHouses || 2));
}
