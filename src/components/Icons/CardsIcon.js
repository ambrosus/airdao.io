import React from 'react';

import cardsSvg from '@/assets/icons/cards.svg';

const CardsIcon = () => {
  return (
    <img
      src={cardsSvg.src}
      width={cardsSvg.width}
      height={cardsSvg.height}
      alt="cards"
    />
  );
};

export default CardsIcon;
