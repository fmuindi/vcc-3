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

// Small alternating rotation per tile — a scrapbook/photo-wall feel for
// "candid student photos: laughing, hanging out" rather than a rigid grid.
// Straightens back to 0deg on hover (see .tilt-tile in build-site.js) and is
// disabled entirely below 1200px, where a tilted 2-up grid would look messy.
const TILTS = [-2.5, 1.8, -1.6, 2.6, -2, 1.5, -3, 2.2, -1.8, 2.8, -2.2, 1.6, -2.6];

function studentLifeGalleryGrid() {
  // Two layers, deliberately: the outer element carries data-reveal (the
  // site's scroll-reveal script sets/clears inline transform directly on
  // whatever element has that attribute, which would otherwise stomp the
  // tile's own rotation). The inner .tilt-tile carries the actual tilt
  // transform and its hover-straighten behavior, untouched by that script.
  const tiles = IMG.studentLifeGallery.map((src, i) => {
    const offset = i % 2 === 1;
    const tilt = TILTS[i % TILTS.length];
    return `      <div data-reveal="" ${offset ? 'class="gallery-offset" ' : ''}style="aspect-ratio:3/4${offset ? ';margin-top:34px' : ''}">
        <div class="tilt-tile" style="width:100%;height:100%;border-radius:16px;overflow:hidden;box-shadow:0 14px 30px rgba(16,14,13,.14);transform:rotate(${tilt}deg)"><img src="${src}" alt="${CAPTIONS[i] || 'Student life at Valor'}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block"></div>
      </div>`;
  }).join('\n');

  return `    <div class="gallery-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px 16px">
${tiles}
    </div>`;
}

module.exports = { studentLifeGalleryGrid };
