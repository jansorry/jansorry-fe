import { createVar, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { defaultWrapper, flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const homeWrapper = style([
  defaultWrapper({ height: 'max' }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: '480px',
      },
    },
  },
]);

export const homeContentWrapper = style([
  flex({ align: 'center', direction: 'column' }),
  {
    '@media': {
      'screen and (max-height: 720px)': {
        paddingTop: '15%',
      },
    },
    position: 'relative',
    top: 0,
    boxSizing: 'border-box',
    height: '100svh',
    width: '100%',
    paddingBottom: '48px',
    paddingTop: '30%',
  },
]);

export const emptyStyle = style([
  flex({ align: 'center', justify: 'center', direction: 'column' }),
  {
    width: '100%',
    height: '80%',
  },
]);

export const homeBg = style([
  {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    bottom: '0%',
  },
]);

export const homeText = recipe({
  base: {
    color: vars.colors.black,
    padding: vars.space['2x'],
  },
  variants: {
    contentType: {
      card: {},
      title: {
        fontSize: vars.fontSize['4x'],
        fontWeight: vars.fontWeight.accent,
      },
      content: {
        fontSize: vars.fontSize['3x'],
        padding: vars.space['1x'],
      },
      guidance: {
        fontSize: vars.fontSize['2x'],
        color: vars.colors.gray,
      },
    },
    margin: {
      top: {
        marginTop: '60%',
      },
    },
  },
});

const cardCount = '7';
const curvature = `150deg`;
export const cardIndex = createVar();
const curve = calc.multiply(
  curvature,
  calc.divide(calc.divide(calc.subtract(cardIndex, 3), 2.5), cardCount),
);

export const cardWrapper = style([
  flex({ justify: 'center' }),
  {
    '@media': {
      'screen and (max-height: 650px)': {
        transform: 'translateY(50vh)',
      },
    },
    counterReset: cardCount,
    position: 'absolute',
    width: '100%',
    transform: 'translateY(40vh)',
  },
]);

export const renderEffect = keyframes({
  '0%': {
    opacity: 0,
    transform: `rotate(0) translateY(0%)`,
  },
  '100%': {
    opacity: 1,
    transform: `rotate(${curve}) translateY(-150%)`,
  },
});

export const cardElement = style({
  position: 'absolute',
  counterIncrement: cardCount,
  flex: '0 0 auto',
  transformOrigin: '50% 100%',
  animationName: renderEffect,
  animationDuration: '1s',
  animationTimingFunction: 'ease-in-out',
  animationFillMode: 'forwards',
});
