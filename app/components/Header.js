export default function Header({
  isSticky,
  isHeaderHidden,
  isMenuOpen,
  activeSection,
  navItems,
  onScrollToId,
  onToggleTheme,
  onToggleMenu,
}) {
  return (
    <header
      className={`header ${isSticky ? "sticky" : ""}`}
      style={{ transform: isHeaderHidden ? "translateY(-100%)" : "translateY(0)" }}
      role="banner"
    >
      <a
        href="#intro"
        className="header-name"
        aria-label="Victor Nwafor - Home"
        onClick={(event) => onScrollToId(event, "#intro")}
      >
        <strong>{"VictorNwafor.me"}</strong>
      </a>

      <nav className="header-nav" role="navigation" aria-label="Main navigation">
        <button className="dark-mode-toggle" type="button" aria-label="Toggle dark mode" onClick={onToggleTheme}>
          <span className="sun-icon">☀️</span>
          <span className="moon-icon">🌙</span>
        </button>

        <ul className={`header-dropdown ${isMenuOpen ? "open" : ""}`} id="myDropdown" role="menu">
          {navItems.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                className={activeSection === item.href.slice(1) ? "active-link" : ""}
                onClick={(event) => onScrollToId(event, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`header-menu_open ${isMenuOpen ? "active" : ""}`}
          type="button"
          onClick={onToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="myDropdown"
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </span>
        </button>
      </nav>
    </header>
  );
}
