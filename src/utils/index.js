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
