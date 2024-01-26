import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { defaultWrapper } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const signupWrapper = style([
  defaultWrapper({ height: 'max' }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: '480px',
      },
    },
  },
]);

export const signupBg = style({
  position: 'absolute',
  width: '100%',
  height: 'auto',
  bottom: '0%',
});

export const signupContentWrapper = style({
  position: 'relative',
  top: 0,
  boxSizing: 'border-box',
  height: '100svh',
  //  header 등 padding좀 고정해야만.. recipe으로 만들까?
  paddingTop: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const birthGenderWrapper = style({
  position: 'relative',
  top: 0,
  boxSizing: 'border-box',
  height: '100%',
  paddingTop: '10%',
  paddingBottom: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const selectWrapper = recipe({
  base: {
    overflowY: 'auto',
    height: '186px',
    boxSizing: 'border-box',

    //   스크롤바 숨김 -> 최신 브라우저에서만 작동하는 것 같음. 모바일웹 케이느 확인 필요
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    content: {
      yearPicker: {},
      genderButtons: {
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'visible',
      },
    },
  },
});

export const yearPickerWrapper = style({});
export const yearPickerBox = style({
  width: '120px',
  height: '64px',
  paddingRight: '10px',
  paddingLeft: '10px',
  borderRadius: '16px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '32px',
});

export const yearPickerBoxVariants = styleVariants({
  selected: {
    backgroundColor: vars.colors.babyBlue,
  },
  unselected: {
    backgroundColor: 'transparent',
  },
});

export const signupText = recipe({
  base: {
    visibility: 'visible',
    textAlign: 'center',
  },
  variants: {
    text: {
      title: {
        fontSize: vars.fontSize['3x'],
        fontWeight: vars.fontWeight.accent,
      },
      birthNumber: {
        fontSize: vars.fontSize['2x'],
      },
      underAgeNotice: {
        fontSize: vars.fontSize['2x'],
        color: vars.colors.strongRed,
        paddingTop: vars.space['0.5x'],
      },
    },
    visible: {
      hidden: {
        visibility: 'hidden',
      },
      show: {},
    },
  },
});
