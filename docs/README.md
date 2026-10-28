# 김지우 / Backend Developer

노션 포트폴리오와 사용자 제공 자료를 바탕으로 핵심을 추린 정적 포트폴리오입니다. 프로필과 학력 → 소개 → 기술 스택 → 교육과 활동 → 수상 내역 → 인턴 경험 → 프로젝트 순서로 구성했습니다. 흰색과 차가운 회색에 옅은 파란색을 사용하고, 프로젝트 설명은 카드 안에 최대 5개 항목으로 표시합니다. 프로젝트 이름과 담당 역할은 설명 카드 바깥 위쪽에 배치했습니다. DoLog, KB HomeDeal, 부스끼리, FedHybrid, Voisk의 상세 기록은 노션으로 이동하지 않고 서비스 소개와 구현 과정을 담은 팝업으로 열립니다. Voisk는 텍스트로 구성하고, 다른 프로젝트에는 서비스 이미지를 함께 표시합니다. 팝업 안에서 스크롤하며 읽을 수 있습니다. 모바일 화면, 키보드 탐색, 라이트 및 다크 모드, 인쇄용 레이아웃을 지원합니다. 별도 빌드나 패키지 설치가 필요하지 않습니다.

## GitHub Pages 배포

1. 기존 저장소 `ryann1203/ryann1203.github.io`의 `master`에는 이전 React 템플릿이 있습니다. 현재 포트폴리오는 **`jiwoo-portfolio` 브랜치의 `/docs`**에 있습니다.
2. 이 폴더의 `index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`과 `assets` 폴더를 해당 브랜치의 `/docs`에 둡니다. 기존 템플릿 파일을 삭제할 필요가 없습니다.
3. 저장소 **Settings → Pages → Build and deployment**에서 **Deploy from a branch**, 브랜치 **jiwoo-portfolio**, 폴더 **/docs**를 선택하고 저장합니다.
4. GitHub의 배포 완료 표시와 Visit site 링크를 확인합니다. 배포 후 예상 주소는 `https://ryann1203.github.io/`입니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

이 문서의 설정 안내만으로 배포가 완료된 것은 아닙니다. 실제 배포 상태는 GitHub Pages와 사이트 응답을 확인해야 합니다. 새 저장소에서 사용할 경우에는 파일을 저장소 최상위에 놓고 해당 브랜치와 `/(root)`를 선택해도 됩니다.

## 미리보기

이 폴더에서 `python3 -m http.server 4173 --bind 127.0.0.1`을 실행한 뒤 `http://127.0.0.1:4173`을 엽니다. 직접 `index.html`을 열어도 핵심 기능이 동작합니다.

## 수정

- 소개·프로젝트·연락처: `index.html`
- 색·글자·배치·모바일·인쇄 스타일: `styles.css`
- 현재 목차 강조·인쇄·테마 전환: `script.js`
- 프로필 사진: `assets/profile.jpg` (기존 노션 프로필 사진, 원본 비율을 유지해 표시)
- 프로젝트 이미지: `assets/projects/` (노션 원본 이미지와 HomeDeal 최종 발표자료의 지도 화면, 비율을 유지하고 필요한 시점에 로드)
- 상단 인쇄 아이콘 또는 브라우저의 인쇄 기능으로 저장합니다. 프로젝트 설명은 기본으로 모두 표시됩니다.
- 상세 기록은 `index.html`의 `<dialog>`에서 수정합니다. 팝업은 닫기 버튼, Escape 키, 바깥 영역 클릭으로 닫히며, 닫은 뒤 원래 버튼으로 키보드 초점이 돌아갑니다. 팝업을 열어도 주소와 배경의 스크롤 위치는 유지됩니다. 최신 브라우저와 JavaScript가 필요하며 인쇄 시 팝업은 제외됩니다.
- 서체는 Pretendard 1.3.9의 고정 버전 CDN을 사용합니다. 연결이 안 되면 시스템 서체로 표시됩니다.

노션과 실시간 자동 동기화되지는 않습니다. 노션에서 내용을 고친 경우 이 파일에도 반영해야 합니다.

콘텐츠 근거와 편집 판단은 `CONTENT_NOTES.md`에 정리했습니다. 기존 DoLog 백엔드나 `sites/jiwoo-portfolio` 파일은 수정하지 않았습니다.
