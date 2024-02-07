import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

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
      marginBottom: vars.space['2x'],
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
  bottom: vars.space['2x'],
  left: 0,
  zIndex: vars.zIndex['z-1'],
});

export const characters = style([
  flex({ direction: 'column', align: 'center' }),
  {
    width: '100%',
  },
]);

export const grandpa = style({
  width: '60%',
  height: 'auto',
  paddingLeft: vars.space['5x'],
});

export const boy = style({
  width: '30%',
  height: 'auto',
  paddingRight: 160,
});

export const title = style({
  width: '80%',
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

export const fadeout = keyframes({
  '0%': {
    opacity: 0.8,
  },
  '100%': {
    opacity: 0,
  },
});

export const subtitle = style({
  color: vars.colors.gray,
  fontSize: vars.fontSize['2x'],
  animationName: fadeout,
  animationDuration: '3s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
});
