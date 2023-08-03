import styles from './input.module.scss';

export default function Input({ children, className, ...props }) {
  const classNames = [styles.input, ...(className ? [className] : [])];
  return <input className={classNames.join(' ')} {...props} />;
}
