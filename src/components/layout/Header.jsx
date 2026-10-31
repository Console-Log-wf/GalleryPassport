/* Header.jsx: 모든 페이지 맨 위에 공통으로 보이는 헤더 (로고 + 메뉴 + 언어/계정/검색/메뉴 버튼) */

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import iconImg from "../../assets/icons/icon.png";
import { NAV_ITEMS, LANGS } from "../../constants/menu";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 햄버거 펼침 메뉴 열림 여부
  const [langOpen, setLangOpen] = useState(false); // 언어 선택 목록 열림 여부
  const [lang, setLang] = useState("KR"); // 선택된 언어 (번역 기능은 이후 단계)
  const { pathname } = useLocation();

  /* 다른 페이지로 이동하면 열려 있던 메뉴를 닫는다. */
  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="header-inner">
        {/* 왼쪽: 로고 - 누르면 홈으로 */}
        <Link to="/" className="header-logo" aria-label="Gallery Passport 홈">
          <img src={iconImg} alt="" className="header-logo-img" />
          <span className="header-logo-text">Gallery Passport</span>
        </Link>

        {/* 가운데: 메뉴 (좁은 화면에서는 숨기고 햄버거 메뉴로 대체) */}
        <nav className="header-nav" aria-label="주 메뉴">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                "header-nav-link" + (isActive ? " is-active" : "")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* 오른쪽: 언어 / 구분선 / 계정 / 검색 / 햄버거 */}
        <div className="header-tools">
          <div className="header-lang">
            <button
              type="button"
              className="header-lang-btn"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
            >
              {lang} <span className="header-caret">▾</span>
            </button>
            {langOpen && (
              <ul className="header-lang-list" role="listbox">
                {LANGS.map((l) => (
                  <li key={l} role="option" aria-selected={l === lang}>
                    <button
                      type="button"
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <span className="header-divider" aria-hidden="true"></span>

          {/* 계정 버튼: 로그인 기능은 없어서 여권 페이지로 연결 */}
          <Link to="/passport" className="header-icon-btn" aria-label="내 여권">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" />
            </svg>
          </Link>

          {/* 검색 버튼: 검색 기능은 이후 단계에서 연결 */}
          <button type="button" className="header-icon-btn" aria-label="검색">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M15.5 15.5L21 21" />
            </svg>
          </button>

          <button
            type="button"
            className="header-icon-btn"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M7 12h14M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* 햄버거 펼침 메뉴: 좁은 화면에서 메뉴 역할을 대신함 */}
      {menuOpen && (
        <nav className="header-drawer" aria-label="전체 메뉴">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                "header-drawer-link" + (isActive ? " is-active" : "")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
