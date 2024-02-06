import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { direction } from 'html2canvas/dist/types/css/property-descriptors/direction';
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
  },
]);

export const mypageText = recipe({
  base: {
    color: vars.colors.black,
    padding: vars.space['2x'],
  },
  variants: {
    contentType: {
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
    width: '100svw',
    height: '100%',
  },
]);

export const savedReceiptsContainer = style([
  flex({
    direction: 'row',
    justify: 'flexStart',
    align: 'center',
  }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: `480px`,
      },
    },
    height: '120px',
    marginTop: vars.space['5x'],
    // gap: `calc((100svw - 2 * ${vars.space['4x']}) / 3)`,
  },
]);

export const savedReceiptsFrame = style({
  // UserPreview 컴포넌트 사용하기
  width: 64,
  height: 64,
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.colors.lightGray,
  cursor: 'pointer',
  margin: vars.space['5x'],
});

export const cardGridWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space['1x'],
  padding: vars.space['1x'],
  margin: vars.space['1x'],
  marginTop: vars.space['5x'],
});

export const noCardWrapper = style({
  marginTop: vars.space['4x'],
});

export const bottomNav = style({
  width: '100svw',
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
