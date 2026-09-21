const { IMG } = require('./build-site');

// No live-site content exists for this page. Confirmed with the client:
// this "City Harvest Network" (a ministry/pastor network for alumni) is a
// different, unrelated thing from the "City Harvest Network Scholarship"
// on the Tuition & Aid > Scholarships page (same name, coincidental) — a
// short on-page note calls that out since a visitor could reasonably
// confuse the two.
const ADMISSIONS_EMAIL = 'admissions@valorcollege.edu';

const ALUMNI_CITY_HARVEST_NETWORK_BODY = `  <section id="chn-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Alumni &nbsp;&middot;&nbsp; City Harvest Network</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Stay Connected to the Network.</h1>
      <p data-reveal="" style="margin:0 0 16px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Continue learning and stay connected to pastors and ministry leaders worldwide through City Harvest Network.</p>
      <p data-reveal="" style="margin:0;font-size:13px;line-height:1.5;color:rgba(16,14,13,.45);max-width:56ch">Not to be confused with the <a href="tuition-aid-scholarships.html#city-harvest" style="color:#B3121F;font-weight:700">City Harvest Network Scholarship</a> — a separate, unrelated program.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[2]}" alt="Valor Christian College ministry leaders" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="chn-connect" style="max-width:800px;margin:0 auto;padding:80px 32px 120px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.4vw,38px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Want to Get Connected?</h2>
    <p data-reveal="" style="margin:0 0 28px;font-size:15.5px;line-height:1.65;color:rgba(16,14,13,.65)">Reach out to learn more about City Harvest Network and how to plug in as a Valor alum.</p>
    <a data-reveal="" href="mailto:${ADMISSIONS_EMAIL}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Get in Touch</a>
  </section>`;

module.exports = { ALUMNI_CITY_HARVEST_NETWORK_BODY };
