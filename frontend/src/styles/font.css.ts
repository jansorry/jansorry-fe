import { globalFontFace, style } from '@vanilla-extract/css';

const pretendard = 'GlobalPretendard';

globalFontFace(pretendard, {
  src: '/fonts/woff2/PretendardVariable.woff2',
});

export const font = style({
  fontFamily: 'pretendard',
});
