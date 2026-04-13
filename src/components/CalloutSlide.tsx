import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export const CalloutSlide: React.FC<{
  icon?: string;
  kicker?: string;
  message: string;
  sub?: string;
}> = ({ icon = "💡", kicker, message, sub }) => (
  <Slide>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 40,
        maxWidth: 1500,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontSize: 220,
          lineHeight: 1,
        }}
      >
        {icon}
      </div>
      {kicker && (
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: theme.accent,
            letterSpacing: "-0.01em",
          }}
        >
          {kicker}
        </div>
      )}
      <div
        style={{
          fontSize: 84,
          fontWeight: 800,
          color: theme.text,
          lineHeight: 1.2,
          letterSpacing: "-0.03em",
        }}
      >
        {message}
      </div>
      {sub && (
        <div
          style={{
            fontSize: 34,
            fontWeight: 500,
            color: theme.subtext,
            lineHeight: 1.4,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  </Slide>
);
