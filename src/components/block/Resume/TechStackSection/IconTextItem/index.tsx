import { Box, SVGIcon } from '@/components/base';
import { SVGIconNames } from '@/components/base/SVGIcon';
import React, { ReactNode } from 'react';
import FlexBasisLayout from '@/components/layout/FlexBasisContainer';
import Image from 'next/image';

export interface ImageProps {
  type: 'svg' | 'img';
  src: string | SVGIconNames;
  alt?: string;
}

interface TechStackItemProps {
  imageProps: ImageProps;
  children: ReactNode;
}

export default function IconTextItem({
  imageProps: { type, src = '', alt },
  children,
}: TechStackItemProps) {
  const renderImage = () => {
    if (type === 'svg') {
      return <SVGIcon id={src as SVGIconNames} width={'100'} height={'100'} />;
    } else if (type === 'img') {
      return <Image src={src as string} alt={alt!} width={100} height={100} />;
    }
  };

  return <FlexBasisLayout leftContent={<Box>{renderImage()}</Box>} rightContent={children} />;
}
