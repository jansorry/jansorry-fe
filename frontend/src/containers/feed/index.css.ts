import { style } from '@vanilla-extract/css';

import { contentWrapper } from '@/styles/wrapper.css';
import { flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const feedWrapper = style([
  contentWrapper({ contentArea: 'headerAndNavBar' }),
  flex({ direction: 'column' }),
]);

export const feedHashtagWrapper = style([
  flex({ direction: 'row', align: 'center' }),
  {
    overflow: 'auto',
    width: '100%',
    height: 120,
    whiteSpace: 'nowrap',
    gap: vars.space['2x'],
    '::before': { content: '' },
    '::after': { content: '' },
  },
]);
