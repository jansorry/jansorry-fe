import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const kakaoLoginImage = style({
  position: 'sticky',
  width: '83%',
  maxWidth: 400,
  height: 'auto',
  top: '90svh',
  margin: '0 auto',
  cursor: 'pointer',
  zIndex: vars.zIndex['z-2'],
});
