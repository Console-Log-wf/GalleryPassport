/* menu.js: 헤더와 펼침 메뉴에서 같이 쓰는 메뉴 목록과 언어 목록 상수 */

/* 메뉴 목록: 여기만 고치면 헤더에 같이 반영됨 */
export const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/gallery", label: "Gallery Entry" },
  { to: "/passport", label: "My Passport" },
  { to: "/about", label: "About" },
];

/* 언어 목록 */
export const LANGS = ["KR", "EN"];
