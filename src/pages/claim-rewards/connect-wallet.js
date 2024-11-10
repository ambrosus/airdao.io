import { useConnectWalletModal, Button } from '@airdao/ui-library';

import styles from './styles.module.scss';

import GiftIcon from '@/components/Icons/Gift';

const ConnectWallet = () => {
  const { toggleModal } = useConnectWalletModal();

  return (
    <div className={styles.block}>
      <GiftIcon />
      <h4>Connect wallet to claim your rewards</h4>
      <Button
        onClick={() => toggleModal()}
        type="secondary"
        className={styles.button}
        size="medium"
      >
        Connect Wallet
      </Button>
    </div>
  );
};

export default ConnectWallet;
