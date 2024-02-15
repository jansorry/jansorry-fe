import { style } from '@vanilla-extract/css';

import { defaultWrapper, flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const notFoundWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  defaultWrapper({ height: 'max' }),
  {
    textAlign: 'center',
  },
]);

export const notFoundImage = style({
  width: '300px',
  height: 'auto',
  paddingBottom: vars.space['5x'],
});
