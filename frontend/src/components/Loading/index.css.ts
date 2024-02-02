import { style } from '@vanilla-extract/css';

import { defaultWrapper, flex } from '@/styles/common.css';

export const LoadingWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  defaultWrapper({ height: 'max' }),
  {
    textAlign: 'center',
  },
]);
