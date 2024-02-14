<img src="assets/images/title.png" alt="title">

## 💬 프로젝트 소개

<!-- TODO: figma title - 타이틀 멘트 참고, 변경 필요 -->

명절 잔소리 얼마나 들어보셨나요?  
잔소리 영수증을 만들고 비용을 청구하세요.  
어느 집의 잔소리가 가장 많은지 실시간으로 공유해보세요.

---

## 📚 목차

- [🎯 기획 배경](#plans)
- [🙇 팀원 소개](#members)
- [🔨 기술 스택](#skills)
- [🚀 실행 방법 및 배포 주소](#installation)
- [💡 주요 기능 및 역할](#features)

---

<a name="plans"></a>

## 🎯 기획 배경

<!-- TODO: notion - 기획서 - 기획 배경 참고, 변경 필요 -->

매년 명절마다 어른들의 잔소리로 인해 스트레스를 받는 사람들이 많습니다.  
이로 인해 가족 구성원 사이에 갈등이 생기며, 이러한 문제를 해결하기 위해 가족 간의 세대 갈등을 개선하는 플랫폼을 기획하게 되었습니다.  
잔소리를 공유하고 스트레스를 해소할 수 있는 공간을 제공하고, 영수증과 같은 유쾌한 방법으로 갈등을 회피하고 즐겁게 소통할 수 있는 방향으로 기획했습니다.

---

<a name="members"></a>

## 🙇 팀원 소개

|           [서범석](https://github.com/beomxtone)           |          [이담비](https://github.com/damdam6)          |          [류승광](https://github.com/sgryu23)           |          [김예림](https://github.com/ozllzlme)           |
| :--------------------------------------------------------: | :----------------------------------------------------: | :-----------------------------------------------------: | :------------------------------------------------------: |
| <img src="https://github.com/beomxtone.png" width="120" /> | <img src="https://github.com/damdam6.png" width="120"> | <img src="https://github.com/sgryu23.png" width="120" > | <img src="https://github.com/ozllzlme.png" width="120" > |

---

<a name="skills"></a>

## 🔨 기술 스택

- Language: Typescript
- Core: Next 13.5.6
- Styling: Vanilla Extract
- State: Recoil

---

<a name="installation"></a>

## 🚀 실행 방법 및 배포 주소

```
// 패키지 라이브러리 설치
pnpm install

// 개발 환경 실행
pnpm dev

// 빌드 파일 생성
pnpm build
```

- 📱 front-domain : https://jansorry.com
- 🛠 back-server : https://jansorry.store
- 🔗 back-swagger : https://jansorry.store/swagger-ui/index.html

---

<a name="features"></a>

## 💡 주요 기능 및 역할

### 🖥️ 랜딩 페이지 - `서범석`

|                첫 화면                |                카드 소개                |                 영수증 소개                 |                피드 소개                |
|:----------------------------------:|:-----------------------------------:|:--------------------------------------:|:-----------------------------------:|
| ![첫 화면](assets/gifs/landing-title) | ![카드 소개](assets/gifs/landing-cards) | ![영수증 소개](assets/gifs/landing-receipt) | ![피드 소개](assets/gifs/landing-feeds) |

### 🔑 소셜 로그인 - `류승광`

- 스크린샷 첨부

### 🍪 JWT, 쿠키 - `서범석`

- accessToken을 프론트엔드 변수로 관리하여 보안성을 높임

- refreshToken을 http-only Cookie에 담아 백엔드 요청 시 항상 accessToken을 발급받음

### 👤 회원 가입 페이지 - `이담비`

- year picker

- button 공통 컴포넌트

### 🏠 홈페이지 - `서범석`

- 카드 애니메이션

### 🙋‍♂️ 마이페이지 - `류승광`, `이담비`

- api 호출 병렬 처리

- 무한스크롤

- 팔로잉 팔로워 검색 기능

### 🕊️ 피드페이지 - `서범석`

- observer intersection 커스텀 훅을 사용한 무한스크롤

- 버튼 조건에 따라 다른 API 호출 및 무한 스크롤

### 🗂️ 카테고리 - `서범석`

- observer intersection 커스텀 훅을 사용한 스크롤 이벤트 시에 타이틀 강조 효과

- useRef를 사용한 유저 스크롤 변화 감지

- createPortal을 사용한 modal 커스텀 훅으로 DX 향상

- 카드id마다 동적 렌더링

### ⚙️ 관리페이지 - `김예림`, `이담비`

- 닉네임 수정

### 🃏 카드 - `이담비`

- DX를 고려한 공통 컴포넌트

### 🧾 영수증 생성 - `이담비`

- `html2canvas` 이미지 생성

- 영수증 공통 컴포넌트

### 🧾 영수증 공유 - `이담비`

- query string 생성

- 생성한 query string으로 영수증 발급

### ⏳ 로딩, 에러페이지 - `김예림`

### 🎈 오픈그래프 - `이담비`

- 동적 오픈그래프 생성

### 📂 폴더 구조 및 아키텍처 설계 - `서범석`

```
.
├── node_modules
├── public
└── src
    ├── app
    ├── components
    ├── constants
    ├── containers
    ├── hooks
    ├── services
    ├── states
    ├── styles
    ├── types
    └── utils
```
