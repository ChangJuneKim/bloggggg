'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowIcons from '@/components/block/Pagination/ArrowIcons';
import { pageNationButtons, pagination } from '@/components/block/Pagination/index.css';
import siteConfig from '@/site.config';

export interface PaginationProps {
  total: number;
  page: string;
}

const Pagination = ({ total, page }: PaginationProps) => {
  const router = useRouter();

  const onPageClick = (page: number) => {
    router.push(`${page}`);
  };

  const numPages = Math.ceil(total / siteConfig.postsPerPage); // 총 페이지 수
  const currentPage = Number(page);
  const currentPageGroup = Math.ceil(currentPage / siteConfig.pagesPerGroup); // 한 그룹에 PAGES_PER_GROUP 개의 페이지를 표시

  const startPage = (currentPageGroup - 1) * siteConfig.pagesPerGroup + 1;
  const endPage = Math.min(startPage + siteConfig.pagesPerGroup - 1, numPages);

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
          onClick={() => handlePageClick(startPage - siteConfig.pagesPerGroup)}
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
          onClick={() => handlePageClick(startPage + siteConfig.pagesPerGroup)}
          disabled={currentPageGroup === Math.ceil(numPages / siteConfig.pagesPerGroup)}
        >
          <ArrowIcons name={'rightDouble'} />
        </button>
      </nav>
    </>
  );
};

export default Pagination;
