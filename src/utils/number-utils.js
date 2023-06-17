export const formatInteger = (number) => {
  // take a number and return a string with commas
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatChallengeRating = (cr) => {
  // if CR is less than 1, return a fraction as a string
  // for example, .5 would return "1/2" or .25 would return "1/4"
  if (cr < 1) {
    return `1/${1/cr}`
  }
  return cr.toString();
}