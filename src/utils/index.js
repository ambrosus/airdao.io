export function splitArray(array) {
  const halfLength = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, halfLength);
  const secondHalf = array.slice(halfLength);
  return [firstHalf, secondHalf];
}

export const collapseString = (string, symbolsToShow = 10) => {
  return `${string.substring(0, symbolsToShow)}...${string.substring(
    string.length - symbolsToShow,
    string.length,
  )}`;
};

export function formatNumber(value) {
  const number = parseFloat(value);

  if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + 'B';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + 'M';
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(2) + 'K';
  } else {
    return number.toFixed(2);
  }
}
