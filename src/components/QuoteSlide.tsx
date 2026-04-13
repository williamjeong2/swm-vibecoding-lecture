import React from "react";
import { Slide } from "./Slide";
import { theme } from "../theme";
import { useSpringIn } from "./anim";

export const QuoteSlide: React.FC<{
  quote: string;
  author?: string;
}> = ({ quote, author }) => {
  const markAnim = useSpringIn(0);
  const quoteAnim = useSpringIn(8);
  const authorAnim = useSpringIn(20);

  return (
    <Slide>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 40,
          maxWidth: 1500,
        }}
      >
        <div
          style={{
            ...markAnim,
            fontSize: 220,
            fontWeight: 900,
            color: theme.accent,
            lineHeight: 0.6,
            height: 100,
          }}
        >
          “
        </div>
        <div
          style={{
            ...quoteAnim,
            fontSize: 76,
            fontWeight: 700,
            color: theme.text,
            lineHeight: 1.3,
            letterSpacing: "-0.03em",
          }}
        >
          {quote}
        </div>
        {author && (
          <div
            style={{
              ...authorAnim,
              fontSize: 34,
              fontWeight: 500,
              color: theme.subtext,
              marginTop: 16,
            }}
          >
            — {author}
          </div>
        )}
      </div>
    </Slide>
  );
};
