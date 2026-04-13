import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const KeyValueGrid: React.FC<{
  kicker?: string;
  title: string;
  columns?: number;
  pairs: { key: string; value: string; note?: string; accent?: boolean }[];
}> = ({ kicker, title, columns = 2, pairs }) => {
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
            gap: 28,
          }}
        >
          {pairs.map((p, i) => {
            const anim = useSpringIn(16 + i * 10);
            return (
              <div
                key={i}
                style={{
                  ...anim,
                  padding: "32px 36px",
                  borderRadius: 24,
                  backgroundColor: p.accent ? theme.accentSoft : "#F8F9FA",
                  border: `2px solid ${p.accent ? theme.accent : theme.line}`,
                  borderLeft: p.accent
                    ? `6px solid ${theme.accent}`
                    : `6px solid ${theme.line}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: p.accent ? theme.accent : theme.muted,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontFamily:
                      '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace',
                  }}
                >
                  {p.key}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: theme.text,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                  }}
                >
                  {p.value}
                </div>
                {p.note && (
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      color: theme.subtext,
                      lineHeight: 1.4,
                      marginTop: 4,
                    }}
                  >
                    {p.note}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};
