const { IMG } = require('./build-site');

// Every photo requested to live on the Student Life page: the original 8 from
// the former Home "Life at Valor" gallery, the images swapped in elsewhere on
// the site, and the new addition — all in one place per request.
const CAPTIONS = [
  'Campus community', 'Worship gathering', 'Student life', 'Students together',
  'Campus life', 'Community fellowship', 'Ministry team', 'Student fellowship',
  'On campus', 'Cohort life', 'Community', 'Campus moment', 'Student gathering',
];

function studentLifeGallery() {
  const tiles = IMG.studentLifeGallery.map((src, i) => {
    const offset = i % 2 === 1;
    return `      <div data-reveal="" ${offset ? 'class="gallery-offset" ' : ''}style="border-radius:16px;overflow:hidden;aspect-ratio:3/4${offset ? ';margin-top:34px' : ''}"><img src="${src}" alt="${CAPTIONS[i] || 'Student life at Valor'}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease" style-hover="transform:scale(1.06)"></div>`;
  }).join('\n');

  return `  <section style="max-width:1320px;margin:0 auto;padding:80px 32px 100px">
    <div style="text-align:center;max-width:640px;margin:0 auto 40px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Life at Valor</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">A tight-knit, Spirit-filled community.</h2>
    </div>
    <div class="gallery-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
${tiles}
    </div>
  </section>`;
}

module.exports = { studentLifeGallery };
