import { createGlobalTheme } from '@vanilla-extract/css';
import { modularScale } from 'polished';

const createScale = (ratio: number, base: number) => (steps: number) => `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const fontSizeScale = createScale(2, 8);
const lineHeightScale = createScale(1, 8);
const borderRadiusScale = createScale(1.5, 4);

export const vars = createGlobalTheme(':root', {
  /* paddings, margins 대신 space 사용 */
  space: {
    none: '0',
    '0x': spaceScale(0),
    '1x': spaceScale(1),
    '2x': spaceScale(2),
    '3x': spaceScale(3),
    '4x': spaceScale(4),
    '5x': spaceScale(5),
    '6x': spaceScale(6),
    '7x': spaceScale(7),
    // '8x': spaceScale(8),
  },

  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: '#919191',
    lightgray50: '#f1f1f1',
    blue: '#7f9bc9',
    red: '#ff8585', // Card, AlertAlarm 에 사용
    yellow: '#ffde9d',
    green: '#83cf74',
    emerald: '#74cf9c',
    purple: '#cf8abc',
    oatmeal: '#fdf5e4',
    brown: '#453216',
  },

  borderRadius: {
    '0x': borderRadiusScale(0),
    '1x': borderRadiusScale(1),
    '2x': borderRadiusScale(2),
    '3x': borderRadiusScale(3),
    '4x': borderRadiusScale(4),
    '5x': borderRadiusScale(5),
    full: '99999px', // 원을 만들 때 사용
  },

  fontFamily: {
    /* 폰트  */
    body: 'Arial',
  },

  fontSize: {
    '0x': fontSizeScale(0),
    '1x': fontSizeScale(1),
    '2x': fontSizeScale(2),
    '3x': fontSizeScale(3),
    '4x': fontSizeScale(4),
  },

  /* lineHeight 는 2x, 3x 를 주로 사용 */
  lineHeight: {
    '0x': lineHeightScale(0),
    '1x': lineHeightScale(1),
    '2x': lineHeightScale(2),
    '3x': lineHeightScale(3),
  },
});
