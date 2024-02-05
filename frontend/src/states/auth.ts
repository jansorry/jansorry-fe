import { atom } from 'recoil';

export const oauthIdState = atom({
  key: 'oauthId',
  default: '',
});

export const kakaoNicknameState = atom({
  key: 'kakaoNickname',
  default: '',
});
