'use client';

import React from 'react';
import { PAGES_PER_GROUP, POSTS_PER_PAGE } from '@/constants/post';
import { useRouter } from 'next/navigation';
import ArrowIcons from '@/components/block/Pagination/ArrowIcons';
import { pageNationButtons, pagination } from '@/components/block/Pagination/index.css';

export interface PaginationProps {
  total: number;
  selectedCategory?: string;
  page: string;
}

const Pagination = ({ total, page }: PaginationProps) => {
  const router = useRouter();

  const onPageClick = (page: number) => {
    router.push(`/posts/pages/${page}`);
  };

  const numPages = Math.ceil(total / POSTS_PER_PAGE); // 총 페이지 수
  const currentPage = Number(page);
  const currentPageGroup = Math.ceil(currentPage / PAGES_PER_GROUP); // 한 그룹에 PAGES_PER_GROUP 개의 페이지를 표시

  const startPage = (currentPageGroup - 1) * PAGES_PER_GROUP + 1;
  const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, numPages);

  const handlePageClick = (pageNumber: number) => {
    onPageClick(pageNumber);
  };

  if (total === 0) {
    return null;
  }

  return (
    <>
      <p>
        {currentPage} of {numPages} pages
      </p>
      <nav className={pagination}>
        <button
          className={pageNationButtons}
          type="button"
          onClick={() => handlePageClick(startPage - PAGES_PER_GROUP)}
          disabled={currentPageGroup === 1}
        >
          <ArrowIcons name={'leftDouble'} />
        </button>
        <button
          className={pageNationButtons}
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowIcons name={'left'} />
        </button>
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
          (pageNumber) => {
            return (
              <button
                className={`${pageNationButtons}`}
                type="button"
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                {...(currentPage === pageNumber && { 'aria-current': 'page' })}
              >
                {pageNumber}
              </button>
            );
          }
        )}
        <button
          className={pageNationButtons}
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === numPages}
        >
          <ArrowIcons name={'right'} />
        </button>
        <button
          className={pageNationButtons}
          type="button"
          onClick={() => handlePageClick(startPage + PAGES_PER_GROUP)}
          disabled={currentPageGroup === Math.ceil(numPages / PAGES_PER_GROUP)}
        >
          <ArrowIcons name={'rightDouble'} />
        </button>
      </nav>
    </>
  );
};

export default Pagination;
