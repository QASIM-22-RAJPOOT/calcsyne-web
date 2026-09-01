import { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';

function activePath(path) {
  if (path === '/') return window.location.pathname === '/';
  return window.location.pathname.startsWith(path);
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span>C</span><i></i></span>;
}

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!siteConfig.adsenseClientId) return;
    const id = 'calcsyne-adsense-script';
    if (document.getElementById(id)) return;
    const script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClientId}`;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="/" aria-label={`${siteConfig.name} home`}>
            <BrandMark />
            <span>{siteConfig.name}</span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
          <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Primary navigation">
            <a className={activePath('/') ? 'active' : ''} href="/">Home</a>
            <a className={activePath('/calculators') ? 'active' : ''} href="/calculators/">Calculators</a>
            <a className={activePath('/about') ? 'active' : ''} href="/about/">About</a>
            <a className="nav-cta" href="/calculators/percentage/">Calculate now</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand brand--footer" href="/"><BrandMark /><span>{siteConfig.name}</span></a>
            <p>{siteConfig.tagline}</p>
          </div>
          <div>
            <h2>Popular tools</h2>
            <a href="/calculators/percentage/">Percentage</a>
            <a href="/calculators/age/">Age</a>
            <a href="/calculators/loan/">Loan / EMI</a>
            <a href="/calculators/unit-converter/">Unit Converter</a>
          </div>
          <div>
            <h2>Company</h2>
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
            <a href="/disclaimer/">Disclaimer</a>
          </div>
          <div>
            <h2>Legal</h2>
            <a href="/privacy/">Privacy Policy</a>
            <a href="/terms/">Terms of Use</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Calculator results are estimates. Verify important financial, health, academic, tax or legal decisions with a qualified source.</p>
        </div>
      </footer>
    </div>
  );
}
