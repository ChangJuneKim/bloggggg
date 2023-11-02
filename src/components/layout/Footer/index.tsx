import { FullWidthContainer } from '@/components/layout';
import { Box } from '@/components/base';
import { borderTop } from '@/components/layout/Footer/index.css';
import siteConfig from '@/site.config';

export default function Footer() {
  return (
    <FullWidthContainer variant={'dark'} className={borderTop}>
      <Box as="footer" py="16" role="contentinfo">
        <Box textAlign={'center'} fontSize={'sm'} color={'textMuted'}>
          {siteConfig.copyright}
        </Box>
      </Box>
    </FullWidthContainer>
  );
}
