import { Box, IBoxProps } from '@/components/base/Box';
import Link from 'next/link';
import { composeClassNames } from '@/components/base/Box/createBox';
import { link } from '@/components/base/MyLink/index.css';

interface ILinkProps extends IBoxProps {
  href: string;
}

export const MyLink = ({ className = undefined, ...props }: ILinkProps) => (
  <Box as={Link} className={composeClassNames(link, className)} {...props} />
);

export const ExternalLink = ({ className = undefined, ...rest }: IBoxProps) => (
  <Box as="a" className={composeClassNames(link, className)} {...rest} />
);
