/* main.jsx: 시작 파일 - index.html의 root 칸에 홈 페이지(HomePage)를 그림 */

import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/Home/HomePage";
import "./styles/global.css";

/* root 칸에 홈 페이지(HomePage)를 그리는 시작 파일 */
const root = createRoot(document.getElementById("root"));
root.render(
  /* StrictMode: 개발 중 실수를 미리 알려주는 검사용 (화면엔 영향 없음) */
  <React.StrictMode>
    {/* Home 컴포넌트를 화면에 띄운다. */}
    <HomePage />
  </React.StrictMode>,
);
