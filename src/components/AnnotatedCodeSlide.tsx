import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const AnnotatedCodeSlide: React.FC<{
  kicker?: string;
  title: string;
  annotations: { label: string; desc: string }[];
  filename?: string;
  language?: string;
  code: string;
  codeFontSize?: number;
}> = ({ kicker, title, annotations, filename, code, codeFontSize = 19 }) => {
  const kickerAnim = useSpringIn(0);
  const titleAnim = useSpringIn(6);

  return (
    <Slide>
      <div style={{ display: "flex", gap: 60 }}>
        {/* Left: Code */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {kicker && (
            <div
              style={{
                ...kickerAnim,
                fontSize: 30,
                fontWeight: 700,
                color: theme.accent,
                marginBottom: 14,
                letterSpacing: "-0.01em",
              }}
            >
              {kicker}
            </div>
          )}
          <div
            style={{
              ...titleAnim,
              fontSize: 52,
              fontWeight: 800,
              color: theme.text,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              lineHeight: 1.15,
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </div>
          {filename && (
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: theme.muted,
                marginBottom: 10,
                fontFamily:
                  '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace',
              }}
            >
              {filename}
            </div>
          )}
          <div
            style={{
              background: "#1E1E1E",
              borderRadius: 20,
              padding: "28px 32px",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <pre
              style={{
                margin: 0,
                fontSize: codeFontSize,
                fontFamily:
                  '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace',
                color: "#D4D4D4",
                lineHeight: 1.5,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {code}
            </pre>
          </div>
        </div>

        {/* Right: Annotations */}
        <div
          style={{
            width: 480,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {annotations.map((a, i) => {
            const anim = useSpringIn(16 + i * 12);
            return (
              <div
                key={i}
                style={{
                  ...anim,
                  padding: "22px 26px",
                  borderRadius: 20,
                  backgroundColor: theme.accentSoft,
                  border: `2px solid ${theme.accent}`,
                  borderLeft: `6px solid ${theme.accent}`,
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: theme.accent,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {a.label}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    color: theme.subtext,
                    lineHeight: 1.4,
                  }}
                >
                  {a.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};
