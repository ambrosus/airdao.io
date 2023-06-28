'use client';

import styles from './trade.module.scss';
import logo from './logo.png';
import Image from 'next/image';
import graphMock from './graph-mock.png';

export default function Stats() {
  return (
    <div className={styles.stats_container}>
      <div className={styles.price_chart}>
        <div className={styles.chart_top}>
          <Image src={logo} alt={'logo'} className={styles.chart_logo} />
          <div className={styles.chart_top_left}>AirDAO</div>
          <div className={styles.chart_top_right}>$0.0130</div>
          <div className={styles.chart_bottom_left}>AMB</div>
          <div className={styles.chart_bottom_right}>
            +20.17% <span className={styles.gray}>(24hrs)</span>
          </div>
        </div>
        <Image src={graphMock} alt={'graph'} className={styles.chart_graph} />
      </div>

      <div className={`${styles.floating_container} ${styles.max_supply}`}>
        <div className={styles.floating_name}>Max Supply</div>
        <div className={styles.floating_value}>6,500,000,000</div>
      </div>

      <div
        className={`${styles.floating_container} ${styles.circulating_supply}`}
      >
        <div className={styles.floating_name}>Circulating Supply</div>
        <div className={styles.floating_value}>1,543,750,660 AMB</div>
      </div>

      <div className={`${styles.floating_container} ${styles.total_supply}`}>
        <div className={styles.floating_name}>Total Supply</div>
        <div className={styles.floating_value}>1,529,576,370</div>
      </div>

      <div className={`${styles.floating_container} ${styles.market_cap}`}>
        <div className={styles.floating_name}>Market Cap</div>
        <div className={styles.floating_value}>$19,836,144</div>
      </div>
    </div>
  );
}
