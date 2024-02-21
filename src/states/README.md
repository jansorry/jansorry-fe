# 🗄️ States
여기는 Jansorry Team의 states directory 입니다.

---

### 🗒️ Description

여러 페이지에서 전역으로 상태를 관리하는 `state`들을 모아둔 디렉토리

### 🔎 How to use

❗ 전역 상태관리는 적을수록 좋다.

`Recoil`을 사용하여 `atom` 객체를 `export`한다.

### 🌱 How to contribute

- 만들고자 하는 전역 파일의 이름으로 현재 디렉토리의 하위에 디렉토리를 생성한다.
    - 디렉토리의 이름은 모두 소문자로 작성한다. `user.ts`

### 💡 Example

```tsx
// src/states/user.ts
import { atom } from 'recoil';

export interface User {
  username: string,
  birth: number,
  accessToken?: string,
  refreshToken?: string,
}

export const userState = atom<User | undefined>(undefined);
```
