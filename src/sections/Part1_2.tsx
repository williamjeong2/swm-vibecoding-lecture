import React from "react";
import { Series } from "remotion";
import { BulletSlide } from "../components/BulletSlide";
import { QuoteSlide } from "../components/QuoteSlide";
import { StatSlide } from "../components/StatSlide";
import { CalloutSlide } from "../components/CalloutSlide";
import { CompareSlide } from "../components/CompareSlide";
import { BigNumberGrid } from "../components/BigNumberGrid";
import { SplitSlide } from "../components/SplitSlide";
import { ChecklistSlide } from "../components/ChecklistSlide";
import { BeforeAfterSlide } from "../components/BeforeAfterSlide";

export const PART_1_2_DURATION = 12000;

// 1.2 바이브코딩으로 할 수 있는 것 / 없는 것, 기대치 맞추기
// 근거: 01, 02, 06, 09, 10 md 파일

export const Part1_2: React.FC = () => (
  <Series>
    {/* 도입 — Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="🎯"
        kicker="1.2 기대치 맞추기"
        message={"뭘 시켜도 되고,\n뭘 시키면 큰일 날까?"}
        sub="할 수 있는 것과 없는 것을 모르면 잘못된 곳에 시간을 다 쏟습니다"
      />
    </Series.Sequence>

    {/* 70% 인용 */}
    <Series.Sequence durationInFrames={320}>
      <QuoteSlide
        quote={
          '"AI 도구는 코딩 작업의 약 70%를 처리합니다.\n나머지 30%인 섬세한 의사결정과 디버깅은\n여전히 사람의 영역입니다."'
        }
        author="Addy Osmani (구글 클라우드 AI 디렉터) — The 70% Problem"
      />
    </Series.Sequence>

    {/* Split: 잘 되는 영역 1 */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="잘 되는 영역 1"
        title={"AI가\n미친듯이 잘하는 것"}
        lead="패턴이 명확하면 AI는 눈 감고도 합니다. 지루한 작업부터 과감히 넘기세요."
        rightLabel="위임해도 되는 작업"
        items={[
          { text: "CRUD / 폼 / 리스트 페이지", sub: "예: '로그인 폼에 이메일·비밀번호·에러 메시지 추가해줘' — 한 번에 나옵니다" },
          { text: "API 연동, 유효성 검사, 에러 처리", sub: "예: 'axios로 /users API 연동하고 토큰 만료 처리도 해줘'" },
          { text: "테스트 작성, 타입 정의, docstring", sub: "예: '@auth.ts 보고 테스트 케이스 빠진 것 채워줘'" },
        ]}
      />
    </Series.Sequence>

    {/* 잘 되는 영역 2 — Bullet */}
    <Series.Sequence durationInFrames={320}>
      <BulletSlide
        kicker="잘 되는 영역 2"
        title="Anthropic 직원들이 실제로 쓰는 곳"
        bullets={[
          {
            text: "코드베이스 네비게이션 / 이해",
            sub: "신입이 입사 첫날 전체 코드를 빠르게 파악",
          },
          {
            text: "테스트 리팩토링과 PR 리뷰",
            sub: "GitHub Actions로 자동 댓글까지",
          },
          {
            text: "낯선 언어(Rust 등)를 익숙한 언어로 번역",
          },
          {
            text: "스크린샷 → 디버깅",
            sub: "Kubernetes 대시보드 캡쳐로 pod 문제 진단한 사례",
          },
        ]}
      />
    </Series.Sequence>

    {/* Stat */}
    <Series.Sequence durationInFrames={300}>
      <StatSlide
        kicker="Anthropic 추론팀 사례"
        stat="80%"
        label="ML 함수 문서화 시간 단축"
        description="1시간 작업이 10–20분으로. 단순 코딩보다 '코드 이해'와 '문서화'에서 더 큰 효과가 나오는 건 공통된 패턴입니다."
      />
    </Series.Sequence>

    {/* 안전 vs 조심 — Compare */}
    <Series.Sequence durationInFrames={340}>
      <CompareSlide
        kicker="영역별 난이도"
        title="안전한 영역 vs 조심해야 할 영역"
        left={{
          title: "비교적 안전",
          tone: "accent",
          bullets: [
            "프론트엔드 UI 구현 (예: 반응형 헤더, 다크모드)",
            "문서가 많은 유명 라이브러리 (React, Tailwind 등)",
            "잘 알려진 알고리즘 (정렬, 탐색 등)",
            "테스트가 있는 기존 코드 수정",
            "스크립트, 일회성 도구",
          ],
        }}
        right={{
          title: "조심해야 함",
          tone: "neutral",
          bullets: [
            "복잡한 동시성 / 경쟁 상태 (예: 분산 잠금)",
            "도메인 특화 비즈니스 룰 (정책, 할인 로직 등)",
            "사내 전용 라이브러리 (훈련 데이터에 없음)",
            "성능 최적화가 걸린 코드 (프로파일링 없이)",
            "보안에 민감한 인증/권한",
          ],
        }}
      />
    </Series.Sequence>

    {/* 함정 1 — BeforeAfter */}
    <Series.Sequence durationInFrames={340}>
      <BeforeAfterSlide
        kicker="함정 1 — 라이브러리 버전"
        title="옛날 API로 자신있게 코드를 줍니다"
        before={{
          label: "AI가 착각한 상태",
          lines: [
            "학습 시점이 정해져 있음",
            "React 19? 18? 헷갈립니다",
            "옛날 API로 작성 → import 에러",
            "겉으론 그럴듯, 실행은 실패",
          ],
        }}
        after={{
          label: "해결 방법",
          lines: [
            "사용 중인 버전을 명시적으로 알려주기",
            "예: 'React 19 App Router 기준'",
            "공식 문서 링크 함께 제공",
            "package.json을 @ 로 첨부",
            "context7 MCP로 최신 공식 문서 자동 주입",
          ],
        }}
      />
    </Series.Sequence>

    {/* 함정 2 — 환각 */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="함정 2 — 환각(hallucination)"
        title="존재하지 않는 함수를 자신있게 호출"
        lead="utils.formatDate() — 그런 함수 없습니다. AI가 '있을 법한' 이름을 만들어버립니다."
        rightLabel="정확한 해결법"
        items={[
          { text: "TypeScript strict 모드로 즉시 포착", sub: "tsc --noEmit 으로 컴파일 타임에 존재 여부 확인" },
          { text: "ESLint import 규칙 활성화", sub: "import/no-unresolved, import/named 규칙으로 없는 export 경고" },
          { text: "AI가 작성 후 빌드·린트를 직접 실행하게 지시", sub: "'작성 후 bun run typecheck 실행해줘'를 항상 붙이기" },
        ]}
      />
    </Series.Sequence>

    {/* BigNumberGrid — 두 연구 */}
    <Series.Sequence durationInFrames={340}>
      <BigNumberGrid
        kicker="숫자로 보는 경고"
        title="AI를 '그냥' 믿으면 벌어지는 일"
        items={[
          {
            stat: "1.7×",
            label: "AI 공동작성 코드의 주요 문제 발생률",
            sub: "CodeRabbit 2025-12 / 보안 취약점은 2.74배 더 높음",
          },
          {
            stat: "-19%",
            label: "경험 많은 개발자의 작업 속도",
            sub: "METR 2025-07 / 본인들은 +24% 기대했지만 실제는 느려짐",
          },
        ]}
      />
    </Series.Sequence>

    {/* 실제 사고 사례 — Bullet */}
    <Series.Sequence durationInFrames={320}>
      <BulletSlide
        kicker="2025년에 실제로 일어난 일들"
        title="AI가 사고 친 사례"
        bullets={[
          {
            text: "2025.05 — Lovable 앱 1,645개 중 170개 개인정보 취약점",
            sub: "VeraCode: AI 생성 코드의 최대 45%에 보안 이슈",
          },
          {
            text: "2025.07 — Replit AI가 명시 지시에도 프로덕션 DB 삭제",
            sub: "권한 범위와 'dry-run' 습관의 중요성",
          },
          {
            text: "2025.09 — Fast Company 'vibe coding hangover' 보도",
          },
        ]}
      />
    </Series.Sequence>

    {/* Callout — copilot */}
    <Series.Sequence durationInFrames={280}>
      <CalloutSlide
        icon="🧭"
        kicker="Addy Osmani (구글 클라우드 AI 디렉터)"
        message={'"AI tools are copilots,\nnot autopilots."'}
      />
    </Series.Sequence>

    {/* Willison 황금 규칙 — Callout */}
    <Series.Sequence durationInFrames={320}>
      <CalloutSlide
        icon="📜"
        kicker="Simon Willison (Django 공동 창립자)의 황금 규칙"
        message={"정확히 설명할 수 없는 코드는\n절대 커밋하지 않는다"}
        sub="이해 없이 머지가 가장 큰 함정입니다. 유지보수·디버깅·확장이 전부 막힙니다."
      />
    </Series.Sequence>

    {/* Compare — Canva CTO */}
    <Series.Sequence durationInFrames={340}>
      <CompareSlide
        kicker="Canva CTO의 정리"
        title="바이브코딩이 잘 맞는 곳 / 안 맞는 곳"
        left={{
          title: "바이브코딩 적합",
          tone: "accent",
          bullets: [
            "Greenfield MVP, 주말 해커톤",
            "개인 스크립트, 일회성 도구",
            "학습 / 탐색 / 브레인스토밍",
            "프로토타이핑 / 아이디어 검증",
            "내부용 도구",
          ],
        }}
        right={{
          title: "신중하게 써야 함",
          tone: "neutral",
          bullets: [
            "프로덕션 결제 / 인증",
            "장기 유지보수가 필요한 코드",
            "보안 / 컴플라이언스 영역",
            "팀 단위 협업 코드베이스",
            "성능 / 확장성이 중요한 시스템",
          ],
        }}
      />
    </Series.Sequence>

    {/* Quote */}
    <Series.Sequence durationInFrames={280}>
      <QuoteSlide
        quote={'"No, you won\'t be vibe coding\nyour way to production."'}
        author="Canva CTO"
      />
    </Series.Sequence>

    {/* 기대치 체크리스트 */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="시작 전에 스스로에게 물어볼 4가지"
        title="기대치 체크리스트"
        items={[
          { text: "이 작업은 패턴이 알려진 작업인가?", sub: "CRUD·UI 같은 흔한 작업이면 GO" },
          { text: "내가 결과를 읽고 판단할 수 있는 영역인가?", sub: "못 읽는다면 위험 신호" },
          { text: "문제가 터졌을 때 롤백이 쉬운가?", sub: "Git 체크포인트가 깨끗한가" },
          { text: "검증 수단(테스트/빌드/스크린샷)이 있는가?", sub: "없으면 객관적 종료 조건도 없음" },
        ]}
        footer="4개 다 '예'면 바이브코딩 아주 잘 맞습니다."
      />
    </Series.Sequence>

    {/* 주니어 경고 — Split */}
    <Series.Sequence durationInFrames={300}>
      <SplitSlide
        kicker="주니어일수록 더 신중하게"
        title={'"Skill Atrophy"\n를 경계하세요'}
        lead="Addy Osmani (구글 클라우드 AI 디렉터)가 경고한 것 — 기초를 모른 채 AI에 의존하면 디버깅도 못 하게 됩니다."
        rightLabel="첫 6개월~1년 습관"
        items={[
          { text: "AI 결과를 한 줄씩 읽기", sub: "'왜 이렇게 짰지?'를 항상 묻기 — 모르면 Claude Code나 ChatGPT를 바로 열어서 물어보세요" },
          { text: "설명하지 못하면 머지하지 않기", sub: "내가 이해한 만큼만 내 코드" },
          { text: "이 습관이 가장 빠르게 느는 길입니다" },
        ]}
      />
    </Series.Sequence>

    {/* 정리 — Checklist */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="1.2 정리"
        title="기억할 두 줄"
        items={[
          {
            text: "AI는 70%를 잘합니다. 30%는 여전히 사람 몫",
            sub: "70%를 과감히 위임하고, 30%는 내가 확인합니다",
          },
          {
            text: "검증 수단이 없는 영역에는 절대 던지지 마세요",
            sub: "'어디서 힘 빼고 어디서 힘 줄지'를 아는 게 곧 실력",
          },
        ]}
      />
    </Series.Sequence>

    {/* 합 = 300+320+320+320+300+340+340+320+320+340+320+280+320+340+280+340+300+340 = ? */}
    {/* 계산: 300+320=620; +320=940; +320=1260; +300=1560; +340=1900; +340=2240; +320=2560; +320=2880; +340=3220; +320=3540; +280=3820; +320=4140; +340=4480; +280=4760; +340=5100; +300=5400; +340=5740 */}
    <Series.Sequence durationInFrames={PART_1_2_DURATION - 5420}>
      <BulletSlide
        kicker="다음 주제 예고"
        title="그럼 어떤 도구로 시작해야 할까?"
        bullets={[
          { text: "Claude Code, Cursor, Lovable, v0, bolt..." },
          { text: "고를 게 너무 많아서 입문의 첫 번째 함정" },
          {
            text: "1.3에서는 도구를 3가지 카테고리로 정리합니다",
            sub: "비교만 하지 말고 한 도구에 몰입하는 것의 중요성",
          },
        ]}
      />
    </Series.Sequence>
  </Series>
);
