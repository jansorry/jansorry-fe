import { atom } from 'recoil';

export const userBirthState = atom<number | null>({
  key: 'userBirthState',
  default: null,
});

export const selectedYearState = atom<number>({
  key: 'selectedYearState',
  default: 2024,
});

export const userGenderState = atom({
  key: 'userGenderState',
  default: 4,
});
