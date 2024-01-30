# 🧩 Components  
여기는 Jansorry Team의 components directory 입니다.

---

### 🗒️ Description

여러 페이지에 공통으로 사용할 수 있는 **공통 컴포넌트**들을 모아둔 디렉토리

### 🔎 How to use

```tsx
import Component from "@/components/Component";

...
<Component />
```

### 🌱 How to contribute

- 만들고자 하는 컴포넌트의 이름으로 현재 디렉토리의 하위에 디렉토리를 생성한다.
  - 디렉토리의 이름은 `PascalCase`를 따른다.
- 생성한 디렉토리에 `page.tsx`와 `index.css.ts`로 컴포넌트를 개발한다.
  - 추가적으로 컴포넌트를 분리해야 할 경우, 같은 디렉토리에 `PascalCase`의 `tsx` 파일로 분리한다.
