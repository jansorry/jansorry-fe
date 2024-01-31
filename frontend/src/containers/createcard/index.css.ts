import { style } from '@vanilla-extract/css';

import { flex } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';

export const createCardWrapper = style([
  flex({
    justify: 'spaceAround',
    align: 'center',
    direction: 'column',
  }),
  contentWrapper({
    contentArea: 'headerOnly',
    heightStyle: 'max',
  }),
]);
