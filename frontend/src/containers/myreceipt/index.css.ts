import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { defaultWrapper, flex } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { vars } from '@/styles/vars.css';

export const fullWrapper = style([
  defaultWrapper({ width: 'max', height: 'auto' }),
]);

export const receiptWrapper = style([
  contentWrapper({ contentArea: 'headerAndNavBar' }),
]);
export const myReceiptWrapper = style([
  flex({ direction: 'column', justify: 'center', align: 'center' }),
  defaultWrapper({ width: 'max', height: 'auto' }),
  {
    boxSizing: 'border-box',
    paddingTop: vars.space['3x'],
    paddingBottom: vars.space['3x'],
  },
]);

export const receiptShadow = style([
  {
    borderRadius: vars.borderRadius['1x'],
    padding: vars.space['1x'],
    boxSizing: 'border-box',
  },
]);

export const buttonsWrapper = style([
  {
    marginTop: vars.space['3x'],
  },
]);
export const myreceiptButtonWrapper = style([
  {
    marginTop: vars.space['4x'],
    marginBottom: vars.space['3x'],
  },
]);

export const modalWrapper = style([
  flex({ direction: 'column', align: 'center', justify: 'center' }),
  {
    width: '100%',
    '@media': {
      'screen and (min-width: 480px)': {
        width: '432px', // 480px의 90%에 해당하는 너비 직접 지정
      },
    },
  },
]);
export const doubleButtonWrapper = style([
  flex({ direction: 'row', align: 'center', justify: 'spaceBetween' }),
  {
    width: '80vw',
    paddingTop: vars.space['2x'],
    marginBottom: vars.space['2x'],
  },
]);

export const explainText = style([
  flex({
    direction: 'column',
    align: 'center',
    justify: 'center',
  }),
  {
    height: vars.space['5x'],
    marginTop: vars.space['2x'],
    fontSize: vars.fontSize['2x'],
    paddingBottom: vars.space['2x'],
  },
]);

export const iconAndText = style([
  {
    marginLeft: '6px',
    marginRight: vars.space['1x'],
  },
]);
