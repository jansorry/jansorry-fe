import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper } from '@/styles/common.css';

export const welcomeWrapper = style([
  defaultWrapper({ height: 'max' }),
  {
    backgroundColor: vars.colors.oatmeal,
    textAlign: 'center',
  },
]);

export const bgTop = style({
  '@media': {
    'screen and (max-height: 720px)': {
      marginBottom: 0,
    },
    'screen and (min-height: 720px) and (max-height: 840px)': {
      marginBottom: vars.space['4x'],
    },
  },
  width: '100%',
  height: 'auto',
  marginTop: vars.space['2x'],
  marginBottom: 64,
});

export const bgBottom = style({
  width: '100%',
  height: 'auto',
  position: 'absolute',
  bottom: vars.space['2x'],
  left: 0,
  zIndex: vars.zIndex['z-1'],
});

export const mainCharacter = style({
  width: '40%',
  height: 'auto',
});

export const title = style({
  width: '70%',
  height: 'auto',
  '@media': {
    'screen and (max-height: 720px)': {
      marginBottom: 0,
    },
    'screen and (max-height: 800px)': {
      marginBottom: vars.space['2x'],
    },
  },
  marginBottom: vars.space['4x'],
  position: 'relative',
  zIndex: vars.zIndex['z-2'],
});

export const subtitle = style({
  '@media': {
    'screen and (max-height: 600px)': {
      fontSize: 0,
    },
  },
  fontSize: vars.fontSize['2x'],
  fontWeight: vars.fontWeight.accent,
  color: vars.colors.brown,
  position: 'relative',
  zIndex: vars.zIndex['z-2'],
});
