import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const el = document.getElementById("root");
if (!el) throw new Error("#root not found");
createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// 전역 스타일: hover시 화살표 보이게
const style = document.createElement("style");
style.textContent = `
  html, body, #root { margin: 0; padding: 0; height: 100%; background: #fff; }
  button[aria-label="이전 슬라이드"]:hover,
  button[aria-label="다음 슬라이드"]:hover {
    color: rgba(25, 31, 40, 0.55) !important;
    background: linear-gradient(to right, rgba(25,31,40,0.04), transparent) !important;
  }
  button[aria-label="다음 슬라이드"]:hover {
    background: linear-gradient(to left, rgba(25,31,40,0.04), transparent) !important;
  }
`;
document.head.appendChild(style);
