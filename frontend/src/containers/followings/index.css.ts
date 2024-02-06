import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { flex } from '@/styles/common.css';

export const nicknameInputStyle = style({
  padding: vars.space['2x'],
  border: 'none',
  ':focus': {
    outline: 'none',
  },
  borderRadius: vars.borderRadius['2x'],
  backgroundColor: vars.colors.whitesmoke,
  fontSize: vars.fontSize['2x'],
});

export const profilesWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  {
    width: '100%',
  },
]);

export const profileItemWrapper = style([
  flex({ justify: 'spaceAround', align: 'center', direction: 'row' }),
  {
    width: '100%',
    marginTop: vars.space['1x'],
    marginBottom: vars.space['1x'],
  },
]);
