export const formatInteger = (number) => {
  // take a number and return a string with commas
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}