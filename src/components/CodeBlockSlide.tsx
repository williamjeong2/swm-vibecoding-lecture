import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export const CodeBlockSlide: React.FC<{
  kicker?: string;
  title: string;
  description?: string;
  filename?: string;
  language?: string;
  code: string;
  codeFontSize?: number;
}> = ({ kicker, title, description, filename, language, code, codeFontSize = 26 }) => (
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
          marginBottom: description ? 20 : 40,
          color: theme.text,
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: theme.subtext,
            marginBottom: 36,
            lineHeight: 1.4,
            maxWidth: 1500,
          }}
        >
          {description}
        </div>
      )}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          border: `2px solid ${theme.line}`,
          backgroundColor: "#0F1419",
        }}
      >
        {(filename || language) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "18px 28px",
              backgroundColor: "#1B2530",
              borderBottom: `1px solid #2A3542`,
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <Dot color="#FF5F57" />
              <Dot color="#FEBC2E" />
              <Dot color="#28C840" />
            </div>
            {filename && (
              <div
                style={{
                  fontFamily:
                    '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, monospace',
                  fontSize: 22,
                  color: "#C8D1DB",
                  fontWeight: 600,
                }}
              >
                {filename}
              </div>
            )}
            {language && (
              <div
                style={{
                  marginLeft: "auto",
                  fontSize: 18,
                  color: "#8B95A1",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {language}
              </div>
            )}
          </div>
        )}
        <pre
          style={{
            margin: 0,
            padding: "32px 36px",
            fontFamily:
              '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, monospace',
            fontSize: codeFontSize,
            lineHeight: 1.5,
            color: "#E6EDF3",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {code}
        </pre>
      </div>
    </div>
  </Slide>
);

const Dot: React.FC<{ color: string }> = ({ color }) => (
  <div
    style={{
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: color,
    }}
  />
);
