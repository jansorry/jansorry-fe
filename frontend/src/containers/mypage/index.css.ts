import { style } from '@vanilla-extract/css';
import exp from 'node:constants';

import { vars } from '@/styles/vars.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { flex } from '@/styles/common.css';

export const myPageWrapper = style([
  contentWrapper({ contentArea: 'headerAndNavBar' }),
  flex({ justify: 'flexStart', align: 'flexStart', direction: 'column' }),
]);

export const myPageProfile = style([
  flex({ justify: 'center', align: 'center', direction: 'row' }),
  {
    padding: `${vars.space['4x']} ${vars.space['4x']}`,
    gap: vars.space['1x'],
  },
]);

export const myPageListContent = style([
  flex({ justify: 'spaceBetween', align: 'center', direction: 'row' }),
  {
    padding: vars.space['2x'],
    color: 'black',
    width: `calc(100% - 2 * ${vars.space['2x']})`,
    textDecorationLine: 'none',
  },
]);

export const myPageSnsListContent = style([
  flex({ justify: 'flexStart', align: 'center', direction: 'row' }),
  {
    padding: vars.space['2x'],
    textDecorationLine: 'none',
    color: 'inherit',
    width: `calc(100% - 2 * ${vars.space['2x']})`,
    gap: vars.space['1x'],
  },
]);

export const myPageSeperateLine = style({
  border: `1px solid ${vars.colors.lightGray}`,
  width: '100%',
});
