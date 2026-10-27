(() => {
  const printButton = document.querySelector('#print-button');
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
  }

  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  const updateNavigation = () => {
    const threshold = window.innerWidth <= 760 ? 125 : 155;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
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

  let detailsState = [];
  window.addEventListener('beforeprint', () => {
    detailsState = [...document.querySelectorAll('details')].map(item => [item, item.open]);
    for (const [item] of detailsState) item.open = true;
  });
  window.addEventListener('afterprint', () => {
    for (const [item, wasOpen] of detailsState) item.open = wasOpen;
    detailsState = [];
  });
})();
