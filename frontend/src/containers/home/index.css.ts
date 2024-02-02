import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { defaultWrapper, flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const homeWrapper = style([
  defaultWrapper({ height: 'max' }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: '480px',
      },
    },
  },
]);

export const bottomNav = style({
  width: '100svw',
  height: 'auto',
});
export const homeContentWrapper = style([
  flex({ align: 'center', direction: 'column' }),
  {
    position: 'relative',
    top: 0,
    boxSizing: 'border-box',
    height: '100svh',
    //  padding용 48px spacing도 만들어야 될듯
    // 상하단 padding style 셋팅을 하는게 나을지도 -> 고민
    paddingBottom: '48px',
    paddingTop: '20%',
  },
]);

export const emptyStyle = style([
  flex({ align: 'center', justify: 'center', direction: 'column' }),
  {
    width: '100%',
    height: '100%',
  },
]);

export const homeBg = style([
  {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    bottom: '0%',
  },
]);

export const homeText = recipe({
  base: {
    color: vars.colors.black,
    padding: vars.space['2x'],
  },
  variants: {
    contentType: {
      card: {},
      title: {
        fontSize: vars.fontSize['4x'],
        fontWeight: vars.fontWeight.accent,
      },
      content: {
        fontSize: vars.fontSize['3x'],
        padding: vars.space['1x'],
      },
      guidance: {
        fontSize: vars.fontSize['2x'],
        color: vars.colors.gray,
      },
    },
  },
});
