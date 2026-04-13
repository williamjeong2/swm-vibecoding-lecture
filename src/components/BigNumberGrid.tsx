import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export type StatItem = {
  stat: string;
  label: string;
  sub?: string;
};

export const BigNumberGrid: React.FC<{
  kicker?: string;
  title: string;
  items: StatItem[];
  columns?: 2 | 3;
}> = ({ kicker, title, items, columns = 2 }) => (
  <Slide>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {kicker && (
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: theme.accent,
            marginBottom: 22,
          }}
        >
          {kicker}
        </div>
      )}
      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: 64,
          color: theme.text,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 36,
        }}
      >
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              padding: "48px 44px",
              borderRadius: 24,
              backgroundColor: theme.accentSoft,
              border: `2px solid ${theme.accent}`,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: theme.accent,
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              {it.stat}
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
              {it.label}
            </div>
            {it.sub && (
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: theme.subtext,
                  lineHeight: 1.4,
                }}
              >
                {it.sub}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </Slide>
);
