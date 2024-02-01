import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

export const cardSizes = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    size: {
      xSmall: { width: 96, height: 128 },
      small: { width: 138, height: 184 },
      medium: { width: 198, height: 264 },
      large: { width: 300, height: 400 },
    },
  },
});

export const cardText = recipe({
  base: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: vars.zIndex['z-1'],
    color: vars.colors.black,
    left: '50%',

    fontSize: vars.fontSize['3x'],
  },
  variants: {
    position: {
      center: {
        top: '50%',
      },
      bottom: {
        top: '70%',
      },
    },
    fontSize: {
      xSmall: {
        fontSize: vars.fontSize['1x'],
      },
      small: {
        fontSize: vars.fontSize['2x'],
      },
      medium: {
        fontSize: vars.fontSize['2x'],
      },
      large: {
        fontSize: vars.fontSize['3x'],
      },
    },
    color: {
      empty: { color: vars.colors.black },
      blue: { color: vars.colors.blue },
      red: { color: vars.colors.red },
      yellow: { color: vars.colors.yellow },
      green: { color: vars.colors.green },
      emerald: { color: vars.colors.emerald },
      purple: { color: vars.colors.purple },
    },
  },
});
