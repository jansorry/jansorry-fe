// styles.css.ts
import { style } from '@vanilla-extract/css';

export const xSmallSize = style({
  position: 'relative',
  width: '96px',
  height: '128px',
});

export const smallSize = style({
  position: 'relative',
  width: '138px',
  height: '184px',
});

export const mediumSize = style({
  position: 'relative',
  width: '198px',
  height: '264px',
});

export const largeSize = style({
  position: 'relative',
  width: '300px',
  height: '400px',
});

export const commentTextStyle = style({
  zIndex: 1,
  position: 'absolute',
  top: '50%', // 상위 요소 기준으로 상단에서 50% 위치
  left: '50%', // 상위 요소 기준으로 왼쪽에서 50% 위치
  transform: 'translate(-50%, -50%)',
  color: 'black', // 텍스트 색상
  fontSize: '16px'
});

export const categoryTextStyle = style({
  zIndex: 1,
  position: 'absolute',
  top: '70%', // 상위 요소 기준으로 하단 30% 위치
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'black',
  fontSize: '16px'
});

export const nagTextStyle = style({
  zIndex: 1,
  position: 'absolute',
  top: '70%', // 상위 요소 기준으로 하단 30% 위치
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'black',
  fontSize: '16px'
});
