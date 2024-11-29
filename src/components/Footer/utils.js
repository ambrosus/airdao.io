import Image from 'next/image';

import ios from '@/assets/icons/ios.svg';
import iosBlack from '@/assets/icons/ios-black.svg';
import android from '@/assets/icons/android.svg';
import androidBlack from '@/assets/icons/android-black.svg';

export const switchText = (text, color = 'white') => {
  switch (text) {
    case 'Download on the App Store':
      return color === 'white' ? (
        <Image
          width={148}
          quality={100}
          height={48}
          src={ios}
          alt={text || 'Download'}
        />
      ) : (
        <Image
          width={155}
          quality={100}
          height={55}
          src={iosBlack}
          alt={text || 'Download'}
        />
      );
    case 'Get it on Google Play':
      return color === 'white' ? (
        <Image
          width={161}
          quality={100}
          height={48}
          src={android}
          alt={text || 'Google Play'}
        />
      ) : (
        <Image
          width={169}
          quality={100}
          height={55}
          src={androidBlack}
          alt={text || 'Google Play'}
        />
      );
    default:
      return text;
  }
};
