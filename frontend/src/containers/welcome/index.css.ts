import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const welcomeWrapper = style({
  height: '100svh',
  maxWidth: '480px',
  backgroundColor: vars.colors.oatmeal,
  textAlign: 'center',
});

export const bgTop = style({
  '@media': {
    'screen and (max-height: 720px)': {
      marginBottom: 0,
    },
    'screen and (min-height: 720px) and (max-height: 840px)': {
      marginBottom: '32px',
    },
  },
  width: '100%',
  height: 'auto',
  marginTop: '16px',
  marginBottom: '64px',
});

export const bgBottom = style({
  width: '100%',
  height: 'auto',
  position: 'absolute',
  bottom: '16px',
  left: 0,
  zIndex: 1,
});

export const title = style({
  width: 'auto',
  height: 'auto',
  '@media': {
    'screen and (max-height: 720px)': {
      marginBottom: 0,
    },
    'screen and (max-height: 800px)': {
      marginBottom: '16px',
    },
  },
  marginBottom: '36px',
  position: 'relative',
  zIndex: 20,
});

export const subtitle = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: vars.colors.brown,
  position: 'relative',
  zIndex: 20,
});

export const kakaoLoginButton = style({
  width: '80%',
  height: 'auto',
  marginTop: '60px',
  position: 'relative',
  cursor: 'pointer',
  zIndex: 20,
});
