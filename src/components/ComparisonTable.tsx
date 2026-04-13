import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export const ComparisonTable: React.FC<{
  kicker?: string;
  title: string;
  headers: string[];
  rows: string[][];
  highlightColumn?: number;
}> = ({ kicker, title, headers, rows, highlightColumn }) => (
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
          border: `2px solid ${theme.line}`,
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
            backgroundColor: theme.accentSoft,
          }}
        >
          {headers.map((h, i) => (
            <div
              key={i}
              style={{
                padding: "24px 28px",
                fontSize: 28,
                fontWeight: 800,
                color: i === highlightColumn ? theme.accent : theme.text,
                borderLeft: i === 0 ? "none" : `1px solid ${theme.line}`,
                letterSpacing: "-0.01em",
              }}
            >
              {h}
            </div>
          ))}
        </div>
        {rows.map((row, r) => (
          <div
            key={r}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
              borderTop: `1px solid ${theme.line}`,
              backgroundColor: r % 2 === 0 ? "#FFFFFF" : "#FAFBFC",
            }}
          >
            {row.map((cell, c) => (
              <div
                key={c}
                style={{
                  padding: "22px 28px",
                  fontSize: 24,
                  fontWeight: c === 0 ? 700 : 500,
                  color:
                    c === highlightColumn
                      ? theme.accent
                      : c === 0
                      ? theme.text
                      : theme.subtext,
                  borderLeft: c === 0 ? "none" : `1px solid ${theme.line}`,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  backgroundColor:
                    c === highlightColumn ? theme.accentSoft : "transparent",
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Slide>
);
