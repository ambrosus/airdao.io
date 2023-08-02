import styles from './button.module.scss';
import TailArrow from '../TailArrow';
import PropTypes from 'prop-types';

export default function Button({
  children,
  className,
  size,
  type,
  hasTailArrow,
  ...props
}) {
  const classNames = [
    styles.button,
    ...(size ? [styles[`button__${size}`]] : []),
    ...(type ? [styles[`button__${type}`]] : []),
    ...(className ? [className] : []),
  ];

  return (
    <button className={classNames.join(' ')} {...props}>
      {children}
      {hasTailArrow && <TailArrow className={styles.arrow} />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'plain']),
  hasTailArrow: PropTypes.bool,
};
