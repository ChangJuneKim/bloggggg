import { Box } from '@/components/base';
import {
  anchorStyle,
  headingStyle,
  headingVariants,
  introductionStyle,
} from '@/components/mdx/Headings/index.css';
import { ReactNode } from 'react';
import { ScreenOnly } from '@/components/a11y';
import { composeClassNames } from '@/components/base/Box/createBox';

type HeadingProps = {
  id: string;
  children: ReactNode;
};

type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const heading =
  (Tag: Headers) =>
  // eslint-disable-next-line react/display-name
  ({ id, children }: HeadingProps) => {
    if (Tag === 'h2' && children === `서론`) {
      return (
        <ScreenOnly>
          <Box as={Tag} id={id} className={introductionStyle}>
            {children}
          </Box>
        </ScreenOnly>
      );
    }

    return (
      <Box
        as={Tag}
        id={id}
        position="relative"
        className={composeClassNames(headingStyle, headingVariants[Tag])}
      >
        {(Tag === 'h1' || (Tag === 'h2' && children !== `서론`) || Tag === 'h3') && (
          <Box
            as="a"
            href={`#${id}`}
            aria-label={`${children} permalink`}
            display="inline-block"
            position="absolute"
            className={anchorStyle}
          >
            #
          </Box>
        )}
        {children}
      </Box>
    );
  };

const headings = {
  h1: heading(`h1`),
  h2: heading(`h2`),
  h3: heading(`h3`),
  h4: heading(`h4`),
  h5: heading(`h5`),
  h6: heading(`h6`),
};

export default headings;
