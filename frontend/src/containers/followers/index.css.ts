import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

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

export const profileImgTextWrapper = style([
  defaultWrapper({ width: 'max' }),
  {
    paddingRight: vars.space['3x'],
    paddingLeft: vars.space['5x'],
    boxSizing: 'border-box',
  },
]);

export const profilesWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  {
    width: '100%',
  },
]);

export const profileItemWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  {
    width: '100%',
    marginTop: vars.space['2x'],
    marginBottom: vars.space['1x'],

    boxSizing: 'border-box',
  },
]);

export const userSeperateLine = style([
  flex({ justify: 'center', align: 'center' }),
  {
    borderBottom: `0.3px solid ${vars.colors.whitesmoke}`,
    width: '100%',
    margin: `${vars.space['1x']} ${vars.space['1x']}`,
  },
]);
