import { style } from '@vanilla-extract/css';
import { defaultWrapper, flex } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { vars } from '@/styles/vars.css';

export const fullWrapper = style([
  defaultWrapper({ width: 'max', height: 'auto' }),
]);

export const receiptWrapper = style([
  contentWrapper({ contentArea: 'headerOnly' }),
]);

export const shareReceiptWrapper = style([
  flex({ direction: 'column', justify: 'center', align: 'center' }),
  defaultWrapper({ width: 'max', height: 'auto' }),
  {
    boxSizing: 'border-box',
    paddingTop: vars.space['3x'],
    paddingBottom: vars.space['3x'],
  },
]);

export const buttonsWrapper = style([
  {
    marginTop: vars.space['3x'],
  },
]);