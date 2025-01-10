import styles from './tab.module.scss';

const Tab = ({ tabs, onChange, selectedTab }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ value, label }) => (
        <button
          className={`${styles.tabs__item} ${
            value === selectedTab ? styles.tabs__item_active : ''
          }`}
          key={value}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
