import React from "react";
import { Series } from "remotion";
import { BulletSlide } from "../components/BulletSlide";
import { QuoteSlide } from "../components/QuoteSlide";
import { StatSlide } from "../components/StatSlide";
import { CalloutSlide } from "../components/CalloutSlide";
import { CompareSlide } from "../components/CompareSlide";
import { CodeBlockSlide } from "../components/CodeBlockSlide";
import { FlowSlide } from "../components/FlowSlide";
import { BeforeAfterSlide } from "../components/BeforeAfterSlide";
import { SplitSlide } from "../components/SplitSlide";
import { ChecklistSlide } from "../components/ChecklistSlide";
import { PromptCardSlide } from "../components/PromptCardSlide";

export const PART_2_3_DURATION = 12000;

// 2.3 AI 결과를 사람이 검증하기
// 근거: 04, 06, 09 md 파일 + ! prefix, /usage, /stats, 승인 모드, Git 통합

export const Part2_3: React.FC = () => (
  <Series>
    {/* 도입 — Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="🔍"
        kicker="2.3 검증하기"
        message={'"만들었다"와\n"완성됐다"는 다릅니다'}
        sub="AI가 코드를 줬다고 끝이 아닙니다. 사람이 확인하는 순간 완성됩니다"
      />
    </Series.Sequence>

    {/* 1.7× 버그 — Stat */}
    <Series.Sequence durationInFrames={300}>
      <StatSlide
        kicker="검증을 건너뛰면"
        stat="1.7×"
        label="AI 공동작성 코드의 주요 버그 발생률"
        description="CodeRabbit 2025-12 분석. 보안 취약점은 2.74배. 검증 없이 머지한 AI 코드는 사람이 쓴 코드보다 더 위험합니다."
      />
    </Series.Sequence>

    {/* 검증 3층 — Flow */}
    <Series.Sequence durationInFrames={300}>
      <FlowSlide
        kicker="검증은 3가지 층"
        title="자동 → 수동 → 이해"
        steps={[
          {
            label: "AUTO",
            title: "자동 검증",
            desc: "빌드·타입체크·테스트. 기계가 잡는 것",
          },
          {
            label: "MANUAL",
            title: "수동 검증",
            desc: "직접 실행. 스크린샷. 눈으로 확인",
          },
          {
            label: "UNDERSTAND",
            title: "이해 검증",
            desc: "'이 코드가 왜 이렇게 짜여졌어?' — 설명 가능한가?",
          },
        ]}
      />
    </Series.Sequence>

    {/* 검증 없음 vs 있음 — BeforeAfter */}
    <Series.Sequence durationInFrames={340}>
      <BeforeAfterSlide
        kicker="이 차이가 프로덕션 사고를 만듭니다"
        title="검증 없음 vs 3층 검증"
        before={{
          label: "검증 없이 머지",
          lines: [
            "AI가 코드를 줌",
            "빠르게 커밋",
            "검증 없음",
            "배포 후 사용자가 버그 발견",
            "원인 파악에 2시간 소요",
          ],
        }}
        after={{
          label: "3층 검증 후 머지",
          lines: [
            "자동: typecheck + test 통과",
            "수동: 직접 실행해서 눈으로 확인",
            "이해: 핵심 로직 설명 가능",
            "안전하게 커밋·배포",
            "나중에 수정도 쉬움",
            "검증된 케이스 = 버그 발생 시 원인 후보에서 제거 가능",
          ],
        }}
      />
    </Series.Sequence>

    {/* ! prefix 인라인 검증 — CodeBlock */}
    <Series.Sequence durationInFrames={320}>
      <CodeBlockSlide
        kicker="Claude 세션에서 바로 검증"
        title="! 접두사로 검증 결과를 즉시 컨텍스트에"
        description="! 를 붙이면 셸 명령을 직접 실행합니다. 결과가 자동으로 대화에 추가되어 AI가 다음 단계를 이어갑니다."
        filename="claude (REPL)"
        language="bash"
        code={`# Claude 세션 안에서 직접 실행
> ! bun run typecheck    # 타입 오류 즉시 확인
> ! bun test             # 테스트 결과 컨텍스트 추가
> ! git diff             # 변경사항 직접 검토

# AI에게 실행까지 시키는 방법
"구현 후 bun run typecheck && bun test 실행해줘"`}
      />
    </Series.Sequence>

    {/* TDD — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="가장 강력한 검증 패턴"
        title="테스트를 먼저 쓰게 하라"
        lead="'구현 전에 실패하는 테스트를 먼저 작성해줘'를 붙이면 검증 기준이 자동으로 만들어집니다."
        rightLabel="왜 효과적인가"
        items={[
          {
            text: "테스트 통과 = 객관적인 완료 조건",
            sub: "'잘 됐나요?' 대신 '테스트가 통과했나요?'",
          },
          {
            text: "엣지 케이스를 AI가 미리 고민하게 됨",
            sub: "구현 전에 케이스를 나열하면서 빠진 것을 잡음",
          },
          { text: "나중에 리팩토링해도 테스트가 안전망" },
        ]}
      />
    </Series.Sequence>

    {/* TDD 예시 — PromptCard */}
    <Series.Sequence durationInFrames={360}>
      <PromptCardSlide
        kicker="TDD 프롬프트 예시"
        title="이메일 검증 함수"
        turns={[
          {
            role: "user",
            text: '"validateEmail 함수를 만들어줘. 구현 전에 실패하는 테스트를 먼저 작성해줘:\n- user@example.com → true\n- invalid → false\n- user@.com → false"',
          },
          {
            role: "ai",
            text: "테스트 3개 작성 완료. 모두 실패 중 (함수 없음). 이제 통과하도록 구현합니다.",
          },
          {
            role: "user",
            text: '"테스트 통과하면 ! bun test 실행해줘."',
          },
          {
            role: "ai",
            text: "✓ 3/3 tests passed. 한 번에 머지 가능한 상태입니다.",
          },
        ]}
      />
    </Series.Sequence>

    {/* 자동 vs 수동 검증 — Compare */}
    <Series.Sequence durationInFrames={340}>
      <CompareSlide
        kicker="두 가지를 다 해야 합니다"
        title="자동이 잡는 것 / 수동이 잡는 것"
        left={{
          title: "자동 검증이 잡는 것",
          tone: "accent",
          bullets: [
            "TypeScript 타입 오류",
            "빌드 실패",
            "단위 테스트 실패",
            "린트 규칙 위반",
            "존재하지 않는 import",
          ],
        }}
        right={{
          title: "수동 검증이 잡는 것",
          tone: "neutral",
          bullets: [
            "UX 흐름이 의도와 다름",
            "비즈니스 룰 오류",
            "모바일 레이아웃 깨짐",
            "에러 메시지가 사용자 비친화적",
            "로딩 상태 누락",
          ],
        }}
      />
    </Series.Sequence>

    {/* 설명 못하면 머지 금지 — Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="🚫"
        kicker="이해 검증"
        message={"설명하지 못하는 코드는\n머지하지 않는다"}
        sub="이 한 줄이 장기 유지보수를 결정합니다. 이해 없이 머지한 코드는 결국 내가 디버깅합니다"
      />
    </Series.Sequence>

    {/* Git 통합 — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="Claude Code의 Git 통합"
        title="자연어로 Git까지"
        lead="Claude Code는 Git 작업도 직접 처리합니다. diff를 읽고 커밋 메시지까지 씁니다."
        rightLabel="실전 예시"
        items={[
          {
            text: '"변경 사항을 설명적인 메시지로 커밋해줘"',
            sub: "diff를 읽고 스스로 메시지를 씁니다",
          },
          {
            text: '"커밋 전 git diff 보여주고 내가 확인한 후에 해줘"',
            sub: "마지막 검토 습관을 만드세요",
          },
          {
            text: '"feature/cart 브랜치 만들고 PR 열어줘"',
            sub: "GitHub CLI 통합으로 PR까지 자동",
          },
        ]}
      />
    </Series.Sequence>

    {/* 보안 검증 — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="특히 조심할 영역"
        title="AI 코드의 보안 사각지대"
        lead="AI는 기능을 만들 때 보안을 부차적으로 다룹니다. 이 3가지는 항상 사람이 직접 확인하세요."
        rightLabel="체크 포인트"
        items={[
          {
            text: "API 키가 코드에 하드코딩됐는가?",
            sub: "! git diff로 .env·시크릿 포함 여부 확인",
          },
          {
            text: "사용자 입력이 그대로 DB/Shell에 들어가는가?",
            sub: "SQL·명령어 인젝션 체크",
          },
          {
            text: "새 API 엔드포인트에 인증이 없는가?",
            sub: "새 라우트마다 권한 확인",
          },
        ]}
      />
    </Series.Sequence>

    {/* 검증 사이클 — Flow */}
    <Series.Sequence durationInFrames={340}>
      <FlowSlide
        kicker="머지 전 필수 사이클"
        title="구현 → 검증 → 커밋"
        steps={[
          { label: "1", title: "구현 완료", desc: "AI가 파일 수정" },
          {
            label: "2",
            title: "자동 검증",
            desc: "! bun run typecheck && bun test",
          },
          {
            label: "3",
            title: "수동 확인",
            desc: "직접 실행하거나 스크린샷",
          },
          {
            label: "4",
            title: "커밋",
            desc: '"git diff 보여주고 커밋해줘"',
          },
        ]}
      />
    </Series.Sequence>

    {/* 머지 전 4게이트 — Checklist */}
    <Series.Sequence durationInFrames={360}>
      <ChecklistSlide
        kicker="머지 전 필수 체크"
        title="4가지 게이트"
        items={[
          { text: "자동: bun run typecheck && bun test 통과" },
          { text: "수동: 직접 실행해서 눈으로 확인 (또는 스크린샷)" },
          { text: "이해: 변경 사항을 한 문장으로 설명 가능" },
          { text: "보안: API 키·인증·입력값 검증 체크" },
        ]}
        footer="4개 모두 통과하면 당당히 커밋하세요."
      />
    </Series.Sequence>

    {/* 2.3 정리 — Checklist */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="2.3 정리"
        title="기억할 세 줄"
        items={[
          {
            text: "AI가 줬다고 완성이 아닙니다 — 자동·수동·이해 3층 검증",
          },
          {
            text: "TDD: '테스트 먼저 쓰게 하면' 완료 조건이 생깁니다",
            sub: "! bun test로 세션 안에서 바로 확인",
          },
          {
            text: "설명 못하면 머지 금지 — 이해 없는 코드는 내가 나중에 고칩니다",
          },
        ]}
      />
    </Series.Sequence>

    {/* 3가지 기둥 완성 Grand Finale (filler) */}
    {/* 합계:
      300+320+300+300+340+320+320+320+360+340+300+320+320+340+360+340 = 5200
    */}
    <Series.Sequence durationInFrames={PART_2_3_DURATION - 4560}>
      <CalloutSlide
        icon="🎯"
        kicker="3가지 기둥 완성"
        message={"맥락 · 분할 · 검증\n이 셋이면 충분합니다"}
        sub="맥락을 심고, 잘게 쪼개고, 확인하고 커밋. 오늘 배운 것을 하나씩 실천해보세요."
      />
    </Series.Sequence>
  </Series>
);
