import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const navWrapper = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '48px',
  maxWidth: '480px', // 모바일 페이지 최대 길이
  margin: 'auto', // 하단바 가운데 정렬
  overflow: 'hidden', // 영역 밖으로 나가면 숨김
  display: 'flex', // 아이콘 수직 정렬
  alignItems: 'center',
  justifyContent: 'space-around', // 하단바 아이콘 분산
  borderTop: `1px solid #f1f1f1`,
});
