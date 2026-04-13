import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const SectionIntro: React.FC<{
  number: string;
  title: string;
  subtitle?: string;
}> = ({ number, title, subtitle }) => {
  const numAnim = useSpringIn(0);
  const titleAnim = useSpringIn(8);
  const subAnim = useSpringIn(16);

  const lineWidth = 280;

  return (
    <Slide>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div
          style={{
            ...numAnim,
            fontSize: 44,
            fontWeight: 700,
            color: theme.accent,
            letterSpacing: "-0.02em",
          }}
        >
          PART {number}
        </div>
        <div
          style={{
            height: 6,
            width: lineWidth,
            backgroundColor: theme.accent,
            borderRadius: 3,
          }}
        />
        <div
          style={{
            ...titleAnim,
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: theme.text,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              ...subAnim,
              fontSize: 40,
              fontWeight: 500,
              color: theme.subtext,
              marginTop: 12,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </Slide>
  );
};
