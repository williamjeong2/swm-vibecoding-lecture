import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const BulletSlide: React.FC<{
  kicker?: string;
  title: string;
  bullets: (string | { text: string; sub?: string })[];
  bulletDelay?: number;
}> = ({ kicker, title, bullets, bulletDelay = 18 }) => {
  const kickerAnim = useSpringIn(0);
  const titleAnim = useSpringIn(6);

  return (
    <Slide>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {kicker && (
          <div
            style={{
              ...kickerAnim,
              fontSize: 32,
              fontWeight: 700,
              color: theme.accent,
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            {kicker}
          </div>
        )}
        <div
          style={{
            ...titleAnim,
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: 64,
            color: theme.text,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {bullets.map((b, i) => {
            const item = typeof b === "string" ? { text: b } : b;
            return (
              <BulletItem
                key={i}
                index={i}
                delay={20 + i * bulletDelay}
                text={item.text}
                sub={item.sub}
              />
            );
          })}
        </div>
      </div>
    </Slide>
  );
};

const BulletItem: React.FC<{
  index: number;
  delay: number;
  text: string;
  sub?: string;
}> = ({ delay, text, sub }) => {
  const anim = useSpringIn(delay);
  return (
    <div
      style={{
        ...anim,
        display: "flex",
        alignItems: "flex-start",
        gap: 28,
      }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: theme.accent,
          marginTop: 22,
          flexShrink: 0,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: theme.text,
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
          }}
        >
          {text}
        </div>
        {sub && (
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: theme.subtext,
              lineHeight: 1.4,
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );
};
