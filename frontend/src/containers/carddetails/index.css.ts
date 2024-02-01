import { style } from '@vanilla-extract/css';

import { contentWrapper } from '@/styles/wrapper.css';
import { flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const cardDetailsWrapper = style([
  flex({ direction: 'column' }),
  contentWrapper({
    contentArea: 'headerAndNavBar',
  }),
  {
    gap: 48,
    padding: '120px 0',
  },
]);

export const cardDetailsSubTitle = style({
  width: 300,
  fontSize: vars.fontSize['5x'],
  fontWeight: vars.fontWeight.accent,
});

export const cardDeleteModal = style([
  flex({ justify: 'center' }),
  {
    marginTop: 80,
  },
]);
