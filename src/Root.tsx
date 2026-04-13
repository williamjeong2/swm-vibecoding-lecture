import React from "react";
import { Composition } from "remotion";
import { FPS, WIDTH, HEIGHT } from "./theme";
import { Main, MAIN_DURATION } from "./Main";
import { Part1_1, PART_1_1_DURATION } from "./sections/Part1_1";
import { Part1_2, PART_1_2_DURATION } from "./sections/Part1_2";
import { Part1_3, PART_1_3_DURATION } from "./sections/Part1_3";
import { Part2_1, PART_2_1_DURATION } from "./sections/Part2_1";

const base = { fps: FPS, width: WIDTH, height: HEIGHT };

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 기초반 */}
      <Composition
        id="Main"
        component={Main}
        durationInFrames={MAIN_DURATION}
        {...base}
      />
      <Composition
        id="Part1-1"
        component={Part1_1}
        durationInFrames={PART_1_1_DURATION}
        {...base}
      />
      <Composition
        id="Part1-2"
        component={Part1_2}
        durationInFrames={PART_1_2_DURATION}
        {...base}
      />
      <Composition
        id="Part1-3"
        component={Part1_3}
        durationInFrames={PART_1_3_DURATION}
        {...base}
      />
      <Composition
        id="Part2-1"
        component={Part2_1}
        durationInFrames={PART_2_1_DURATION}
        {...base}
      />

    </>
  );
};
