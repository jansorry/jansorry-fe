# 🚀 App
여기는 Jansorry Team의 app directory 입니다.

---

### 🗒️ Description

Next 13을 이용한 App routing을 지원하는 디렉토리

### 🔎 How to use

app 디렉토리 하위의 디렉토리 이름으로 주소창에서 접근한다.

e.g. `src/app/example/page.tsx`의 경우: `localhost:3000/example`

### 🌱 How to contribute

- 라우팅 처리를 하고싶은 이름으로 소문자로만 디렉토리를 생성한다.
- 해당 디렉토리의 하위에 `page.tsx`를 생성하여 작업한다.


### 💡 Example
```tsx
// src/app/example/page.tsx
import Example from '@/containers/example';
import { getDataApi } from '@/services/example';
import { getMetadata } from '@/app/sharedMetadata';

export const metadata = getMetadata({ ... });

const ExamplePage = async () => {
  const data = await getDataApi()
    .then((res) => res.data)
    .catch(() => []);
  
  return <Example data={data}/> 
};

export default ExamplePage;
```
