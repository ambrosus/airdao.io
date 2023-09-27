import styles from './block-label.module.scss';

const BlockLabel = ({ children, className = '' }) => (
  <div className={`${styles['block-label']} ${className}`}>{children}</div>
);

export default BlockLabel;
