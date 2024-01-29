import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper } from '@/styles/common.css';

export const loadingWrapper = style([
  defaultWrapper({ height: 'max' }),
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
]);

export const title = style({
  '@media': {
    'screen and (max-height: 600px)': {
      fontSize: 0,
    },
  },
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  color: vars.colors.brown,
});
