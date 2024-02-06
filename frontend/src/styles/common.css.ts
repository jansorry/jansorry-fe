import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

export const defaultWrapper = recipe({
  base: {
    maxWidth: 480,
  },
  variants: {
    width: {
      max: {
        width: '100svw',
      },
    },
    height: {
      max: {
        height: '100svh',
      },
      auto: {
        height: 'auto',
      },
    },
    border: {
      top: {
        borderTop: `1px solid ${vars.colors.whitesmoke}`,
      },
      bottom: {
        borderBottom: `1px solid ${vars.colors.whitesmoke}`,
      },
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
      flexStart: {
        justifyContent: 'flex-start',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      flexStart: {
        alignItems: 'flex-start',
      },
      right: {
        marginLeft: 'auto',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
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
