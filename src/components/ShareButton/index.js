import useClickOutside from '@/hooks/useClickOutside';
import Image from 'next/image';
import { useRef, useState } from 'react';
import CopyIcon from '@/assets/icons/copyLink.svg';
import ShareIcon from '@/assets/icons/share.svg';
import LinkedInIcon from '@/assets/icons/shareLinkedIn.svg';
import TwitterIcon from '@/assets/icons/shareTwitter.svg';
import styles from './shareButton.module.scss';

export default function ShareButton() {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useClickOutside(
    ref,
    () => {
      setOpen(false);
    },
    open,
  );

  const copyCurrentURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setOpen(false);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareTwitter = async () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${window?.location?.href}`,
      '_blank',
    );
  };

  const shareLinkedIn = async () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${window?.location?.href}`,
      '_blank',
    );
  };

  return (
    <>
      <div className={styles['share']}>
        <button onClick={() => setOpen(!open)}>
          <Image src={ShareIcon} alt="share" />
        </button>
        {open && (
          <div className={styles['share-dropdown']} ref={ref}>
            <button className={styles['option']} onClick={copyCurrentURL}>
              <div className={styles['option-content']}>
                <Image src={CopyIcon} alt="share" />
                <p className={styles['option-text']}>Copy link</p>
              </div>
            </button>
            <button className={styles['option']} onClick={shareTwitter}>
              <div className={styles['option-content']}>
                <Image src={TwitterIcon} alt="share" />
                <p className={styles['option-text']}>Share on twitter</p>
              </div>
            </button>
            <button className={styles['option']} onClick={shareLinkedIn}>
              <div className={styles['option-content']}>
                <Image src={LinkedInIcon} alt="share" />
                <p className={styles['option-text']}>Share on LinkedIn</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
