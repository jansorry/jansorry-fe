import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

export const cardSizes = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    size: {
      xSmall: { width: 96, height: 128 },
      small: {
        width: `calc((480px - 2 * ${vars.space['1x']}) / 3)`,
        height: `calc(((480px - 2 * ${vars.space['1x']}) / 3) * (184 / 138))`,
        '@media': {
          'screen and (max-width: 480px)': {
            width: `calc((100vw - 2 * ${vars.space['1x']}) / 3)`, // 화면 너비에 맞춰 조절, 여백 고려
            height: `calc(((100vw - 2 * ${vars.space['1x']}) / 3) * (184 / 138))`, // 원래 비율 유지
          },
        },
      },
      medium: { width: 198, height: 264 },
      large: { width: 300, height: 400 },
    },
    shadow: {
      true: {
        borderRadius: vars.borderRadius['4x'],
        backgroundColor: 'transparent',
        //  그림자 설정 바꾸기
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
});

export const cardText = recipe({
  base: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: vars.zIndex['z-1'],
    color: vars.colors.black,
    left: '50%',

    fontSize: vars.fontSize['3x'],
  },
  variants: {
    position: {
      center: {
        top: '50%',
      },
      bottom: {
        top: '70%',
      },
    },
    fontSize: {
      xSmall: {
        fontSize: vars.fontSize['1x'],
      },
      small: {
        fontSize: vars.fontSize['2x'],
      },
      medium: {
        fontSize: vars.fontSize['2x'],
      },
      large: {
        fontSize: vars.fontSize['3x'],
      },
    },
    color: {
      empty: { color: vars.colors.black },
      blue: { color: vars.colors.blue },
      red: { color: vars.colors.red },
      yellow: { color: vars.colors.yellow },
      green: { color: vars.colors.green },
      emerald: { color: vars.colors.emerald },
      purple: { color: vars.colors.purple },
    },
  },
});
