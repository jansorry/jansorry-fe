import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper } from '@/styles/common.css';

export const loadingWrapper = style([
  defaultWrapper({ height: 'max' }),
  {
    textAlign: 'center',
  },
]);
