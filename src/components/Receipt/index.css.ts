import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

export const receiptWrapper = style([
  flex({ direction: 'column', align: 'center' }),
  defaultWrapper({ height: 'auto' }),
  {
    width: '350px',
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
    justify: 'spaceBetween',
  }),
  {
    width: '100%',
    paddingTop: vars.space['1x'],
    paddingBottom: vars.space['1x'],
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
      family: {
        fontWeight: vars.fontWeight.accent,
      },
      friend: {
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
        target: 'family',
        contentType: 'title',
      },
      style: {
        fontSize: vars.fontSize['4x'],
      },
    },
    {
      variants: {
        target: 'family',
        contentType: 'content',
      },
      style: {
        fontSize: vars.fontSize['3x'],
      },
    },
    {
      variants: {
        target: 'friend',
        contentType: 'title',
      },
      style: {
        fontSize: vars.fontSize['3x'],
      },
    },
    {
      variants: {
        target: 'friend',
        contentType: 'content',
      },
      style: {
        fontSize: vars.fontSize['2x'],
      },
    },
  ],
});
