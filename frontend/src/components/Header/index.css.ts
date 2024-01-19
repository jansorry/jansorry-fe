import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const headerWrapper = style({
  position: 'fixed',
  height: '80px',
  width: '100svw',
  maxWidth: '480px',
  backgroundColor: vars.colors.white,
  borderBottom: `1px solid ${vars.colors.lightgray50}`,
  display: 'flex',
  alignItems: 'center',
});

export const title = style({
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 auto',
});

export const perviousButton = style({
  position: 'fixed',
  marginLeft: '24px',
  marginTop: '2px',

  // 버튼 기본 스타일 해제
  border: 'none',
  outline: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
});
