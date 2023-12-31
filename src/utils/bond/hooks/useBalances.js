'use client';
import { useEffect, useState } from 'react';
import BnToString from '@/utils/bond/BnToString';
import { createAirBondContract } from '@/utils/bond/contracts';
import { useWeb3React } from '@web3-react/core';

export default function useBalances() {
  const { provider, account, chainId } = useWeb3React();
  const [balances, setBalances] = useState({
    ambBalance: '',
    airBondBalance: '',
  });

  const getAmbBalance = async (provider, account) => {
    const bnBalance = await provider.getBalance(account);
    return BnToString(bnBalance);
  };

  const getAirBondsBalance = async (provider, account) => {
    if (chainId !== 16718) {
      return null;
    }
    const AirBondsContract = await createAirBondContract(provider);
    const bnBalance = await AirBondsContract.balanceOf(account);
    return BnToString(bnBalance);
  };

  useEffect(() => {
    if (!provider || !account || chainId !== 16718) {
      setBalances({ ambBalance: '', airBondBalance: '' });
      return;
    }

    const getBalances = async () => {
      const ambBalance = await getAmbBalance(provider, account);
      const airBondBalance = await getAirBondsBalance(provider, account);
      setBalances({ ambBalance, airBondBalance });
    };

    getBalances();
    provider.on('block', getBalances);
    return () => provider.off('block', getBalances);
  }, [account, provider]);

  return balances;
}
