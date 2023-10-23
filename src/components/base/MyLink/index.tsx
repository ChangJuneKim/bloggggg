import Link from 'next/link';
import { composeClassNames } from '@/components/base/Box/createBox';
import { link } from '@/components/base/MyLink/index.css';
import { Box } from '@/components/base';
import { BoxProps } from '@/components/base/Box';

interface ILinkProps extends BoxProps {
  href: string;
}

export const MyLink = ({ className = undefined, ...props }: ILinkProps) => (
  <Box as={Link} className={composeClassNames(link, className)} {...props} />
);

export const ExternalLink = ({ className = undefined, ...rest }: BoxProps) => (
  <Box
    as="a"
    className={composeClassNames(link, className)}
    rel={'noreferrer noopener'}
    target={'_blank'}
    {...rest}
  />
);
