import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { flex } from '@/styles/common.css';

export const floatButton = style([
  flex({ justify: 'center', align: 'center' }),
  {
    position: 'fixed',
    width: 40,
    height: 40,
    bottom: 64,
    left: 0,
    right: 0,
    margin: '0 auto',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: vars.colors.blue,
    borderRadius: vars.borderRadius.full,
    zIndex: vars.zIndex['layout-content'],
  },
]);
