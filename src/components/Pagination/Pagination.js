import styles from './pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
  const generatePageNumbers = () => {
    const visiblePageNumbers = [];
    const maxVisiblePages = 2;

    const startPage = Math.max(1, currentPage - maxVisiblePages);
    const endPage = Math.min(totalPages, currentPage + maxVisiblePages);

    for (let page = startPage; page <= endPage; page++) {
      visiblePageNumbers.push(page);
    }

    if (visiblePageNumbers[0] > 1) {
      visiblePageNumbers.unshift('...');
      visiblePageNumbers.unshift(1);
    }

    if (visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages) {
      visiblePageNumbers.push('...');
      visiblePageNumbers.push(totalPages);
    }

    return visiblePageNumbers;
  };

  return (
    <ul className={`${styles.pagination} ${className}`}>
      <li className={styles['pagination__arrow']}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M8.40715 4.45305C8.01663 4.84357 8.01663 5.47674 8.40715 5.86726L14.7 12.1602L8.40715 18.453C8.01663 18.8436 8.01663 19.4767 8.40715 19.8673C8.79768 20.2578 9.43084 20.2578 9.82137 19.8673L16.8214 12.8673C17.2119 12.4767 17.2119 11.8436 16.8214 11.453L9.82136 4.45305C9.43084 4.06253 8.79768 4.06253 8.40715 4.45305Z"
              fill="#212121"
            />
          </svg>
        </button>
      </li>
      {generatePageNumbers().map((page, index) => (
        <li key={index}>
          {typeof page === 'number' ? (
            <button
              className={`${styles['pagination__page']} ${
                page === currentPage ? styles['pagination__page_active'] : ''
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span>{page}</span>
          )}
        </li>
      ))}
      <li className={styles['pagination__arrow']}>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M8.40715 4.45305C8.01663 4.84357 8.01663 5.47674 8.40715 5.86726L14.7 12.1602L8.40715 18.453C8.01663 18.8436 8.01663 19.4767 8.40715 19.8673C8.79768 20.2578 9.43084 20.2578 9.82137 19.8673L16.8214 12.8673C17.2119 12.4767 17.2119 11.8436 16.8214 11.453L9.82136 4.45305C9.43084 4.06253 8.79768 4.06253 8.40715 4.45305Z"
              fill="#212121"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
