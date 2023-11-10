import styles from '../links.module.scss';

export default function LinkItem({ name, buttonText }) {
  return (
    <div className={styles.itemContainer}>
      <p className={styles.nameContainer}>{name}</p>
      <button className={styles.buttonContainer}>{buttonText}</button>
    </div>
  );
}
