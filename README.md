## 랭킹보드 페이지
- 아래 URL을 통해 받은 JSON 데이터를 이용하여 Top 100 차트 페이지와 상세 페이지를 구현 합니다.

- https://itunes.apple.com/us/rss/topalbums/limit=100/json

- 음원 이름으로 검색을 할 수 있어야 합니다.

- 음원 이름으로 정렬 (오름차순 / 내림차순) 할 수 있어야 합니다.

- Top 100 차트에서 각 음원을 클릭하면 상세 페이지로 이동 됩니다.

- 차트 페이지와 상세 페이지에 들어갈 정보는 JSON 데이터에 있는 내용을 자유롭게 활용 합니다.

- 유지보수하기 좋은 간결하고 쉬운 코드

- 크로스 브라우징

- Chrome, Firefox, Edge 또는 Safari 브라우저에서도 잘 보여야 합니다.

## 폴더구조
- 각각 세부 UI 는 UI 폴더안에 구분

- pages 폴더안에 전체 UI 집합

- router 폴더안에 index.jsx 로 전체 router 관리

- css 는 scss 한 파일로 관리