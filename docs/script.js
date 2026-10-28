(() => {
  const printButton = document.querySelector('#print-button');
  const themeButton = document.querySelector('#theme-button');
  const root = document.documentElement;

  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
  }

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    themeButton?.setAttribute('aria-pressed', String(dark));
    themeButton?.setAttribute('aria-label', dark ? '라이트 모드로 전환' : '다크 모드로 전환');
    if (themeButton) themeButton.title = dark ? '라이트 모드' : '다크 모드';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#171a20' : '#fafbfc');
  };

  let savedTheme;
  try { savedTheme = localStorage.getItem('jiwoo-portfolio-theme'); } catch { /* File previews may block storage. */ }
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('jiwoo-portfolio-theme', next); } catch { /* Theme still works without persistence. */ }
    });
  }

  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  const updateNavigation = () => {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 140) current = section;
    }
    for (const link of links) {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };

  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  window.addEventListener('hashchange', updateNavigation);
  updateNavigation();
})();
