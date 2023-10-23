import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import CurrencyInput from './components/CurrencyInput';
import ActionButton from './components/ActionButton';
import { useEffect, useState } from 'react';
import AmbIcon from './icons/amb.svg';
import AirBondIcon from './icons/airbond.svg';
import arrow from './icons/arrow.svg';
import useAmountAndPrice from '@/utils/bond/hooks/useAmountAndPrice';
import useBalances from '@/utils/bond/hooks/useBalances';
import useSwapLayoutState from '@/utils/bond/hooks/useSwapLayoutState';
import { useAuthorization } from 'airdao-components-and-tools/hooks';
import {
  metamaskConnector,
  walletconnectConnector,
} from 'airdao-components-and-tools/utils';
import LoginModal from '@/components/LoginModal/LoginModal';
import { useWeb3React } from '@web3-react/core';
import { Notify } from '@airdao/ui-library';
import Image from 'next/image';
import bg from './icons/bg.svg';

const BondExchange = ({ header, footerText }) => {
  const [airBondsToSell, setAirBondsToSell] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { chainId } = useWeb3React();
  const { amount: ambToReceive, price } = useAmountAndPrice(airBondsToSell);
  const { ambBalance, airBondBalance } = useBalances();
  const { state, stateList, setIsPending, setIsSuccess, setIsError } =
    useSwapLayoutState(airBondsToSell, airBondBalance);

  const { loginMetamask, loginWalletConnect } = useAuthorization(
    metamaskConnector,
    walletconnectConnector
  );

  useEffect(() => {
    if (chainId !== 16718) {
      Notify.info('Please select AirDAO main-net chain in your wallet', null, {
        autoClose: 5000,
      });
    }
  }, []);

  const handleLoginModal = () => setIsLoginModalOpen((state) => !state);

  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className="bond-exchange">
        <div className="bond-exchange__bg">
          <Image src={bg} alt="background" />
        </div>
        <div className="container">
          <div className="content bond-exchange__content">
            <div className="bond-exchange__input-block">
              <div className="bond-exchange__beta-mark">Beta</div>
              <h2 className="bond-exchange__heading">Bond Marketplace</h2>
              <p className="bond-exchange__lead">
                AirBonds were rewarded to active community members.{' '}
              </p>
              <CurrencyInput
                onChange={setAirBondsToSell}
                value={airBondsToSell}
                selectedCoin={{ symbol: 'AirBond', icon: AirBondIcon.src }}
                balance={airBondBalance || '-'}
              />
              <div className="bond-exchange__divider">
                <div className="bond-exchange__divider-button">
                  <img
                    src={arrow.src}
                    alt="arrow"
                    className="bond-exchange__arrow"
                  />
                </div>
              </div>
              <CurrencyInput
                value={ambToReceive}
                className="bond-exchange__currency-input_last"
                selectedCoin={{ symbol: 'AMB', icon: AmbIcon.src }}
                balance={ambBalance || '-'}
                disabled
              />
              <div className="bond-exchange__price-row">
                <div className="bond-exchange__price-name">Price:</div>
                <div className="bond-exchange__price-value">
                  {price} AMB per 1 BOND
                </div>
              </div>

              <ActionButton
                state={state}
                setIsPending={setIsPending}
                setIsSuccess={setIsSuccess}
                setIsError={setIsError}
                stateList={stateList}
                amount={airBondsToSell}
                successCallback={() => setAirBondsToSell('')}
                connectWallet={handleLoginModal}
              />
            </div>
          </div>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          closeModal={handleLoginModal}
          loginMetamask={loginMetamask}
          loginWalletConnect={loginWalletConnect}
        />
      )}
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  );
};

export default BondExchange;
