import { Box } from '@/components/base';
import Link from 'next/link';

interface TagContainerProps {
  label: string;
  type?: 'span' | 'link';
  href?: string;
}

export default function Tag({ label, type = 'span', href }: TagContainerProps) {
  const additionalProps = type === 'link' && href ? { href } : {};
  return (
    <Box
      as={type === 'link' ? Link : type}
      display={'inline-block'}
      marginBottom={'1'}
      px={'2'}
      py={'1'}
      marginRight={'2'}
      borderRadius={'md'}
      background={'mutedAsBg'}
      color={'primary'}
      key={`${label}`}
      {...additionalProps} // href 속성을 동적으로 추가
    >
      {label}
    </Box>
  );
}
