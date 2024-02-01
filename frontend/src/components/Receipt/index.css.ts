import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

export const receiptWrapper = style([
  flex({ direction: 'column', align: 'center' }),
  defaultWrapper({ height: 'auto', width: 'max' }),
  {
    position: 'relative',
  },
]);

export const receiptTopAndBottomBg = style([
  {
    position: 'relative',
    width: '350px',
    height: '10px',
  },
]);

export const receiptContentWrapper = style([
  {
    position: 'relative',
    width: '350px',
    height: 'auto',
    boxSizing: 'border-box',
    paddingTop: '10px',
    paddingRight: '15px',
    paddingLeft: '15px',
    zIndex: vars.zIndex['z-1'],
  },
]);

export const tempPadding = style({
  position: 'relative',
  width: '350px',
  boxSizing: 'border-box',
  paddingTop: '10px',
  paddingRight: '15px',
  paddingLeft: '15px',
});
export const textTemp = style({
  fontSize: vars.fontSize['2x'],
  width: '160px',
  zIndex: vars.zIndex['z-2'],
});

export const text16 = style({
  fontSize: vars.fontSize['2x'],
  zIndex: vars.zIndex['z-2'],
});
export const textNTemp = style({
  fontSize: vars.fontSize['2x'],
  width: '70px',
  display: 'flex',
  justifyContent: 'right',
  paddingRight: '5px',
  zIndex: vars.zIndex['z-1'],
});

export const resultTemp = style([{}]);

export const textPTemp = style({
  fontSize: vars.fontSize['2x'],
  display: 'flex',
  justifyContent: 'right',
  width: '120px',
  zIndex: vars.zIndex['z-1'],
});
export const tempC = style({
  paddingTop: '5px',
  paddingBottom: '5px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: vars.fontSize['2x'],
  zIndex: vars.zIndex['z-1'],
});

export const receiptTop = style({
  position: 'relative',
  width: '350px',
  height: '10px',
});
export const receiptBg = style({
  position: 'relative',
  width: '350px',
  height: '1200px',
});

export const receiptBg2 = style({
  position: 'relative',
  width: '350px',
  height: '1200px',
  overflow: 'hidden',
});
