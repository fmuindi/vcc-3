const { IMG } = require('./build-site');

// Source: valorcollege.edu/student-life/maccafe + the Student Life FAQ page
// (fetched 2026-09-21). The live page is just a title and a linked PDF —
// no on-page menu copy exists to migrate. Hours come from the FAQ page.
// TODO: the live PDF still lives on valorcollege.edu, not Directus — swap
// this for a Directus-hosted link once the client uploads a fresh one each
// semester (same migration pattern used for the site's other PDFs).
const CURRENT_SCHEDULE_PDF = 'https://valorcollege.edu/root/pdf/information/2026/September-2026_MAC-Schedule.pdf';

const HOURS = [
  { label: 'Days', value: 'Monday – Friday', note: 'Closed weekends and holidays' },
  { label: 'Lunch', value: '1:30 – 2:30 PM' },
  { label: 'Dinner', value: '5:00 – 6:00 PM' },
];

const hourCard = (h) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:18px;padding:28px 24px;text-align:center">
        <div style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#E01B2E;margin-bottom:12px">${h.label}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;color:#100E0D">${h.value}</div>
        ${h.note ? `<p style="margin:8px 0 0;font-size:12.5px;color:rgba(16,14,13,.55)">${h.note}</p>` : ''}
      </div>`;

const STUDENT_LIFE_MAC_CAFE_BODY = `  <section id="mac-cafe-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Student Life &nbsp;&middot;&nbsp; Mac Café &amp; Meal Menu</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Grab a Meal, Connect with Friends.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Mac Café is the hub of campus dining — good food and a place to catch up between classes.</p>
      <a data-reveal="" href="${CURRENT_SCHEDULE_PDF}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-file-pdf"></i> View Current Meal Schedule</a>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[7]}" alt="Valor Christian College students at Mac Café" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="hours" style="max-width:900px;margin:0 auto;padding:80px 32px 40px">
    <div style="max-width:600px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Cafeteria Hours</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
${HOURS.map(hourCard).join('\n')}
    </div>
    <p style="margin:32px 0 0;text-align:center;font-size:13.5px;line-height:1.6;color:rgba(16,14,13,.55)">The meal schedule above is updated each semester. Check back at the start of every term for the latest menu.</p>
  </section>`;

module.exports = { STUDENT_LIFE_MAC_CAFE_BODY };
