import * as React from 'react';

export type SVGIconNames =
  | 'cli'
  | 'discord'
  | 'elitepvpers'
  | 'gatsby'
  | 'general'
  | 'javascript'
  | 'logo'
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
  | 'moon'
  | 'sun'
  | 'computer'
  | 'refresh'
  | 'export'
  | 'backward'
  | 'download'
  | 'rust'
  | 'grid'
  | 'list'
  | 'masonry';

type SVGIconProps = {
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
