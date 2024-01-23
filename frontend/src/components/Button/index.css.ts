import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper } from '@/styles/common.css';

const colors: ('blue' | 'strongRed')[] = ['blue', 'strongRed'];

const filledStyles = colors.flatMap((colorStyle: 'blue' | 'strongRed') => [
  {
    variants: { colorStyle, filled: true },
    style: {
      backgroundColor: vars.colors[colorStyle],
      border: 'none',
      color: vars.colors.white,
    },
  },
  {
    variants: { colorStyle, filled: false },
    style: {
      borderColor: vars.colors[colorStyle],
      borderWidth: 2,
      borderStyle: 'solid',
      background: vars.colors.white,
      color: vars.colors[colorStyle],
    },
  },
]);

export const commonButton = recipe({
  base: {
    boxSizing: 'border-box',
    borderRadius: vars.borderRadius.full,
    border: 'none',
    fontSize: vars.fontSize['3x'],
    fontWeight: vars.fontWeight.accent,
    height: 48,
    margin: 'auto',
    paddingTop: vars.space['0.5x'],
    paddingBottom: vars.space['0.5x'],
  },
  variants: {
    size: {
      small: {
        width: 'auto',
        paddingLeft: vars.space['2x'],
        paddingRight: vars.space['2x'],
      },
      large: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    colorStyle: {
      blue: {},
      strongRed: {},
    },
    filled: {
      ture: {},
      false: {},
    },
  },
  compoundVariants: filledStyles,
});
export const ButtonWrapper = {
  large: style([
    {
      boxSizing: 'border-box',
      '@media': {
        'screen and (min-width: 480px)': {
          width: '480px',
        },
      },
      width: '100svw',
      paddingLeft: vars.space['4x'],
      paddingRight: vars.space['4x'],
    },
  ]),
  small: style([
    {
      boxSizing: 'border-box',
      width: 'auto',
    },
  ]),
};
