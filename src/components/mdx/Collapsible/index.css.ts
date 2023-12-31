import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { colorPalette } from '@/styles/tokens/colors';
import { themesSelectors } from '@/styles/atoms.css';
import { vars } from '@/styles/themes/contract.css';
import { prominent } from '@/styles/typography.css';

const linkDecorationVar = createVar();

export const detailsStyle = style({
  vars: {
    [linkDecorationVar]: colorPalette.blue[300],
  },
  backgroundColor: colorPalette.blue[50],
  selectors: {
    [themesSelectors.dark]: {
      backgroundColor: colorPalette.blueGray[800],
      vars: {
        [linkDecorationVar]: colorPalette.blue[500],
      },
    },
  },
});

export const summaryStyle = style([
  prominent,
  {
    display: `list-item`,
    cursor: `pointer`,
  },
]);

globalStyle(`${detailsStyle} p:first-of-type`, {
  marginTop: vars.space[4],
});

globalStyle(`${detailsStyle} p:last-of-type`, {
  marginBottom: vars.space[0],
});

globalStyle(`${detailsStyle} a`, {
  textDecorationColor: linkDecorationVar,
});

globalStyle(`${detailsStyle} > *:last-child pre:last-of-type`, {
  marginBottom: `${vars.space[0]} !important`,
});
