# 📦 Containers
여기는 Jansorry Team의 containers directory 입니다.

---

### 🗒️ Description

`app` 디렉토리의 `page.tsx`, 즉 한 페이지에 종속된 코드를 모아둔 디렉토리

### 🔎 How to use

```tsx
// src/app/example/page.tsx
export { default } from '@/containers/example';
```

### 🌱 How to contribute

- 만들고자 하는 컨테이너의 이름으로 현재 디렉토리의 하위에 디렉토리를 생성한다.
    - 디렉토리의 이름은 모두 소문자로 작성한다.
- 생성한 디렉토리에 `page.tsx`와 `index.css.ts`로 컨테이너를 개발한다.
    - 추가적으로 컴포넌트를 분리해야 할 경우, 같은 디렉토리에 `PascalCase`의 `tsx` 파일로 분리한다.
