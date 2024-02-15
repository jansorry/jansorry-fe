import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

import { defaultWrapper, flex } from '@/styles/common.css';

const contentWrapperBase = style([
  defaultWrapper({
    width: 'max',
    height: 'auto',
  }),
  flex({
    align: 'center',
  }),
  {
    position: 'relative',
    boxSizing: 'border-box',
    border: 'none',
  },
]);

export const contentWrapper = recipe({
  base: contentWrapperBase,

  variants: {
    contentArea: {
      headerOnly: {
        paddingTop: '80px',
      },
      navBarOnly: {
        paddingBottom: '48px',
      },
      headerAndNavBar: {
        paddingTop: '80px',
        paddingBottom: '48px',
      },
    },
    heightStyle: {
      max: {
        height: '100svh',
      },
    },
  },
});
