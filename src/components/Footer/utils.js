import Image from 'next/image';

import ios from '../../assets/icons/ios.svg';
import android from '../../assets/icons/android.svg';

export const switchText = text => {
  switch (text) {
    case 'Download on the App Store':
      return <Image width={148} height={48} src={ios} alt={text} />;
    case 'Get it on Google Play':
      return <Image width={161} height={48} src={android} alt={text} />;
    default:
      return text;
  }
};
