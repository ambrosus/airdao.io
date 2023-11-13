import styles from './textarea.module.scss';

export default function Textarea({ children, className, error, ...props }) {
  const classNames = [
    styles.textarea,
    ...(className ? [className] : []),
    ...(error ? [styles.textarea_error] : []),
  ];
  return (
    <div className={styles.wrapper}>
      <textarea className={classNames.join(' ')} {...props}>
        {children}
      </textarea>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
