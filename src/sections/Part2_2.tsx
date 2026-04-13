import React from "react";
import { Series } from "remotion";
import { BulletSlide } from "../components/BulletSlide";
import { StatSlide } from "../components/StatSlide";
import { CalloutSlide } from "../components/CalloutSlide";
import { CompareSlide } from "../components/CompareSlide";
import { CodeBlockSlide } from "../components/CodeBlockSlide";
import { FlowSlide } from "../components/FlowSlide";
import { BeforeAfterSlide } from "../components/BeforeAfterSlide";
import { SplitSlide } from "../components/SplitSlide";
import { ChecklistSlide } from "../components/ChecklistSlide";
import { PromptCardSlide } from "../components/PromptCardSlide";
import { DiagramSlide } from "../components/DiagramSlide";

export const PART_2_2_DURATION = 12000;

// 2.2 작업을 AI가 처리할 수 있는 크기로 분할하기
// 근거: 04, 05, 09 md 파일 + claude --continue/--resume, ! prefix

export const Part2_2: React.FC = () => (
  <Series>
    {/* 도입 — Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="✂️"
        kicker="2.2 분할하기"
        message={"AI에게 전부 던지면\n전부 어설퍼집니다"}
        sub="2.1에서 '큰 요청이 위험하다'는 신호를 봤습니다. 이번엔 구체적으로 어떻게 쪼개는지를 다룹니다"
      />
    </Series.Sequence>

    {/* 덩어리 요청 vs 분할 요청 — BeforeAfter */}
    <Series.Sequence durationInFrames={340}>
      <BeforeAfterSlide
        kicker="같은 기능, 다른 결과"
        title="덩어리 요청 vs 분할 요청"
        before={{
          label: "한 번에 던지면",
          lines: [
            "쇼핑몰 장바구니 전체 만들어줘",
            "추가·삭제·수량·총합·쿠폰·배송비",
            "중간에 방향을 잃고 파일이 꼬임",
            "타입 오류 폭발, 테스트 없음",
            "결국 처음부터 다시",
          ],
        }}
        after={{
          label: "분할하면"  ,
          lines: [
            "Step 1: Cart 타입 + addItem만",
            "Step 2: removeItem + 수량 변경",
            "Step 3: 총합 계산 + 테스트",
            "각 단계마다 커밋",
            "예측 가능한 진행",
          ],
        }}
      />
    </Series.Sequence>

    {/* Stat */}
    <Series.Sequence durationInFrames={300}>
      <StatSlide
        kicker="커뮤니티 검증 패턴"
        stat="1개"
        label="한 번의 요청, 한 가지 기능"
        description="수백 명의 입문자가 검증한 공통 규칙. '한 번에 하나'가 재작업 없이 머지되는 비율을 압도적으로 높입니다. 범위가 클수록 AI도 실수가 늘어납니다."
      />
    </Series.Sequence>

    {/* 분할 3단계 — Flow */}
    <Series.Sequence durationInFrames={340}>
      <FlowSlide
        kicker="어떻게 쪼개나"
        title="분할의 3단계"
        steps={[
          {
            label: "GOAL",
            title: "완료 조건 정의",
            desc: "이 작업이 끝났을 때 어떤 테스트가 통과하는가?",
          },
          {
            label: "CHUNK",
            title: "독립 단위로 자르기",
            desc: "각 조각이 혼자 테스트·커밋 가능한가?",
          },
          {
            label: "SEQUENCE",
            title: "의존성 순서",
            desc: "무엇이 먼저 있어야 다음이 가능한가?",
          },
        ]}
      />
    </Series.Sequence>

    {/* 한 입 크기 기준 — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="얼마나 작게?"
        title="AI가 잘 처리하는 크기"
        lead="1개 요청 = 1개 커밋 단위. 파일 수와 책임의 범위로 판단하세요."
        rightLabel="크기 기준"
        items={[
          { text: "변경 파일 1~3개 이내", sub: "그 이상이면 계획이 먼저입니다" },
          { text: "30분 안에 검증 가능한 작업", sub: "2시간이 걸리면 반드시 더 잘라야 합니다" },
          { text: "실패해도 git reset 1번으로 되돌릴 수 있는 범위" },
        ]}
      />
    </Series.Sequence>

    {/* 실전 분할 예시 — CodeBlock */}
    <Series.Sequence durationInFrames={340}>
      <CodeBlockSlide
        kicker="실전 예시"
        title="장바구니 기능을 5단계로"
        description="하나의 큰 요청을 독립적인 커밋 단위로 쪼깁니다. 각 단계가 끝나면 커밋."
        filename="분할 계획"
        language="bash"
        codeFontSize={22}
        code={`# ❌ 한 번에 너무 많이
"쇼핑몰 장바구니 전체 구현해줘 —
 상품 추가·삭제·수량·총합·쿠폰·배송비·주문처리까지"

# ✅ 5단계로 분할
Step 1: "Cart 타입 정의만 해줘. 파일은 types/cart.ts"
Step 2: "@types/cart.ts 보고 addItem 훅 구현 + 테스트"
Step 3: "removeItem, updateQty 추가. 기존 테스트 유지"
Step 4: "총합 계산 selector. 구현 후 bun test 실행해줘"
Step 5: "CartPanel UI — @step4 훅 연결"`}
      />
    </Series.Sequence>

    {/* 요청 비교 — PromptCard */}
    <Series.Sequence durationInFrames={360}>
      <PromptCardSlide
        kicker="프롬프트 비교"
        title="같은 기능, 다른 요청"
        turns={[
          {
            role: "user",
            text: '"@src/cart/ 장바구니 전체 구현 — 추가·수량·쿠폰·배송비·주문까지"',
          },
          {
            role: "ai",
            text: "범위가 너무 넓어 일부만 구현됩니다. 쿠폰·배송비 로직이 충돌하고, 테스트 없이 진행돼 나중에 버그 폭발.",
          },
          {
            role: "user",
            text: '"Step 1만: @types/cart.ts에 CartItem·Cart 타입 정의만 해줘. 구현 후 bun run typecheck 실행해줘."',
          },
          {
            role: "ai",
            text: "명확한 범위로 한 번에 완성 → 타입체크 통과 → 커밋. 다음 Step 준비 완료.",
          },
        ]}
      />
    </Series.Sequence>

    {/* Git 체크포인트 — Callout */}
    <Series.Sequence durationInFrames={280}>
      <CalloutSlide
        icon="💾"
        kicker="분할과 함께 반드시"
        message={"작업 단위마다\nGit 커밋"}
        sub="체크포인트 없이는 AI가 망가뜨린 것도 되돌릴 수 없습니다"
      />
    </Series.Sequence>

    {/* claude --continue / --resume — CodeBlock */}
    <Series.Sequence durationInFrames={320}>
      <CodeBlockSlide
        kicker="세션 재개 — 내일도 이어서"
        title="--continue / --resume"
        description="Claude Code는 이전 대화를 기억합니다. 커밋 후 다음 날에도, 다른 터미널에서도 이어서 작업할 수 있습니다."
        filename="terminal"
        language="bash"
        code={`# 가장 최근 대화 이어서
$ claude --continue

# 대화 목록에서 직접 선택
$ claude --resume

# 체크포인트 커밋 후 다음 날 재개
$ claude --continue
> 어제 Step 2까지 했어.
> Step 3: removeItem + updateQty 구현 이어서 해줘.`}
      />
    </Series.Sequence>

    {/* ! prefix — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="Claude 세션 안에서 셸 직접 실행"
        title={'! 접두사 — 인라인 셸'}
        lead="Claude에게 묻기 전에 현재 상태를 직접 확인할 수 있습니다. 실행 결과가 자동으로 대화 컨텍스트에 추가됩니다."
        rightLabel="활용 예"
        items={[
          { text: "! git status", sub: "현재 변경된 파일을 Claude에게도 보여주기" },
          { text: "! bun run typecheck", sub: "검증 결과를 바로 컨텍스트에 추가" },
          { text: "! ls src/api/", sub: "작업 전 파일 구조 파악" },
        ]}
      />
    </Series.Sequence>

    {/* 작업-커밋 사이클 — Flow */}
    <Series.Sequence durationInFrames={320}>
      <FlowSlide
        kicker="실전 루틴"
        title="한 사이클, 한 커밋"
        steps={[
          { label: "1", title: "요청", desc: "분할된 하나의 작업만 던지기" },
          { label: "2", title: "구현", desc: "AI가 파일 수정" },
          { label: "3", title: "검증", desc: "! bun test 또는 빌드 확인" },
          { label: "4", title: "커밋", desc: '"변경 사항 설명적인 메시지로 커밋해줘"' },
        ]}
      />
    </Series.Sequence>

    {/* 수직 vs 수평 분할 — Compare */}
    <Series.Sequence durationInFrames={340}>
      <CompareSlide
        kicker="분할 전략 2가지"
        title="기능별 분할 vs 레이어별 분할"
        left={{
          title: "기능별 분할 (수직)",
          tone: "neutral",
          bullets: [
            "로그인 → 회원가입 → 비밀번호 재설정",
            "독립적인 기능을 순서대로",
            "각 기능이 E2E로 완성됨",
            "Greenfield 프로젝트에 적합",
            "기획 단위와 일치해 소통 쉬움",
          ],
        }}
        right={{
          title: "레이어별 분할 (수평)",
          tone: "neutral",
          bullets: [
            "타입 정의 → API 계층 → UI → 테스트",
            "의존성 순서대로",
            "기반이 튼튼하게 쌓임",
            "기존 코드베이스 확장에 적합",
            "리팩토링에도 잘 맞음",
          ],
        }}
      />
    </Series.Sequence>

    {/* 분할 결정 필터 — Diagram */}
    <Series.Sequence durationInFrames={340}>
      <DiagramSlide
        kicker="분할 결정 필터"
        title="4가지를 통과하면 시작하세요"
        layers={[
          {
            label: "FILTER 1",
            title: "커밋 메시지를 한 줄로 쓸 수 있는가?",
            desc: "NO → 아직 너무 큽니다. 더 쪼개세요",
          },
          {
            label: "FILTER 2",
            title: "변경 파일이 3개 이하인가?",
            desc: "NO → 레이어별로 다시 나누세요",
          },
          {
            label: "FILTER 3",
            title: "의존하는 기능이 이미 완성됐는가?",
            desc: "NO → 선행 작업 먼저",
          },
          {
            label: "GO ✓",
            title: "검증 수단이 있는가?",
            desc: "YES → 지금 시작하세요",
          },
        ]}
        caption="4개 필터를 모두 통과한 작업은 AI가 잘 처리할 수 있는 크기입니다."
      />
    </Series.Sequence>

    {/* 제자리 반복 탈출 — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="같은 실패가 반복된다면"
        title={"제자리 반복을\n알아채세요"}
        lead="같은 요청에 같은 실패가 반복되면 컨텍스트가 오염된 신호입니다. 고집하지 말고 재시작하세요."
        rightLabel="탈출법"
        items={[
          { text: "3번 실패 → /clear 후 더 작게 쪼개기", sub: "범위를 절반으로 줄이고 재시작" },
          { text: "Plan Mode로 돌아가 계획 재수립", sub: "구현보다 계획이 먼저입니다" },
          { text: "claude --continue로 다음 날 신선한 상태로", sub: "오래된 컨텍스트도 원인이 될 수 있습니다" },
        ]}
      />
    </Series.Sequence>

    {/* 분할 전 체크 — Checklist */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="요청 전 확인"
        title="분할 4-체크"
        items={[
          {
            text: "이 작업을 커밋 메시지 한 줄로 쓸 수 있는가?",
            sub: "쓸 수 없다면 아직 너무 큽니다",
          },
          { text: "변경될 파일이 3개 이하인가?" },
          { text: "의존하는 기능이 이미 구현되어 있는가?" },
          {
            text: "테스트·빌드·스크린샷으로 완료를 확인할 수 있는가?",
            sub: "검증 수단이 없으면 종료 조건도 없습니다",
          },
        ]}
        footer="4개 모두 '예'면 지금 시작하세요."
      />
    </Series.Sequence>

    {/* 2.2 정리 — Checklist */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="2.2 정리"
        title="기억할 세 줄"
        items={[
          {
            text: "1 요청 = 1 커밋 단위. 커밋 메시지 한 줄 못 쓰면 너무 큰 것",
          },
          {
            text: "작업마다 Git 체크포인트. --continue로 내일도 이어서",
            sub: "! git status로 상태 확인, 다음 Step으로 이동",
          },
          {
            text: "같은 실패 3번 = /clear 신호. 더 작게 쪼개고 재시작",
          },
        ]}
      />
    </Series.Sequence>

    {/* 합계:
      300+340+300+340+320+340+360+280+320+320+320+340+320+340+340 = 4880
    */}
    <Series.Sequence durationInFrames={PART_2_2_DURATION - 5220}>
      <BulletSlide
        kicker="다음 파트 예고"
        title="분할했다, 그 다음은?"
        bullets={[
          { text: "쪼개서 만들어도 검증 없이 머지하면 끝이 아닙니다" },
          { text: "2.3에서는 '검증하기' — 완성을 확인하는 방법" },
          { text: "자동·수동·이해 3층 검증으로 안전하게 머지하는 법" },
        ]}
      />
    </Series.Sequence>
  </Series>
);
