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
  size?: number;
}

export default function IconTextItem({
  imageProps: { type, src = '', alt },
  size = 100,
  children,
}: TechStackItemProps) {
  const renderImage = () => {
    if (type === 'svg') {
      return <SVGIcon id={src as SVGIconNames} width={size} height={size} />;
    } else if (type === 'img') {
      return (
        <Image
          src={src as string}
          alt={alt!}
          width={size}
          height={size}
          style={{ objectFit: 'cover', aspectRatio: '1 / 1', width: `${size}`, height: `${size}` }}
        />
      );
    }
  };

  return (
    <FlexBasisLayout
      leftContent={
        <Box __width={size} __height={size}>
          {renderImage()}
        </Box>
      }
      rightContent={children}
    />
  );
}
