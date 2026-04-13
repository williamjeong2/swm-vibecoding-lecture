import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export const ChecklistSlide: React.FC<{
  kicker?: string;
  title: string;
  items: (string | { text: string; sub?: string })[];
  footer?: string;
}> = ({ kicker, title, items, footer }) => (
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
          fontSize: 78,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: 56,
          color: theme.text,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {items.map((it, i) => {
          const item = typeof it === "string" ? { text: it } : it;
          return (
            <div
              key={i}
              style={{ display: "flex", alignItems: "flex-start", gap: 28 }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  border: `3px solid ${theme.accent}`,
                  backgroundColor: theme.accentSoft,
                  color: theme.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 34,
                  fontWeight: 900,
                  flexShrink: 0,
                  marginTop: 4,
                }}
              >
                ✓
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    color: theme.text,
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.text}
                </div>
                {item.sub && (
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 500,
                      color: theme.subtext,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.sub}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {footer && (
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            fontWeight: 600,
            color: theme.accent,
            letterSpacing: "-0.01em",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  </Slide>
);
