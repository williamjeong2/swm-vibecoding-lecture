# SWM Lecture - 바이브코딩 기초반 교안

소프트웨어 마에스트로 바이브코딩 기초반 슬라이드 프레젠테이션 프로젝트.
[Remotion](https://www.remotion.dev/)과 React로 제작되었습니다.

## 사전 준비

- [Bun](https://bun.sh/) 설치
- 의존성 설치:

```bash
bun install
```

## 슬라이드쇼 보기 (웹 뷰어)

Vite 개발 서버를 실행합니다:

```bash
bun run web
```

터미널에 표시되는 URL(기본 `http://localhost:5173`)로 접속한 뒤, `/web/index.html` 경로에서 슬라이드쇼를 볼 수 있습니다.

### 키보드 단축키

| 키 | 동작 |
|---|---|
| `←` `→` / `Space` | 이전/다음 슬라이드 |
| `Home` / `End` | 처음/끝으로 이동 |
| `F` | 풀스크린 토글 |

## 기타 스크립트

| 명령어 | 설명 |
|---|---|
| `bun run dev` | Remotion Studio 실행 (슬라이드 편집/미리보기) |
| `bun run build` | 전체 강의를 MP4 영상으로 렌더링 |
| `bun run build:section` | 특정 섹션만 렌더링 |
| `bun run web:build` | 웹 뷰어 정적 빌드 |
