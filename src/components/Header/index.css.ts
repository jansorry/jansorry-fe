import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex, plainButton } from '@/styles/common.css';

export const headerWrapper = style([
  flex({ align: 'center' }),
  defaultWrapper({ width: 'max', border: 'bottom' }),
  {
    position: 'fixed',
    height: 80,
    backgroundColor: vars.colors.white,
    zIndex: vars.zIndex['layout-content'],
  },
]);

export const title = style({
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  margin: '0 auto',
});

export const previousButton = style([
  plainButton(),
  {
    position: 'fixed',
    marginLeft: vars.space['3x'],
    marginTop: 2,
  },
]);
