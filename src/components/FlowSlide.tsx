import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export type FlowStep = {
  label: string;
  title: string;
  desc?: string;
};

export const FlowSlide: React.FC<{
  kicker?: string;
  title: string;
  steps: FlowStep[];
  direction?: "horizontal" | "vertical";
  caption?: string;
}> = ({ kicker, title, steps, direction = "horizontal", caption }) => {
  const isH = direction === "horizontal";
  return (
    <Slide>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {kicker && (
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: theme.accent,
              marginBottom: 20,
              letterSpacing: "-0.01em",
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
            marginBottom: 72,
            color: theme.text,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isH ? "row" : "column",
            alignItems: "stretch",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <StepCard index={i + 1} step={step} />
              {i < steps.length - 1 && <Arrow horizontal={isH} />}
            </React.Fragment>
          ))}
        </div>
        {caption && (
          <div
            style={{
              marginTop: 40,
              fontSize: 22,
              fontWeight: 500,
              color: theme.muted,
              lineHeight: 1.5,
              borderLeft: `3px solid ${theme.line}`,
              paddingLeft: 20,
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </Slide>
  );
};

const StepCard: React.FC<{ index: number; step: FlowStep }> = ({
  index,
  step,
}) => (
  <div
    style={{
      flex: 1,
      minWidth: 0,
      padding: "36px 32px",
      borderRadius: 24,
      backgroundColor: theme.accentSoft,
      border: `2px solid ${theme.accent}`,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: 260,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: theme.accent,
          color: "#FFFFFF",
          fontWeight: 800,
          fontSize: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {index}
      </div>
      <div
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: theme.accent,
          letterSpacing: "-0.01em",
        }}
      >
        {step.label}
      </div>
    </div>
    <div
      style={{
        fontSize: 40,
        fontWeight: 800,
        color: theme.text,
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      }}
    >
      {step.title}
    </div>
    {step.desc && (
      <div
        style={{
          fontSize: 22,
          fontWeight: 500,
          color: theme.subtext,
          lineHeight: 1.4,
        }}
      >
        {step.desc}
      </div>
    )}
  </div>
);

const Arrow: React.FC<{ horizontal: boolean }> = ({ horizontal }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.accent,
      fontSize: 56,
      fontWeight: 900,
      minWidth: horizontal ? 40 : undefined,
      minHeight: horizontal ? undefined : 40,
    }}
  >
    {horizontal ? "→" : "↓"}
  </div>
);
