import React from "react";
import { AbsoluteFill } from "remotion";
import { theme } from "../theme";

export const Slide: React.FC<{
  children: React.ReactNode;
  padded?: boolean;
}> = ({ children, padded = true }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        fontFamily: theme.fontFamily,
        color: theme.text,
        padding: padded ? "120px 140px" : 0,
        justifyContent: "center",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
