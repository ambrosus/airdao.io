import WalletIcon from '@/components/Icons/Wallet';
import EyeIcon from '@/components/Icons/Eye';
import BellIcon from '@/components/Icons/Bell';
import TrackingIcon from '@/components/Icons/Tracking';
import ShieldIcon from '@/components/Icons/Shield';

const data = [
  {
    id: 0,
    title: 'Create & Import wallet',
    icon: <WalletIcon />,
    src: '/slider/slide-1.svg',
    desc: 'Create new wallets, import existing wallets, and send & receive AirDAO ecosystem tokens.',
  },
  {
    id: 1,
    title: 'Watchlists',
    icon: <EyeIcon />,
    src: '/slider/slide-2.svg',
    desc: 'Get insights into activity on AirDAO with watchlists and address groups.',
  },
  {
    id: 2,
    title: 'Price alerts',
    icon: <BellIcon />,
    src: '/slider/slide-3.svg',
    desc: 'Stay updated on your portfolio with personalized AMB price alerts.',
  },
  {
    id: 3,
    title: 'Wallet tracking',
    icon: <TrackingIcon />,
    src: '/slider/slide-4.svg',
    desc: 'Get transaction notifications and view token balances with our wallet-tracking features.',
  },
  {
    id: 4,
    title: 'Upgraded security',
    icon: <ShieldIcon />,
    src: '/slider/slide-5.svg',
    desc: 'Keep your crypto safe with FaceID, fingerprint, and passcode security options.',
  },
];

export default data;
