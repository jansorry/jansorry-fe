import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

const colors: ('blue' | 'strongRed' | 'black')[] = ['blue', 'strongRed', 'black'];

const filledStyles = colors.flatMap((colorItem:'blue' | 'strongRed' | 'black') => [
  {
    variants: { colorStyle:colorItem, filled: true },
    style: {
      backgroundColor: vars.colors[colorItem],
      border: 'none',
      color: vars.colors.white,
    },
  },
  {
    variants: { colorStyle: colorItem, filled: false },
    style: {
      borderColor: vars.colors[colorItem],
      borderWidth: 2,
      borderStyle: 'solid',
      background: vars.colors.white,
      color: vars.colors[colorItem],
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
    textDecorationLine: 'none',
    cursor: 'pointer',
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
      black: {},
    },
    filled: {
      true: {},
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
