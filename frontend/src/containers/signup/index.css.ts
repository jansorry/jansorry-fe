import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

export const signupWrapper = style([
  defaultWrapper({
    height: 'max',
  }),
  {
    backgroundColor: vars.colors.white,
    textAlign: 'center',
  },
]);

export const signupComponentsWrapper = style([
  {
    position: 'relative',
    boxSizing: 'border-box',
    height: '100vh',
    '@media': {
      'screen and (min-width: 480px)': {
        width: '480px',
      },
    },
    width: '100vw',
    paddingTop: '80px',
    bottom: 0,
    overflowX: 'hidden',
  },
]);

export const bg = style({
  width: 'auto',
  height: 170,
  position: 'relative',
  bottom: 0,
  left: 0,
});
//   signup 설정 ---- 종료

export const birthyearWrapper = style([
  signupComponentsWrapper,
  {
    fontWeight: vars.fontWeight.accent,
  },
]);

export const birthYearStyle = {
  birthyearWrapper,
};

const yearPickerWrapper = style({
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 480px)': {
      width: '480px',
    },
  },
  width: '100svw',
  paddingLeft: vars.space['2x'],
  paddingRight: vars.space['2x'],
});

const yearItem = style({
  padding: '10px',
  margin: '5px',
  border: '1px solid black',
});

const buttonsWrapper = style({
  // Add your CSS properties for ButtonBox here
  display: 'flex',
  justifyContent: 'space-between',
  width: '100px',
});

const genderWrapper = style({
  width: '100%',
  height: '100%',
});

const gendertext = style({
  fontWeight: vars.fontWeight.accent,
  fontSize: vars.fontSize['5x'],
  paddingBottom: '80px',
  paddingTop: '80px',
});

const genderButtons = style({
  paddingTop: '10px',
  paddingBottom: '10px',
});

const submitButtons = style({
  top: '60%',
  zIndex: vars.zIndex['z-2'],
});

export const genderStyle = {
  genderWrapper,
  gendertext,
  genderButtons,
  submitButtons,
};

//  gender 설정
export const yearPickerStyle = { yearPickerWrapper, yearItem, buttonsWrapper };
