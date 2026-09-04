const { IMG } = require('./build-site');

// Every photo requested to live on the Student Life page: the original 8 from
// the former Home "Life at Valor" gallery, the images swapped in elsewhere on
// the site, and the new addition — all in one place per request. Exported as
// a tiles-only grid (no heading of its own) so it can sit inside the
// Community section of the full Student Life Overview page, under that
// section's own eyebrow/heading/copy.
const CAPTIONS = [
  'Campus community', 'Worship gathering', 'Student life', 'Students together',
  'Campus life', 'Community fellowship', 'Ministry team', 'Student fellowship',
  'On campus', 'Cohort life', 'Community', 'Campus moment', 'Student gathering',
];

function studentLifeGalleryGrid() {
  const tiles = IMG.studentLifeGallery.map((src, i) => {
    const offset = i % 2 === 1;
    return `      <div data-reveal="" ${offset ? 'class="gallery-offset" ' : ''}style="border-radius:16px;overflow:hidden;aspect-ratio:3/4${offset ? ';margin-top:34px' : ''}"><img src="${src}" alt="${CAPTIONS[i] || 'Student life at Valor'}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease" style-hover="transform:scale(1.06)"></div>`;
  }).join('\n');

  return `    <div class="gallery-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
${tiles}
    </div>`;
}

module.exports = { studentLifeGalleryGrid };
