'use client';

import { useState } from 'react';
import { Box } from '@/components/base';
import { VisuallyHidden } from 'react-aria';

interface CopyButtonProps {
  text: string;
}
export default function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <Box
      as="button"
      disabled={isCopied}
      onClick={handleCopy}
      style={{ transform: 'translate(0, -28px)' }}
    >
      {isCopied ? '복사됨!' : '복사'}
      <VisuallyHidden aria-roledescription="status">{isCopied ? '복사됨!' : '복사'}</VisuallyHidden>
    </Box>
  );
}
