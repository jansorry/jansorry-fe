import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

globalStyle('html', {
  backgroundColor: vars.colors.black,
});

globalStyle('body', {
  width: 'auto',
  maxWidth: '480px',
  minHeight: '100svh',
  margin: '0 auto',
  padding: '0',
  backgroundColor: vars.colors.white,
  position: 'relative',
});
