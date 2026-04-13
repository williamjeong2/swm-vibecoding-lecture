import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const IconGridSlide: React.FC<{
  kicker?: string;
  title: string;
  columns?: number;
  items: { icon: string; label: string; desc: string }[];
}> = ({ kicker, title, columns = 3, items }) => {
  const kickerAnim = useSpringIn(0);
  const titleAnim = useSpringIn(6);

  return (
    <Slide>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <div>
          {kicker && (
            <div
              style={{
                ...kickerAnim,
                fontSize: 32,
                fontWeight: 700,
                color: theme.accent,
                marginBottom: 18,
                letterSpacing: "-0.01em",
              }}
            >
              {kicker}
            </div>
          )}
          <div
            style={{
              ...titleAnim,
              fontSize: 72,
              fontWeight: 800,
              color: theme.text,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: 32,
          }}
        >
          {items.map((item, i) => {
            const anim = useSpringIn(16 + i * 10);
            return (
              <div
                key={i}
                style={{
                  ...anim,
                  padding: "40px 36px",
                  borderRadius: 24,
                  backgroundColor: theme.accentSoft,
                  border: `2px solid ${theme.accent}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 48 }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: theme.text,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 500,
                    color: theme.subtext,
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};
