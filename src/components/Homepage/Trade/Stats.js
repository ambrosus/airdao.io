'use client';

import styles from './trade.module.scss';
import logo from './logo.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BezierChart from './BezierChrt';

function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Stats() {
  const [ambInfo, setAmbInfo] = useState({
    price_usd: '',
  });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getStats();
    getChartData();
  }, []);

  const getStats = async () => {
    const response = await fetch('https://token.ambrosus.io/');
    const json = await response.json();
    const priceUsd = json.data.price_usd.toFixed(3);

    setAmbInfo({ ...json.data, price_usd: priceUsd });
  };

  const getChartData = async () => {
    const response = await fetch(
      'https://wallet-api.ambrosus-test.io/api/v1/watcher-historical-prices'
    );
    const json = await response.json();

    const dayInMs = 86400000;
    const dayBefore = new Date().getTime() - dayInMs;

    const pricesForDay = json.prices
      .filter((item) => item[0] >= dayBefore)
      .map((item) => item[1]);

    setChartData(pricesForDay);
  };

  return (
    <div className={styles.stats_container}>
      <div className={styles.price_chart}>
        <div className={styles.chart_top}>
          <Image src={logo} alt={'logo'} className={styles.chart_logo} />
          <div className={styles.chart_top_left}>AirDAO</div>
          <div className={styles.chart_top_right}>${ambInfo.price_usd}</div>
          <div className={styles.chart_bottom_left}>AMB</div>
          <div
            className={styles.chart_bottom_right}
            style={
              ambInfo.percent_change_24h < 0
                ? { color: 'rgb(254, 99, 109)' }
                : {}
            }
          >
            {`${ambInfo.percent_change_24h > 0 ? '+' : ''}${
              ambInfo.percent_change_24h
            }% `}
            <span className={styles.gray}>(24hrs)</span>
          </div>
        </div>
        <div className={styles.chart_container}>
          <BezierChart data={chartData} />
        </div>
      </div>

      <div className={`${styles.floating_container} ${styles.max_supply}`}>
        <div className={styles.floating_name}>Max Supply</div>
        <div className={styles.floating_value}>6,500,000,000</div>
      </div>

      <div
        className={`${styles.floating_container} ${styles.circulating_supply}`}
      >
        <div className={styles.floating_name}>Circulating Supply</div>
        <div className={styles.floating_value}>
          {numberWithCommas(ambInfo.circulating_supply)} AMB
        </div>
      </div>

      <div className={`${styles.floating_container} ${styles.total_supply}`}>
        <div className={styles.floating_name}>Total Supply</div>
        <div className={styles.floating_value}>
          {numberWithCommas(ambInfo.total_supply)} AMB
        </div>
      </div>

      <div className={`${styles.floating_container} ${styles.market_cap}`}>
        <div className={styles.floating_name}>Market Cap</div>
        <div className={styles.floating_value}>
          ${numberWithCommas(ambInfo.market_cap_usd)}
        </div>
      </div>
    </div>
  );
}