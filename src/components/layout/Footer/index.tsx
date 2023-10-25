import { FullWidthContainer } from '@/components/layout';
import { Box, MyLink } from '@/components/base';
import { borderTop } from '@/components/layout/Footer/index.css';

export default function Footer() {
  return (
    <FullWidthContainer variant={'dark'} className={borderTop}>
      <Box as="footer" py="16" role="contentinfo">
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection={[`column`, `row`]}
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <div>&copy; {new Date().getFullYear()} by ChangJuneKim. All rights reserved.</div>
            <div>
              <MyLink href="/privacy-policy">Privacy Policy</MyLink>.{' '}
              <MyLink href="/legal-notice">Legal Notice</MyLink>.
            </div>
          </Box>
        </Box>
      </Box>
    </FullWidthContainer>
  );
}
