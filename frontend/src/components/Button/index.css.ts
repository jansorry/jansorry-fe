import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const commonButton = style({
  backgroundColor: vars.colors.black,
  color: vars.colors.white,
});
