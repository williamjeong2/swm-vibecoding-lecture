import React from "react";
import { Series } from "remotion";
import { BulletSlide } from "../components/BulletSlide";
import { QuoteSlide } from "../components/QuoteSlide";
import { StatSlide } from "../components/StatSlide";
import { TimelineSlide } from "../components/TimelineSlide";
import { CalloutSlide } from "../components/CalloutSlide";
import { FlowSlide } from "../components/FlowSlide";
import { BeforeAfterSlide } from "../components/BeforeAfterSlide";
import { SplitSlide } from "../components/SplitSlide";
import { ChecklistSlide } from "../components/ChecklistSlide";
import { BigNumberGrid } from "../components/BigNumberGrid";

export const PART_1_1_DURATION = 12000;

// 1.1 바이브코딩이 뭔지, 그냥 AI에게 시키는 것과 뭐가 다른지
// 근거: 01-vibe-coding-concept.md, 10-social-insights.md

export const Part1_1: React.FC = () => (
  <Series>
    {/* 도입: Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="🌊"
        kicker="1.1 바이브코딩의 정의"
        message={"단어 하나가\n산업을 흔들었습니다"}
        sub="2025년 2월, 한 트윗에서 시작된 이야기"
      />
    </Series.Sequence>

    {/* 원문 인용 */}
    <Series.Sequence durationInFrames={340}>
      <QuoteSlide
        quote={
          '"There\'s a new kind of coding I call vibe coding,\nwhere you fully give in to the vibes,\nembrace exponentials,\nand forget that the code even exists."'
        }
        author="Andrej Karpathy, 2025년 2월 (@karpathy)"
      />
    </Series.Sequence>

    {/* 핵심 의미 — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="원문이 말하는 것"
        title={"핵심은\n'코드의 존재를 잊는다'"}
        lead="개발자가 결과만 보고 판단한다는 뜻입니다. 코드 그 자체는 들여다보지 않습니다."
        rightLabel="KARPATHY의 행동 양식"
        items={[
          { text: "diff를 읽지 않고 모든 변경을 수락", sub: '"나는 그냥 보고, 말하고, 실행하고, 붙여넣는다"' },
          { text: "에러 메시지를 그대로 AI에 복붙", sub: "디버깅도 AI에게 던져버림" },
          { text: "결과(동작)로만 성공 여부를 판단" },
        ]}
      />
    </Series.Sequence>

    {/* 타임라인 — 용어 확산 */}
    <Series.Sequence durationInFrames={340}>
      <TimelineSlide
        kicker="한 단어가 사전까지 간 과정"
        title="바이브코딩 용어 타임라인"
        events={[
          {
            date: "2025.02",
            title: "Karpathy의 트윗",
            desc: "조회수 450만. 단어 하나가 퍼지기 시작",
          },
          {
            date: "2025.03",
            title: "Merriam-Webster 등재",
            desc: "'슬랭 & 트렌딩' 표현으로 공식 등록",
          },
          {
            date: "2025.07",
            title: "Wall Street Journal 보도",
            desc: "상업적 활용 사례가 주요 매체에 소개",
          },
          {
            date: "2025.12",
            title: "Collins '올해의 단어'",
            desc: "단어 하나가 1년 만에 산업 용어로",
          },
        ]}
      />
    </Series.Sequence>

    {/* Stat */}
    <Series.Sequence durationInFrames={300}>
      <StatSlide
        kicker="Y Combinator 2025 Winter 배치"
        stat="25%"
        label="스타트업 코드의 95%가 AI 생성"
        description="Y Combinator의 4분의 1이 이미 거의 모든 코드를 AI로 짜고 있습니다. 변두리 실험이 아니라 주류 작업 방식입니다."
      />
    </Series.Sequence>

    {/* 오해 — Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="⚠️"
        kicker="가장 많이 헷갈리는 지점"
        message={'"AI에게 코드 시키면\n다 바이브코딩이다"?'}
        sub="아닙니다. 검토·테스트·이해가 있다면 그건 전혀 다른 이야기입니다"
      />
    </Series.Sequence>

    {/* Willison 인용 */}
    <Series.Sequence durationInFrames={340}>
      <QuoteSlide
        quote={
          '"If an LLM wrote every line of your code,\nbut you\'ve reviewed, tested, and understood it all,\nthat\'s not vibe coding —\nthat\'s using an LLM as a typing assistant."'
        }
        author="Simon Willison (Django 공동 창립자), 2025년 3월"
      />
    </Series.Sequence>

    {/* Before/After — 원조 vs 보조개발 */}
    <Series.Sequence durationInFrames={340}>
      <BeforeAfterSlide
        kicker="두 접근법의 핵심 차이"
        title="원조 바이브코딩 vs AI 보조 개발"
        before={{
          label: "원조 바이브코딩",
          lines: [
            "AI가 모든 코드 생성",
            "개발자는 코드 검토 안 함",
            "결과(동작)로만 평가",
            "코드 이해 부재가 정의의 일부",
            "프로토타입·해커톤에 적합",
          ],
        }}
        after={{
          label: "AI 보조 개발",
          lines: [
            "AI가 코드 생성을 '보조'",
            "개발자가 모든 코드 검토",
            "설계 결정은 사람이 담당",
            "아키텍처 판단도 사람이 담당",
            "프로덕션에도 적용 가능",
          ],
        }}
      />
    </Series.Sequence>

    {/* Osmani 인용 */}
    <Series.Sequence durationInFrames={320}>
      <QuoteSlide
        quote={
          '"AI does the implementation,\nhuman owns the architecture,\nquality, and correctness."'
        }
        author="Addy Osmani (구글 클라우드 AI 디렉터) — 에이전틱 엔지니어링"
      />
    </Series.Sequence>

    {/* 이 강의 입장 */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="이 강의에서 말하는 '바이브코딩'"
        title={"원조보다는\n에이전틱 엔지니어링에 가깝습니다"}
        lead="'다 맡기고 잊어버리기'가 아니라, AI에게 일을 시키되 사람이 흐름을 쥐고 검증합니다."
        rightLabel="REFRAMED"
        items={[
          { text: "Karpathy도 1년 후 본인 트윗을 회고", sub: '"아무 생각 없이 던진 샤워 생각이었다"' },
          { text: "그가 지금 권하는 건 Agentic Engineering", sub: "감시(oversight)와 검증(verification)을 강화한 형태" },
          { text: "사람이 판단과 검증을 쥐는 방식" },
        ]}
      />
    </Series.Sequence>

    {/* 그냥 시키기의 모습 — BeforeAfter */}
    <Series.Sequence durationInFrames={340}>
      <BeforeAfterSlide
        kicker="'그냥 AI에 시키기' vs '바이브코딩'"
        title="실전에서 본 차이"
        before={{
          label: "그냥 AI에 시키기",
          lines: [
            "한 번에 큰 요구를 던짐",
            "결과를 그대로 복붙",
            "맥락(스택, 컨벤션) 미제공",
            "에러는 '고쳐줘'로 일관",
            "검증은 AI에 떠넘김",
          ],
        }}
        after={{
          label: "바이브코딩",
          lines: [
            "프로젝트 맥락을 먼저 심음",
            "작은 단위로 쪼개서 요청",
            "관련 파일을 직접 지목",
            "에러 원문 그대로 전달",
            "결과를 사람이 직접 확인",
          ],
        }}
      />
    </Series.Sequence>

    {/* 역할 변화 — Flow */}
    <Series.Sequence durationInFrames={320}>
      <FlowSlide
        kicker="개발자의 역할 변화"
        title={'코더 → "감독자"로'}
        steps={[
          {
            label: "BEFORE",
            title: "코드를 짠다",
            desc: "'어떻게 짜지?'에 집중. 손가락 노동이 전부",
          },
          {
            label: "NOW",
            title: "방향을 잡는다",
            desc: "'무엇을 만들까?'에 집중. AI에게 일을 시킴",
          },
          {
            label: "VERIFY",
            title: "읽고 판단한다",
            desc: "검증·판단에 쓰는 시간이 오히려 늘어납니다",
          },
        ]}
      />
    </Series.Sequence>

    {/* Ng 비판 — Callout */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="🧐"
        kicker="Andrew Ng (2025년 6월)"
        message={'"용어 자체가\n오해를 부른다"'}
        sub="낭만적인 단어지만 실제는 굉장히 구조적인 작업입니다"
      />
    </Series.Sequence>

    {/* Anthropic 인용 */}
    <Series.Sequence durationInFrames={300}>
      <QuoteSlide
        quote={
          '"팀은 Claude Code를 코드 생성기가 아니라\n사고 파트너로 취급할 때 가장 성공한다."'
        }
        author="Anthropic 내부 관찰"
      />
    </Series.Sequence>

    {/* 3가지 기둥 — Flow vertical */}
    <Series.Sequence durationInFrames={340}>
      <FlowSlide
        kicker="이걸 가능하게 하는 3가지 기둥"
        title="이번 강의의 뼈대"
        steps={[
          {
            label: "CONTEXT",
            title: "맥락",
            desc: "프로젝트가 무엇이고 어떤 규칙으로 돌아가는지를 AI에게 심어주기",
          },
          {
            label: "DECOMPOSE",
            title: "분할",
            desc: "거대한 요구를 AI가 한 입에 처리할 크기로 쪼개기",
          },
          {
            label: "VERIFY",
            title: "검증",
            desc: "결과가 의도와 같은지 매번 사람이 직접 확인",
          },
        ]}
      />
    </Series.Sequence>

    {/* 시간 비율 — BigNumberGrid */}
    <Series.Sequence durationInFrames={320}>
      <BigNumberGrid
        kicker="뭐가 달라진 거야?"
        title="일하는 방식의 비중이 바뀌었습니다"
        items={[
          {
            stat: "↓ 10배",
            label: "타이핑 시간",
            sub: "코드 작성 자체에 쏟던 시간이 크게 줄었습니다",
          },
          {
            stat: "↑ 8배",
            label: "설계·검증 시간",
            sub: "AI에게 맡긴 만큼, 판단하고 검토하는 시간이 늘어납니다",
          },
        ]}
      />
    </Series.Sequence>

    {/* 정리 — Checklist */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="1.1 정리"
        title="기억할 세 줄"
        items={[
          {
            text: "바이브코딩 = AI가 코드를 짜고 사람이 흐름을 쥐는 방식",
            sub: "검토·검증 없이 던지는 건 그냥 '떠넘기기'일 뿐",
          },
          {
            text: "맥락·분할·검증 3가지가 이 강의의 뼈대",
            sub: "이 3개가 결과물의 품질을 결정",
          },
          {
            text: "다음 1.2에서는 '잘 되는 것 / 아직 어려운 것'",
            sub: "기대치를 잘못 잡으면 시간만 날립니다",
          },
        ]}
        footer="겉모습은 비슷하지만 결과물은 10배 차이가 납니다."
      />
    </Series.Sequence>

    {/* 채움: 합계 맞추기. 위 17개 슬라이드 합 = 5480. 남은 = 6520. */}
    <Series.Sequence durationInFrames={PART_1_1_DURATION - 5480}>
      <BulletSlide
        kicker="다음 파트 예고"
        title="그래서, 뭘 할 수 있을까?"
        bullets={[
          {
            text: "기대치를 잘못 잡으면 AI는 쉽게 실망을 줍니다",
            sub: "'되는 것'과 '아직 어려운 것'의 경계를 아는 게 중요합니다",
          },
          {
            text: "1.2에서는 이 경계를 하나씩 그려봅니다",
            sub: "어디서 힘 빼고, 어디서 힘 줄지 — 구체적인 가이드",
          },
        ]}
      />
    </Series.Sequence>
  </Series>
);
