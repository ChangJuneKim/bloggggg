import { FullWidthContainer } from '@/components/layout';
import { Box } from '@/components/base';
import { borderTop } from '@/components/layout/Footer/index.css';

export default function Footer() {
  return (
    <FullWidthContainer variant={'dark'} className={borderTop}>
      <Box as="footer" py="16" role="contentinfo">
        <Box textAlign={'center'}>
          &copy; {new Date().getFullYear()} by ChangJuneKim. All rights reserved.
        </Box>
      </Box>
    </FullWidthContainer>
  );
}
