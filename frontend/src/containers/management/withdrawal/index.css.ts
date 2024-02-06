import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { flex } from '@/styles/common.css';

export const withdrawalWrapper = style([
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

export const withdrawalTitle = style([
  {
    padding: vars.space['4x'],
    fontSize: vars.fontSize['3x'],
    fontWeight: vars.fontWeight.accent,
    textAlign: 'center',
  },
]);

export const withdrawalContent = style([
  {
    padding: vars.space['1x'],
    fontSize: vars.fontSize['2x'],
  },
]);

export const lastWithdrawalContent = style([
  {
    color: vars.colors.red,
    fontWeight: vars.fontWeight.accent,
  },
]);
