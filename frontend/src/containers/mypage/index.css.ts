import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { flex } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { vars } from '@/styles/vars.css';

export const profileWrapper = style([
  contentWrapper({ contentArea: 'headerAndNavBar' }),
  flex({
    align: 'center',
    justify: 'flexStart',
    direction: 'column',
  }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: '480px',
      },
    },
  },
]);

export const profileContentWrapper = style([
  flex({
    justify: 'center',
    align: 'center',
    direction: 'column',
  }),
  {
    width: '100%',
    marginBottom: vars.space['4x'],
  },
]);

export const mypageText = recipe({
  base: {
    color: vars.colors.black,
    padding: vars.space['2x'],
  },
  variants: {
    contentType: {
      // TODO: mypage 카드에 들어갈 텍스트 스타일
      card: {},
      title: {
        fontSize: vars.fontSize['3x'],
        fontWeight: vars.fontWeight.accent,
      },
      content: {
        fontSize: vars.fontSize['2x'],
        padding: vars.space['1x'],
      },
    },
  },
});

export const userProfileWrapper = style([
  flex({
    align: 'center',
    justify: 'center',
  }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: 480,
      },
    },
    padding: vars.space['4x'],
    gap: vars.space['4x'],
    top: '80px',
  },
]);

export const profileDetails = style([
  flex({
    direction: 'column',
  }),
]);

export const nicknameAndSettings = style([
  flex({ align: 'center' }),
  {
    gap: vars.space['1x'],
  },
]);

export const nicknameBox = style({
  flexGrow: 0,
  fontSize: vars.fontSize['3x'],
  width: 'auto',
});

export const settingsButton = style({
  width: vars.space['3x'],
  height: vars.space['3x'],
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
});

export const followInfo = style([
  flex({ align: 'center' }),
  {
    gap: vars.space['2x'],
    marginTop: vars.space['2x'],
    fontSize: vars.fontSize['2x'],
  },
]);

export const followNumber = style({
  width: 'auto',
});

export const profileContentStyle = style([
  flex({
    direction: 'column',
    align: 'center',
    justify: 'spaceAround',
  }),
  {
    width: '100%',
    height: '100%',
  },
]);

export const savedReceiptWrapper = style([
  flex({ direction: 'column', justify: 'flexStart' }),
  {
    width: '90%',
    maxWidth: 480,
    height: 'auto',
    margin: '0 auto',
    marginTop: vars.space['4x'],
  },
]);

export const savedReceiptContainer = style([
  flex({
    direction: 'row',
    justify: 'spaceBetween',
    align: 'center',
  }),
  {
    width: '100%',
    position: 'relative',
    gap: vars.space['1x'],
    marginTop: vars.space['2x'],
  },
]);

export const savedReceiptFrame = style([
  flex({ justify: 'center', align: 'center' }),
  {
    // UserPreview 컴포넌트 사용하기
    width: 64,
    height: 64,
    borderRadius: vars.borderRadius.full,
    backgroundColor: vars.colors.whitesmoke,
    stroke: '0.1',
    cursor: 'pointer',
    margin: vars.space['1x'],
  },
]);

export const noReceiptFrame = style([
  flex({ justify: 'center', align: 'center' }),
  {
    // UserPreview 컴포넌트 사용하기
    width: 64,
    height: 64,
    backgroundColor: 'transparent',
    margin: vars.space['1x'],
  },
]);

export const cardGridWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space['1x'],
  margin: '0 auto',
  marginTop: vars.space['5x'],
  width: '90%',
  maxWidth: 480,
});

export const noCardWrapper = style({
  marginTop: vars.space['4x'],
});

export const bottomNav = style({
  width: '100%',
  height: 'auto',
});

export const actionModalWrapper = style([
  flex({
    align: 'center',
    direction: 'column',
  }),
  {
    marginTop: calc.multiply(vars.space['5x'], 4),
    marginBottom: vars.space['5x'],
  },
]);
