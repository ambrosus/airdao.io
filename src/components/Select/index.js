import styles from './select.module.scss';
import { useState } from 'react';
import TailArrow from '@/components/TailArrow';

export default function Select({
  options,
  value,
  onChange,
  className,
  placeholder,
  error,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const classNames = [
    styles.select_container,
    ...(className ? [className] : []),
    ...(focused ? [styles.focused] : []),
  ];

  const toggleFocused = () => setFocused((prev) => !prev);
  const setValue = (value) => {
    onChange(value);
    toggleFocused();
  };

  return (
    <div
      style={{ '--children-length': options.length }}
      className={classNames.join(' ')}
      {...props}
    >
      <div
        className={`${styles.input} ${value ? styles.has_value : ''}`}
        placeholder={placeholder}
        onClick={toggleFocused}
      >
        {value || placeholder}
        <TailArrow className={styles.arrow} />
      </div>

      <div className={styles.dropdown}>
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.option}
            onClick={() => setValue(option)}
          >
            {option}
          </div>
        ))}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
