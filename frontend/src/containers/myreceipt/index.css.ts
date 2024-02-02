import { style } from '@vanilla-extract/css';

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
    '::-webkit-scrollbar': {
      display: 'none',
    },
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
    marginTop: vars.space['3x'],
    marginBottom: vars.space['3x'],
  },
]);
