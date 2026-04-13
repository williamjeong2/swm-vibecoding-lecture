import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

type Side = {
  label: string;
  lines: string[];
  mono?: boolean;
};

export const BeforeAfterSlide: React.FC<{
  kicker?: string;
  title: string;
  before: Side;
  after: Side;
}> = ({ kicker, title, before, after }) => (
  <Slide>
    <div style={{ display: "flex", flexDirection: "column" }}>
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
          fontSize: 68,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: 56,
          color: theme.text,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", gap: 48 }}>
        <Panel side={before} tone="bad" />
        <Panel side={after} tone="good" />
      </div>
    </div>
  </Slide>
);

const Panel: React.FC<{ side: Side; tone: "bad" | "good" }> = ({
  side,
  tone,
}) => {
  const isGood = tone === "good";
  const color = isGood ? theme.accent : "#D94B4B";
  const bg = isGood ? theme.accentSoft : "#FDECEC";
  const badgeText = isGood ? "✅ 이렇게" : "❌ 이렇지 않게";
  return (
    <div
      style={{
        flex: 1,
        borderRadius: 24,
        padding: "36px 40px",
        border: `2px solid ${color}`,
        backgroundColor: bg,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        minHeight: 520,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          padding: "8px 20px",
          borderRadius: 999,
          backgroundColor: color,
          color: "#FFFFFF",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "-0.01em",
        }}
      >
        {badgeText}
      </div>
      <div
        style={{
          fontSize: 38,
          fontWeight: 800,
          color: theme.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.3,
        }}
      >
        {side.label}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          padding: "24px 26px",
          borderRadius: 16,
          backgroundColor: "#FFFFFF",
          border: `1px solid ${theme.line}`,
          flex: 1,
          fontFamily: side.mono
            ? '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, monospace'
            : theme.fontFamily,
        }}
      >
        {side.lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: side.mono ? 24 : 28,
              fontWeight: 500,
              color: theme.text,
              lineHeight: 1.45,
              letterSpacing: side.mono ? 0 : "-0.01em",
              whiteSpace: "pre-wrap",
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
