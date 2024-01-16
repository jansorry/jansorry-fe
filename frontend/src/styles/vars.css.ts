import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    white: '#ffffff',
    black: '#000000',
    red: 'red',
  },
});
