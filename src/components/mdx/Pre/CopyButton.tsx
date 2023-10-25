'use client';

import { useState } from 'react';
import { Box } from '@/components/base';

interface CopyButtonProps {
  text: string;
}
export default function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <Box
      as="button"
      disabled={isCopied}
      onClick={copy}
      style={{ transform: 'translate(0, -28px)' }}
    >
      {isCopied ? '복사됨!' : '복사'}
    </Box>
  );
}
