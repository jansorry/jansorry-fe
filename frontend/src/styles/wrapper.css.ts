import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

const contentWrapperBase = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 480px)': {
      width: '480px',
    },
  },
  width: '100vw',
  height: '100vh',
});
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
  },
});
