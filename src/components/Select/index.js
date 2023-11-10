import styles from './select.module.scss';
import { useRef, useState } from 'react';
import TailArrow from '@/components/TailArrow';
import useClickOutside from '@/hooks/useClickOutside';

export default function Select({
  options,
  value,
  onChange,
  className,
  placeholder,
  error,
  ...props
}) {
  const ref = useRef();
  const [focused, setFocused] = useState(false);
  useClickOutside(
    ref,
    () => {
      setFocused(false);
    },
    focused
  );

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
        className={`${styles.input} ${focused ? styles.input_focused : ''} ${
          error ? styles.input_error : ''
        } ${!value ? styles.input_placeholder : ''}`}
        placeholder={placeholder}
        onClick={toggleFocused}
      >
        {value || placeholder}
        <TailArrow className={styles.arrow} />
      </div>

      <div className={styles.dropdown} ref={ref}>
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
