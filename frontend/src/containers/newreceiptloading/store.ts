import { atom } from 'recoil';

export const animationFinishedState = atom<boolean>({
  key: 'animationFinishedState',
  default: false,
});
