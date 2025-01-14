import styles from './input.module.scss';

export default function Input({ className, ...props }) {
  const classNames = [styles.input, ...(className ? [className] : [])];
  return <input className={classNames.join(' ')} {...props} />;
}
