import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const followingInputStyle = style({
  padding: vars.space['2x'],
  border: 'none',
  ':focus': {
    outline: 'none',
  },
  borderRadius: vars.borderRadius['2x'],
  backgroundColor: vars.colors.whitesmoke,
  fontSize: vars.fontSize['2x'],
});
