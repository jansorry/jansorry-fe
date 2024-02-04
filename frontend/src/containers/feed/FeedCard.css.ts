import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';
import { flex } from '@/styles/common.css';

export const feedCardWrapper = style({
  width: 360,
  height: 240,
  border: `1px solid ${vars.colors.whitesmoke}`,
  borderRadius: vars.borderRadius['1x'],
  boxShadow: `0px 10px 25px 0px ${vars.colors.whitesmoke}`,
});

export const feedHeader = style([
  flex({ align: 'center' }),
  {
    padding: vars.space['2x'],
    height: vars.space['4x'],
  },
]);

export const feedFollowButton = recipe({
  base: {
    fontWeight: vars.fontWeight.accent,
    borderRadius: vars.borderRadius.full,
    border: 'none',
    margin: 'auto',
    padding: 10,
    textDecorationLine: 'none',
    cursor: 'pointer',
    marginRight: 0,
  },
  variants: {
    follow: {
      true: {
        color: vars.colors.white,
        backgroundColor: vars.colors.black,
      },
      false: {
        color: vars.colors.black,
        backgroundColor: vars.colors.white,
        border: `1px solid ${vars.colors.black}`,
      },
    },
  },
});

export const feedActionBackground = style([
  flex({ justify: 'center', align: 'center' }),
  {
    position: 'relative',
    height: 112,
    background: `linear-gradient(120deg, ${vars.colors.pink}, ${vars.colors.lavender}, ${vars.colors.lightBlue})`,
  },
]);

export const feedFavorite = style([
  flex({ align: 'center' }),
  {
    position: 'absolute',
    bottom: vars.space['1x'],
    right: vars.space['1x'],
    gap: vars.space['1x'],
  },
]);

export const feedActionText = style({
  color: vars.colors.black,
  fontWeight: vars.fontWeight.accent,
  whiteSpace: 'pre-line',
  margin: `0 ${vars.space['2x']}`,
});

export const feedFooter = style([
  flex({
    justify: 'spaceBetween',
    align: 'center',
  }),
  {
    height: 64,
    padding: '0 20px',
    overflow: 'hidden',
  },
]);

export const feedNag = style({
  fontWeight: vars.fontWeight.accent,
  marginBottom: vars.space['1x'],
  wordBreak: 'keep-all',
});

export const feedCategoryTitle = style({
  fontSize: vars.fontSize['1.5x'],
});

export const feedNagCard = style({
  marginTop: 80,
});

export const feedFavoriteIcon = style({
  cursor: 'pointer',
});
