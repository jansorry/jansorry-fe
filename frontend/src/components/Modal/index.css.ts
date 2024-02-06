import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flex, plainButton } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const upAnimation = keyframes({
  '0%': { bottom: '-100%' },
  '100%': { bottom: 0 },
});

export const downAnimation = keyframes({
  '0%': { bottom: 0 },
  '100%': { bottom: '-100%' },
});

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
  zIndex: vars.zIndex['content-bg-to-top'],
});

export const modalWrapper = recipe({
  base: {
    '@media': {
      'screen and (min-width: 480px)': {
        width: 480,
      },
    },
    position: 'fixed',
    bottom: 0,
    width: '100svw',
    maxHeight: '80%',
    backgroundColor: vars.colors.white,
    borderRadius: vars.borderRadius.top,
    zIndex: vars.zIndex['content-to-top'],
    animationDuration: '600ms',
    animationTimingFunction: `600ms cubic-bezier(0.86, 0, 0.07, 1)`,
  },
  variants: {
    isUnmount: {
      true: {
        animationName: downAnimation,
      },
      false: {
        animationName: upAnimation,
      },
    },
  },
});

export const modalPadding = style({
  padding: vars.space['4x'],
});

export const closeButton = style([
  plainButton(),
  flex({ align: 'right' }),
  {
    marginLeft: 'auto',
  },
]);

export const modalTitle = style({
  width: '80%',
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  marginBottom: vars.space['3x'],
  wordBreak: 'keep-all',
});
