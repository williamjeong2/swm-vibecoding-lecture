import React from "react";
import { Series } from "remotion";
import { BulletSlide } from "../components/BulletSlide";
import { QuoteSlide } from "../components/QuoteSlide";
import { StatSlide } from "../components/StatSlide";
import { CalloutSlide } from "../components/CalloutSlide";
import { CompareSlide } from "../components/CompareSlide";
import { CodeBlockSlide } from "../components/CodeBlockSlide";
import { DiagramSlide } from "../components/DiagramSlide";
import { FlowSlide } from "../components/FlowSlide";
import { BeforeAfterSlide } from "../components/BeforeAfterSlide";
import { SplitSlide } from "../components/SplitSlide";
import { ChecklistSlide } from "../components/ChecklistSlide";
import { PromptCardSlide } from "../components/PromptCardSlide";

export const PART_2_1_DURATION = 35000;

// 2.1 프로젝트 시작 전 AI에게 넘겨야 하는 맥락 구성하기
// 근거: 02, 04, 05, 06, 08, 09 md 파일

export const Part2_1: React.FC = () => (
  <Series>
    {/* 도입 — Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="🧠"
        kicker="2.1 맥락 구성하기"
        message={"결과물은\n'맥락'이 결정합니다"}
        sub="3가지 기둥 중 첫 번째이자 가장 기반이 됩니다. 분할과 검증은 이 위에 쌓입니다"
      />
    </Series.Sequence>

    {/* 공식 인용 */}
    <Series.Sequence durationInFrames={340}>
      <QuoteSlide
        quote={
          '"Most best practices are based on one constraint:\nClaude\'s context window fills up fast,\nand performance degrades as it fills."'
        }
        author="Claude Code Best Practices, Anthropic 공식 문서"
      />
    </Series.Sequence>

    {/* 동료 비유 Callout */}
    <Series.Sequence durationInFrames={320}>
      <CalloutSlide
        icon="👥"
        kicker="Anthropic 공식 황금률"
        message={'"맥락 모르는 동료에게\n물어봤을 때"'}
        sub="AI는 새로 입사한 똑똑한 직원 — 회사 맥락이 0인 상태로 시작합니다"
      />
    </Series.Sequence>

    {/* 맥락 4가지 — Split */}
    <Series.Sequence durationInFrames={340}>
      <SplitSlide
        kicker="맥락 = 4가지로 쪼개집니다"
        title={"AI가\n알아야 할 것"}
        lead="내가 '당연하다'고 생각하는 건 전부 적어줘야 합니다."
        rightLabel="4가지 영역"
        items={[
          { text: "1. 프로젝트 정체성", sub: "뭘 하는 프로젝트인지 한 줄" },
          { text: "2. 기술 스택과 버전", sub: "React 19? Next App Router?" },
          { text: "3. 코딩 컨벤션·금지", sub: "any 금지, bun 사용 등" },
          { text: "4. 폴더 구조와 진입점", sub: "어디부터 읽어야 전체가 보이는가" },
        ]}
      />
    </Series.Sequence>

    {/* 맥락 2층 — Flow */}
    <Series.Sequence durationInFrames={320}>
      <FlowSlide
        kicker="맥락은 두 층으로 나뉩니다"
        title="영구 + 일회성"
        steps={[
          {
            label: "LAYER 1",
            title: "프로젝트 단위 (영구)",
            desc: "CLAUDE.md — 한 번 써두면 매 세션에서 자동 로드",
          },
          {
            label: "LAYER 2",
            title: "요청 단위 (일회성)",
            desc: "@파일, 타입, 에러 메시지 — 지금 이 작업에 필요한 것",
          },
        ]}
      />
    </Series.Sequence>

    {/* ★ CLAUDE.md 계층 — DiagramSlide */}
    <Series.Sequence durationInFrames={360}>
      <DiagramSlide
        kicker="CLAUDE.md의 4가지 범위"
        title="어디에 두느냐에 따라 효과가 다릅니다"
        layers={[
          {
            label: "ORG",
            title: "조직 정책",
            desc: "/Library/Application Support/ClaudeCode/CLAUDE.md — 전사 지침",
          },
          {
            label: "USER",
            title: "사용자",
            desc: "~/.claude/CLAUDE.md — 내 모든 프로젝트",
          },
          {
            label: "PROJECT",
            title: "프로젝트",
            desc: "./CLAUDE.md 또는 ./.claude/CLAUDE.md — 저장소에 커밋, 팀 공유",
          },
          {
            label: "LOCAL",
            title: "로컬 전용",
            desc: "./CLAUDE.local.md — .gitignore, 나만 보는 메모",
          },
        ]}
        caption="바깥 레이어의 지침이 먼저, 안쪽일수록 더 구체적으로 덮어씁니다."
      />
    </Series.Sequence>

    {/* /init */}
    <Series.Sequence durationInFrames={300}>
      <CodeBlockSlide
        kicker="자동 생성"
        title="처음엔 /init 한 번이면 됩니다"
        description="Claude가 코드베이스를 분석해서 CLAUDE.md를 자동 생성. 빌드·테스트 명령, 폴더 구조까지 채워줍니다."
        filename="claude session"
        language="bash"
        code={`$ cd my-project
$ claude
> /init

Analyzing codebase...
✓ Detected: Next.js 15 + TypeScript
✓ Detected: bun (package.json)
✓ Detected: tests in __tests__/
✓ Created ./CLAUDE.md (78 lines)`}
      />
    </Series.Sequence>

    {/* 200줄 Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="📏"
        kicker="CLAUDE.md 작성 원칙"
        message={'"파일당\n200줄 이하"'}
        sub="길수록 컨텍스트를 잡아먹고, 지침 준수율이 떨어집니다. 긴 CLAUDE.md는 안 쓰는 것보다 못합니다."
      />
    </Series.Sequence>

    {/* BeforeAfter — 나쁜/좋은 지침 */}
    <Series.Sequence durationInFrames={360}>
      <BeforeAfterSlide
        kicker="CLAUDE.md 작성 원칙 2"
        title="좋은 지침 vs 나쁜 지침"
        before={{
          label: "모호함",
          mono: true,
          lines: [
            "Format code properly",
            "Test your changes",
            "Keep files organized",
            "Use good naming",
            "Write clean code",
          ],
        }}
        after={{
          label: "구체적·검증 가능",
          mono: true,
          lines: [
            "Use 2-space indentation",
            "Run `bun test` before committing",
            "API handlers live in src/api/handlers/",
            "Use bun, not npm or yarn",
            "Always pass AI=1 when running commands",
          ],
        }}
      />
    </Series.Sequence>

    {/* CLAUDE.md 실제 예시 — CodeBlock */}
    <Series.Sequence durationInFrames={360}>
      <CodeBlockSlide
        kicker="실제 CLAUDE.md 예시"
        title="짧고 구체적인 5개 섹션"
        filename="CLAUDE.md"
        language="markdown"
        codeFontSize={21}
        code={`# My Project

## 한 줄 설명
Next.js 기반 SaaS 대시보드. 실시간 차트와 팀 권한 관리.

## 기술 스택
- Next.js 15 (App Router) + TypeScript strict
- Zustand (Redux 금지), axios, Tailwind

## 빌드 / 테스트
- 빌드: AI=1 bun run build
- 타입체크: bun run typecheck
- 테스트: bun test  (커밋 전 필수)

## 코딩 규칙
- 함수형 컴포넌트만, any 금지, ES modules
- 2-space 들여쓰기

## 폴더 구조
- API 핸들러: src/api/handlers/
- 컴포넌트: src/components/
- 유틸: src/utils/`}
      />
    </Series.Sequence>

    {/* 포함할 것 / 빼야 할 것 Compare */}
    <Series.Sequence durationInFrames={340}>
      <CompareSlide
        kicker="포함할 것 / 빼야 할 것"
        title="CLAUDE.md의 6+4 규칙"
        left={{
          title: "꼭 넣어야 할 6가지",
          tone: "accent",
          bullets: [
            "Claude가 추측 못하는 bash 명령",
            "기본값과 다른 코드 스타일",
            "테스트 지침·선호 러너",
            "브랜치·PR 등 저장소 에티켓",
            "아키텍처 결정사항",
            "환경 변수·개발 환경 특이사항",
          ],
        }}
        right={{
          title: "절대 넣지 말 것",
          tone: "neutral",
          bullets: [
            "코드로 파악 가능한 것(시그니처)",
            "자세한 API 문서 (링크만)",
            "자주 변경되는 정보(이슈번호)",
            "파일별 코드 설명",
          ],
        }}
      />
    </Series.Sequence>

    {/* Anthropic 질문 — Quote */}
    <Series.Sequence durationInFrames={300}>
      <QuoteSlide
        quote={
          '"각 항목마다 자문하세요:\n이것을 제거하면 Claude가 실수를 하나?\n그렇지 않다면 삭제하세요."'
        }
        author="Claude Code Best Practices"
      />
    </Series.Sequence>

    {/* 요청 단위 맥락 4가지 — Checklist */}
    <Series.Sequence durationInFrames={360}>
      <ChecklistSlide
        kicker="요청 단위 맥락"
        title="매 요청마다 같이 넘길 것"
        items={[
          {
            text: "작업 중인 파일을 @ 로 직접 지목",
            sub: "요즘은 알아서 찾기도 하지만, 직접 지목할수록 더 정확합니다",
          },
          {
            text: "관련 타입 / 인터페이스 첨부",
            sub: "AI가 추측한 타입과 실제가 다르면 그대로 버그",
          },
          {
            text: "에러 메시지는 원문 그대로",
            sub: "줄 번호·파일 경로·스택트레이스 통째로 복붙",
          },
          {
            text: "기존 패턴을 예시로 가리키기",
            sub: "@HotDogWidget.tsx를 참고해서 새 위젯 만들어줘",
          },
        ]}
      />
    </Series.Sequence>

    {/* PromptCard — 같은 요청, 다른 결과 */}
    <Series.Sequence durationInFrames={360}>
      <PromptCardSlide
        kicker="요청 맥락의 위력"
        title="같은 작업, 다른 프롬프트"
        turns={[
          {
            role: "user",
            text: '"foo.py 테스트 추가해줘"',
          },
          {
            role: "ai",
            text: "임의로 케이스를 만들고, mock을 남발하고, 기존 스타일과 충돌합니다. 실패 → 재요청 반복.",
          },
          {
            role: "user",
            text: '"@foo.py에서 로그아웃된 엣지 케이스 테스트를 작성해줘. mock 사용 금지. @test_user.py 스타일을 따라줘."',
          },
          {
            role: "ai",
            text: "한 번에 머지 가능한 결과 — 기존 스타일과 일치, 불필요한 mock 없음.",
          },
        ]}
      />
    </Series.Sequence>

    {/* ★ Explore → Plan → Code → Commit — Flow */}
    <Series.Sequence durationInFrames={400}>
      <FlowSlide
        kicker="Anthropic 공식 4단계 워크플로우"
        title="Explore → Plan → Code → Commit"
        steps={[
          {
            label: "1",
            title: "Explore",
            desc: "Plan Mode에서 읽기만. 코드베이스를 흡수하는 단계",
          },
          {
            label: "2",
            title: "Plan",
            desc: "구현 계획을 글로 받기. 잘못된 길을 빠르게 잡기",
          },
          {
            label: "3",
            title: "Code",
            desc: "Normal Mode 전환. 검증 수단과 함께 실제 구현",
          },
          {
            label: "4",
            title: "Commit",
            desc: "설명적 메시지로 커밋 & PR — 자연어로 Git까지",
          },
        ]}
      />
    </Series.Sequence>

    {/* Plan Mode 예시 — PromptCard */}
    <Series.Sequence durationInFrames={340}>
      <PromptCardSlide
        kicker="Plan Mode 활용 예"
        title="마이그레이션 시나리오"
        turns={[
          {
            role: "user",
            text: "(Shift+Tab → Plan Mode)\n인증 시스템을 OAuth2로 마이그레이션하고 싶어. 상세 계획을 만들어줘.",
          },
          {
            role: "ai",
            text: "현재 상태 분석 → 영향받는 파일 목록 → Phase별 계획을 제시합니다. 파일은 건드리지 않습니다.",
          },
          {
            role: "user",
            text: "좋아. Normal Mode로 전환, 계획대로 Phase 1부터 구현 시작.",
          },
        ]}
        note="큰 작업일수록 Plan Mode로 먼저 계획을 잡는 게 안전합니다."
      />
    </Series.Sequence>

    {/* BeforeAfter — 검증 수단 */}
    <Series.Sequence durationInFrames={360}>
      <BeforeAfterSlide
        kicker="검증 수단"
        title="기대 출력을 명시 vs 안 명시"
        before={{
          label: "검증 없음",
          lines: [
            '"이메일 주소 검증 함수 구현해줘"',
            "AI가 적당히 짠다",
            "엣지 케이스 모름",
            "테스트 안 돌림",
            "프로덕션에서 터짐",
          ],
        }}
        after={{
          label: "검증 있음",
          mono: true,
          lines: [
            "validateEmail:",
            "  user@example.com → true",
            "  invalid → false",
            "  user@.com → false",
            "구현 후 bun test 실행해줘",
          ],
        }}
      />
    </Series.Sequence>

    {/* 컨텍스트 명령 — CodeBlock */}
    <Series.Sequence durationInFrames={320}>
      <CodeBlockSlide
        kicker="컨텍스트 관리 명령어"
        title="채우면서 비우는 것도 필요합니다"
        description="컨텍스트는 우유처럼 신선해야 합니다 — 주제가 바뀌면 무조건 /clear."
        filename="claude (REPL)"
        language="bash"
        code={`/clear          # 무관한 작업 사이에 초기화
/compact        # 대화 기록을 요약·압축
/rewind         # 체크포인트로 되돌리기
/btw            # 컨텍스트에 추가 안 하는 빠른 질문 (휘발성)
/memory         # Auto Memory 확인·편집`}
      />
    </Series.Sequence>

    {/* Kitchen Sink — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="가장 흔한 실수"
        title={'"Kitchen Sink\n세션"'}
        lead="한 세션에 여러 주제가 섞이면 컨텍스트가 오염됩니다. 인증 → 이미지 크기 → 다시 인증..."
        rightLabel="GOLDEN RULE"
        items={[
          { text: "주제가 바뀌면 무조건 /clear" },
          { text: "같은 수정을 2번 반복하면 재시작 신호", sub: "초기화 후 더 구체적인 프롬프트로" },
          { text: "서브에이전트도 좋은 선택지", sub: "별도 컨텍스트 윈도우에서 탐색" },
        ]}
      />
    </Series.Sequence>

    {/* Writer/Reviewer — Flow */}
    <Series.Sequence durationInFrames={340}>
      <FlowSlide
        kicker="고품질 코드 패턴"
        title="Writer / Reviewer 분리"
        steps={[
          {
            label: "A",
            title: "구현 세션",
            desc: "세션 A에서 rate limiter 구현",
          },
          {
            label: "B",
            title: "리뷰 세션",
            desc: "새 세션 B에서 엣지·레이스·일관성 위주 검토",
          },
          {
            label: "A'",
            title: "피드백 반영",
            desc: "세션 A로 돌아와 리뷰 피드백 적용",
          },
        ]}
        caption="LLM은 자신이 직접 작성하거나 작업한 것에 대해 더 좋게 평가하는 편향이 있습니다. 같은 세션에서 구현하고 리뷰하면 문제를 놓치기 쉬운 이유입니다."
      />
    </Series.Sequence>

    {/* 흔한 실수 — BeforeAfter */}
    <Series.Sequence durationInFrames={360}>
      <BeforeAfterSlide
        kicker="입문자의 흔한 실수"
        title="모호한 요청 vs 구체적인 요청"
        before={{
          label: "이렇게 물으면",
          lines: [
            '"이거 왜 안 돼?"',
            '"전체 앱 리팩토링해줘"',
            '"모든 컴포넌트 TS 변환"',
            '"더 좋게 만들어줘"',
          ],
        }}
        after={{
          label: "이렇게 바꿔야",
          mono: true,
          lines: [
            "TypeError: Cannot read 'id' of undefined",
            "at UserService.getUser",
            "(src/services/user.ts:45)",
            "",
            "@src/services/user.ts 45줄 확인 후",
            "원인과 해결법을 알려줘",
          ],
        }}
      />
    </Series.Sequence>

    {/* 2분 루틴 — Checklist */}
    <Series.Sequence durationInFrames={380}>
      <ChecklistSlide
        kicker="실전 2분 루틴"
        title="작업 시작 전 5단계"
        items={[
          { text: "CLAUDE.md 있는지 확인 (없으면 /init)" },
          { text: "지금 작업의 배경을 3–5줄로 쓰기" },
          { text: "관련 파일을 @ 로 명시적으로 지목" },
          { text: "검증 수단(테스트·빌드·스크린샷) 명시" },
          { text: '"구현 전에 명확화 질문을 해줘" 끝에 붙이기' },
        ]}
        footer="이 2분이 2시간을 아낍니다."
      />
    </Series.Sequence>

    {/* claude -p 파이프 CodeBlock */}
    <Series.Sequence durationInFrames={340}>
      <CodeBlockSlide
        kicker="맥락을 파이프로 확장"
        title="claude -p + Unix 도구"
        description="Unix 도구와 합쳐지면 맥락을 거의 무한히 확장할 수 있습니다."
        filename="terminal"
        language="bash"
        code={`# 에러 로그를 통째로 넘기고 원인 분석
cat build-error.txt | claude -p '근본 원인을 알려줘'

# 이번 브랜치 변경 파일의 보안 이슈 검토
git diff main --name-only \\
  | claude -p '변경 파일의 보안 이슈 검토'

# 최근 로그 200줄 이상 징후 스캔
tail -200 app.log \\
  | claude -p '이상한 점이 있으면 알려줘'`}
      />
    </Series.Sequence>

    {/* 실전 시나리오 3개 — Flow */}
    <Series.Sequence durationInFrames={380}>
      <FlowSlide
        kicker="실전 시나리오 — 버그 수정"
        title="5단계로 한 사이클"
        steps={[
          { label: "1", title: "에러 통째 복붙", desc: "요약하지 말고 스택트레이스 전부" },
          { label: "2", title: "@ 로 파일 지목", desc: "AI가 길을 잃지 않도록" },
          { label: "3", title: "재현 테스트 먼저", desc: "'실패하는 테스트를 먼저 작성'" },
          { label: "4", title: "근본 원인 수정", desc: "'증상만 가리지 말고'" },
          { label: "5", title: "테스트 통과 확인", desc: "객관적인 종료 조건" },
        ]}
      />
    </Series.Sequence>

    {/* 상위 10% Stat */}
    <Series.Sequence durationInFrames={300}>
      <StatSlide
        kicker="여기까지 했으면"
        stat="10%"
        label="이미 상위 10%입니다"
        description="대부분의 입문자는 CLAUDE.md를 안 씁니다. 여러분은 알았으니 첫 5분만 투자하면 끝."
      />
    </Series.Sequence>

    {/* 오늘 할 일 3가지 — Checklist */}
    <Series.Sequence durationInFrames={360}>
      <ChecklistSlide
        kicker="당장 오늘 할 일"
        title="강의가 끝나고 30분만"
        items={[
          { text: "작업 중인 프로젝트에서 /init 실행" },
          { text: "생성된 CLAUDE.md를 100줄 이내로 다듬기" },
          { text: "5개 섹션(설명/스택/명령/규칙/구조) 확인" },
        ]}
        footer="이 30분이 앞으로 모든 작업을 빨라지게 만듭니다."
      />
    </Series.Sequence>

    {/* 정리 — Checklist */}
    <Series.Sequence durationInFrames={400}>
      <ChecklistSlide
        kicker="2.1 정리"
        title="기억할 5줄"
        items={[
          { text: "컨텍스트 윈도우는 유한하다 — 잘 채우는 게 전부" },
          { text: "CLAUDE.md / AGENTS.md를 200줄 이내로 작성" },
          { text: "@ 참조로 관련 파일·타입·에러 원문을 항상 같이" },
          { text: "검증 수단(테스트/빌드/스크린샷)을 함께 넘겨라" },
          { text: "Explore → Plan → Code → Commit, 주제 바뀌면 /clear" },
        ]}
      />
    </Series.Sequence>

    {/* 합 계산:
      300+340+320+340+320+360+300+300+360+360+340+300+360+360+400+340+320+360+320+300+320+400+340+300+340+360+380+360+340+320+340+380+320+300+360+300+320+300+360+400
    */}
    {/* 누적:
      300, 640, 960, 1300, 1620, 1980, 2280, 2580, 2940, 3300,
      3640, 3940, 4300, 4660, 5060, 5400, 5720, 6080, 6400, 6700,
      7020, 7420, 7760, 8060, 8400, 8760, 9140, 9500, 9840, 10160,
      10500, 10880, 11200, 11500, 11860, 12160, 12480, 12780, 13140, 13540
    */}
    <Series.Sequence durationInFrames={PART_2_1_DURATION - 9260}>
      <BulletSlide
        kicker="다음 파트 예고"
        title="맥락을 심었다, 그 다음은?"
        bullets={[
          { text: "맥락이 있어도 요청이 너무 크면 AI가 길을 잃습니다" },
          { text: "2.2에서는 '분할하기' — 결과를 결정하는 요청의 크기" },
          { text: "한 번에 하나씩, 잘게 쪼개고 체크포인트를 남기는 법" },
        ]}
      />
    </Series.Sequence>
  </Series>
);
