const { IMG } = require('./build-site');

const FAFSA_LINK = 'https://studentaid.gov/h/apply-for-aid/fafsa';
const FINANCIAL_AID_PHONE_DISPLAY = '1-855-219-6538';
const FINANCIAL_AID_PHONE_TEL = '18552196538';

const FAFSA_STEPS = [
  { num: '01', label: 'Create or Access Your StudentAid.gov Account' },
  { num: '02', label: 'Complete the FAFSA' },
  { num: '03', label: 'Add Valor Christian College' },
  { num: '04', label: 'Review Your Financial Aid Information' },
];

const fafsaStep = (s) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:36px;line-height:1;color:rgba(224,27,46,.28);margin-bottom:14px">${s.num}</div>
        <div style="font-weight:700;font-size:15px;line-height:1.4;color:#100E0D">${s.label}</div>
      </div>`;

const AID_TYPES = [
  { icon: 'fa-hand-holding-heart', title: 'Grants', copy: 'Need-based financial assistance that typically does not have to be repaid, when eligibility requirements are met.' },
  { icon: 'fa-file-invoice-dollar', title: 'Federal Student Loans', copy: 'Eligible students may have access to federal student loans to help cover educational expenses.' },
  { icon: 'fa-award', title: 'Scholarships', copy: 'Valor students may qualify for institutional or other scholarship opportunities.' },
  { icon: 'fa-hands-holding-circle', title: 'Other Resources', copy: 'Additional funding opportunities may be available depending on a student’s eligibility and circumstances.' },
];

const aidTypeCard = (a) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:28px 24px">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid ${a.icon}" style="color:#E01B2E;font-size:18px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;color:#100E0D;margin-bottom:10px">${a.title}</div>
        <p style="flex:1;margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.62)">${a.copy}</p>
      </div>`;

const TUITION_FINANCIAL_AID_BODY = `  <section id="financial-aid-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Affording Valor</div>
      <h1 data-reveal="" style="margin:0 0 14px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,60px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Financial Aid</h1>
      <p data-reveal="" style="margin:0 0 18px;font-size:18px;line-height:1.5;color:#B3121F;font-weight:600;max-width:52ch">Your calling is worth investing in. We're here to help you understand the financial resources that may be available to make your Valor education possible.</p>
      <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Financial aid can help eligible students manage the cost of their education. Our Financial Aid team can help you understand your options and guide you through the process.</p>
      <div data-reveal="" class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px">
        <a href="${FAFSA_LINK}" target="_blank" rel="noopener" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Start Your FAFSA</a>
        <a href="#need-help" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Talk to Financial Aid</a>
      </div>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[9]}" alt="Valor Christian College students" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="start-fafsa" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:680px;margin:0 auto 48px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Your First Step: Complete the FAFSA</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">The Free Application for Federal Student Aid (FAFSA) helps determine your eligibility for federal financial aid and other forms of assistance.</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:44px">
${FAFSA_STEPS.map(fafsaStep).join('\n')}
    </div>
    <div style="text-align:center">
      <a data-reveal="" href="${FAFSA_LINK}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Complete the FAFSA <i class="fa-solid fa-arrow-right"></i></a>
      <div data-reveal="" style="margin-top:36px;display:inline-flex;flex-direction:column;align-items:center;gap:4px;padding:18px 32px;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:16px">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55)">Valor Christian College School Code</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#100E0D">To Be Confirmed</div>
      </div>
    </div>
  </section>

  <section id="aid-types" style="max-width:1320px;margin:0 auto;padding:60px 32px 40px">
    <div style="max-width:640px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Financial Aid Options</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:40px">
${AID_TYPES.map(aidTypeCard).join('\n')}
    </div>
    <div style="text-align:center">
      <a data-reveal="" href="tuition-aid-scholarships.html" style="font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:4px" style-hover="color:#E01B2E">Explore Scholarships →</a>
    </div>
  </section>

  <section id="understand-cost" class="about-grid" style="max-width:1000px;margin:100px auto 0;padding:0 32px;display:grid;grid-template-columns:1fr;text-align:center">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Plan Ahead</div>
    <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Know Your Cost. Understand Your Options.</h2>
    <p data-reveal="" style="margin:0 auto 8px;max-width:56ch;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Before determining how you'll pay for college, it's important to understand the estimated cost of attending Valor.</p>
    <p data-reveal="" style="margin:0 auto 32px;max-width:56ch;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Review tuition, fees, housing and other estimated expenses for the academic year.</p>
    <div>
      <a data-reveal="" href="tuition-aid-tuition-fees.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">View Tuition &amp; Fees <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </section>

  <section id="need-help" style="max-width:800px;margin:100px auto 0;padding:0 32px 120px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">We're Here to Help.</h2>
    <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Financial aid can feel complicated, but you don't have to figure it out alone. Our Financial Aid team can help answer questions about eligibility, FAFSA, available aid and your next steps.</p>
    <a data-reveal="" href="tel:${FINANCIAL_AID_PHONE_TEL}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-phone"></i> Talk to a Financial Aid Counselor</a>
    <div data-reveal="" style="margin-top:30px">
      <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.5);margin-bottom:6px">Financial Aid Office</div>
      <a href="tel:${FINANCIAL_AID_PHONE_TEL}" style="font-size:16px;font-weight:700;color:#B3121F" style-hover="color:#E01B2E">${FINANCIAL_AID_PHONE_DISPLAY}</a>
    </div>
  </section>`;

module.exports = { TUITION_FINANCIAL_AID_BODY };
