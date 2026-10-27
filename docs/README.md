# 김지우 · Backend Developer

노션 포트폴리오를 바탕으로 핵심을 추린 정적 포트폴리오입니다. 흰색·차가운 회색·남색, 프로젝트 중심 구성, 모바일 화면, 키보드 탐색, 인쇄용 레이아웃을 지원합니다. 별도 빌드나 패키지 설치가 필요하지 않습니다.

## GitHub Pages 배포

1. 기존 저장소 `ryann1203/ryann1203.github.io`의 `master`에는 이전 React 템플릿이 있습니다. 새 포트폴리오는 **`codex/jiwoo-portfolio` 브랜치의 `/docs`**에 준비합니다.
2. 이 폴더의 `index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`을 해당 브랜치의 `/docs`에 둡니다. 기존 템플릿 파일을 삭제할 필요가 없습니다.
3. 저장소 **Settings → Pages → Build and deployment**에서 **Deploy from a branch**, 브랜치 **codex/jiwoo-portfolio**, 폴더 **/docs**를 선택하고 저장합니다.
4. GitHub의 배포 완료 표시와 Visit site 링크를 확인합니다. 배포 후 예상 주소는 `https://ryann1203.github.io/`입니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

이 문서의 설정 안내만으로 배포가 완료된 것은 아닙니다. 실제 배포 상태는 GitHub Pages와 사이트 응답을 확인해야 합니다. 새 저장소에서 사용할 경우에는 파일을 저장소 최상위에 놓고 해당 브랜치와 `/(root)`를 선택해도 됩니다.

## 미리보기

이 폴더에서 `python3 -m http.server 4173 --bind 127.0.0.1`을 실행한 뒤 `http://127.0.0.1:4173`을 엽니다. 직접 `index.html`을 열어도 핵심 기능이 동작합니다.

## 수정

- 소개·프로젝트·연락처: `index.html`
- 색·글자·배치·모바일·인쇄 스타일: `styles.css`
- 현재 목차 강조·인쇄: `script.js`
- 웹 브라우저의 인쇄 기능 또는 왼쪽의 ‘PDF로 저장’을 사용하면 프로젝트 상세도 함께 출력됩니다.

노션과 실시간 자동 동기화되지는 않습니다. 노션에서 내용을 고친 경우 이 파일에도 반영해야 합니다.

콘텐츠 근거와 편집 판단은 `CONTENT_NOTES.md`에 정리했습니다. 기존 DoLog 백엔드나 `sites/jiwoo-portfolio` 파일은 수정하지 않았습니다.
