import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';

export const searchIcon = style([
  {
    color: vars.colors.whitesmoke,
    marginRight: vars.space['1x'],
  },
]);
export const followContentWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  contentWrapper({ contentArea: 'headerAndNavBar' }),
]);
export const nicknameInputWrapper = style([
  flex({ justify: 'center', align: 'center' }),
  {
    paddingTop: vars.space['3x'],
    paddingBottom: vars.space['3x'],
    width: 'auto',
  },
]);
export const nicknameInputStyle = style([
  flex({ align: 'center', direction: 'column' }),
  {
    padding: vars.space['2x'],
    border: 'none',
    ':focus': {
      outline: 'none',
    },
    borderRadius: vars.borderRadius['2x'],
    backgroundColor: vars.colors.whitesmoke,
    fontSize: vars.fontSize['2x'],
    width: '60vw',
    maxWidth: calc.multiply('480px', 0.6),
  },
]);

export const profilesWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  {
    width: '100%',
  },
]);

export const profileItemWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'row' }),
  {
    width: '100%',
    marginTop: vars.space['2x'],
    marginBottom: vars.space['1x'],
  },
]);

export const profileImgTextWrapper = style([
  {
    paddingRight: vars.space['3x'],
    paddingLeft: vars.space['5x'],
    boxSizing: 'border-box',
    width: '70%',
  },
]);

export const followButtonWrapper = style([
  {
    width: '30%',
  },
]);

export const userSeperateLine = style([
  {
    borderBottom: `0.3px solid ${vars.colors.whitesmoke}`,
    width: '100%',
    margin: `${vars.space['0.5x']} ${vars.space['1x']}`,
  },
]);

export const errorText = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  {
    color: vars.colors.strongRed,
    fontSize: vars.fontSize['2x'],
    margin: vars.fontSize["2x"]
  },
]);

export const buttonWrapper = style([
  {
    marginLeft: vars.space['1x'],
  },
]);

export const newUserWrapper = style([
  defaultWrapper({ width: 'max' }),
  flex({ justify: 'center', align: 'center', direction: 'row' }),
  {
    borderBottom: `0.3px solid ${vars.colors.babyBlue} `,
    borderTop: `0.3px solid ${vars.colors.babyBlue} `,
    backgroundColor: vars.colors.whitesmoke,
    paddingTop: `${vars.space['0.5x']} ${vars.space['1x']}`,
    paddingBottom: `${vars.space['0.5x']} ${vars.space['1x']}`,
  },
]);
