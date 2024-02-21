import { style } from '@vanilla-extract/css';

import { defaultWrapper, flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const LoadingWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  defaultWrapper({ height: 'max' }),
  {
    position: 'relative',
    textAlign: 'center',
    zIndex: vars.zIndex['layout-content'],
  },
]);
