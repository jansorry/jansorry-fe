import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { flex } from '@/styles/common.css';

export const managementWrapper = style([
  contentWrapper({ contentArea: 'headerAndNavBar' }),
  flex({ justify: 'flexStart', align: 'center', direction: 'column' }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: '480px',
      },
    },
  },
]);

export const managementProfileContentWrapper = style([
  flex({
    align: 'center',
    justify: 'center',
  }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: 480,
      },
    },
    padding: vars.space['4x'],
    gap: vars.space['4x'],
    top: '80px',
  },
]);

export const managementProfileDetails = style([
  flex({
    direction: 'column',
  }),
]);

export const managementProfile = style([
  flex({
    justify: 'center',
    align: 'center',
    direction: 'column',
  }),
  {
    width: '100%',
  },
]);

export const nicknameAndEdit = style([
  flex({ align: 'center' }),
  {
    gap: vars.space['1x'],
  },
]);

export const nicknameManagement = style({
  flexGrow: 0,
  fontSize: vars.fontSize['3x'],
  width: 'auto',
});

export const nicknameEditButton = style({
  width: vars.space['3x'],
  height: vars.space['3x'],
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
});

export const managementListContent = style([
  flex({ justify: 'spaceBetween', align: 'center', direction: 'row' }),
  {
    padding: vars.space['2x'],
    color: 'black',
    width: `calc(100% - 2 * ${vars.space['2x']})`,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecorationLine: 'none',
  },
]);

export const managementSnsListContent = style([
  flex({ justify: 'flexStart', align: 'center', direction: 'row' }),
  {
    padding: vars.space['2x'],
    textDecorationLine: 'none',
    color: 'inherit',
    width: `calc(100% - 2 * ${vars.space['2x']})`,
    gap: vars.space['1x'],
  },
]);

export const managementSeperateLine = style({
  border: `1px solid ${vars.colors.lightGray}`,
  width: '100%',
});

export const logoutModalWrapper = style([
  flex({ justify: 'center' }),
  {
    marginTop: vars.space['5x'],
  },
]);
