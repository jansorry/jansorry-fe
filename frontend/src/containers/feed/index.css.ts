import { style } from '@vanilla-extract/css';

import { contentWrapper } from '@/styles/wrapper.css';
import { flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const feedWrapper = style([
  contentWrapper({ contentArea: 'headerAndNavBar' }),
  flex({ direction: 'column' }),
  {
    padding: '112px 0',
    gap: vars.space['4x'],
  },
]);
