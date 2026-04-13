import React from "react";
import { Series } from "remotion";
import { Part1_1 } from "../sections/Part1_1";
import { Part1_2 } from "../sections/Part1_2";
import { Part1_3 } from "../sections/Part1_3";
import { Part2_1 } from "../sections/Part2_1";
import { Part2_2 } from "../sections/Part2_2";
import { Part2_3 } from "../sections/Part2_3";

export type SlideEntry = {
  part: string;
  index: number;
  duration: number;
  element: React.ReactElement;
};

/**
 * 기존 섹션 컴포넌트(<Series>...</Series>)를 그대로 호출해
 * Series.Sequence 자식들을 walk하여 슬라이드 배열로 평탄화한다.
 * 섹션 파일은 절대 수정하지 않는다.
 */
function extractSlides(
  partLabel: string,
  Component: React.FC,
): SlideEntry[] {
  // Component()는 <Series>{children}</Series> 형태의 ReactElement를 반환
  const root = Component({}) as React.ReactElement<{
    children?: React.ReactNode;
  }>;
  if (!root || root.type !== Series) {
    throw new Error(`${partLabel}: root element is not <Series>`);
  }
  const sequences = React.Children.toArray(root.props.children).filter(
    React.isValidElement,
  ) as React.ReactElement<{
    durationInFrames: number;
    children: React.ReactNode;
  }>[];

  return sequences.map((seq, i) => {
    const duration = seq.props.durationInFrames;
    const child = React.Children.toArray(seq.props.children)[0];
    if (!React.isValidElement(child)) {
      throw new Error(
        `${partLabel} slide ${i}: child is not a valid element`,
      );
    }
    return {
      part: partLabel,
      index: i,
      duration,
      element: child,
    };
  });
}

export const ALL_SLIDES: SlideEntry[] = [
  ...extractSlides("Part 1.1", Part1_1),
  ...extractSlides("Part 1.2", Part1_2),
  ...extractSlides("Part 1.3", Part1_3),
  ...extractSlides("Part 2.1", Part2_1),
  ...extractSlides("Part 2.2", Part2_2),
  ...extractSlides("Part 2.3", Part2_3),
];
