import styles from './textarea.module.scss';

export default function Textarea({ children, className, ...props }) {
  const classNames = [styles.textarea, ...(className ? [className] : [])];
  return (
    <textarea className={classNames.join(' ')} {...props}>
      {children}
    </textarea>
  );
}
