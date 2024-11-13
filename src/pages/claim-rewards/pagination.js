import { useMemo } from 'react';
import { Button } from '@airdao/ui-library';

import styles from './styles.module.scss';

const Pagination = ({ data, methods }) => {
  const { total } = data || {
    total: 0,
  };
  const { currentPage, goToPage, limit } = methods || {
    currentPage: 1,
    goToPage: () => {},
    limit: 1,
  };
  const tPages = Math.ceil(total / limit);

  const renderPageNumbers = useMemo(() => {
    const pageNumbers = [];
    const totalPages = Math.min(tPages, limit);

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <Button
            key={i}
            size="small"
            onClick={() => goToPage(i)}
            type={i === currentPage ? 'secondary' : 'tetiary'}
            className={styles.pageButton}
          >
            {i}
          </Button>,
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(<span key={i}>...</span>);
      }
    }
    return pageNumbers;
  }, [currentPage, tPages, limit, goToPage]);

  return (
    <div className={styles.pagination}>
      <Button
        size="small"
        type="tetiary"
        onClick={() => goToPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      {renderPageNumbers}
      <Button
        size="small"
        type="tetiary"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === tPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
