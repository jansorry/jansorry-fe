import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const kakaoLoginImage = style({
  '@media': {
    'screen and (max-height: 600px)': {
      marginTop: 20,
    },
  },
  width: '90%',
  height: 'auto',
  marginTop: 60,
  position: 'relative',
  cursor: 'pointer',
  zIndex: vars.zIndex['z-2'],
});
