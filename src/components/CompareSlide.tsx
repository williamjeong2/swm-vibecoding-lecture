import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

type ColumnData = {
  title: string;
  bullets: string[];
  tone?: "neutral" | "accent";
};

export const CompareSlide: React.FC<{
  kicker?: string;
  title: string;
  left: ColumnData;
  right: ColumnData;
}> = ({ kicker, title, left, right }) => {
  const kickerAnim = useSpringIn(0);
  const titleAnim = useSpringIn(6);

  return (
    <Slide>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {kicker && (
          <div
            style={{
              ...kickerAnim,
              fontSize: 30,
              fontWeight: 700,
              color: theme.accent,
              marginBottom: 20,
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
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: 60,
            color: theme.text,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          <Column column={left} baseDelay={18} />
          <Column column={right} baseDelay={26} />
        </div>
      </div>
    </Slide>
  );
};

const Column: React.FC<{ column: ColumnData; baseDelay: number }> = ({
  column,
  baseDelay,
}) => {
  const headAnim = useSpringIn(baseDelay);
  const isAccent = column.tone === "accent";
  return (
    <div
      style={{
        flex: 1,
        padding: "48px 48px",
        borderRadius: 24,
        backgroundColor: isAccent ? theme.accentSoft : "#F7F9FB",
        border: `2px solid ${isAccent ? theme.accent : theme.line}`,
        display: "flex",
        flexDirection: "column",
        gap: 32,
        minHeight: 520,
      }}
    >
      <div
        style={{
          ...headAnim,
          fontSize: 44,
          fontWeight: 800,
          color: isAccent ? theme.accent : theme.text,
          letterSpacing: "-0.02em",
        }}
      >
        {column.title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {column.bullets.map((b, i) => (
          <Item
            key={i}
            text={b}
            delay={baseDelay + 10 + i * 10}
            accent={isAccent}
          />
        ))}
      </div>
    </div>
  );
};

const Item: React.FC<{ text: string; delay: number; accent: boolean }> = ({
  text,
  delay,
  accent,
}) => {
  const anim = useSpringIn(delay);
  return (
    <div
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
          marginTop: 16,
          backgroundColor: accent ? theme.accent : theme.muted,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: theme.text,
          lineHeight: 1.45,
          letterSpacing: "-0.01em",
        }}
      >
        {text}
      </div>
    </div>
  );
};
