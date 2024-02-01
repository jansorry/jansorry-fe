import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

export const receiptWrapper = style([
  flex({ direction: 'column', align: 'center' }),
  defaultWrapper({ height: 'auto', width: 'max' }),
  {
    position: 'relative',
  },
]);

export const receiptTopAndBottomBg = style([
  {
    position: 'relative',
    width: '350px',
    height: '10px',
  },
]);

export const receiptContentWrapper = style([
  flex({ align: 'center', justify: 'center' }),
  {
    position: 'relative',
    width: '350px',
    height: 'auto',
    zIndex: vars.zIndex['z-1'],
    paddingRight: vars.space['2x'],
    paddingLeft: vars.space['2x'],
    paddingTop: vars.space['1x'],
    paddingBottom: vars.space['1x'],
    boxSizing: 'border-box',
  },
]);

export const receiptTextWrapper = style([
  flex({ align: 'center', justify: 'center', direction: 'column' }),
  {
    position: 'relative',
    width: calc.subtract('100%', vars.space['2x']),
    zIndex: vars.zIndex['z-1'],
  },
]);

export const receipt = style([
  {
    width: '100%',
    height: '40px',
    margin: '20px',
  },
  flex({ align: 'center', justify: 'center' }),
]);

export const qrcodeWrapper = style([
  {
    position: 'relative',
    width: '90px',
    height: '90px',
    margin: '32px',
  },
  flex({ align: 'center', justify: 'center' }),
]);
export const RowBoxWrapper = style([
  flex({
    direction: 'row',
  }),
  {
    width: '100%',
    paddingTop: vars.space['1x'],
    paddingBottom: vars.space['1x'],
    justifyContent: 'space-between',
  },
]);

export const receiptRowBox = recipe({
  base: style([
    flex({ direction: 'row' }),
    {
      width: '100%',
    },
  ]),
  variants: {
    entry: {
      nag: {
        width: '45%',
      },
      quantity: {
        width: '20%',
      },
      unitPrice: {
        width: '35%',
      },
    },

    align: {
      left: {
        justifyContent: 'left',
      },
      right: {
        justifyContent: 'right',
      },
    },
  },
});

export const receiptTextStyle = recipe({
  base: {
    zIndex: vars.zIndex['z-1'],
    height: 'auto',
    boxSizing: 'border-box',
  },
  variants: {
    target: {
      adult: {
        fontWeight: vars.fontWeight.accent,
      },
      normal: {
        fontWeight: vars.fontWeight.normal,
      },
    },
    contentType: {
      title: {},
      content: {},
      line: {
        fontSize: vars.fontSize['2x'],
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        target: 'adult',
        contentType: 'title',
      },
      style: {
        fontSize: vars.fontSize['4x'],
      },
    },
    {
      variants: {
        target: 'adult',
        contentType: 'content',
      },
      style: {
        fontSize: vars.fontSize['3x'],
      },
    },
    {
      variants: {
        target: 'normal',
        contentType: 'title',
      },
      style: {
        fontSize: vars.fontSize['3x'],
      },
    },
    {
      variants: {
        target: 'normal',
        contentType: 'content',
      },
      style: {
        fontSize: vars.fontSize['2x'],
      },
    },
  ],
});

export const tempPadding = style({
  position: 'relative',
  width: '350px',
  boxSizing: 'border-box',
  paddingTop: '10px',
  paddingRight: '15px',
  paddingLeft: '15px',
});
export const textTemp = style({
  fontSize: vars.fontSize['2x'],
  width: '160px',
});

export const text16 = style({
  fontSize: vars.fontSize['2x'],
});
export const textNTemp = style({
  fontSize: vars.fontSize['2x'],
  width: '70px',
  display: 'flex',
  justifyContent: 'right',
  paddingRight: '5px',
});

export const resultTemp = style([{}]);

export const textPTemp = style({
  fontSize: vars.fontSize['2x'],
  display: 'flex',
  justifyContent: 'right',
  width: '120px',
});

export const receiptTop = style({
  position: 'relative',
  width: '350px',
  height: '10px',
});
export const receiptBg = style({
  position: 'relative',
  width: '350px',
  height: '1200px',
});

export const receiptBg2 = style({
  position: 'relative',
  width: '350px',
  height: '1200px',
  overflow: 'hidden',
});
