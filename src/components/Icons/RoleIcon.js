import React from 'react';

import roleSvg from '@/assets/icons/role.svg';

const RoleIcon = () => {
  return (
    <img
      src={roleSvg.src}
      width={roleSvg.width}
      height={roleSvg.height}
      alt="token"
    />
  );
};

export default RoleIcon;
