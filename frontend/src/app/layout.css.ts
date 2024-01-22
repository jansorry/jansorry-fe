import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

globalStyle('html', {
  backgroundColor: vars.colors.white,
});

globalStyle('body', {
  width: 'auto',
  maxWidth: 480,
  minHeight: '100svh',
  margin: '0 auto',
  padding: 0,
  backgroundColor: vars.colors.white,
  position: 'relative',
  boxShadow: `0 0 25px ${vars.colors.whitesmoke}`,
});
