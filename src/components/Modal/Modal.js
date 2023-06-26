'use client';

import Image from 'next/image';
import styles from './Modal.module.scss';

const Modal = ({ children, closeModal }) => {
  return (
    <div className={styles['ui-modal']}>
      {children}
      <button className={styles['ui-modal__close']} onClick={closeModal}>
        <Image src="/cross.svg" width="24" height="24" alt="close" />
      </button>
    </div>
  );
};

export default Modal;
