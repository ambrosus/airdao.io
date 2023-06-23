import Image from 'next/image';
import useClickOutside from '../../hooks/useClickOutside';
import { useRef } from 'react';
import styles from './Header.module.scss';

const AddressInfo = ({ address, logout, close }) => {
  const ref = useRef(null);
  useClickOutside(ref, close);

  return (
    <div className={styles['address-info']} ref={ref}>
      <p className={styles['address-info__label']}>Connected wallet</p>
      <div className={styles['address-info__block']}>
        <Image src='/circle-check.svg' width='16' height='16' className={styles['address-info__check']} alt='check'/>
        <span className={styles['address-info__address']}>
          {`${address.substring(0, 5)}...${address.substring(
            address.length - 5,
            address.length
          )}`}
        </span>
      </div>
      <Image src='/copy.svg' width='20' height='20' className={styles['address-info__copy']} alt='copy' />
      <button className={styles['address-info__disconnect']} onClick={logout}>
        Disconnect wallet
        <Image src='/logout.svg' width='20' height='20' alt='logout' />
      </button>
    </div>
  )
};

export default AddressInfo;
