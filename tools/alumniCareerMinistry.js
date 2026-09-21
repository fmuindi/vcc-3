const { IMG } = require('./build-site');

// No live-site content exists for this page, and no real job/ministry
// listings were supplied — built as a direct line to real staff who can
// actually help (Dean of Students, Admissions), rather than implying a job
// board or partner network that doesn't exist yet.
const DEAN_EMAIL = 'deanofstudents@valorcollege.edu';

const ALUMNI_CAREER_MINISTRY_BODY = `  <section id="career-ministry-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Alumni &nbsp;&middot;&nbsp; Career &amp; Ministry Opportunities</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">We're Invested in Where You Land.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Whether you're stepping into ministry, missions, or the marketplace, our team wants to help you take the next step with confidence.</p>
      <a data-reveal="" href="mailto:${DEAN_EMAIL}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Talk to the Dean of Students</a>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[1]}" alt="Valor Christian College graduate" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="how-we-help" style="max-width:800px;margin:0 auto;padding:80px 32px 120px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.4vw,38px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Reach Out — We'll Help You Find Your Next Step.</h2>
    <p data-reveal="" style="margin:0;font-size:15.5px;line-height:1.65;color:rgba(16,14,13,.65)">We're building out formal ministry and career connections for Valor alumni. In the meantime, our Student Life team is glad to talk through where you're headed and point you toward people and opportunities in the Valor network.</p>
  </section>`;

module.exports = { ALUMNI_CAREER_MINISTRY_BODY };
