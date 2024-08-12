import styles from './download.module.scss';
import PhoneBottomIcon from '@/components/Icons/PhoneBottom';

const DownloadApp = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.holder}>
        <div className={styles.block}>
          <div className={styles.blockLeft}>
            <div className={styles.content}>
              <h4>Download the app</h4>
              <p>
                Keep your AirDAO assets safe with the official wallet. Stay up
                to date on your portfolio with watchlists, transaction tracking,
                and AMB price alerts. It’s all of AirDAO, in one place.
              </p>
              {data.length > 0 && (
                <ul className={styles.listsLinks}>
                  {data.map(item => (
                    <li key={item.imageurl.alt}>
                      <a href={item.linkurl.url} target={item.linkurl.target}>
                        <img src={item.imageurl.url} alt={item.imageurl.alt} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={styles.blockRight}>
            <div className={styles.blockRight}>
              <PhoneBottomIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
