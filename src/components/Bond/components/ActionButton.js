import useSwapActions from '@/utils/bond/hooks/useSwapActions';
import PropTypes from 'prop-types';
import { Button } from '@airdao/ui-library';
import check from './check.svg';
import loader from './circle-loader.svg';

export default function ActionButton({
  state,
  stateList,
  setIsPending,
  setIsSuccess,
  setIsError,
  amount,
  successCallback,
  connectWallet,
  ...props
}) {
  const { swap, approve } = useSwapActions();

  function swapAndWait() {
    setIsPending(true);
    swap(amount)
      .then((tx) => tx.wait())
      .then(() => {
        setIsPending(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
        successCallback();
      })
      .catch((e) => {
        setIsPending(false);
        if (e.code === 'ACTION_REJECTED') return;
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
        console.log(e);
      });
  }

  function approveAndWait() {
    setIsPending(true);
    approve(amount)
      .then((tx) => tx.wait())
      .then(() => setIsPending(false))
      .catch((e) => {
        setIsPending(false);
        if (e.code === 'ACTION_REJECTED') return;
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
        console.log(e);
      });
  }

  const buttonProps = {
    [stateList.NOT_CONNECTED]: {
      disabled: false,
      children: 'Connect Wallet',
      onClick: connectWallet,
    },
    [stateList.NO_VALUE]: {
      disabled: true,
      children: 'Swap',
    },
    [stateList.INSUFFICIENT_BALANCE]: {
      disabled: true,
      children: 'Insufficient balance',
    },
    [stateList.APPROVAL_REQUIRED]: {
      disabled: false,
      children: 'Approve',
      onClick: approveAndWait,
    },
    [stateList.PENDING]: {
      disabled: true,
      children: (
        <>
          <img src={loader.src} alt='loader' className='circle-loader' />
          Loading...
        </>
      ),
    },
    [stateList.READY]: {
      disabled: false,
      children: 'Swap',
      onClick: swapAndWait,
    },
    [stateList.SUCCESS]: {
      disabled: true,
      children: (
        <>
          <img src={check} alt="check" /> Success
        </>
      ),
    },
    [stateList.ERROR]: {
      disabled: true,
      children: "There's some error",
    },
  };

  return (
    <Button
      className="bond-exchange__swap-button"
      size="large"
      type="secondary"
      {...buttonProps[state]}
      {...props}
    />
  );
}

ActionButton.propTypes = {
  state: PropTypes.string,
  stateList: PropTypes.object,
  setIsPending: PropTypes.func,
  setIsSuccess: PropTypes.func,
  setIsError: PropTypes.func,
  amount: PropTypes.string,
  successCallback: PropTypes.func,
  connectWallet: PropTypes.func,
};
