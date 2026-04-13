import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export type SplitListItem = { text: string; sub?: string };

export const SplitSlide: React.FC<{
  kicker?: string;
  title: string;
  lead?: string;
  items: SplitListItem[];
  rightLabel?: string;
}> = ({ kicker, title, lead, items, rightLabel }) => (
  <Slide>
    <div style={{ display: "flex", gap: 64, alignItems: "center" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {kicker && (
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: theme.accent,
              marginBottom: 18,
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
            marginBottom: lead ? 24 : 0,
            color: theme.text,
          }}
        >
          {title}
        </div>
        {lead && (
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: theme.subtext,
              lineHeight: 1.45,
              maxWidth: 720,
            }}
          >
            {lead}
          </div>
        )}
      </div>
      <div
        style={{
          flex: 1,
          padding: "48px 48px",
          borderRadius: 24,
          backgroundColor: theme.accentSoft,
          border: `2px solid ${theme.accent}`,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {rightLabel && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: theme.accent,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {rightLabel}
          </div>
        )}
        {items.map((it, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "flex-start", gap: 18 }}
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
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: theme.text,
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                }}
              >
                {it.text}
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
          </div>
        ))}
      </div>
    </div>
  </Slide>
);
