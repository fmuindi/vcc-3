const fs = require('fs');
const path = require('path');
const { renderPage, ROOT, IMG } = require('./build-site');
const { HOME_BODY } = require('./home');
const { PAGES, placeholderBody } = require('./placeholders');

function write(file, html) {
  fs.writeFileSync(path.join(ROOT, file), html);
  console.log('wrote', file);
}

write('index.html', renderPage({
  title: 'Valor Christian College — A Place Where World Changers Are Made',
  description: "At Valor Christian College, you'll be challenged academically, strengthened spiritually, and equipped to lead. Explore degree programs on campus, online, or in a cohort.",
  socialImage: IMG.social,
  bodyHtml: HOME_BODY,
}));

PAGES.forEach((p) => {
  write(p.href, renderPage({
    title: `${p.title} — Valor Christian College`,
    description: p.blurb,
    socialImage: IMG.social,
    bodyHtml: placeholderBody(p),
  }));
});

console.log(`\nDone: ${PAGES.length + 1} pages written.`);
