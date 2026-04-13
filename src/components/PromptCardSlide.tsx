import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export type PromptTurn = {
  role: "user" | "ai";
  text: string;
};

export const PromptCardSlide: React.FC<{
  kicker?: string;
  title: string;
  turns: PromptTurn[];
  note?: string;
}> = ({ kicker, title, turns, note }) => (
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
          fontSize: 66,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: 48,
          color: theme.text,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 1600,
        }}
      >
        {turns.map((t, i) => (
          <Bubble key={i} turn={t} />
        ))}
      </div>
      {note && (
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            fontWeight: 500,
            color: theme.subtext,
            fontStyle: "italic",
          }}
        >
          {note}
        </div>
      )}
    </div>
  </Slide>
);

const Bubble: React.FC<{ turn: PromptTurn }> = ({ turn }) => {
  const isUser = turn.role === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div style={{ maxWidth: "80%", display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: isUser ? theme.accent : theme.subtext,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            paddingLeft: isUser ? 0 : 12,
            paddingRight: isUser ? 12 : 0,
            textAlign: isUser ? "right" : "left",
          }}
        >
          {isUser ? "YOU" : "CLAUDE"}
        </div>
        <div
          style={{
            padding: "28px 34px",
            borderRadius: 24,
            backgroundColor: isUser ? theme.accent : "#F2F4F6",
            color: isUser ? "#FFFFFF" : theme.text,
            fontSize: 30,
            fontWeight: 500,
            lineHeight: 1.45,
            letterSpacing: "-0.01em",
            whiteSpace: "pre-wrap",
            border: isUser ? "none" : `1px solid ${theme.line}`,
          }}
        >
          {turn.text}
        </div>
      </div>
    </div>
  );
};
