const { IMG } = require('./build-site');

const APPLY_LINK = 'admissions-apply-now.html';
// Same client-supplied Microsoft Bookings link used for International
// Admissions on the admissions-international-students.html page.
const INTL_BOOKING_LINK = 'https://bookings.cloud.microsoft/book/ValorChristianCollegeAdmissionsOffice@whc.life/?ismsaljsauthenabled=true';
const INTL_EMAIL = 'SuppleP@valorcollege.edu';
const INTL_PHONE_DISPLAY = '614-837-4088 Ext. 4481';
const INTL_PHONE_TEL = '16148374088';

const VALOR_COSTS = [
  { label: 'Tuition', amount: '$9,504' },
  { label: 'General Fees', amount: '$1,900' },
  { label: 'Residence Hall + Meal Plan', amount: '$10,400' },
];

const costRow = (c) => `        <div style="display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid rgba(16,14,13,.08);font-size:15px">
          <span style="color:rgba(16,14,13,.65)">${c.label}</span><span style="font-weight:700;color:#100E0D">${c.amount}</span>
        </div>`;

const TUITION_INTERNATIONAL_BODY = `  <section id="intl-tuition-hero" style="position:relative;min-height:66vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <div style="position:absolute;inset:0;background:radial-gradient(70% 90% at 30% 30%,rgba(224,27,46,.3),rgba(16,14,13,.97))"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">International Students</div>
      <h1 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(32px,5.5vw,64px);line-height:1.05;letter-spacing:-.03em;text-wrap:balance">International Student Tuition &amp; Fees</h1>
      <p data-reveal="" style="margin:0 auto 16px;max-width:56ch;font-size:19px;line-height:1.5;color:#FF8A93;font-weight:600">Plan confidently for your education at Valor Christian College.</p>
      <p data-reveal="" style="margin:0 auto 28px;max-width:58ch;font-size:16px;line-height:1.6;color:rgba(250,245,238,.8)">International students have additional financial requirements when studying in the United States. We've made the costs easier to understand so you can plan for your academic year at Valor.</p>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(250,245,238,.55);margin-bottom:32px">2026–2027 Academic Year</div>
      <a data-reveal="" href="#estimated-cost" style="display:inline-flex;align-items:center;gap:8px;border:1.5px solid rgba(250,245,238,.4);color:#FAF5EE;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(250,245,238,.1);color:#FAF5EE">View Estimated Costs <i class="fa-solid fa-arrow-down"></i></a>
    </div>
  </section>

  <section id="estimated-cost" style="max-width:1000px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:680px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Your Estimated Annual Cost at Valor</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">For a full-time international student living on campus, the following provides an estimate of the primary costs paid directly to Valor Christian College for one academic year.</p>
    </div>
    <div data-reveal="" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:24px;padding:44px 40px;box-shadow:0 30px 80px rgba(16,14,13,.08)">
      <div style="text-align:center;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#E01B2E;margin-bottom:28px">2026–2027 &nbsp;|&nbsp; Full-Time &bull; On-Campus</div>
      <div>
${VALOR_COSTS.map(costRow).join('\n')}
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:20px;margin-top:4px">
          <span style="font-weight:800;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:#100E0D">Estimated Total Paid to Valor</span>
          <span style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px;color:#E01B2E">$21,804</span>
        </div>
      </div>
      <p style="margin:26px 0 0;font-size:13.5px;line-height:1.6;color:rgba(16,14,13,.6);text-align:center">Additional fees may apply based on your program and individual circumstances, including parking permits and Music or Media Lab fees.</p>
      <p style="margin:12px 0 0;font-size:12px;line-height:1.6;color:rgba(16,14,13,.45);font-style:italic;text-align:center">Costs are estimates and are subject to change.</p>
    </div>
  </section>

  <section id="financial-requirement" data-reveal="" style="position:relative;margin:60px 0 0;padding:110px 32px;background:#100E0D;overflow:hidden">
    <div style="position:absolute;inset:0;background:radial-gradient(60% 90% at 75% 25%,rgba(224,27,46,.28),rgba(16,14,13,.92))"></div>
    <div style="position:relative;max-width:800px;margin:0 auto;text-align:center">
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#FAF5EE">Understanding Your Financial Requirement</h2>
      <p data-reveal="" style="margin:0 auto 44px;max-width:60ch;font-size:16px;line-height:1.6;color:rgba(250,245,238,.8)">International students must demonstrate sufficient financial resources to cover their education and estimated living expenses while studying in the United States.</p>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(250,245,238,.6);margin-bottom:14px">Estimated Minimum Financial Requirement</div>
      <div data-reveal="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(56px,9vw,96px);line-height:1;color:#fff">$40,732</div>
      <div data-reveal="" style="font-size:13px;font-weight:600;color:rgba(250,245,238,.6);margin-top:14px;margin-bottom:36px">For one academic year</div>
      <div data-reveal="" style="background:rgba(250,245,238,.06);border:1px solid rgba(250,245,238,.18);border-radius:16px;padding:26px 30px;text-align:left;margin-bottom:24px">
        <p style="margin:0;font-size:15.5px;line-height:1.6;color:#FAF5EE"><strong>This is not the amount paid to Valor.</strong> The financial requirement includes tuition, fees, housing and estimated expenses such as supplies, health insurance and living costs.</p>
      </div>
      <p data-reveal="" style="margin:0 0 34px;font-size:14px;line-height:1.6;color:rgba(250,245,238,.65)">Your required financial documentation may vary based on your housing, family circumstances and other individual factors.</p>
      <a data-reveal="" href="admissions-international-students.html#requirements" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">View International Student Requirements <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </section>

  <section id="intl-tuition-help" style="position:relative;padding:110px 32px;background:#100E0D;overflow:hidden">
    <img src="${IMG.studentLifeGallery[6]}" alt="Valor Christian College students" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.28">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(16,14,13,.75) 0%,rgba(16,14,13,.94) 100%)"></div>
    <div style="position:relative;max-width:760px;margin:0 auto;text-align:center">
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#FAF5EE">Have Questions About Your Costs?</h2>
      <p data-reveal="" style="margin:0 auto 36px;max-width:58ch;font-size:16px;line-height:1.6;color:rgba(250,245,238,.8)">International student finances can look different for every student. Our Admissions team can help you understand your estimated costs, required financial documentation and next steps.</p>
      <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-bottom:30px">
        <a data-reveal="" href="${INTL_BOOKING_LINK}" target="_blank" rel="noopener" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact International Admissions</a>
        <a data-reveal="" href="${APPLY_LINK}" style="border:1.5px solid rgba(250,245,238,.4);color:#FAF5EE;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(250,245,238,.1);color:#FAF5EE">Apply to Valor</a>
      </div>
      <div data-reveal="" style="font-size:13px;color:rgba(250,245,238,.6)">
        <div style="font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:11px;color:rgba(250,245,238,.5);margin-bottom:8px">International Admissions</div>
        <a href="mailto:${INTL_EMAIL}" style="color:#FF8A93" style-hover="color:#fff">${INTL_EMAIL}</a>
        <span style="margin:0 8px;color:rgba(250,245,238,.35)">&middot;</span>
        <a href="tel:${INTL_PHONE_TEL}" style="color:#FF8A93" style-hover="color:#fff">${INTL_PHONE_DISPLAY}</a>
      </div>
    </div>
  </section>`;

module.exports = { TUITION_INTERNATIONAL_BODY };
