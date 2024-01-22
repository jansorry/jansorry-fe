import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

const colors: ('blue' | 'red' | 'yellow' | 'green' | 'emerald' | 'purple')[] = [
  'blue',
  'red',
  'yellow',
  'green',
  'emerald',
  'purple',
];

const filledStyles = colors.flatMap((colorStyle: 'blue' | 'red' | 'yellow' | 'green' | 'emerald' | 'purple') => [
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
      boxSizing: 'border-box',
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
    borderRadius: vars.borderRadius.full,
    border: 'none',
    fontSize: vars.fontSize['3x'],
    fontWeight: vars.fontWeight.accent,
    height: 48,
  },
  variants: {
    size: {
      small: {
        width: 124,
      },
      medium: {
        /* 필요한지 확인 */
      },
      large: {
        width: 325,
      },
    },

    colorStyle: {
      blue: {},
      red: {},
      yellow: {},
      green: {},
      emerald: {},
      purple: {},
    },
    filled: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [...filledStyles],
});

//  이부분은 어떻게 통일할 것인가
export type CommonButtonVariants = RecipeVariants<typeof commonButton>;
