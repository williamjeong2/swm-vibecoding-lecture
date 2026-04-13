import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const TitleSlide: React.FC<{
  title: string;
  subtitle?: string;
  tag?: string;
}> = ({ title, subtitle, tag }) => {
  const tagAnim = useSpringIn(0);
  const titleAnim = useSpringIn(8);
  const subAnim = useSpringIn(18);

  return (
    <Slide>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 40,
        }}
      >
        {tag && (
          <div
            style={{
              ...tagAnim,
              fontSize: 36,
              fontWeight: 700,
              color: theme.accent,
              letterSpacing: "-0.01em",
              padding: "14px 32px",
              borderRadius: 999,
              backgroundColor: theme.accentSoft,
            }}
          >
            {tag}
          </div>
        )}
        <div
          style={{
            ...titleAnim,
            fontSize: 156,
            fontWeight: 900,
            color: theme.text,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              ...subAnim,
              fontSize: 44,
              fontWeight: 500,
              color: theme.subtext,
              letterSpacing: "-0.01em",
              marginTop: 16,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </Slide>
  );
};
