'use client';

import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

const relativeStyle = style({ position: 'relative' });

// 카드 크기에 대한 타입 정의
// 전체에서 px을 저장해서 사용할 경우 삭제해야됨.
interface CardSize {
  width: number;
  height: number;
}
export const cardSizes: Record<string, CardSize> = {
  xSmall: { width: 96, height: 128 },
  small: { width: 138, height: 184 },
  medium: { width: 198, height: 264 },
  large: { width: 300, height: 400 },
};
// 여기까지 삭제 -> 하단부 cardSizes.크기 교체 필요

export const sizeStyles = {
  xSmall: style([relativeStyle, cardSizes.xSmall]),
  small: style([relativeStyle, cardSizes.small]),
  medium: style([relativeStyle, cardSizes.medium]),
  large: style([relativeStyle, cardSizes.large]),
};
// export const sizeStyles = {
//   xSmall: style([relativeStyle, { width: '96px', height: '128px' }]),
//   small: style([relativeStyle, { width: '138px', height: '184px' }]),
//   medium: style([relativeStyle, { width: '198px', height: '264px' }]),
//   large: style([relativeStyle, { width: '300px', height: '400px' }]),
// };

// 공통 스타일
// top, left, font 등 수정 필요 (중앙정렬할건지.. margin으로 넣을건지 확인 필요)
const cardTextCenterStyle = style({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  fontSize: vars.fontSize['1x'],

  top: '50%',
  left: '50%',
});

const nagCommonStyle = style([
  cardTextCenterStyle,
  {
    top: '70%',
    left: '50%',
    fontSize: vars.fontSize['1x'],
  },
]);

export const textStyles = {
  comment: style([cardTextCenterStyle]),

  category: style([
    cardTextCenterStyle,
    {
      top: '70%',
    },
  ]),

  nag: {
    empty: style([nagCommonStyle, { color: vars.colors.black }]),
    blue: style([nagCommonStyle, { color: vars.colors.blue }]),
    red: style([nagCommonStyle, { color: vars.colors.red }]),
    yellow: style([nagCommonStyle, { color: vars.colors.yellow }]),
    green: style([nagCommonStyle, { color: vars.colors.green }]),
    emerald: style([nagCommonStyle, { color: vars.colors.emerald }]),
    purple: style([nagCommonStyle, { color: vars.colors.purple }]),
  },
};
