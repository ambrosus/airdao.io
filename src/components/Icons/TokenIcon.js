import React from 'react';

import tokensSvg from '@/assets/icons/tokens.svg';

const TokenIcon = () => {
  return (
    <img
      src={tokensSvg.src}
      width={tokensSvg.width}
      height={tokensSvg.height}
      alt="token"
    />
  );
};

export default TokenIcon;
