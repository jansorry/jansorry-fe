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
    marginLeft: vars.space['2x'],
    marginRight: vars.space['2x'],
  },
]);

export const title = style({
  '@media': {
    'screen and (max-width: 450px)': {
      fontSize: vars.fontSize['2x'],
    },
  },
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  color: vars.colors.brown,
});
