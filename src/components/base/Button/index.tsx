'use client';

import { ReactNode, useRef } from 'react';
import { useButton } from 'react-aria';
import Link from 'next/link';
import { composeClassNames } from '@/components/base/Box/createBox';
import {
  buttonVariants,
  Sizes,
  sizesVariants,
  VariantNames,
} from '@/components/base/Button/index.css';
import ButtonIcon from '@/components/base/Button/ButtonIcon';
import { Box } from '@/components/base';
import { BoxProps } from '@/components/base/Box';

export type ButtonKind = 'button' | 'internal' | 'external';

interface ButtonProps extends BoxProps {
  buttonType?: ButtonKind;
  to?: string;
  variant: VariantNames;
  size?: Sizes;
  rightIcon?: ReactNode;
}

export default function Button(props: ButtonProps) {
  const ref = useRef<Element>(null);

  // @ts-ignore
  const { buttonProps } = useButton(props, ref);
  const {
    children,
    buttonType = `button`,
    to,
    variant = `primary`,
    size = `brand`,
    rightIcon = undefined,
    className,
    ...rest
  } = props;

  let as;
  switch (buttonType) {
    case `button`:
      as = `button`;
      break;
    case `internal`:
      as = Link;
      break;
    case `external`:
      as = `a`;
      break;
    default:
      as = `button`;
      break;
  }

  return (
    <Box
      // @ts-ignore
      as={as}
      to={buttonType === `internal` ? to : undefined}
      href={buttonType === `external` ? to : undefined}
      className={composeClassNames(buttonVariants[variant], sizesVariants[size], className)}
      {...buttonProps}
      {...rest}
    >
      {children} {rightIcon && <ButtonIcon>{rightIcon}</ButtonIcon>}
    </Box>
  );
}
