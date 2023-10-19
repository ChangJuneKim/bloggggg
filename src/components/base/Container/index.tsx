import { containerVariants, ContainerVariants } from '@/components/base/Container/index.css';
import { Box, BoxProps } from '@/components/base/Box';
import { composeClassNames } from '@/components/base/Box/createBox';

interface ContainerProps extends BoxProps {
  variant?: ContainerVariants;
}

export default function Container({
  children,
  variant = 'default',
  className,
  ...rest
}: ContainerProps) {
  return (
    <Box className={composeClassNames(containerVariants[variant], className)} {...rest}>
      {children}
    </Box>
  );
}
