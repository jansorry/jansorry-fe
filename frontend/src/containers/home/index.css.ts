import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { defaultWrapper } from '@/styles/common.css';
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

export const homeBgWrapper = style({
  position: 'absolute',
  width: '100svw',
  height: 'auto',

  boxSizing: 'border-box',
  paddingBottom: '48px',
  paddingTop: '30%',
});

export const bottomNav = style({
  width: '100svw',
  height: 'auto',
});
export const homeContentWrapper = style([
  {
    position: 'relative',
    top: 0,
    boxSizing: 'border-box',
    height: '100svh',
    //  padding용 48px spacing도 만들어야 될듯
    // 상하단 padding style 셋팅을 하는게 나을지도 -> 고민
    paddingBottom: '48px',
    paddingTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
]);

export const emptyStyle = style([
  {
    width: '100svw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
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
export const tempStyle = style({});

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
