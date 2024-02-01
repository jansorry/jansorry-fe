import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { flex } from '@/styles/common.css';

export const nicknameEditWrapper = style([
  flex({ justify: 'spaceAround', align: 'center', direction: 'column' }),
  {
    position: 'relative',
    top: 0,
    boxSizing: 'border-box',
    height: '100%',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
]);

export const nicknameEditTitle = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  {
    paddingTop: vars.space['2x'],
    paddingBottom: vars.space['2x'],
    fontSize: vars.fontSize['3x'],
    fontWeight: vars.fontWeight.accent,
  },
]);

export const nicknameEditContent = style({
  padding: vars.space['1x'],
  fontSize: vars.fontSize['2x'],
});

export const nicknameInputWrapper = style([
  flex({ justify: 'center', align: 'center' }),
  {
    paddingTop: vars.space['3x'],
    paddingBottom: vars.space['3x'],
  },
]);

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

export const nicknameModalWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
]);

export const nicknameModalContentWrapper = style({
  width: '100%',
  paddingBottom: vars.space['5x'],
});

export const nicknameModalContent = style({
  padding: vars.space['2x'],
  fontSize: vars.fontSize['2x'],
  color: vars.colors.red,
});

export const nicknameModalSeperateLine = style({
  border: `1px solid ${vars.colors.lightGray}`,
  width: '100%',
});
