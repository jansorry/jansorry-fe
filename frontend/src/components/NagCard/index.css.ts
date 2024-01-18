// styles.css.ts
import { style } from '@vanilla-extract/css';

export const divStyle = style({
  position: 'relative',
  width: '300px', // 기본 너비
  height: '400px', // 기본 높이
  // 여기에 추가적인 스타일을 정의할 수 있습니다.
});

export const textStyle = style({
  zIndex: 1,
  position: 'absolute',
  top: '50%', // 상위 요소 기준으로 상단에서 50% 위치
  left: '50%', // 상위 요소 기준으로 왼쪽에서 50% 위치
  transform: 'translate(-50%, -50%)',
  color: 'black', // 텍스트 색상


  fontSize: '16px'

});

