'use client';

import { useState } from 'react';
import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';
import сhevronDown from '@/assets/icons/chevron-down.svg';

import styles from './Accordion.module.css';

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <motion.div initial={false} className={styles.accordionItem}>
      <motion.button
        className={styles.accordionButton}
        onClick={onToggle}
        aria-expanded={isOpen}
        initial={false}
      >
        <h2 className={styles.accordionTitle}>{title}</h2>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={сhevronDown} alt="arrow down" width={20} height={20} />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.accordionContent}
          >
            <p className={styles.accordionText}>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const items = [
  {
    title: 'Liquid staking',
    content:
      'Liquid staking is a mechanism that allows users to stake their assets in a blockchain network while receiving a liquid token representing their staked assets, which can be used in DeFi applications for additional yield opportunities.',
  },
  {
    title: 'Liquid staking',
    content:
      'Liquid staking is a mechanism that allows users to stake their assets in a blockchain network while receiving a liquid token representing their staked assets, which can be used in DeFi applications for additional yield opportunities.',
  },
  {
    title: 'Liquid staking',
    content:
      'Liquid staking is a mechanism that allows users to stake their assets in a blockchain network while receiving a liquid token representing their staked assets, which can be used in DeFi applications for additional yield opportunities.',
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  );
}
