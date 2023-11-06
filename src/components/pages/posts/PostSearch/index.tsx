'use client';

import { Box, SVGIcon } from '@/components/base';
import {
  inputStyle,
  searchIconStyle,
  searchInputContainerStyle,
} from '@/components/pages/posts/PostSearch/index.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (debouncedKeyword) {
      router.replace(`/posts/categories/${category}/pages/1?keyword=${debouncedKeyword}`);
    } else {
      router.replace(`/posts/categories/${category}/pages/1`);
    }
  }, [debouncedKeyword, category, router]);

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
