import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const StatSlide: React.FC<{
  kicker?: string;
  stat: string;
  label: string;
  description?: string;
}> = ({ kicker, stat, label, description }) => {
  const kickerAnim = useSpringIn(0);
  const statAnim = useSpringIn(8);
  const labelAnim = useSpringIn(18);
  const descAnim = useSpringIn(26);

  return (
    <Slide>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 32,
        }}
      >
        {kicker && (
          <div
            style={{
              ...kickerAnim,
              fontSize: 32,
              fontWeight: 700,
              color: theme.accent,
              letterSpacing: "-0.01em",
            }}
          >
            {kicker}
          </div>
        )}
        <div
          style={{
            ...statAnim,
            fontSize: 280,
            fontWeight: 900,
            color: theme.accent,
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          {stat}
        </div>
        <div
          style={{
            ...labelAnim,
            fontSize: 60,
            fontWeight: 800,
            color: theme.text,
            letterSpacing: "-0.02em",
          }}
        >
          {label}
        </div>
        {description && (
          <div
            style={{
              ...descAnim,
              fontSize: 32,
              fontWeight: 500,
              color: theme.subtext,
              maxWidth: 1200,
              lineHeight: 1.4,
              marginTop: 12,
            }}
          >
            {description}
          </div>
        )}
      </div>
    </Slide>
  );
};
