import React from "react";
import { Series } from "remotion";
import { BulletSlide } from "../components/BulletSlide";
import { QuoteSlide } from "../components/QuoteSlide";
import { StatSlide } from "../components/StatSlide";
import { CalloutSlide } from "../components/CalloutSlide";
import { CompareSlide } from "../components/CompareSlide";
import { ComparisonTable } from "../components/ComparisonTable";
import { CodeBlockSlide } from "../components/CodeBlockSlide";
import { FlowSlide } from "../components/FlowSlide";
import { SplitSlide } from "../components/SplitSlide";
import { ChecklistSlide } from "../components/ChecklistSlide";

export const PART_1_3_DURATION = 12000;

// 1.3 어떤 도구를 선택해야 하는가
// 근거: 02, 03, 07, 08, 10 md 파일

export const Part1_3: React.FC = () => (
  <Series>
    {/* 도입 */}
    <Series.Sequence durationInFrames={300}>
      <CalloutSlide
        icon="🛠"
        kicker="1.3 도구 선택"
        message={"도구가 너무 많습니다.\n뭐부터 시작할까?"}
        sub="Claude Code, Cursor, Lovable, v0, bolt... 고르는 데만 시간 다 보내는 게 입문자의 함정"
      />
    </Series.Sequence>

    {/* 3가지 카테고리 — Flow */}
    <Series.Sequence durationInFrames={340}>
      <FlowSlide
        kicker="먼저 분류부터"
        title="도구는 크게 3가지 종류"
        steps={[
          {
            label: "AGENT",
            title: "에이전트형",
            desc: "Claude Code, Codex CLI, Aider — 터미널에서 AI가 스스로 파일 읽고, 수정하고, 명령 실행",
          },
          {
            label: "IDE",
            title: "IDE형",
            desc: "Cursor, Copilot, Windsurf — 내가 코드를 쓰고 AI는 옆에서 제안/부분 수정",
          },
          {
            label: "WEB",
            title: "웹형",
            desc: "Lovable, v0, bolt.new — 브라우저에 한 줄 입력하면 앱이 뚝딱, 배포까지",
          },
        ]}
      />
    </Series.Sequence>

    {/* 에이전트형 정의 — Quote */}
    <Series.Sequence durationInFrames={300}>
      <QuoteSlide
        quote={
          '"코드베이스를 읽고, 파일을 편집하고,\n명령을 실행하며, 개발 도구와 통합되는\n에이전트 코딩 도구"'
        }
        author="Anthropic 공식 — 에이전트형의 정의"
      />
    </Series.Sequence>

    {/* Claude Code 성장 Stat */}
    <Series.Sequence durationInFrames={300}>
      <StatSlide
        kicker="Claude Code 성장"
        stat="$1B"
        label="6개월 만의 run-rate 매출"
        description="2025년 5월 정식 출시 후 12월에 연환산 매출 10억 달러 돌파. Netflix, Spotify, KPMG, L'Oréal, Salesforce 같은 회사들이 실무에 도입했습니다."
      />
    </Series.Sequence>

    {/* Claude Code 강점 — Bullet */}
    <Series.Sequence durationInFrames={320}>
      <BulletSlide
        kicker="Claude Code의 강점"
        title="긴 작업을 끝까지 해낸다"
        bullets={[
          {
            text: "전체 코드베이스를 자동으로 탐색",
            sub: "열린 파일만 보는 IDE형과 가장 다른 점",
          },
          {
            text: "테스트, 빌드, Git 작업을 직접 실행",
            sub: '"commit my changes with a descriptive message"',
          },
          {
            text: "CLAUDE.md를 매 세션 시작 시 자동으로 읽음",
            sub: "프로젝트 규칙을 영구적으로 심어둘 수 있습니다",
          },
          {
            text: "MCP로 Slack, Jira, Drive 같은 외부 도구 연결",
          },
        ]}
      />
    </Series.Sequence>

    {/* 설치 — CodeBlock */}
    <Series.Sequence durationInFrames={300}>
      <CodeBlockSlide
        kicker="Claude Code 설치"
        title="실제로는 한 줄입니다"
        description="macOS / Linux / WSL은 curl 한 줄로 끝. 그 다음 아무 폴더에서 'claude' 입력 후 로그인하면 됩니다."
        filename="terminal"
        language="bash"
        code={`# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex

# 어느 프로젝트 폴더에서든
$ cd my-project
$ claude
✓ Logged in as you@example.com`}
      />
    </Series.Sequence>

    {/* Codex CLI — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="OpenAI Codex CLI"
        title={"ChatGPT 구독자에게\n가장 자연스러운 선택"}
        lead="Rust로 짜여진 경량 터미널 에이전트. GitHub 73,000+ 스타, Apache-2.0 오픈소스."
        rightLabel="핵심 포인트"
        items={[
          { text: "Sign in with ChatGPT", sub: "Plus($20) 구독에 포함, 추가 비용 없음" },
          { text: "설치: npm install -g @openai/codex" },
          { text: "Suggest / Auto / Full-Auto 3단계 승인 모드", sub: "얼마나 자동화에 맡길지 직접 선택" },
        ]}
      />
    </Series.Sequence>

    {/* ★ ComparisonTable — Claude Code vs Codex vs Cursor vs Lovable */}
    <Series.Sequence durationInFrames={360}>
      <ComparisonTable
        kicker="도구 정면 비교"
        title="4개 도구 한 눈에"
        headers={["", "Claude Code", "Codex CLI", "Cursor", "Lovable"]}
        highlightColumn={1}
        rows={[
          ["유형", "에이전트형", "에이전트형", "IDE형", "웹형"],
          ["제공사", "Anthropic", "OpenAI", "Anysphere", "Lovable"],
          ["주 모델", "Claude Sonnet/Opus", "GPT-5.x Codex", "선택(Claude/GPT)", "내장"],
          ["코드베이스 이해", "강함(자동 탐색)", "강함", "열린 파일 위주", "신규 생성 특화"],
          ["영구 지침", "CLAUDE.md", "AGENTS.md", "Rules", "프롬프트"],
          ["가격", "Pro $20 / Max $100~", "ChatGPT Plus 포함", "Pro $20", "무료~유료"],
          ["추천 용도", "긴 작업·본업 코드", "ChatGPT 유저", "타이핑 리듬 유지", "0→1 프로토타입"],
        ]}
      />
    </Series.Sequence>

    {/* 웹형 — Bullet */}
    <Series.Sequence durationInFrames={320}>
      <BulletSlide
        kicker="웹형 — Lovable, v0, bolt.new"
        title="아이디어 검증엔 웹형이 최고"
        bullets={[
          {
            text: "브라우저에 '쇼핑몰 랜딩 만들어줘' 한 줄",
            sub: "2-3분만에 배포 URL까지 나옵니다",
          },
          {
            text: "준비물 0, 환경설정 0",
            sub: "비개발자도 그대로 시작할 수 있는 유일한 카테고리",
          },
          {
            text: "Lovable: 풀스택 빌더, GitHub 자동 동기화",
          },
          {
            text: "v0 (Vercel): UI 컴포넌트 / Next.js 특화",
          },
          {
            text: "bolt.new (StackBlitz): 브라우저 풀스택",
          },
        ]}
      />
    </Series.Sequence>

    {/* 상황별 가이드 — Compare */}
    <Series.Sequence durationInFrames={340}>
      <CompareSlide
        kicker="언제 무엇을 쓸까"
        title="상황별 가이드"
        left={{
          title: "이럴 땐 웹형",
          tone: "neutral",
          bullets: [
            "아이디어를 하루 안에 검증",
            "프로토타입이 목적",
            "환경 구축이 부담",
            "비개발자에게 보여줄 용도",
            "데모 / 발표용",
          ],
        }}
        right={{
          title: "이럴 땐 에이전트형",
          tone: "accent",
          bullets: [
            "실제 제품을 만들 때",
            "기존 프로젝트를 이어갈 때",
            "테스트 / 빌드까지 자동화",
            "여러 파일을 한 번에 수정",
            "CI/CD에 붙여야 할 때",
          ],
        }}
      />
    </Series.Sequence>

    {/* 고를 때 기준 — Checklist */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="도구를 고를 때 기준"
        title="딱 3가지만 보면 됩니다"
        items={[
          {
            text: "내 기존 워크플로우와 잘 섞이는가",
            sub: "안 섞이면 아무리 좋아도 안 쓰게 돼요",
          },
          {
            text: "긴 작업을 끝까지 해내는가",
            sub: "10분 작업은 전부 잘합니다. 2시간 작업에서 갈립니다",
          },
          {
            text: "맥락(context)을 얼마나 실어갈 수 있는가",
            sub: "이게 결국 결과물의 품질을 결정합니다",
          },
        ]}
      />
    </Series.Sequence>

    {/* 입문자 추천 조합 — Split */}
    <Series.Sequence durationInFrames={320}>
      <SplitSlide
        kicker="입문자라면"
        title={"저는 이 조합을\n추천합니다"}
        lead="하나로 다 하려 하지 말고, 역할을 나눠서 가벼운 조합으로 시작하세요."
        rightLabel="RECOMMENDED STACK"
        items={[
          { text: "메인: Claude Code", sub: "터미널이 익숙하지 않아도 1시간만 만지면 충분" },
          { text: "프로토타입: Lovable 또는 v0", sub: "주말 아이디어 빠른 검증" },
          { text: "ChatGPT Plus 이미 있다면 Codex CLI 병행", sub: "두 에이전트 결과 비교는 좋은 학습" },
        ]}
      />
    </Series.Sequence>

    {/* 공식 학습 자료 — Bullet */}
    <Series.Sequence durationInFrames={300}>
      <BulletSlide
        kicker="공식 학습 자료"
        title="시간 아끼는 길은 공식 강좌부터"
        bullets={[
          {
            text: "Claude Code in Action — Anthropic 공식 무료 강좌",
            sub: "anthropic.skilljar.com / 약 2시간 37분 / 4개 모듈",
          },
          {
            text: "Coursera 미러: 12,600+ 수강생, 별점 4.5/5.0",
          },
          {
            text: "한국어 자료: cc101.axwith.com",
            sub: "설치부터 MCP, Skills까지 공식 문서 기반 정리",
          },
        ]}
      />
    </Series.Sequence>

    {/* Quote */}
    <Series.Sequence durationInFrames={300}>
      <QuoteSlide
        quote={
          '"도구를 비교하는 데 시간을 다 쓰지 마세요.\n2주만 한 도구에 깊게 몰입해보면\n어떤 게 안 맞는지가 저절로 보입니다."'
        }
      />
    </Series.Sequence>

    {/* Claude Code 기본 명령어 모음 — CodeBlock */}
    <Series.Sequence durationInFrames={320}>
      <CodeBlockSlide
        kicker="Claude Code 기본 명령어"
        title="알아두면 편한 명령어들"
        description="세션 재개·사용량 확인·승인 모드 — 도구를 고른 뒤 바로 쓸 명령어들입니다."
        filename="terminal / claude (REPL)"
        language="bash"
        codeFontSize={22}
        code={`# 세션 관리
claude --continue    # 가장 최근 대화 이어서
claude --resume      # 대화 목록에서 선택

# 사용량 확인
/usage    # 현재 세션 토큰·비용
/stats    # 전체 통계

# 승인 모드 조절
--auto-edit   # 파일 수정 자동, 커밋은 수동
--full-auto   # 전부 자동 (신뢰된 작업에만!)`}
      />
    </Series.Sequence>

    {/* 첫 30분 — Flow */}
    <Series.Sequence durationInFrames={340}>
      <FlowSlide
        kicker="고르고 나면 해야 할 일"
        title="첫 30분에 할 것"
        steps={[
          {
            label: "1",
            title: "설치 & 실행",
            desc: "claude 또는 codex 명령을 띄워봅니다",
          },
          {
            label: "2",
            title: "탐색",
            desc: "'이 프로젝트 설명해줘' 시켜보기",
          },
          {
            label: "3",
            title: "/init",
            desc: "CLAUDE.md (또는 AGENTS.md) 자동 생성",
          },
          {
            label: "4",
            title: "첫 사이클",
            desc: "한 줄 변경 → 커밋까지 한 사이클 돌리기",
          },
        ]}
      />
    </Series.Sequence>

    {/* 정리 — Checklist */}
    <Series.Sequence durationInFrames={340}>
      <ChecklistSlide
        kicker="1.3 정리"
        title="기억할 두 줄"
        items={[
          {
            text: "에이전트형(터미널) 1개 + 학습·질문용 AI 채팅 1개",
            sub: "Claude Code + Claude.ai(또는 ChatGPT) 조합 추천",
          },
          {
            text: "비교만 하지 말고 하나 정해서 2주만 깊게",
            sub: "그 다음은 Part 2에서 '결과물을 잘 만드는 법'",
          },
        ]}
      />
    </Series.Sequence>

    {/* 합계: 300+340+300+300+320+300+320+360+320+320+300+340+300+340+320+300+300+340+340 = ? */}
    {/* 300+340=640; +300=940; +300=1240; +320=1560; +300=1860; +320=2180; +360=2540; +320=2860; +320=3180; +300=3480; +340=3820; +300=4120; +340=4460; +320=4780; +300=5080; +300=5380; +340=5720; +340=6060 */}
    <Series.Sequence durationInFrames={PART_1_3_DURATION - 5460}>
      <BulletSlide
        kicker="다음 파트 예고"
        title="도구를 골랐다, 그 다음은?"
        bullets={[
          { text: "도구를 깔았다고 결과물이 좋아지진 않습니다" },
          { text: "Part 2에서는 '결과물을 잘 만드는 법'을 다룹니다" },
          { text: "그 시작은 '맥락(Context) 구성하기' 입니다" },
        ]}
      />
    </Series.Sequence>
  </Series>
);
