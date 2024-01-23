import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { plainButton } from '@/styles/common.css';

export const kakaoLoginImage = style({
  width: '100%',
  height: 'auto',
  marginTop: 60,
  position: 'relative',
  cursor: 'pointer',
  zIndex: vars.zIndex['z-2'],
});

export const kakaoLoginButton = style([plainButton()]);
