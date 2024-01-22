import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

export const navWrapper = style([
  flex({ align: 'center', justify: 'spaceAround' }),
  defaultWrapper({ border: 'top' }),
  {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    margin: 'auto', // 하단바 가운데 정렬
    overflow: 'hidden', // 영역 밖으로 나가면 숨김
  },
]);
