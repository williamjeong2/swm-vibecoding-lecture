import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { AbsoluteFill } from "remotion";
import { ALL_SLIDES, type SlideEntry } from "./manifest";
import { FPS, WIDTH, HEIGHT, theme } from "../theme";

const SlideComposition: React.FC<{
  node: React.ReactNode;
  pageNumber: number;
  total: number;
}> = ({ node, pageNumber, total }) => (
  <AbsoluteFill style={{ backgroundColor: theme.bg }}>
    {node}
    <div
      style={{
        position: "absolute",
        bottom: 44,
        right: 60,
        fontSize: 22,
        fontWeight: 600,
        color: theme.muted,
        fontFamily: theme.fontFamily,
        letterSpacing: "-0.01em",
        pointerEvents: "none",
      }}
    >
      {pageNumber} / {total}
    </div>
  </AbsoluteFill>
);

export const App: React.FC<{ slides?: SlideEntry[] }> = ({ slides = ALL_SLIDES }) => {
  const [idx, setIdx] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<PlayerRef>(null);
  const total = slides.length;
  const slide = slides[idx];

  const next = useCallback(
    () => setIdx((i) => Math.min(total - 1, i + 1)),
    [total],
  );
  const prev = useCallback(() => setIdx((i) => Math.max(0, i - 1)), []);

  useEffect(() => {
    const t = setTimeout(() => setHintVisible(false), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          setIdx(0);
          break;
        case "End":
          e.preventDefault();
          setIdx(total - 1);
          break;
        case "f":
        case "F":
          e.preventDefault();
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            containerRef.current?.requestFullscreen();
          }
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, total]);

  const inputProps = useMemo(
    () => ({ node: slide.element, pageNumber: idx + 1, total }),
    [slide.element, idx, total],
  );

  return (
    <>
      <div
        className="screen-root"
        ref={containerRef}
        style={{
          width: "100vw",
          height: "100vh",
          background: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          fontFamily: theme.fontFamily,
        }}
      >
        <Player
          key={idx}
          ref={playerRef}
          component={SlideComposition}
          inputProps={inputProps}
          durationInFrames={slide.duration}
          compositionWidth={WIDTH}
          compositionHeight={HEIGHT}
          fps={FPS}
          autoPlay
          loop={false}
          moveToBeginningWhenEnded={false}
          controls={false}
          clickToPlay={false}
          style={{ width: "100%", height: "100%" }}
        />

        <button
          onClick={prev}
          aria-label="이전 슬라이드"
          style={{ ...edgeBtn, left: 0 }}
        >
          <span style={arrow}>‹</span>
        </button>
        <button
          onClick={next}
          aria-label="다음 슬라이드"
          style={{ ...edgeBtn, right: 0 }}
        >
          <span style={arrow}>›</span>
        </button>

        <div style={counterPill}>
          {slide.part} · 슬라이드 {idx + 1} / {total}
        </div>

        <div
          style={{
            ...keyHint,
            opacity: hintVisible ? 1 : 0,
            transition: "opacity 600ms ease",
          }}
        >
          ← → / Space 이동 · F 풀스크린 · Home/End 처음·끝
        </div>
      </div>

    </>
  );
};

const edgeBtn: React.CSSProperties = {
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "12%",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(25, 31, 40, 0.0)",
  transition: "color 200ms ease, background 200ms ease",
};

const arrow: React.CSSProperties = {
  fontSize: 64,
  fontWeight: 300,
  lineHeight: 1,
};

const counterPill: React.CSSProperties = {
  position: "absolute",
  bottom: 32,
  left: "50%",
  transform: "translateX(-50%)",
  background: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(25,31,40,0.08)",
  borderRadius: 999,
  padding: "10px 22px",
  fontSize: 16,
  fontWeight: 600,
  color: "#191F28",
  letterSpacing: "-0.01em",
  boxShadow: "0 4px 18px rgba(25,31,40,0.06)",
  pointerEvents: "none",
};

const keyHint: React.CSSProperties = {
  position: "absolute",
  top: 20,
  right: 24,
  fontSize: 13,
  color: "#8B95A1",
  background: "rgba(255,255,255,0.7)",
  padding: "6px 12px",
  borderRadius: 8,
  pointerEvents: "none",
};
