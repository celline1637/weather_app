# 날씨앱

#### _FE junior sunkyung_

## Installation

- `package.json`이 위치한 폴더에서 `npm install && npm start` 명령을 하면 http://localhost:3000/ 에 리액트 페이지가 실행됩니다.
- `npx json-server db.json --port 4000` 을 실행하면 http://localhost:4000/ 에서 json sever가 실행됩니다.
- citylist.json의 내용은 db.json에 있습니다.

## File Structure

전체 파일 구조는 다음과 같습니다.

공용컴포넌트 및 페이지 관련 컴포넌트를 분리하고,
theme, type 관련 값들을 각각 나누어 관리하였습니다.

```
├── public
├── src/
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── theme
│   └── types
├── App.tsx
└── Routes.tsx
```

## Stack

- React
- React Router DOM v6
- typescripts : 정적 언어인 typescripts를 사용하여, js의 언어적 단점을 보완하였습니다.
- styled-components
- react-query : react-query를 사용하여 server state의 비동기를 처리하였습니다.
- axios

## Feature

### /city/list

('http://localhost:3000/'에서 'http://localhost:3000/city/list'로 리다이렉트됩니다.)

- inifinite scroll 기능으로 구현되어있습니다.
- 이전에 받아왔던 데이터들이 캐시처리하여 성능 최적화와 ux를 고려하였습니다.
- 포스트 정보를 불러오는 동안 로딩 텍스트가 나타납니다.
- 상단에 위치한 검색바를 통해 영문으로 도시이름을 검색할 수 있습니다.
- 도시이름을 검색하면, 해당 도시의 상세페이지로 이동합니다.

### /city/post

- 해당 페이지 정보를 불러오는 동안 로더가 나타납니다.
- 뒤로가기 버튼 클릭 시 이전 스크롤 위치로 이동합니다.
