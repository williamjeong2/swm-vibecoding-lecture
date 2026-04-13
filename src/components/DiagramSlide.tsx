import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export type DiagramLayer = {
  label: string;
  title: string;
  desc?: string;
};

export const DiagramSlide: React.FC<{
  kicker?: string;
  title: string;
  layers: DiagramLayer[];
  caption?: string;
}> = ({ kicker, title, layers, caption }) => (
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
          marginBottom: 52,
          color: theme.text,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {renderNested(layers, 0)}
      </div>
      {caption && (
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            color: theme.subtext,
            textAlign: "center",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  </Slide>
);

const PALETTE = [
  { bg: "#E8F0FE", border: "#1B64DA" },
  { bg: "#F3F6FC", border: "#4B82E5" },
  { bg: "#F8FAFF", border: "#7BA4EC" },
  { bg: "#FFFFFF", border: "#A8C1F1" },
];

const renderNested = (layers: DiagramLayer[], idx: number): React.ReactNode => {
  if (idx >= layers.length) return null;
  const layer = layers[idx];
  const tone = PALETTE[Math.min(idx, PALETTE.length - 1)];
  const isInner = idx === layers.length - 1;
  return (
    <div
      style={{
        width: `${100 - idx * 6}%`,
        padding: isInner ? "36px 40px" : "28px 32px 36px",
        borderRadius: 22,
        backgroundColor: tone.bg,
        border: `3px solid ${tone.border}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        marginBottom: isInner ? 0 : 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          alignSelf: "flex-start",
        }}
      >
        <div
          style={{
            padding: "6px 16px",
            borderRadius: 999,
            backgroundColor: tone.border,
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "-0.01em",
          }}
        >
          {layer.label}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: theme.text,
            letterSpacing: "-0.02em",
          }}
        >
          {layer.title}
        </div>
      </div>
      {layer.desc && (
        <div
          style={{
            alignSelf: "flex-start",
            fontSize: 22,
            color: theme.subtext,
            lineHeight: 1.4,
          }}
        >
          {layer.desc}
        </div>
      )}
      {!isInner && (
        <div style={{ width: "100%", marginTop: 8 }}>
          {renderNested(layers, idx + 1)}
        </div>
      )}
    </div>
  );
};
