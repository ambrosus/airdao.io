import { useState } from 'react';

const usePagination = () => {
  const [start, setStart] = useState(0);
  const [limit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = page => {
    setStart((page - 1) * limit);
    setCurrentPage(page);
  };

  return { start, limit, currentPage, goToPage };
};

export default usePagination;
