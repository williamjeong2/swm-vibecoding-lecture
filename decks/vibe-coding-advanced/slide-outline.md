# 바이브코딩 고급반: 에이전트 하네스와 운영 실전 가이드

## Meta
- **Topic**: Superpowers, oh-my-claudecode, Everything Claude Code, OpenSpec를 중심으로 한 바이브코딩 고급반 강의 슬라이드쇼
- **Source Files**:
  - `.omc/research/advanced-00-index.md`
  - `.omc/research/advanced-01-agent-harness.md`
  - `.omc/research/advanced-02-latest-features.md`
  - `.omc/research/advanced-03-security.md`
  - `.omc/research/advanced-04-flowkater-insights.md`
  - `.omc/research/advanced-05-additional.md`
- **Additional Web References**:
  - Anthropic Claude plugin page for Superpowers
  - `obra/superpowers` GitHub repository
  - OpenSpec official site and docs
  - oh-my-claudecode official site and docs
  - Everything Claude Code repository summaries
- **Target Audience**: 소프트웨어 마에스트로 연수생, Claude Code/Codex를 이미 써본 개발자
- **Tone/Mood**: 실전적, 차분함, 깊이 있는 고급 워크숍 느낌
- **Style**: `isometric-3d-flat`
- **Slide Count**: 54 slides
- **Aspect Ratio**: 16:9
- **Narrative Arc**: 문제의식 → 네 가지 도구 지도 → ECC 하네스 → 자율 진화/eval 루프 → OMC 실행 모드 → 비동기/CI 파이프라인 → MCP vs CLI/복잡도 관리 → Superpowers 개발 루프 → OpenSpec 사양 운영 → 디자인 품질 → 질문력과 실행 전략 → AI Native Engineer 기준

## Slide Composition

### Slide 1 - Cover
- **Type**: Cover
- **Title**: 바이브코딩 고급반
- **Subtitle**: 에이전트를 잘 쓰는 사람에서, 운영하는 사람으로
- **Visual Direction**: 아이소메트릭 작업대 위에 ECC, OMC, Superpowers, OpenSpec 노드가 연결되고, 옆에는 디자인 레퍼런스 보드와 실행 로그가 놓인 장면

### Slide 2 - 이 강의가 다루는 문제
- **Type**: Framing
- **Key Message**: 고급반의 목표는 "AI에게 잘 말하기"가 아니라 "AI가 계속 잘 일하게 만드는 운영 구조"를 배우는 것이다.
- **Details**:
  - 초급: AI에게 일을 시켜본다
  - 중급: 산출물을 고친다
  - 고급: 역할, 권한, 계획, 검증, 사양, 레퍼런스를 설계한다
  - 좋은 결과는 프롬프트 하나가 아니라 반복 가능한 작업 환경에서 나온다

### Slide 3 - 오늘의 전체 지도
- **Type**: System Map
- **Key Message**: 네 가지 도구를 서로 경쟁 관계가 아니라 역할이 다른 운영 레이어로 이해한다.
- **Details**:
  - Everything Claude Code: 에이전트 하네스 구성요소의 라이브러리
  - oh-my-claudecode: 실행 모드와 다중 에이전트 오케스트레이션
  - Superpowers: 브레인스토밍, TDD, 디버깅, 리뷰 중심의 개발 방법론
  - OpenSpec: 사양을 코드 옆에 남기는 spec-driven workflow
  - 디자인 레퍼런스/스킬: AI 티를 줄이는 품질 기준 공급 장치

### Slide 4 - 도구 숙련과 운영 능력은 다르다
- **Type**: Concept
- **Key Message**: AI 도구를 잘 쓰는 것과 AI Native Engineer가 되는 것은 같은 일이 아니다.
- **Details**:
  - 도구 숙련도는 시작점이다
  - 엔지니어링 역량은 문제 정의, 구조화, 검증, 운영에서 드러난다
  - "원리 없는 감각은 추측에 머물고, 감각 없는 원리는 학문에 머문다"
  - 고급반은 원리 위에서 감각을 쓰는 법을 다룬다

### Slide 5 - 네 도구의 역할을 한 장으로 보기
- **Type**: Comparison
- **Key Message**: 어떤 도구가 더 좋은지가 아니라, 어느 단계에서 무엇을 맡길지가 중요하다.
- **Details**:
  - ECC: 에이전트, 스킬, 훅, 규칙, MCP 설정을 제공한다
  - OMC: 큰 작업을 모드와 에이전트 팀으로 실행한다
  - Superpowers: 아이디어를 설계와 TDD 실행으로 바꾼다
  - OpenSpec: 요구사항과 변경 이력을 사양으로 남긴다
  - 함께 쓰면 "설계 → 실행 → 검증 → 기억"의 루프가 생긴다

### Slide 6 - Everything Claude Code 개요
- **Type**: Overview
- **Key Message**: ECC는 Claude Code 설정 모음이 아니라 에이전트 운영을 위한 구성요소 묶음이다.
- **Details**:
  - agents: 전문 서브에이전트
  - skills: 재사용 가능한 워크플로우
  - commands: 슬래시 명령 진입점
  - hooks: 도구 사용 전후에 끼어드는 자동화
  - rules: 공통 규칙과 언어/생태계별 코딩 규칙
  - mcp-configs: 외부 도구 연결 설정

### Slide 7 - ECC를 처음 도입할 때
- **Type**: Best Practice
- **Key Message**: ECC는 전체를 한 번에 켜기보다, 필요한 구성요소부터 작게 도입하는 편이 좋다.
- **Details**:
  - 처음에는 code-reviewer, TDD, frontend-patterns 같은 자주 쓰는 것부터 시작
  - 프로젝트 규칙은 rules로, 반복 작업은 skills로 분리
  - 권한이 필요한 작업은 agent tools로 경계를 잡음
  - MCP는 많이 붙일수록 컨텍스트 비용이 커질 수 있으니 선별
  - 목표: 멋진 설정이 아니라 반복 실수 감소

### Slide 8 - ECC Agents: 역할은 이름이 아니라 권한이다
- **Type**: Deep Dive
- **Key Message**: "검색하지 마"라고 말하는 것보다, 검색 도구가 없는 에이전트를 쓰는 편이 더 강하다.
- **Details**:
  - researcher: 검색과 자료 수집
  - creator: 주어진 자료 기반 초안 작성
  - editor: 구조와 문체 수정
  - code-reviewer: 계획과 구현의 불일치 검토
  - security-reviewer: 보안 관점 검토
  - tools 필드가 역할의 실제 경계를 만든다

### Slide 9 - ECC Skills와 Rules
- **Type**: Component Guide
- **Key Message**: Skills는 상황별 절차이고, Rules는 항상 지켜야 하는 기준이다.
- **Details**:
  - Skills: TDD, 보안 리뷰, API 설계, 프론트엔드 패턴처럼 실행 흐름이 있는 지식
  - Rules: 코딩 스타일, 테스트 기준, 보안 금지사항처럼 상시 적용되는 지침
  - Skills는 필요할 때 불러오고, Rules는 기본 배경으로 깔아둔다
  - 좋은 분리 기준: "언제 쓰나"가 있으면 skill, "항상 지켜라"면 rule

### Slide 10 - ECC Hooks와 Continuous Learning
- **Type**: Learning Loop
- **Key Message**: 좋은 하네스는 한 번의 세션에서 끝나지 않고, 반복 패턴을 다음 작업의 자산으로 만든다.
- **Details**:
  - Hooks: 도구 사용 전후에 검사, 로깅, 경고, 자동 저장 실행
  - Continuous Learning: 도구 사용 패턴을 Instinct로 저장
  - `/evolve`: 반복 패턴을 스킬이나 커맨드로 발전
  - 프로젝트별 스코프로 다른 프로젝트의 규칙이 섞이지 않게 함
  - 운영 목표: 매번 같은 설명을 반복하지 않게 만들기

### Slide 11 - Eval을 판사로 두는 자율 개선 루프
- **Type**: Evaluation Loop
- **Key Message**: 에이전트가 스스로 실험하게 하려면 "좋아 보인다"가 아니라 통과/실패를 판정하는 eval이 필요하다.
- **Details**:
  - 사람이 north star와 평가 기준을 먼저 정의한다
  - 에이전트는 작은 변경 단위로 가설을 만들고 구현한다
  - 별도 evaluator가 테스트, 정적 분석, 시나리오 점수, 회귀 여부를 판정한다
  - 기준을 통과하면 commit, 실패하면 revert 또는 새 가설로 재시도
  - 핵심: 자율성은 "마음대로 수정"이 아니라 "정해진 판정 기준 안에서 실험"이다

### Slide 12 - Commit/Revert를 자동 결정하게 만들 때의 조건
- **Type**: Best Practice
- **Key Message**: 자동 commit/revert는 위험한 기능이 아니라, 충분히 좁은 실험 단위와 명확한 판정 기준이 있을 때 강력한 운영 패턴이 된다.
- **Details**:
  - 변경 단위는 작고 되돌릴 수 있어야 한다
  - 테스트와 lint만이 아니라 제품 기준 eval을 포함한다
  - 실패 시 revert 기준을 명확히 적는다
  - 로그에는 가설, 변경 내용, 판정 결과, 다음 시도를 남긴다
  - 사람은 모든 diff가 아니라 실패 원인과 경계 조건을 검토한다

### Slide 13 - Autoresearch / Council 패턴
- **Type**: Multi-Agent Pattern
- **Key Message**: 중요한 결정은 한 모델의 답이 아니라, 목표와 eval을 먼저 세운 뒤 합의와 검증으로 좁혀간다.
- **Details**:
  - north star를 추상에서 구체까지 명확하게 잡음
  - Claude + Codex 같은 서로 다른 모델/에이전트가 대안을 제시
  - 별도 judge/evaluator가 기준표로 대안을 채점
  - 리서치, 유저 여정, 랜딩 카피, AI 정확도 eval set, 프롬프트 튜닝에 적용 가능
  - 마지막은 사람이 로그를 보고 sign-off하거나 개선 요구를 남긴다

### Slide 14 - OMC 개요
- **Type**: Overview
- **Key Message**: OMC는 Claude Code 위에 실행 모드와 다중 에이전트 오케스트레이션을 얹는 레이어다.
- **Details**:
  - 자연어 요청을 모드로 라우팅
  - 전문 에이전트에게 역할을 나눠 위임
  - 병렬 실행과 지속 검증 루프를 제공
  - 비용과 속도를 고려해 모델을 라우팅
  - 핵심 질문: 이 작업은 혼자 밀어붙일 일인가, 계획할 일인가, 병렬화할 일인가

### Slide 15 - OMC 자율 실행 계열
- **Type**: Skill Guide
- **Key Message**: 자율 실행 계열은 "무엇을 만들지 충분히 명확한 작업"을 끝까지 밀어붙일 때 쓴다.
- **Details**:
  - autopilot: 아이디어에서 동작 코드까지 탐색, 계획, 구현, 검증, 수정 루프를 자동 진행
  - ralph: 검증이 통과될 때까지 멈추지 않는 지속 루프
  - ultrawork: 독립 작업을 여러 에이전트가 동시에 처리
  - ralplan: Planner, Architect, Critic 합의로 계획을 다듬음
  - 사용 기준: "만들어줘"는 autopilot, "끝까지"는 ralph, "여러 개 동시에"는 ultrawork, "먼저 설계"는 ralplan

### Slide 16 - OMC 분석/조사 계열
- **Type**: Skill Guide
- **Key Message**: 원인이 불명확하거나 요구사항이 흐릿하면 바로 구현하지 말고 분석 계열로 들어간다.
- **Details**:
  - deep-dive: trace 이후 deep-interview로 이어지는 원인 추적 + 요구사항 명확화 흐름
  - deep-interview: 소크라테스식 질문으로 모호한 요구사항을 구체화
  - trace: 경쟁 가설을 세우고 증거로 원인을 좁혀감
  - sciomc: 여러 scientist 에이전트가 다른 관점에서 동시에 분석
  - 사용 기준: "왜 그런지 모르겠다"는 trace/deep-dive, "무엇을 원하는지 애매하다"는 deep-interview

### Slide 17 - OMC 품질 관리 계열
- **Type**: Skill Guide
- **Key Message**: 구현이 끝났다고 끝난 게 아니라, QA와 정리 루프까지 설계해야 한다.
- **Details**:
  - ultraqa: 테스트, 검증, 수정 사이클을 통과할 때까지 반복
  - ai-slop-cleaner: AI가 만든 장황한 코드, 과한 추상화, 불필요한 주석 정리
  - visual-verdict: 스크린샷과 레퍼런스를 비교해 시각적 QA 수행
  - 사용 기준: 배포 전은 ultraqa, autopilot 이후 정리는 ai-slop-cleaner, UI 일치 검증은 visual-verdict

### Slide 18 - OMC 유틸리티 계열
- **Type**: Skill Guide
- **Key Message**: 좋은 실행을 위해서는 외부 문서, 프로젝트 이해, 학습 저장도 별도 작업으로 다뤄야 한다.
- **Details**:
  - external-context: 여러 document-specialist가 외부 문서를 병렬 검색
  - deepinit: 코드베이스 전체 분석과 계층적 AGENTS.md 생성
  - learner: 현재 대화에서 재사용 가능한 스킬 추출
  - 사용 기준: 최신 문서가 필요하면 external-context, 레거시 온보딩은 deepinit, 반복 패턴은 learner

### Slide 19 - OMC 모드 선택법
- **Type**: Decision Tree
- **Key Message**: OMC를 잘 쓰려면 모드를 외우는 것보다 작업 상태를 먼저 분류해야 한다.
- **Details**:
  - 요구사항이 모호한가 → deep-interview
  - 원인이 불명확한가 → trace 또는 deep-dive
  - 계획 리스크가 큰가 → ralplan
  - 작업이 독립적으로 여러 개인가 → ultrawork
  - 검증 실패 가능성이 높은가 → ralph 또는 ultraqa
  - UI가 레퍼런스와 맞아야 하는가 → visual-verdict

### Slide 20 - 스케줄 기반 자동 실행과 이벤트 트리거
- **Type**: Automation Pattern
- **Key Message**: 에이전트 자동화는 "필요할 때 부르는 챗봇"에서 "정해진 조건에 반응하는 운영 작업자"로 확장된다.
- **Details**:
  - Scheduled Tasks: 매일/매주 보안 점검, 문서 업데이트, 리포트 생성
  - Hooks: 파일 수정 전후, 커맨드 실행 전후, 커밋 전 검증 트리거
  - GitHub 이벤트: PR 코멘트, issue label, schedule, push를 에이전트 실행 조건으로 사용
  - 설계 기준: 반복적이고 판정 기준이 명확한 작업부터 자동화
  - 실패 시 사람에게 넘길 로그와 재실행 경로를 함께 설계

### Slide 21 - 에이전트 메모리 정리와 갱신
- **Type**: Memory Workflow
- **Key Message**: 메모리는 많이 저장하는 것보다, 오래 남길 것과 버릴 것을 나누는 게 중요하다.
- **Details**:
  - Auto Memory: 세션 종료 후 중요한 컨텍스트를 저장
  - Auto Dream: 비활성 시간에 메모리를 정리·압축한다는 흐름
  - project memory: 팀 규칙, 아키텍처 결정, 반복 실수를 장기 보관
  - session memory: 현재 작업의 임시 맥락과 TODO 보관
  - 메모리 갱신 기준: 반복될 결정, 다음 세션에 필요한 제약, 실패에서 얻은 교훈만 남김

### Slide 22 - CI/CD에 에이전트를 편입시키는 패턴
- **Type**: Integration
- **Key Message**: 에이전트는 대화창 안에서만 쓰는 도구가 아니라, CLI와 CI 파이프라인에 들어갈 수 있다.
- **Details**:
  - PR 코멘트에서 에이전트 리뷰 실행
  - schedule 이벤트로 정기 리포트와 회귀 점검 실행
  - JSON/stream-json 출력으로 CI가 읽을 수 있는 결과를 받음
  - `--allowedTools`와 permission mode로 CI 안에서 가능한 작업을 제한
  - 실패 기준: 테스트 실패, spec 불일치, lint/typecheck 실패, eval 점수 하락

### Slide 23 - MCP 대신 CLI 래퍼를 선택해야 할 때
- **Type**: Tooling Decision
- **Key Message**: MCP가 항상 더 좋은 선택은 아니다. 토큰 사용량과 기능 범위 관점에서는 공식 CLI가 더 나은 경우가 많다.
- **Details**:
  - MCP 도구가 많아지면 도구 설명이 컨텍스트를 잠식한다
  - GitHub, Vercel, Supabase처럼 공식 CLI가 성숙한 경우 CLI가 더 많은 옵션과 최신 기능을 제공하는 경우가 많다
  - CLI는 help, json output, exit code, shell pipeline으로 자동화하기 쉽다
  - MCP는 대화형 탐색과 구조화된 도구 호출에 유리하다
  - 판단 기준: 자주 쓰는 반복 작업은 CLI 래퍼, 대화형 탐색은 MCP

### Slide 24 - 시스템 복잡도를 의도적으로 낮게 유지하는 전략
- **Type**: Operating Principle
- **Key Message**: 에이전트를 많이 붙이는 것보다, 실패했을 때 원인을 좁히기 쉬운 구조를 유지하는 게 더 중요하다.
- **Details**:
  - 기본값은 단일 에이전트 + 명확한 spec + 실행 가능한 검증
  - 병렬화는 작업 간 의존성이 낮을 때만 사용
  - 새 스킬은 반복되는 실패나 반복 작업이 확인될 때만 추가
  - MCP 서버는 월 1회 이상 쓰는 것만 기본 활성화
  - 에이전트가 한 일을 로그, diff, eval 결과로 설명하지 못하면 자동화 수준을 낮춘다
  - 복잡도 예산을 둔다: "도구 수", "활성 컨텍스트", "동시 에이전트 수", "검증 루프 수"

### Slide 25 - Superpowers 개요
- **Type**: Overview
- **Key Message**: Superpowers는 Claude Code에 구조화된 소프트웨어 개발 방법론을 주입하는 스킬 라이브러리다.
- **Details**:
  - brainstorming: 코딩 전 요구사항과 설계를 대화로 구체화
  - writing-plans: 구현 계획을 작은 작업 단위로 작성
  - executing-plans: 계획을 배치 단위로 실행하고 체크포인트를 둠
  - test-driven-development: red-green-refactor 루프 강제
  - systematic-debugging: 원인 조사, 가설 검증, 수정, 검증의 4단계
  - code review: 계획, 표준, 아키텍처 기준으로 구현 검토

### Slide 26 - Superpowers 기본 흐름
- **Type**: Workflow
- **Key Message**: Superpowers의 기본 철학은 "설계 승인 없이 바로 구현하지 않는다"에 가깝다.
- **Details**:
  - brainstorming으로 요구사항과 대안 정리
  - 승인된 설계가 있으면 worktree로 격리된 작업 공간 생성
  - writing-plans로 2~5분 단위의 작은 작업으로 분해
  - execute-plan 또는 subagent-driven-development로 실행
  - 중간에 코드 리뷰와 검증 체크포인트를 둠
  - 마지막에는 테스트 통과와 브랜치 마무리까지 확인

### Slide 27 - Superpowers와 TDD
- **Type**: Best Practice
- **Key Message**: Superpowers의 TDD는 "테스트도 쓰자"가 아니라, 실패하는 테스트를 먼저 확인하는 규율이다.
- **Details**:
  - RED: 실패하는 테스트를 먼저 작성하고 실제 실패를 확인
  - GREEN: 최소 구현으로 테스트를 통과시킴
  - REFACTOR: 통과 상태를 유지하며 구조를 정리
  - 테스트 없이 먼저 쓴 코드는 버리게 만드는 식의 강한 규칙을 둘 수 있음
  - 적용하기 좋은 작업: 기능 추가, 회귀 방지, 버그 재현

### Slide 28 - Superpowers 베스트 프랙티스
- **Type**: Best Practice
- **Key Message**: Superpowers는 "자동으로 잘해주는 도구"라기보다, 작업 전후의 규율을 강제하는 도구로 써야 한다.
- **Details**:
  - 간단한 작업이라도 짧은 설계 문장을 먼저 확인
  - 계획은 너무 크게 쓰지 말고 검증 가능한 작은 배치로 나눔
  - 디버깅은 바로 수정하지 말고 원인 조사와 가설 검증부터 시작
  - 세 번 이상 수정해도 실패하면 아키텍처나 가정이 틀렸는지 재검토
  - 구현 후 code-reviewer에게 계획 대비 불일치를 확인시킴

### Slide 29 - OpenSpec 개요
- **Type**: Overview
- **Key Message**: OpenSpec은 AI가 추측해서 코딩하지 않도록, 변경 의도와 요구사항을 코드 옆에 남기는 spec-driven framework다.
- **Details**:
  - specs: 현재 시스템의 기준 행동
  - changes: 진행 중인 변경 제안
  - proposal.md: 왜 하는지, 무엇을 바꾸는지
  - specs/: 이번 변경의 delta requirements
  - design.md: 기술 접근과 아키텍처 판단
  - tasks.md: 구현 체크리스트

### Slide 30 - OpenSpec 기본 워크플로우
- **Type**: Workflow
- **Key Message**: OpenSpec의 기본 흐름은 제안하고, 사양대로 구현하고, 완료된 변경을 기준 사양에 합치는 것이다.
- **Details**:
  - `/opsx:new <feature>`: 변경 폴더 생성
  - `/opsx:ff`: proposal, specs, design, tasks를 한 번에 생성
  - `/opsx:apply`: tasks.md를 따라 구현
  - `/opsx:archive`: 변경을 archive로 옮기고 main spec에 반영
  - `/opsx:verify`: 구현이 spec과 맞는지 검증

### Slide 31 - OpenSpec Delta Spec 이해하기
- **Type**: Deep Dive
- **Key Message**: OpenSpec은 전체 사양을 매번 다시 쓰지 않고, 변경분을 delta로 관리한다.
- **Details**:
  - ADDED: 새 요구사항 추가
  - MODIFIED: 기존 요구사항의 동작 변경
  - REMOVED: 더 이상 유효하지 않은 요구사항 제거
  - RENAMED: 요구사항 이름 변경
  - Scenario: GIVEN/WHEN/THEN처럼 검증 가능한 행동으로 작성
  - archive 이후 delta가 main spec에 반영되어 기준 문서가 최신 상태가 됨

### Slide 32 - OpenSpec 베스트 프랙티스
- **Type**: Best Practice
- **Key Message**: OpenSpec은 무거운 절차가 아니라, AI와 사람이 같은 문서를 보고 일하게 만드는 장치로 써야 한다.
- **Details**:
  - 작은 기능부터 시작해 팀의 문서 리듬을 만든다
  - proposal과 specs는 구현 전에 리뷰한다
  - tasks는 체크 가능한 단위로 쪼갠다
  - brownfield 프로젝트에서는 기존 동작을 먼저 specs에 흡수한다
  - 구현 전 컨텍스트를 정리하고, 긴 대화 대신 spec을 읽게 한다
  - 완료 후 archive를 빼먹지 않는다

### Slide 33 - Superpowers와 OpenSpec 조합
- **Type**: Integration
- **Key Message**: Superpowers는 깊은 계획과 실행에 강하고, OpenSpec은 그 결과를 사양으로 오래 남기는 데 강하다.
- **Details**:
  - 큰 변경: Superpowers로 brainstorming → write-plan → execute-plan
  - 구현 후: OpenSpec propose로 변경 사양 생성
  - 이미 구현된 plan을 기반으로 tasks를 완료 처리
  - `/opsx:archive`로 delta spec을 main spec에 반영
  - 장점: 실행력과 사양 유지가 분리되지 않는다

### Slide 34 - 변경 크기별 워크플로우
- **Type**: Decision Matrix
- **Key Message**: 모든 변경에 같은 절차를 적용하지 말고, 변경 크기에 따라 도구 조합을 바꾼다.
- **Details**:
  - 큰 변경: Superpowers 계획·TDD·실행 → OpenSpec 사양 동기화
  - 중간 변경: OpenSpec propose → apply → archive
  - 작은 변경: 바로 수정 → spec-patch로 사양 동기화
  - 모호한 변경: OMC deep-interview 또는 Superpowers brainstorming부터 시작
  - 병렬 구현: OMC ultrawork/team 또는 Superpowers subagent workflow 사용

### Slide 35 - Task / Phase 실행 구조
- **Type**: Execution Playbook
- **Key Message**: 큰 구현은 독립 실행 가능한 phase로 나누고, 반복 작업은 스크립트에 맡기는 편이 안정적이다.
- **Details**:
  - 먼저 LLM과 충분히 대화해 context를 쌓음
  - user flow나 큰 모듈 단위로 phase 분리
  - 구현 전 spec 문서 업데이트
  - 각 phase는 독립 세션이 읽어도 이해되게 자기완결적으로 작성
  - runner script가 pending phase 실행, 결과 저장, status 업데이트
  - 장점: 토큰 절감, 정확도 개선, 문서-코드 sync 개선

### Slide 36 - Phase 문서는 어떻게 써야 하나
- **Type**: Template / Checklist
- **Key Message**: phase 문서는 "이전 대화" 없이도 독립 세션이 작업할 수 있어야 한다.
- **Details**:
  - 사전 준비: 읽어야 할 문서와 이전 산출물 명시
  - 작업 내용: 파일 경로, 인터페이스, 핵심 규칙 명시
  - Acceptance Criteria: 실행 가능한 검증 커맨드로 작성
  - AC 검증 방법: 통과/실패 시 status 업데이트 방식 명시
  - 주의사항: 하지 말아야 할 것과 이유를 구체적으로 적음

### Slide 37 - 디자인 문제: 작동하지만 AI 티가 난다
- **Type**: Problem
- **Key Message**: 프론트엔드 결과물의 문제는 기능이 아니라 보는 눈과 기준이 부족한 데서 자주 생긴다.
- **Details**:
  - 레이아웃은 무난하고 반복적
  - 색상은 안전하지만 개성이 없음
  - 애니메이션과 여백이 어색함
  - "예쁘게"라는 지시는 너무 추상적
  - 좋은 레퍼런스와 디자인 시스템이 있어야 품질이 안정된다

### Slide 38 - UI 라이브러리로 기본 품질을 올리기
- **Type**: Practical Toolkit
- **Key Message**: AI에게 디자인 감각을 기대하기보다 검증된 컴포넌트 선택지를 주는 편이 빠르다.
- **Details**:
  - shadcn: 어드민, 대시보드, 버튼, 테이블, 폼, 모달
  - Aceternity UI: 랜딩페이지, 히어로, 부드러운 스크롤과 인터랙션
  - React Bits: 텍스트 효과, 버튼 호버, 스크롤 트리거 애니메이션
  - 좋은 지시: "React Bits의 [컴포넌트 이름]으로 만들어줘"
  - 핵심: "예쁘게"보다 "무엇을 써서"가 더 정확하다

### Slide 39 - DESIGN.md 생태계
- **Type**: Practical Toolkit
- **Key Message**: 스크린샷보다 마크다운 디자인 시스템이 더 명확할 때가 많다.
- **Details**:
  - designmd.ai: 커뮤니티가 올린 DESIGN.md를 찾고 설치
  - getdesign.md: Apple, Stripe, Vercel, Notion 같은 브랜드 CSS 값 기반
  - typeui.sh: 브랜드가 아니라 Paper, Modern, Enterprise 같은 스타일을 고르는 방식
  - "Stripe처럼"보다 실제 CSS 값이 들어간 문서를 주면 해석 여지가 줄어든다
  - 프로젝트 루트에 파일 하나를 두고 "이 스펙대로 만들어"라고 지시할 수 있다

### Slide 40 - Taste Skill 설정으로 디자인 방향 잡기
- **Type**: Skill Breakdown
- **Key Message**: Taste Skill은 추상적인 취향을 세 가지 조절값으로 구체화한다.
- **Details**:
  - DESIGN_VARIANCE: 레이아웃이 얼마나 실험적인지
  - MOTION_INTENSITY: 애니메이션 강도
  - VISUAL_DENSITY: 한 화면에 얼마나 많이 담을지
  - 럭셔리 랜딩: variance 높게, motion 중간 이상, density 낮게
  - 관리자 대시보드: variance 낮게, motion 낮게, density 높게

### Slide 41 - frontend-design vs Taste Skill
- **Type**: Comparison
- **Key Message**: 둘 중 하나만 고르는 문제가 아니라, 기본 품질과 프리미엄 레이어를 나눠 생각하면 된다.
- **Details**:
  - frontend-design: Claude Code 기본 내장, 범용적이고 안정적인 프론트엔드 품질 기준
  - taste-skill: 레이아웃, 타이포그래피, 색상, 여백, 모션 기준을 강화
  - redesign-skill: 기존 프로젝트의 큰 디자인 문제부터 수정
  - soft-skill: 비싸 보이는 여백, 폰트, 깊이감, 부드러운 모션
  - output-skill: 플레이스홀더와 반쪽 구현 방지

### Slide 42 - 디자인 레퍼런스로 보는 눈 기르기
- **Type**: Reference Map
- **Key Message**: AI가 앱을 만들어줘도, 잘 만들어졌는지 판단하는 눈은 사람이 길러야 한다.
- **Details**:
  - 60fps.design: 특이한 앱 인터랙션 영상 레퍼런스
  - Mobbin: 실제 앱 화면을 온보딩, 결제, 프로필 같은 UX 플로우별로 탐색
  - Refero: SaaS와 모바일 앱의 실제 제품 UI 레퍼런스
  - Pageflows: 실제 제품의 유저 플로우 관찰
  - 실습 방향: 만들기 전에 레퍼런스 3개를 먼저 고르고, 구현 후 visual-verdict로 비교

### Slide 43 - 좋은 질문은 Y가 아니라 X를 묻는다
- **Type**: Thinking Framework
- **Key Message**: X/Y Problem을 피해야 에이전트도 엉뚱한 해결책을 빠르게 구현하지 않는다.
- **Details**:
  - X: 진짜 해결하려는 문제
  - Y: X를 해결한다고 믿는 특정 방법
  - "인덱스 뭐 걸까요?" → "이 쿼리가 느린 원인이 뭘까요?"
  - "버튼 색 뭐가 좋을까요?" → "가입 전환의 병목이 어디일까요?"
  - 에이전트에게도 "최종적으로 얻고 싶은 게 뭐야?"를 묻게 해야 한다

### Slide 44 - AI Native Engineer의 운영 루프
- **Type**: Summary
- **Key Message**: AI Native Engineer는 도구를 많이 아는 사람이 아니라, 원리 위에서 에이전트가 일하는 구조를 설계하는 사람이다.
- **Details**:
  - ECC로 역할, 규칙, 훅, 스킬의 기반을 만든다
  - eval 루프로 실험, commit, revert의 기준을 만든다
  - OMC로 작업 성격에 맞는 실행 모드를 고른다
  - Superpowers로 설계, TDD, 리뷰 규율을 세운다
  - OpenSpec으로 결정과 요구사항을 장기 기억으로 남긴다
  - 디자인 레퍼런스와 스킬로 "AI 티"를 줄인다

### Slide 45 - 실전 적용 팩
- **Type**: Section Divider / Practical
- **Key Message**: 이제 하나의 문제를 끝까지 들고 가며 도구를 실제 운영 흐름으로 묶는다.
- **Details**:
  - 러닝 케이스: 회원가입 전환율이 낮은 SaaS 대시보드
  - 목표: 가입 플로우 개선, 테스트, spec, 디자인 검증까지 연결

### Slide 46 - 러닝 케이스 정의
- **Type**: Work Order
- **Key Message**: 막연한 요청을 목표, 제약, 산출물, 검증 기준이 있는 작업으로 바꾼다.
- **Details**:
  - 나쁜 요청: "대시보드 개선해줘"
  - 좋은 요청: 가입 전환 병목 개선 + UI 수정 + 테스트 + spec 업데이트
  - 제약: 새 UI 라이브러리 추가 금지, 기존 API 변경 금지

### Slide 47 - OMC 라우팅 예시
- **Type**: Decision Guide
- **Key Message**: 같은 케이스라도 요청 상태에 따라 OMC 모드가 달라진다.
- **Details**:
  - 요구가 흐리면 deep-interview
  - 원인이 불명확하면 trace
  - 구현이 명확하면 ralph

### Slide 48 - Eval Scorecard
- **Type**: Scorecard
- **Key Message**: 자동 commit 전에 점수판부터 만든다.
- **Details**:
  - Build/Test
  - Spec compliance
  - UI clarity
  - Regression risk
  - Decision: commit / retry / revert

### Slide 49 - Commit/Revert Decision Log
- **Type**: Decision Log
- **Key Message**: 실패도 기록해야 다음 실험이 빨라진다.
- **Details**:
  - Attempt 01: retry
  - Attempt 02: revert
  - Attempt 03: commit
  - 각 시도마다 변경, 결과, 판단 이유를 남김

### Slide 50 - Superpowers Plan 예시
- **Type**: Artifact Example
- **Key Message**: 계획은 큰 할 일 목록이 아니라 실행 가능한 작은 배치다.
- **Details**:
  - failing test 추가
  - form 구조 변경
  - CTA와 에러 메시지 조정
  - build/test/screenshot review
  - OpenSpec archive handoff

### Slide 51 - OpenSpec 산출물 예시
- **Type**: Artifact Example
- **Key Message**: 끝난 작업은 사양으로 돌아와야 다음 에이전트가 최신 기준을 본다.
- **Details**:
  - proposal.md
  - specs/signup.md
  - tasks.md
  - archive

### Slide 52 - MCP vs CLI Wrapper 예시
- **Type**: Tooling Example
- **Key Message**: 반복 작업은 CLI wrapper로, 대화형 탐색은 MCP로 나누는 편이 실용적이다.
- **Details**:
  - MCP: 탐색에 좋음
  - CLI: 반복 자동화와 CI에 좋음
  - 예: `gh issue view --json`, `gh pr checks --json`

### Slide 53 - 디자인 워크플로우 예시
- **Type**: Workflow
- **Key Message**: 디자인은 감으로 맡기지 말고 기준, 레퍼런스, 검증 루프로 굴린다.
- **Details**:
  - Brief
  - References
  - DESIGN.md / shadcn
  - Taste Skill
  - Build
  - visual-verdict

### Slide 54 - 실습 체크리스트
- **Type**: Closing Checklist
- **Key Message**: 이 체크리스트가 채워지면 에이전트는 그냥 도구가 아니라 운영 가능한 동료가 된다.
- **Details**:
  - 역할별 agent
  - tools 권한
  - 최신 spec
  - eval 기준
  - CI 확인
  - MCP/CLI 선택 기준
  - 디자인 레퍼런스
  - 실패 로그
