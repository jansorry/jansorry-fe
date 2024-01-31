import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const tempRelative = style({
  position: 'relative',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const tempPadding = style({
  position: 'absolute',
  width: '350px',
  boxSizing: 'border-box',
  paddingTop: '10px',
  paddingRight: '15px',
  paddingLeft: '15px',
  zIndex: vars.zIndex['z-1'],
});
export const textTemp = style({
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  width: '180px',
});

export const text16 = style({
  fontSize: vars.fontSize['2x'],
});
export const textNTemp = style({
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  width: '70px',
  display: 'flex',
  justifyContent: 'right',
  paddingRight: '5px',
});

export const textPTemp = style({
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  display: 'flex',
  justifyContent: 'right',
  width: '100px',
});
export const tempC = style({
  paddingTop: '5px',
  paddingBottom: '5px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const receiptTop = style({
  position: 'relative',
  width: '300px',
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

export const tempForImg = style({});
