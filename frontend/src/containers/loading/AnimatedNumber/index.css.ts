import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const numberStyle = style({
  '@media': {
    'screen and (max-height: 600px)': {
      fontSize: 0,
    },
  },
  fontSize: vars.fontSize['4x'],
  fontWeight: vars.fontWeight.accent,
  color: vars.colors.brown,
  marginTop: vars.space['2x'],
  marginBottom: vars.space['2x'],
});
