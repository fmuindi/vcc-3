const { IMG } = require('./build-site');

// PDF links per the client-supplied list ("ALL THE PDFs to USE from the old
// website", valorcollege.edu/academics/catalog). No invented years or URLs —
// the reference mockup showed an extra "2018" archive card with no matching
// URL in that list, so it's intentionally left out here.
const CATALOG_BASE = 'https://valorcollege.edu/root/pdf/academics/catalog/';
const CURRENT_CATALOG = { years: '2026–2027', file: '2026-2027_Academic_Catalog.pdf' };
const ARCHIVE_CATALOGS = [
  { years: '2025–2026', file: '2025-2026_Academic_Catalog.pdf' },
  { years: '2024–2025', file: '2024-2025_Academic_Catalog.pdf' },
  { years: '2023–2024', file: '2023-2024_Academic_Catalog.pdf' },
  { years: '2022–2023', file: '2022-2023_Academic_Catalog.pdf' },
  { years: '2021–2022', file: '2021-2022_Academic_Catalog.pdf' },
  { years: '2020–2021', file: '2020-2021_Academic_Catalog.pdf' },
  { years: '2019–2020', file: '2019-2020_Academic_Catalog.pdf' },
];
const RECENT_ARCHIVE = ARCHIVE_CATALOGS.slice(0, 4);
const OLDER_ARCHIVE = ARCHIVE_CATALOGS.slice(4);

const archiveRow = (c, compact) => `        <div data-reveal="" style="display:flex;align-items:center;justify-content:space-between;gap:16px;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:${compact ? '10px' : '14px'};padding:${compact ? '14px 18px' : '20px 22px'}">
          <div style="display:flex;align-items:center;gap:${compact ? '10' : '14'}px">
            <i class="fa-solid fa-file-pdf" style="color:#B3121F;font-size:${compact ? '14' : '17'}px"></i>
            <span style="font-weight:700;font-size:${compact ? '13.5' : '15'}px;color:#100E0D">${c.years} Academic Catalog</span>
          </div>
          <a href="${CATALOG_BASE}${c.file}" target="_blank" rel="noopener" style="flex:none;display:inline-flex;align-items:center;gap:6px;font-size:${compact ? '11.5' : '12.5'}px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#B3121F" style-hover="color:#E01B2E">View PDF <i class="fa-solid fa-arrow-right" style="font-size:10px"></i></a>
        </div>`;

const ACADEMICS_CATALOG_BODY = `  <section id="catalog-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Academic Catalog</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,64px);line-height:1.03;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Everything You Need in One Place.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">The Academic Catalog includes important information about programs, courses, tuition, policies, and academic requirements for both prospective and current students.</p>
      <a data-reveal="" href="#current-catalog" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-file-lines"></i> View Current Catalog</a>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[4]}" alt="Valor Christian College students" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="current-catalog" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Current Academic Year</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">2026 Academic Catalog</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">View or download the current Valor Christian College Academic Catalog for the most up-to-date academic information.</p>
    </div>
    <div data-reveal="" class="about-grid" style="max-width:920px;margin:0 auto;display:grid;grid-template-columns:.85fr 1.15fr;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:24px;overflow:hidden">
      <div style="position:relative;padding:44px 36px;text-align:center;background:#100E0D;overflow:hidden">
        <i class="fa-solid fa-shield-halved" style="position:absolute;left:50%;bottom:-30px;transform:translateX(-50%);font-size:180px;color:rgba(250,245,238,.04)"></i>
        <div style="position:relative;width:54px;height:54px;margin:0 auto 18px;border-radius:50%;background:rgba(224,27,46,.16);display:grid;place-items:center"><i class="fa-solid fa-book-open" style="color:#FF8A93;font-size:22px"></i></div>
        <div style="position:relative;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(250,245,238,.7);margin-bottom:8px">Academic Catalog</div>
        <div style="position:relative;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4vw,44px);color:#E01B2E;margin-bottom:26px">${CURRENT_CATALOG.years}</div>
        <div style="position:relative;display:flex;flex-direction:column;gap:10px">
          <a href="${CATALOG_BASE}${CURRENT_CATALOG.file}" target="_blank" rel="noopener" style="background:#E01B2E;color:#fff;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:14px 20px;border-radius:999px" style-hover="background:#F02338;color:#fff"><i class="fa-solid fa-file-lines"></i> View PDF</a>
          <a href="${CATALOG_BASE}${CURRENT_CATALOG.file}" download style="border:1.5px solid rgba(250,245,238,.4);color:#FAF5EE;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:13px 20px;border-radius:999px" style-hover="background:rgba(250,245,238,.1);color:#FAF5EE"><i class="fa-solid fa-download"></i> Download PDF</a>
        </div>
      </div>
      <div style="padding:44px 40px">
        <div style="display:flex;flex-direction:column;gap:16px">
          ${['Programs', 'Course Descriptions', 'Academic Policies', 'Tuition Information', 'Requirements'].map((t) => `<div style="display:flex;align-items:center;gap:12px;font-size:15px;font-weight:600;color:#100E0D"><i class="fa-solid fa-circle-check" style="color:#E01B2E"></i> ${t}</div>`).join('\n          ')}
        </div>
      </div>
    </div>
  </section>

  <section id="catalog-archive" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:640px;margin:0 auto 44px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Archive</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Previous Academic Catalogs</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Looking for information from a previous academic year? Access past catalogs below.</p>
    </div>
    <div class="programs-grid" style="max-width:920px;margin:0 auto;display:grid;grid-template-columns:repeat(2,1fr);gap:14px">
${RECENT_ARCHIVE.map((c) => archiveRow(c, false)).join('\n')}
    </div>
    <div class="programs-grid" style="max-width:920px;margin:14px auto 0;display:grid;grid-template-columns:repeat(2,1fr);gap:10px;opacity:.75">
${OLDER_ARCHIVE.map((c) => archiveRow(c, true)).join('\n')}
    </div>
  </section>

  <section id="catalog-help" style="max-width:1000px;margin:0 auto;padding:80px 32px 120px">
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:28px;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:24px;padding:44px 40px">
      <div style="display:flex;align-items:center;gap:20px">
        <div style="flex:none;width:56px;height:56px;border-radius:50%;border:1.5px solid rgba(224,27,46,.35);display:grid;place-items:center"><i class="fa-solid fa-headset" style="color:#E01B2E;font-size:22px"></i></div>
        <div>
          <div data-reveal="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#100E0D;margin-bottom:6px">Have Questions About the Catalog?</div>
          <p data-reveal="" style="margin:0;font-size:14.5px;line-height:1.55;color:rgba(16,14,13,.62);max-width:46ch">Our Academic Affairs team can help with questions about programs, academic policies, or course requirements.</p>
        </div>
      </div>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:12px">
        <a href="mailto:academics@valorcollege.edu" style="background:#E01B2E;color:#fff;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 24px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact Academics</a>
        <a href="admissions-speak-with-a-counselor.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:13px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:13.5px 22px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Speak with Admissions</a>
      </div>
    </div>
  </section>`;

module.exports = { ACADEMICS_CATALOG_BODY };
