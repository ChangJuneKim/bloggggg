import { Box, SVGIcon } from '@/components/base';
import { SVGIconNames } from '@/components/base/SVGIcon';

export type CategoryType = 'dev' | 'life' | 'fire';
export default function Category({ category }: { category: CategoryType }) {
  let label = '개발';
  let icon: SVGIconNames = 'cli';

  switch (category) {
    case 'dev':
      label = '개발';
      icon = 'cli';
      break;
    case 'life':
      label = '일상';
      icon = 'life';
      break;
    case 'fire':
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
