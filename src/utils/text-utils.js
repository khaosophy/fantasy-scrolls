export function capitalize(string) {
  /**
   * Take a string and capitalize the first letter of each word.
   * It should also lowercase the rest of the letters.
   */
  return string.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
}