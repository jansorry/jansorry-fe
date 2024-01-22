import { style } from '@vanilla-extract/css';

import { flex, plainButton } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
});

export const modalWrapper = style({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  maxWidth: 480 - 64,
  maxHeight: '80%',
  padding: vars.space['4x'],
  paddingBottom: 80,
  backgroundColor: vars.colors.white,
  borderRadius: vars.borderRadius.top,
});

export const closeButton = style([
  plainButton(),
  flex({ align: 'right' }),
  {
    marginLeft: 'auto',
  },
]);

export const modalTitle = style({
  width: '80%',
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  marginBottom: vars.space['3x'],
});
