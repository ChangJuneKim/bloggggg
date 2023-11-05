'use client';

import { useEffect, useRef, useState } from 'react';
import { Box } from '@/components/base';
import {
  scrollIndicatorStyle,
  scrollIndicatorWrapper,
} from '@/components/block/ScrollIndicator/index.css';

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 이미 requestAnimationFrame으로 등록된 작업이 있다면 취소
    const handleScroll = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      // 새로운 스크롤 위치를 계산하여 진행 상태를 업데이트하는 작업을 예약
      rafId.current = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 현재 스크롤된 위치
        const scrollHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight; // 문서의 높이
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        setProgress(scrollProgress);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <Box className={scrollIndicatorWrapper}>
      <Box className={scrollIndicatorStyle} style={{ width: `${progress}%` }} />
    </Box>
  );
}
