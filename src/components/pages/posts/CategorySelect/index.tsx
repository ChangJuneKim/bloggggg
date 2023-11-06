'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CategoryType } from '@/components/block/PostCard/Category';
import { Box, SVGIcon } from '@/components/base';
import {
  activeDropdownBorder,
  categoryDropdownButton,
  categoryDropdownContent,
  categoryDropdownIcon,
  categoryDropdownIconRotated,
  categoryDropdownItem,
  categoryDropdownStyle,
} from '@/components/pages/posts/CategorySelect/index.css';

interface CategorySelectProps {
  category: 'all' | CategoryType;
}

const categories = {
  all: '전체',
  dev: '개발',
  fire: '삽질',
  life: '일상',
};

export default function CategorySelect({ category }: CategorySelectProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | CategoryType>(category);
  const dropdownRef = useRef<HTMLDivElement>(null); // 여기에 <HTMLDivElement>를 추가하여 ref 타입을 지정합니다.

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen]);

  const handleCategoryChange = (category: CategorySelectProps['category']) => {
    setSelectedCategory(category);
    setIsOpen(false);
    const href = `/posts/categories/${category}/pages/1`;
    router.replace(href);
  };

  const iconClassName = `${categoryDropdownIcon} ${isOpen ? categoryDropdownIconRotated : ''}`;

  return (
    <Box className={categoryDropdownStyle} ref={dropdownRef}>
      <Box
        as={'button'}
        className={`${categoryDropdownButton} ${isOpen ? activeDropdownBorder : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {categories[selectedCategory]}
        <Box width={'6'} height={'6'} className={iconClassName}>
          <SVGIcon id={'dropdown'} width={'100%'} height={'100%'} />
        </Box>
      </Box>

      {isOpen && (
        <Box className={categoryDropdownContent}>
          {Object.entries(categories).map(([key, value]) => (
            <Box
              key={key}
              className={categoryDropdownItem}
              onClick={() => handleCategoryChange(key as CategorySelectProps['category'])}
            >
              {value}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
