'use client';

import { Box, SVGIcon } from '@/components/base';
import {
  inputStyle,
  searchIconStyle,
  searchInputContainerStyle,
} from '@/components/pages/posts/PostSearch/index.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';
import { CategoryType } from '@/components/block/PostCard/Category';

interface PostSearchProps {
  searchParams: { [key: string]: string | string[] | undefined };
  category: 'all' | CategoryType;
}

export default function PostSearch({ searchParams, category }: PostSearchProps) {
  const [keyword, setKeyword] = useState(searchParams.keyword ?? '');
  const debouncedKeyword = useDebounce(keyword, 300);
  const router = useRouter();
  const pathname = usePathname();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const hasKeywordChanged = debouncedKeyword !== searchParams.keyword;
    const hasKeywordBeenRemoved = searchParams.keyword && debouncedKeyword === '';

    if (hasKeywordChanged || hasKeywordBeenRemoved) {
      // 검색어가 변경되었거나 검색어가 있었다가 제거된 경우
      const newPage = hasKeywordBeenRemoved ? '1' : '1'; // 검색어가 제거되었든, 변경되었든 첫 페이지로 이동
      const newPath =
        hasKeywordBeenRemoved || debouncedKeyword
          ? `/posts/categories/${category}/pages/${newPage}?keyword=${debouncedKeyword}`
          : pathname; // 검색어가 완전히 제거된 경우 현재 경로를 유지

      router.replace(newPath);
    }
  }, [debouncedKeyword, category, router, pathname, searchParams.keyword]);

  return (
    <Box className={searchInputContainerStyle} style={{ flexBasis: '50%' }}>
      <Box className={searchIconStyle}>
        <SVGIcon id={'search'} width={'24'} height={'24'} />
      </Box>
      <input
        type="search"
        placeholder="검색..."
        className={inputStyle}
        value={keyword}
        onChange={handleInputChange}
      />
    </Box>
  );
}
