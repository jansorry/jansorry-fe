<img src="assets/images/title.png" alt="title">

## 💬 프로젝트 소개

명절 잔소리 얼마나 들어보셨나요?  
나만의 잔소리 영수증을 만들고 비용을 청구하세요!  
내가 들은 잔소리에 반응을 추가하고 다른 사람들과 실시간으로 공유해보세요.

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

|                       첫 화면                        |
|:-------------------------------------------------:|
| <img src="assets/gifs/landing.gif" width='250px'> |

### 🔑 소셜 로그인 - `류승광`

|                          소셜 로그인                          |
|:--------------------------------------------------------:|
| <img src="assets/images/social_login.png" width='250px'> |

### 🍪 JWT, 쿠키 - `서범석`

<!-- TODO: JWT 및 쿠키 자료 첨부 필요 (getToken 함수) -->

- accessToken을 프론트엔드 변수로 관리하여 보안성을 높임

- refreshToken을 http-only Cookie에 담아 백엔드 요청 시 항상 accessToken을 발급받음

### 👤 회원 가입 페이지 - `이담비`

|                      회원 가입                       |
|:------------------------------------------------:|
| <img src="assets/gifs/signup.gif" width='250px'> |

<!-- TODO: 버튼 컴포넌트 종류 별로 스크린샷 첨부 필요 -->

- button 공통 컴포넌트

### 🏠 홈페이지 - `서범석`

|                      홈 화면 (카드 없음)                       |                    홈 화면 (카드 있음)                     |
|:-------------------------------------------------------:|:---------------------------------------------------:|
| <img src="assets/images/home-nocard.png" width='250px'> | <img src="assets/gifs/home-card.gif" width='250px'> |

### 🙋‍♂️ 마이페이지 - `류승광`, `이담비`

|                       마이페이지(카드 없음)                        |                     마이페이지(카드 있음)                     |
|:---------------------------------------------------------:|:----------------------------------------------------:|
| <img src="assets/images/mypage-nocard.png" width='250px'> | <img src="assets/gifs/mypage-card.gif" width='250px'> |

- api 호출 병렬 처리

- 무한스크롤
- 
<!-- TODO: 팔로잉 팔로워 검색 기능 첨부 필요 -->

- 팔로잉 팔로워 검색 기능

### 🕊️ 피드페이지 - `서범석`

|                    피드페이지                     |                        피드 태그 버튼                         |
|:--------------------------------------------:|:-------------------------------------------------------:|
| <img src="assets/gifs/feeds.gif" width='250px'> | <img src="assets/gifs/feeds-hashtag.gif" width='250px'> |

- <!-- TODO: 무한스크롤 훅 자료 첨부 -->
- 
- observer intersection 커스텀 훅을 사용한 무한스크롤

- 버튼 조건에 따라 다른 API 호출 및 무한 스크롤

### 🗂️ 카테고리 - `서범석`

|                        카테고리                        |                       내 카드 등록                        |
|:--------------------------------------------------:|:----------------------------------------------------:|
| <img src="assets/gifs/category.gif" width='250px'> | <img src="assets/gifs/create-card.gif" width='250px'> |

- observer intersection 커스텀 훅을 사용한 스크롤 이벤트 시에 타이틀 강조 효과

- useRef를 사용한 유저 스크롤 변화 감지

<!-- TODO: 모달 커스텀 훅 자료 첨부 -->

- createPortal을 사용한 modal 커스텀 훅으로 DX 향상

- 카드id마다 동적 렌더링

### ⚙️ 관리페이지 - `김예림`, `이담비`

|                         관리페이지                         |                         닉네임 수정                         |
|:-----------------------------------------------------:|:------------------------------------------------------:|
| <img src="assets/images/management.png" width='250px'> | <img src="assets/gifs/edit-nickname.gif" width='250px'> |

### 🃏 카드 - `이담비`

<!-- TODO: 카드 공통 컴포넌트 자료 첨부 필요 -->

- DX를 고려한 공통 컴포넌트

### 🧾 영수증 생성 - `이담비`

|                          영수증 생성                          |
|:--------------------------------------------------------:|
| <img src="assets/gifs/create-receipt.gif" width='250px'> |

- `html2canvas` 이미지 생성

- 영수증 공통 컴포넌트

### 🧾 영수증 공유 - `이담비`

|                         영수증 공유                          |
|:-------------------------------------------------------:|
| <img src="assets/gifs/share-receipt.gif" width='250px'> |

- query string 생성

- 생성한 query string으로 영수증 발급

### ⏳ 로딩, 에러페이지 - `김예림`

|                      로딩 페이지                       |                      에러 페이지                       |
|:-------------------------------------------------:|:-------------------------------------------------:|
| <img src="assets/gifs/loading.gif" width='250px'> | <img src="assets/images/error.png" width='250px'> |

### 🎈 오픈그래프 - `이담비`

<!-- TODO: 오픈 그래프 자료 첨부 필요 -->

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
