import * as React from 'react';

export type SVGIconNames =
  | 'cli'
  | 'javascript'
  | 'mdx'
  | 'python'
  | 'react'
  | 'typescript'
  | 'pause'
  | 'play'
  | 'close'
  | 'check'
  | 'info'
  | 'warning'
  | 'lightbulb'
  | 'star'
  | 'arrow-right'
  | 'share'
  | 'refresh'
  | 'export'
  | 'backward'
  | 'download'
  | 'grid'
  | 'list'
  | 'masonry'
  | 'github'
  | 'notion'
  | 'email'
  | 'left'
  | 'right'
  | 'leftDouble'
  | 'rightDouble'
  | 'shovel'
  | 'life'
  | 'clock';

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
