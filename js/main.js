// Index page: category filters + record count
const filters = document.querySelectorAll('.filters button');
const entries = document.querySelectorAll('.entry');
const countLabel = document.getElementById('countLabel');

if (filters.length && entries.length) {
  const total = entries.length;

  function updateCount(visible) {
    if (countLabel) countLabel.textContent = visible + ' / ' + total + ' filed';
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      let visible = 0;
      entries.forEach(entry => {
        const cats = entry.dataset.categories.split(' ');
        const show = filter === 'all' || cats.includes(filter);
        entry.classList.toggle('hidden', !show);
        if (show) visible++;
      });
      updateCount(visible);
    });
  });
}

// Index page: status bar slug preview on hover/focus
const slugText = document.getElementById('slugText');
if (slugText) {
  entries.forEach(entry => {
    const slug = entry.dataset.slug;
    const show = () => slugText.textContent = slug;
    const hide = () => slugText.textContent = '';
    entry.addEventListener('mouseenter', show);
    entry.addEventListener('mouseleave', hide);
    entry.addEventListener('focus', show);
    entry.addEventListener('blur', hide);
  });
}
