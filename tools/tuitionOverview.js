const { IMG } = require('./build-site');

const OPTIONS = [
  { title: 'Tuition & Fees', copy: 'Review current tuition, fees, and other costs associated with attending Valor.', cta: 'View Tuition & Fees', href: 'tuition-aid-tuition-fees.html' },
  { title: 'Financial Aid', copy: 'Learn about financial aid options and resources available to eligible students.', cta: 'Explore Financial Aid', href: 'tuition-aid-financial-aid.html' },
  { title: 'Scholarships', copy: 'Explore scholarship opportunities that may help make your Valor education more affordable.', cta: 'View Scholarships', href: 'tuition-aid-scholarships.html' },
];

const optionCard = (o) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:32px 28px">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:19px;color:#100E0D;margin-bottom:12px">${o.title}</div>
        <p style="flex:1;margin:0 0 22px;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.62)">${o.copy}</p>
        <a href="${o.href}" style="align-self:flex-start;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:3px" style-hover="color:#E01B2E">${o.cta} →</a>
      </div>`;

const TUITION_OVERVIEW_BODY = `  <section id="tuition-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Tuition &amp; Aid</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,60px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Invest in Your Calling.</h1>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Your education is an investment in your future. At Valor Christian College, we are committed to helping you understand the cost of your education and the financial resources available to help you take your next step.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[8]}" alt="Valor Christian College students" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="explore-options" style="max-width:1320px;margin:0 auto;padding:100px 32px 120px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Plan for Your Valor Education.</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Find the information and resources you need to understand the cost of attending Valor and the options available to you.</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${OPTIONS.map(optionCard).join('\n')}
    </div>
  </section>`;

module.exports = { TUITION_OVERVIEW_BODY };
