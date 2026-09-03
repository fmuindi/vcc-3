const { IMG } = require('./build-site');

const FINANCIAL_AID_EMAIL = 'financialaid@valorcollege.edu';

const BREAKDOWN = [
  { label: 'Tuition', amount: '$9,504' },
  { label: 'Required Student Fees', amount: '$1,900' },
  { label: 'Housing', amount: '$6,200' },
  { label: 'Meal Plan', amount: '$3,790' },
  { label: 'Residential Fees', amount: '$700' },
];

const breakdownRow = (b) => `        <div style="display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid rgba(16,14,13,.08);font-size:15px">
          <span style="color:rgba(16,14,13,.65)">${b.label}</span><span style="font-weight:700;color:#100E0D">${b.amount}</span>
        </div>`;

// Client brief gives category names for each accordion group but no
// per-line dollar amounts (unlike the Section 2 summary above, which did
// come with figures) — listed as categories only, no invented numbers.
const BREAKDOWN_GROUPS = [
  { key: 'tuition', icon: 'fa-graduation-cap', title: 'Tuition', items: ['Full time tuition', 'Part time tuition', 'Additional credit hours', 'Audit tuition'] },
  { key: 'student-fees', icon: 'fa-file-invoice-dollar', title: 'Student Fees', items: ['Administrative Fee', 'Technology Fee', 'Course Resource Fee', 'Program specific fees', 'Parking'] },
  { key: 'housing-meals', icon: 'fa-house', title: 'Housing & Meals', items: ['Double Occupancy', 'Single Occupancy', 'Room and Board Fee', 'Dorm Activities and Laundry Fee', 'Meal Plan'] },
  { key: 'additional-fees', icon: 'fa-circle-plus', title: 'Additional Fees', items: ['Credit by Examination', 'Transcript Requests', 'Late Registration', 'Graduation', 'Replacement Fees', 'Other applicable fees'] },
];

const breakdownGroup = (g) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 28px">
        <button type="button" data-view-all="${g.key}" data-more-label="${g.title} +" data-less-label="${g.title} –" style="display:flex;align-items:center;gap:18px;width:100%;background:none;border:none;padding:0;cursor:pointer;text-align:left">
          <div style="flex:none;width:44px;height:44px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center"><i class="fa-solid ${g.icon}" style="color:#E01B2E;font-size:17px"></i></div>
          <span data-swap-label="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D">${g.title} +</span>
        </button>
        <div data-more="${g.key}" style="display:none;margin-top:22px;padding-top:22px;border-top:1px solid rgba(16,14,13,.08)">
          <div style="display:flex;flex-direction:column;gap:12px">
${g.items.map((t) => `            <div style="display:flex;align-items:center;gap:12px;font-size:14.5px;color:rgba(16,14,13,.72)"><i class="fa-solid fa-circle-check" style="color:#E01B2E;font-size:12px"></i> ${t}</div>`).join('\n')}
          </div>
        </div>
      </div>`;

const TUITION_FEES_BODY = `  <section id="tuition-fees-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Tuition &amp; Aid &nbsp;·&nbsp; Tuition &amp; Fees</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Invest in Your Calling. Prepare for Your Future.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">At Valor Christian College, we are committed to providing a Christ-centered education that prepares students academically, spiritually, and practically for their calling.</p>
      <a data-reveal="" href="admissions-apply-now.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Apply Now</a>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[3]}" alt="Valor Christian College students on campus" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="estimated-cost" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">2026–2027 Academic Year</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Your Estimated Cost to Attend Valor</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Planning for college should be simple. Here is an estimated annual cost for a full-time student living on campus at Valor Christian College.</p>
    </div>
    <div data-reveal="" style="max-width:820px;margin:0 auto;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:28px;padding:56px 48px;box-shadow:0 30px 80px rgba(16,14,13,.08)">
      <div style="text-align:center">
        <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Full Time On Campus</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(52px,7.5vw,84px);line-height:1;color:#100E0D">$22,094</div>
        <div style="font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:14px">Estimated Per Academic Year</div>
        <p style="max-width:52ch;margin:18px auto 0;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.62)">Based on full-time enrollment for two semesters, double occupancy housing, required student fees, meal plan, and applicable residential fees.</p>
      </div>
      <div style="margin-top:40px;border-top:1px solid rgba(16,14,13,.1);padding-top:8px">
${BREAKDOWN.map(breakdownRow).join('\n')}
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:20px;margin-top:4px">
          <span style="font-weight:800;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:#100E0D">Estimated Annual Total</span>
          <span style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;color:#E01B2E">$22,094</span>
        </div>
      </div>
      <p style="margin:28px 0 0;font-size:12.5px;line-height:1.6;color:rgba(16,14,13,.5);font-style:italic;text-align:center">This estimate is based on a full time residential student with double occupancy for the 2026–2027 academic year. Individual costs may vary based on housing selection, program, course load, parking, and other applicable fees.</p>
      <div style="text-align:center;margin-top:32px">
        <a href="#full-breakdown" style="display:inline-flex;align-items:center;gap:8px;border:1.5px solid rgba(224,27,46,.4);color:#B3121F;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(224,27,46,.08)">View Detailed Tuition &amp; Fees <i class="fa-solid fa-arrow-down"></i></a>
      </div>
    </div>
  </section>

  <section id="cost-may-be-lower" style="max-width:800px;margin:60px auto 0;padding:0 32px;text-align:center">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Financial Assistance</div>
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Your Cost May Be Lower.</h2>
    <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">The estimated cost is not necessarily what every student will pay. Scholarships and financial aid opportunities may be available to help eligible students reduce their out-of-pocket cost.</p>
    <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="tuition-aid-financial-aid.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Explore Financial Aid</a>
      <a data-reveal="" href="tuition-aid-scholarships.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">View Scholarships</a>
    </div>
  </section>

  <section id="full-breakdown" style="max-width:1000px;margin:100px auto 0;padding:0 32px 40px">
    <div style="max-width:640px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">2026–2027 Tuition &amp; Fee Breakdown</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Review the current tuition, housing, and applicable student fees for the 2026–2027 academic year.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
${BREAKDOWN_GROUPS.map(breakdownGroup).join('\n')}
    </div>
  </section>

  <section id="tuition-final-cta" style="position:relative;margin-top:100px;background:#E01B2E;color:#fff;padding:110px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:800px;margin:0 auto;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:16px">Ready to Take Your Next Step?</div>
      <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,5vw,60px);line-height:1.02;letter-spacing:-.03em">Your Future at Valor Starts Here.</h2>
      <p data-reveal="" style="margin:0 auto 34px;max-width:56ch;font-size:17px;line-height:1.55;color:rgba(255,255,255,.85)">Have questions about tuition, financial aid, or paying for college? Our team is ready to help you understand your options.</p>
      <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="admissions-apply-now.html" style="background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 40px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Apply Now</a>
        <a data-reveal="" href="mailto:${FINANCIAL_AID_EMAIL}" style="border:1.5px solid rgba(255,255,255,.55);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 38px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.14);color:#fff">Speak With Financial Aid</a>
      </div>
    </div>
  </section>`;

module.exports = { TUITION_FEES_BODY };
