# 🇹 Types
여기는 Jansorry Team의 types directory 입니다.

---

### 🗒️ Description

Typescript의 Type 정의를 모아둔 디렉토리

### 🔎 How to use

```tsx
import { User } from '@/types/user';
...

const currentUser: User = {
  ...
}
```

### 🌱 How to contribute

- 만들고자 하는 타입 정의 파일의 이름으로 현재 디렉토리의 하위에 디렉토리를 생성한다.
    - 디렉토리의 이름은 모두 소문자로 `.d.ts` 확장자로 작성한다. `user.d.ts`

### 💡 Example

```tsx
// src/types/user.d.ts

export interface User {
  nickname: string | null;
  accessToken?: string;
  refreshToken?: string;
  socialAccessToken?: string | null;
  isMember: boolean;
}
```
