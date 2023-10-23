import { Box, SVGIcon } from '@/components/base';
import { SVGIconNames } from '@/components/base/SVGIcon';
import { PaginationProps } from '@/components/block/Pagination';

export default function Category({ category }: { category: PaginationProps['selectedCategory'] }) {
  let label = '개발';
  let icon: SVGIconNames = 'cli';

  switch (category) {
    case 'DEV':
      label = '개발';
      icon = 'cli';
      break;
    case 'LIFE':
      label = '일상';
      icon = 'life';
      break;
    case 'FIRE':
      label = '삽질';
      icon = 'shovel';
      break;
    default:
  }
  return (
    <Box display={'flex'} alignItems={'center'} marginBottom={'1'}>
      <Box
        as={'span'}
        width={'5'}
        height={'5'}
        display={'inline-flex'}
        marginRight={'2'}
        alignItems={'center'}
      >
        <SVGIcon id={icon} width={'100%'} height={'100%'} />
      </Box>
      <Box as={'span'} color={'textMuted'}>
        {label}
      </Box>
    </Box>
  );
}
