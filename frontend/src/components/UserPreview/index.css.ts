import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const userPreview = style([
  flex(),
  {
    height: 'auto',
    width: 'auto',
    boxSizing: 'border-box',
    marginTop: vars.space['0.5x'],
    marginBottom: vars.space['0.5x'],
  },
]);

export const profileImage = recipe({
  base: {
    width: vars.space['5x'],
    height: vars.space['5x'],
    marginRight: vars.space['1x'],
    borderRadius: vars.borderRadius.full,
  },
  variants: {
    sizes: {
      large: {
        width: 64,
        height: 64,
        border: `1px solid ${vars.colors.lightGray}`,
      },
      xLarge: {
        width: '72px',
        height: '72px',
      },
    },
  },
});

export const profileText = {
  box: style([
    flex({
      justify: 'center',
      direction: 'column',
    }),
  ]),
  nickname: style({
    fontSize: vars.fontSize['2x'],
  }),
  nicknameLarge: style({
    fontSize: vars.fontSize['3x'],
  }),
  subText: style({
    fontSize: vars.fontSize['1.5x'],
    color: vars.colors.gray,
  }),
};
