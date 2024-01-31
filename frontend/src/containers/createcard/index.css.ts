import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { flex } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { vars } from '@/styles/vars.css';

export const createCardWrapper = style([
  flex({
    justify: 'spaceAround',
    align: 'center',
    direction: 'column',
  }),
  contentWrapper({
    contentArea: 'headerOnly',
    heightStyle: 'max',
  }),
]);

export const actionModalWrapper = style([
  flex({
    align: 'center',
    direction: 'column',
  }),
]);

export const actionTextareaBox = style({
  width: calc.subtract('100%', vars.space['4x']),
  height: 120,
  padding: vars.space['2x'],
  resize: 'none',
  border: 'none',
  ':focus': {
    outline: 'none',
  },
  borderRadius: vars.borderRadius['2x'],
  backgroundColor: vars.colors.whitesmoke,
  fontSize: vars.fontSize['3x'],
  lineHeight: '30px',
  wordBreak: 'break-all',
  overflow: 'hidden',
});

export const actionInputInfoWrapper = style([
  flex({
    justify: 'spaceBetween',
  }),
  {
    width: '90%',
    margin: vars.space['2x'],
  },
]);

export const inputCountState = style({
  color: vars.colors.gray,
});

export const warningMaxLineRecipe = recipe({
  base: {
    height: vars.space['2x'],
  },
  variants: {
    warning: {
      true: {
        color: vars.colors.strongRed,
      },
    },
  },
});
