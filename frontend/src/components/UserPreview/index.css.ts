import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const userPreview = style([
  flex(),
  {
    height: '40px',
    width: 'auto',
    boxSizing: 'border-box',
    marginTop: vars.space['0.5x'],
    marginBottom: vars.space['0.5x'],
  },
]);

export const profileImage = recipe({
  base: {
    width: '40px',
    height: '40px',
    marginRight: vars.space['1x'],
    borderRadius: vars.borderRadius.full,
  },
  variants: {
    sizes: {
      large: {
        width: '64px',
        height: '64px',
      },
    },
  },
});

export const profileText = {
  box: style([
    flex({
      justify: 'center',
    }),
    {
      flexDirection: 'column',
    },
  ]),
  nickname: style({
    fontSize: vars.fontSize['2x'],
  }),
  subText: style({
    fontSize: vars.fontSize['1x'],
    color: vars.colors.gray,
  }),
};
