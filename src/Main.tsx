import React from "react";
import { Series } from "remotion";
import { TitleSlide } from "./components/TitleSlide";
import { SectionIntro } from "./components/SectionIntro";
import { Part1_1, PART_1_1_DURATION } from "./sections/Part1_1";
import { Part1_2, PART_1_2_DURATION } from "./sections/Part1_2";
import { Part1_3, PART_1_3_DURATION } from "./sections/Part1_3";
import { Part2_1, PART_2_1_DURATION } from "./sections/Part2_1";

export const INTRO_DURATION = 300;
export const OUTRO_DURATION = 300;
export const SECTION_INTRO_DURATION = 180;

export const MAIN_DURATION =
  INTRO_DURATION +
  SECTION_INTRO_DURATION +
  PART_1_1_DURATION +
  PART_1_2_DURATION +
  PART_1_3_DURATION +
  SECTION_INTRO_DURATION +
  PART_2_1_DURATION +
  OUTRO_DURATION;

export const Main: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={INTRO_DURATION}>
      <TitleSlide
        tag="SWM Lecture"
        title="바이브코딩 실전 가이드"
        subtitle="AI와 함께 제대로 코드 짜는 법"
      />
    </Series.Sequence>

    <Series.Sequence durationInFrames={SECTION_INTRO_DURATION}>
      <SectionIntro
        number="1"
        title={"바이브코딩이\n뭔지, 왜 지금인지"}
        subtitle="정의, 가능성, 그리고 도구 선택"
      />
    </Series.Sequence>
    <Series.Sequence durationInFrames={PART_1_1_DURATION}>
      <Part1_1 />
    </Series.Sequence>
    <Series.Sequence durationInFrames={PART_1_2_DURATION}>
      <Part1_2 />
    </Series.Sequence>
    <Series.Sequence durationInFrames={PART_1_3_DURATION}>
      <Part1_3 />
    </Series.Sequence>

    <Series.Sequence durationInFrames={SECTION_INTRO_DURATION}>
      <SectionIntro
        number="2"
        title={"결과물을\n만들기 위해서는?"}
        subtitle="맥락 구성하기"
      />
    </Series.Sequence>
    <Series.Sequence durationInFrames={PART_2_1_DURATION}>
      <Part2_1 />
    </Series.Sequence>

    <Series.Sequence durationInFrames={OUTRO_DURATION}>
      <TitleSlide
        tag="감사합니다"
        title="이제 여러분 차례"
        subtitle="오늘부터 CLAUDE.md 한 줄부터 시작해보세요"
      />
    </Series.Sequence>
  </Series>
);
