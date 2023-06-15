export function capitalize(string) {
  /**
   * Take a string and capitalize the first letter of each word.
   * It should also lowercase the rest of the letters.
   */
  // todo: work with multiple words
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}