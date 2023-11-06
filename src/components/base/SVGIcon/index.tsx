import * as React from 'react';

export type SVGIconNames =
  | 'cli'
  | 'javascript'
  | 'mdx'
  | 'react'
  | 'nextjs'
  | 'typescript'
  | 'search'
  | 'pause'
  | 'play'
  | 'close'
  | 'check'
  | 'info'
  | 'warning'
  | 'lightbulb'
  | 'arrow-right'
  | 'arrow-left'
  | 'dropdown'
  | 'share'
  | 'refresh'
  | 'export'
  | 'backward'
  | 'download'
  | 'grid'
  | 'list'
  | 'github'
  | 'notion'
  | 'email'
  | 'left'
  | 'right'
  | 'leftDouble'
  | 'rightDouble'
  | 'shovel'
  | 'life'
  | 'clock'
  | 'sun'
  | 'moon'
  | 'system'
  | 'tryCatch';

export type SVGIconProps = {
  id: SVGIconNames;
  [x: string]: any;
};

export default function SVGIcon({ id, ...props }: SVGIconProps) {
  return (
    <svg aria-hidden focusable="false" {...props}>
      <use href={`/assets/icons.svg#${id}`} />
    </svg>
  );
}
