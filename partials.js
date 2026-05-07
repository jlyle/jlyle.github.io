// Shared nav + footer rendering
(function() {
  const NAV_ITEMS = [
    { href: 'index.html', label: 'Home' },
    { href: 'samples.html', label: 'Samples' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'about.html', label: 'About' },
    { href: 'blog.html', label: 'Resources' },
    { href: 'contact.html', label: 'Contact' },
  ];

  function renderNav(activePage) {
    const links = NAV_ITEMS.map(i =>
      `<a href="${i.href}" class="${i.href === activePage ? 'active' : ''}">${i.label}</a>`
    ).join('');
    return `
      <nav class="nav">
        <div class="nav-inner">
          <a href="index.html" class="brand">
            <div class="brand-mark">JM</div>
            <span>JumpyMouse</span>
          </a>
          <div class="nav-links">${links}</div>
          <div class="nav-cta">
            <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
              <svg id="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            </button>
            <a href="account.html" class="btn btn-ghost btn-sm">Sign in</a>
            <a href="order.html" class="btn btn-coral btn-sm">Start a resume</a>
          </div>
        </div>
      </nav>`;
  }

  function renderFooter() {
    return `
      <footer>
        <div class="wrap">
          <div class="footer-grid">
            <div>
              <a href="index.html" class="brand" style="margin-bottom: 16px;">
                <div class="brand-mark">JM</div>
                <span>JumpyMouse</span>
              </a>
              <p style="color: var(--ink-2); font-size: 14px; max-width: 36ch; margin: 12px 0 16px;">Resumes, LinkedIn profiles, and career strategy for IT professionals — written by someone who's been in the trenches.</p>
              <span class="badge badge-vet"><span class="star">★</span> Veteran-Owned · Navy</span>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="pricing.html">Resume packages</a></li>
                <li><a href="pricing.html">LinkedIn optimization</a></li>
                <li><a href="pricing.html">Interview coaching</a></li>
                <li><a href="pricing.html">Federal resumes</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="samples.html">Samples</a></li>
                <li><a href="blog.html">Resources</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Account</h4>
              <ul>
                <li><a href="account.html">Sign in</a></li>
                <li><a href="order.html">Start an order</a></li>
                <li><a href="contact.html">Support</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 JumpyMouse Resume Co. · All rights reserved.</span>
            <span class="mono">v1.0 · Made for IT pros</span>
          </div>
        </div>
      </footer>`;
  }

  window.renderShell = function(activePage) {
    const navMount = document.getElementById('nav-mount');
    const footerMount = document.getElementById('footer-mount');
    if (navMount) navMount.outerHTML = renderNav(activePage);
    if (footerMount) footerMount.outerHTML = renderFooter();

    // restore theme
    const saved = localStorage.getItem('jm-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon();
  };

  window.toggleTheme = function() {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    const next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('jm-theme', next);
    updateThemeIcon();
  };

  function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    icon.innerHTML = dark
      ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>'
      : '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
  }
})();
