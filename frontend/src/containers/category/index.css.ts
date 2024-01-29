import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { contentWrapper } from '@/styles/wrapper.css';
import { flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const categoryWrapper = style([
  contentWrapper({ contentArea: 'headerOnly' }),
  flex({ justify: 'flexStart', align: 'flexStart' }),
  {
    flexDirection: 'row',
  },
]);

export const categoryLeft = style({
  position: 'sticky',
  top: 80,
  left: 0,
  height: `100vh-80px`,
  flexBasis: '33%',
  backgroundColor: vars.colors.babyBlue,
  borderBottom: `1px solid ${vars.colors.whitesmoke}`,
});

export const categoryRight = style({
  flexBasis: '66%',
});

const categoryKeyRecipe = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.colors.white,
        color: vars.colors.black,
        fontWeight: vars.fontWeight.accent,
      },
      false: {
        backgroundColor: vars.colors.babyBlue,
        color: vars.colors.black,
        fontWeight: vars.fontWeight.normal,
      },
    },
  },
});

export const selectedCategoryKeys = style([
  categoryKeyRecipe({ isSelected: true }),
]);

export const categoryKeys = style([categoryKeyRecipe({ isSelected: false })]);

const categoryContentRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: vars.space['2x'],
    height: 56,
  },
  variants: {
    title: {
      true: {
        fontWeight: vars.fontWeight.accent,
        scrollMarginTop: 80,
      },
    },
  },
});

export const categoryContentWrapper = style([
  flex({ align: 'center', justify: 'spaceBetween' }),
  {
    marginRight: vars.space['3x'],
  },
]);

export const categoryContent = style([categoryContentRecipe()]);
export const categoryContentTitle = style([
  categoryContentRecipe({ title: true }),
]);

export const categorySeperateLine = style({
  margin: `${vars.space['0.5x']} ${vars.space['2x']}`,
  border: `1px solid ${vars.colors.whitesmoke}`,
});
