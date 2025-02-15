export function capitalizeFirstLetter(str) {
  if (!str) return str; // Handle jika string kosong
  str = str.trim(); // Menghapus spasi di awal dan akhir
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  if (!str) return str; // Handle jika string kosong
  return str.split("").reverse().join("");
}

export function addNumbers(a, b) {
  return a + b;
}
