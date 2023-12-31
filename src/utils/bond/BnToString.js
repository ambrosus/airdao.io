import { ethers } from 'ethers';

const BnToString = (bn, decimalsLength = 3) => {
  const floatString = ethers.utils.formatEther(bn);
  const [intPart, floatPart] = floatString.split('.');
  if (floatPart && floatPart.length > 3) {
    return `${intPart}.${floatPart.slice(0, decimalsLength)}`;
  } else if (floatPart && parseInt(floatPart) !== 0) {
    return `${intPart}.${floatPart}`;
  } else {
    return intPart;
  }
};

export default BnToString;
