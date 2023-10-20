import { FullWidthContainer } from '@/components/layout';
import { Box, ExternalLink, MyLink, Spacer } from '@/components/base';
import { Fragment } from 'react';
import { borderTop } from '@/components/layout/Footer/index.css';

const footerNavigation = [
  {
    heading: {
      name: '테스트1',
      link: '#',
    },
    items: [
      {
        name: '테테테',
        link: '#',
        isExternal: false,
      },
    ],
  },
];

export default function Footer() {
  return (
    <FullWidthContainer variant={'dark'} className={borderTop}>
      <Box as="footer" py="16" role="contentinfo">
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection={[`column`, `row`]}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {footerNavigation.map((section) => {
              const { heading } = section;

              return (
                <Box
                  display="flex"
                  key={heading.name}
                  flexDirection="column"
                  alignItems="flex-start"
                  marginBottom={[`8`, `0`]}
                >
                  {heading.link ? (
                    <MyLink
                      href={heading.link}
                      p="1"
                      color="textEmphasizedOnBg"
                      fontSize={[`lg`, null, `lgx`]}
                      marginBottom={[`2`, `3`]}
                    >
                      {heading.name}
                    </MyLink>
                  ) : (
                    <Box
                      color="textEmphasizedOnBg"
                      p="1"
                      fontSize={[`lg`, null, `lgx`]}
                      marginBottom={[`2`, `3`]}
                    >
                      {heading.name}
                    </Box>
                  )}
                  <Box
                    display="flex"
                    flexDirection={[`row`, `column`]}
                    alignItems="flex-start"
                    flexWrap={[`wrap`, `nowrap`]}
                  >
                    {section.items.map((item) => (
                      <Fragment key={item.link}>
                        {item.isExternal ? (
                          <ExternalLink marginRight={[`2`, `0`]} p="1" href={item.link}>
                            {item.name}
                          </ExternalLink>
                        ) : (
                          <MyLink marginRight={[`2`, `0`]} p="1" href={item.link}>
                            {item.name}
                          </MyLink>
                        )}
                      </Fragment>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Spacer axis="vertical" size="16" />
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
