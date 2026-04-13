import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";

export type TimelineEvent = {
  date: string;
  title: string;
  desc?: string;
};

export const TimelineSlide: React.FC<{
  kicker?: string;
  title: string;
  events: TimelineEvent[];
}> = ({ kicker, title, events }) => (
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
          marginBottom: 64,
          color: theme.text,
        }}
      >
        {title}
      </div>
      <div style={{ position: "relative", paddingLeft: 48 }}>
        <div
          style={{
            position: "absolute",
            left: 18,
            top: 10,
            bottom: 10,
            width: 4,
            backgroundColor: theme.accent,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {events.map((ev, i) => (
            <Event key={i} ev={ev} />
          ))}
        </div>
      </div>
    </div>
  </Slide>
);

const Event: React.FC<{ ev: TimelineEvent }> = ({ ev }) => (
  <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
    <div
      style={{
        position: "absolute",
        left: -40,
        top: 14,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
        border: `5px solid ${theme.accent}`,
      }}
    />
    <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 8 }}>
      <div
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: theme.accent,
          letterSpacing: "0.02em",
        }}
      >
        {ev.date}
      </div>
      <div
        style={{
          fontSize: 38,
          fontWeight: 700,
          color: theme.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
        }}
      >
        {ev.title}
      </div>
      {ev.desc && (
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: theme.subtext,
            lineHeight: 1.4,
          }}
        >
          {ev.desc}
        </div>
      )}
    </div>
  </div>
);
