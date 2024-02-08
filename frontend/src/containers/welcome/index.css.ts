import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

export const welcomeWrapper = style([
  defaultWrapper({ height: 'auto' }),
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

export const grandpaAnimation = keyframes({
  '0%': {
    transform: `translateY(0px) rotate(0deg)`,
  },
  '5%': {
    transform: `translateY(24px) rotate(-20deg)`,
  },
  '10%': {
    transform: `translateY(0px) rotate(0deg)`,
  },
  '95%': {
    transform: `translateY(0px) rotate(0deg)`,
  },
  '100%': {
    transform: `translateY(24px) rotate(-20deg)`,
  },
});

export const boyAnimation = keyframes({
  '0%': {
    transform: `translateY(0px) rotate(0deg)`,
  },
  '40%': {
    transform: `translateY(0px) rotate(0deg)`,
  },
  '45%': {
    transform: `translateY(24px) rotate(10deg)`,
  },
  '50%': {
    transform: `translateY(0px) rotate(0deg)`,
  },
  '100%': {
    transform: `translateY(0px) rotate(0deg)`,
  },
});

export const grandpa = style({
  width: '60%',
  height: 'auto',
  paddingLeft: vars.space['5x'],
  animationName: grandpaAnimation,
  animationDuration: '4s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
});

export const boy = style({
  width: '30%',
  height: 'auto',
  paddingRight: 160,
  animationName: boyAnimation,
  animationDuration: '4s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
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

export const fadein = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateY(20px)`,
  },
  '100%': {
    opacity: 1,
    transform: `translateY(0px)`,
  },
});

export const onlyFadein = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const feedOneAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateX(-20px)`,
  },
  '30%': {
    opacity: 0,
    transform: `translateX(-20px)`,
  },
  '100%': {
    opacity: 1,
    transform: `translateX(0px)`,
  },
});

export const feedTwoAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateX(-20px)`,
  },
  '70%': {
    opacity: 0,
    transform: `translateX(-20px)`,
  },
  '100%': {
    opacity: 1,
    transform: `translateX(0px)`,
  },
});

export const guidance = style({
  color: vars.colors.gray,
  fontSize: vars.fontSize['2x'],
  animationName: fadeout,
  animationDuration: '3s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
});

export const cardContentWrapper = style({
  paddingTop: 200,
  background: `linear-gradient(180deg, ${vars.colors.oatmeal} 0%, ${vars.colors.white} 25%)`,
  height: 360,
});

export const receiptContentWrapper = style({
  height: 600,
  paddingTop: 40,
  backgroundColor: vars.colors.oatmeal,
});

export const feedContentWrapper = style({
  height: 700,
  paddingTop: 40,
  backgroundColor: vars.colors.white,
});

export const animationElements = recipe({
  base: {
    width: '80%',
    animationName: fadein,
    animationDuration: '1.5s',
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards',
  },
  variants: {
    main: {
      true: {
        fontSize: vars.fontSize['3x'],
      },
      false: {
        fontSize: vars.fontSize['2x'],
        fontWeight: vars.fontWeight.accent,
        color: vars.colors.blue,
        marginBottom: vars.space['2x'],
      },
    },
    align: {
      left: {
        marginLeft: '15%',
        textAlign: 'left',
      },
      right: {
        marginRight: '15%',
        textAlign: 'right',
      },
    },
    image: {
      receipt: {
        width: 150,
        marginTop: vars.space['3x'],
        height: 'auto',
        animationName: onlyFadein,
        animationDuration: '2s',
      },
      feedOne: {
        width: 300,
        marginTop: vars.space['3x'],
        height: 'auto',
        animationName: feedOneAnimation,
        animationDuration: '1.5s',
      },
      feedTwo: {
        width: 300,
        marginTop: vars.space['3x'],
        height: 'auto',
        animationName: feedTwoAnimation,
        animationDuration: '2.5s',
      },
    },
  },
});

export const notShow = style({ display: 'none' });
