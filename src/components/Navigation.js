import { useState } from 'react';

const screens = ['home', 'about', 'services', 'projects', 'pricing', 'contact'];

export function navigateTo(screen) {
  window.location.hash = screen === 'home' ? '' : screen;
}

export function Logo() {
  return <button className="logo" onClick={() => navigateTo('home')} aria-label="Go to JEZBuilders home"><span>JZ</span><strong>JEZ<br />BUILDERS</strong></button>;
}

export function Nav({ current }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="site-header"><Logo /><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'CLOSE' : 'MENU'} <span>{menuOpen ? '×' : '☰'}</span></button><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{screens.slice(1).map((screen) => <button key={screen} className={current === screen ? 'active' : ''} onClick={() => { navigateTo(screen); setMenuOpen(false); }}>{screen}</button>)}<button className="nav-cta" onClick={() => { navigateTo('contact'); setMenuOpen(false); }}>Start a project <span>↗</span></button></nav></header>;
}
