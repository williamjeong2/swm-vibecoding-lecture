import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const HeroStatSlide: React.FC<{
  kicker?: string;
  stat: string;
  label: string;
  bullets: { text: string; sub?: string }[];
}> = ({ kicker, stat, label, bullets }) => {
  const kickerAnim = useSpringIn(0);
  const statAnim = useSpringIn(6);
  const labelAnim = useSpringIn(14);

  return (
    <Slide>
      <div style={{ display: "flex", gap: 64, alignItems: "center" }}>
        {/* Left: Big stat */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 420,
          }}
        >
          {kicker && (
            <div
              style={{
                ...kickerAnim,
                fontSize: 32,
                fontWeight: 700,
                color: theme.accent,
                marginBottom: 22,
                letterSpacing: "-0.01em",
              }}
            >
              {kicker}
            </div>
          )}
          <div
            style={{
              ...statAnim,
              fontSize: 200,
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
              fontSize: 36,
              fontWeight: 800,
              color: theme.text,
              letterSpacing: "-0.02em",
              marginTop: 18,
              textAlign: "center",
              lineHeight: 1.25,
            }}
          >
            {label}
          </div>
        </div>

        {/* Right: Bullets in accent card */}
        <div
          style={{
            flex: 1,
            padding: "48px 48px",
            borderRadius: 24,
            backgroundColor: theme.accentSoft,
            border: `2px solid ${theme.accent}`,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {bullets.map((b, i) => {
            const anim = useSpringIn(20 + i * 12);
            return (
              <div
                key={i}
                style={{
                  ...anim,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    backgroundColor: theme.accent,
                    marginTop: 16,
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: theme.text,
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {b.text}
                  </div>
                  {b.sub && (
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 500,
                        color: theme.subtext,
                        lineHeight: 1.4,
                      }}
                    >
                      {b.sub}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};
