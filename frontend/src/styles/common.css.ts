import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

export const defaultWrapper = recipe({
  base: {
    maxWidth: 480,
  },
  variants: {
    width: {
      max: '100svw',
    },
    height: {
      max: '100svh',
    },
    border: {
      top: `1px solid ${vars.colors.whitesmoke}`,
      bottom: `1px solid ${vars.colors.whitesmoke}`,
    },
  },
});

export const flex = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
  },
});

export const plainButton = recipe({
  base: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'inherit',
    cursor: 'pointer',
  },
});
