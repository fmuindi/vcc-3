const { IMG } = require('./build-site');

const ADMISSIONS_COUNSELOR_LINK = 'admissions-speak-with-a-counselor.html';
const FINANCIAL_AID_LINK = 'tuition-aid-financial-aid.html#need-help';
// TODO: the scholarship application is a single form covering all 4
// scholarships and currently lives on VCC's existing web system
// (valorcollege.edu/scholarships), not this static site. The client's own
// brief flagged that rebuilding it needs IT/web-team input first (how the
// new site would submit/store applications, whether it integrates with
// Populi, etc.) — so every "Apply" CTA below routes to the current live
// application in the interim rather than a non-functional mockup form.
const SCHOLARSHIP_APPLY_LINK = 'https://valorcollege.edu/scholarships';
// TODO: no Directus-hosted Terms & Conditions PDFs were supplied for any
// of the 4 scholarships — routed to the same interim destination above
// until real document links exist (same migration pattern used for the
// site's other PDFs).
const TERMS_LINK = SCHOLARSHIP_APPLY_LINK;

// One unified visual system for all 4 scholarships — same gradient panel,
// same icon tile, same stat hierarchy — replacing the mismatched logo
// artwork on the old site (built as a coordinated "collection" rather
// than four separate ads, per the brief's own framing).
//
// iconUrl points at the client's own Directus-hosted brand mark for each
// scholarship (confirmed updated at these same URLs, including a
// corrected City Harvest Network asset — the version supplied for the
// first pass was an Illustrator .ai file, which browsers can't render).
// `icon` (Font Awesome) is kept only as a big, low-opacity decorative
// watermark behind each card header — a purely geometric texture, not a
// brand mark, so it doesn't need to match the real logos.
const CARD_GRADIENT = 'linear-gradient(135deg,#1a0508 0%,#4a0d15 55%,#E01B2E 100%)';

const SCHOLARSHIPS = [
  {
    key: 'world-changer',
    num: '01',
    icon: 'fa-earth-americas',
    iconUrl: 'https://directus.valorcollege.edu/assets/27499A52-44AD-49A7-AE25-619438EA7EFD',
    title: 'World Changer Scholarship',
    stat: '20%', statLabel: 'of Tuition',
    award: 'Up to 20% of tuition',
    copy: 'Created for students ready to answer the call, pursue their purpose and become World Changers through a Valor education.',
    available: 'On Campus + Online',
    programs: 'On Campus and Online',
  },
  {
    key: 'word-network',
    num: '02',
    icon: 'fa-tower-broadcast',
    iconUrl: 'https://directus.valorcollege.edu/assets/4176C0DF-9356-4770-8428-47E0D2AB4FF8',
    title: 'Word Network Scholarship',
    stat: '20%', statLabel: 'of Tuition',
    award: 'Up to 20% of tuition',
    copy: 'A scholarship opportunity helping eligible students take the next step toward their education at Valor Christian College.',
    available: null,
    programs: null,
  },
  {
    key: 'city-harvest',
    num: '03',
    icon: 'fa-city',
    iconUrl: 'https://directus.valorcollege.edu/assets/34612451-998F-4D68-BE8B-F31CD865B2F3',
    title: 'City Harvest Network Scholarship',
    stat: '25%', statLabel: 'of Tuition',
    award: 'Up to 25% of tuition',
    copy: 'Available to eligible students connected to the City Harvest Network who are pursuing their education and preparing to impact their communities for the Kingdom.',
    available: 'On Campus + Online',
    programs: 'On Campus and Online',
  },
  {
    key: 'presidential',
    num: '04',
    icon: 'fa-shield-halved',
    iconUrl: 'https://directus.valorcollege.edu/assets/8D439628-AFCF-4B10-B5C9-9D81171BDAE8',
    title: 'Presidential Scholarship',
    stat: 'TBD', statLabel: 'Award Amount',
    award: 'Award amount: to be confirmed',
    copy: 'A special scholarship opportunity for eligible on-campus students who help introduce the Valor experience to a future World Changer.',
    available: 'On Campus',
    programs: 'On Campus',
  },
];

const scholarshipCard = (s) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:22px;overflow:hidden;transition:transform .2s ease,box-shadow .2s ease" style-hover="transform:translateY(-6px);box-shadow:0 24px 50px rgba(16,14,13,.16)">
        <div style="position:relative;background:${CARD_GRADIENT};padding:30px 26px 24px;overflow:hidden">
          <i class="fa-solid ${s.icon}" style="position:absolute;right:-14px;bottom:-22px;font-size:104px;color:rgba(255,255,255,.08);transform:rotate(-8deg)"></i>
          <div style="position:relative;display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:26px">
            <div style="width:50px;height:50px;border-radius:14px;background:#fff;display:grid;place-items:center;padding:9px;overflow:hidden"><img src="${s.iconUrl}" alt="" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:contain"></div>
            <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:12px;letter-spacing:.08em;color:rgba(255,255,255,.45)">${s.num}</div>
          </div>
          <div style="position:relative;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,3vw,38px);line-height:1;color:#fff">${s.stat}</div>
          <div style="position:relative;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-top:6px">${s.statLabel}</div>
        </div>
        <div style="display:flex;flex-direction:column;flex:1;padding:26px 26px 28px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D;margin-bottom:10px">${s.title}</div>
          <p style="flex:1;margin:0 0 16px;font-size:14px;line-height:1.6;color:rgba(16,14,13,.62)">${s.copy}</p>
          ${s.available ? `<div style="font-size:12px;color:rgba(16,14,13,.55);margin-bottom:20px"><strong style="color:#100E0D">Available for:</strong> ${s.available}</div>` : '<div style="margin-bottom:20px"></div>'}
          <div style="display:flex;gap:10px">
            <a href="#${s.key}" style="flex:1;text-align:center;border:1.5px solid rgba(16,14,13,.2);color:#100E0D;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:12px 16px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">View Details</a>
            <a href="${SCHOLARSHIP_APPLY_LINK}" target="_blank" rel="noopener" style="flex:1;text-align:center;background:#E01B2E;color:#fff;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:12px 16px;border-radius:999px" style-hover="background:#F02338;color:#fff">Apply</a>
          </div>
        </div>
      </div>`;

const STEPS = [
  { num: '01', label: 'Explore', copy: 'Review the available scholarships and determine which opportunities may apply to you.' },
  { num: '02', label: 'Review', copy: "Read the eligibility requirements and Terms & Conditions for each scholarship you're interested in." },
  { num: '03', label: 'Apply', copy: "Complete one scholarship application and select the scholarship opportunities for which you'd like to be considered." },
  { num: '04', label: 'Connect', copy: 'Our team will contact you regarding your application and any additional steps that may be required.' },
];

const stepCard = (s) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:40px;line-height:1;color:rgba(224,27,46,.28);margin-bottom:16px">${s.num}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D;margin-bottom:10px">${s.label}</div>
        <p style="flex:1;margin:0;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.65)">${s.copy}</p>
      </div>`;

// Facts-only bullet list — the brief's own placeholder text for this
// section was literally "Short eligibility summary" (a drafting note,
// not real copy), so rather than invent plausible-sounding eligibility
// criteria, each bullet is a confirmed fact already given elsewhere in
// the brief (award amount, program availability) plus a pointer to the
// real Terms & Conditions for anything not covered here.
const detailBullets = (s) => [
  `Award: ${s.award}`,
  s.programs ? `Programs: ${s.programs}` : null,
  'Full eligibility requirements are available in the official Terms & Conditions.',
].filter(Boolean);

const detailAccordion = (s) => `      <div id="${s.key}" class="acc-row" data-reveal="" style="scroll-margin-top:130px">
        <button type="button" class="acc-header" data-view-all="${s.key}-details" data-more-label="${s.title}" data-less-label="${s.title}">
          <div style="display:flex;align-items:center;gap:16px;min-width:0">
            <div style="flex:none;width:40px;height:40px;border-radius:11px;background:#fff;border:1px solid rgba(16,14,13,.08);display:grid;place-items:center;padding:7px;overflow:hidden"><img src="${s.iconUrl}" alt="" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:contain"></div>
            <span data-swap-label="" class="acc-title">${s.title}</span>
          </div>
          <span class="acc-toggle-btn"><i class="fa-solid fa-chevron-down" style="font-size:13px"></i></span>
        </button>
        <div data-more="${s.key}-details" style="display:none">
          <div class="acc-panel-inner">
            <div class="acc-bullet-list">
${detailBullets(s).map((b) => `              <div class="acc-bullet"><span class="acc-bullet-dot"></span>${b}</div>`).join('\n')}
            </div>
            <a href="${TERMS_LINK}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#B3121F" style-hover="color:#E01B2E">View Full Terms &amp; Conditions <i class="fa-solid fa-arrow-right" style="font-size:10px"></i></a>
          </div>
        </div>
      </div>`;

const TUITION_SCHOLARSHIPS_BODY = `  <section id="scholarships-hero" style="position:relative;min-height:66vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.studentLifeGallery[11]}" alt="Valor Christian College students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.5) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Scholarships</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,64px);line-height:1.05;letter-spacing:-.03em;text-wrap:balance">Invest in Your Calling.</h1>
      <p data-reveal="" style="margin:0 auto 36px;max-width:58ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.85)">A Valor education is an investment in who you're called to become. Scholarship opportunities are available to help eligible students make their Valor education more affordable.</p>
      <div data-reveal="" class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a href="#opportunities" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Explore Scholarships <i class="fa-solid fa-arrow-down"></i></a>
        <a href="${SCHOLARSHIP_APPLY_LINK}" target="_blank" rel="noopener" style="background:#FAF5EE;color:#100E0D;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#fff;color:#100E0D">Apply for a Scholarship</a>
      </div>
    </div>
  </section>

  <section id="opportunities" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:680px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Find Your Opportunity</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Explore Valor Scholarships</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Explore available scholarship opportunities and find the ones that may be right for you. Eligibility requirements and award amounts vary by scholarship.</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px">
${SCHOLARSHIPS.map(scholarshipCard).join('\n')}
    </div>
  </section>

  <section id="how-it-works" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:680px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Your Next Step</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Applying Is Simple.</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:48px">
${STEPS.map(stepCard).join('\n')}
    </div>
    <div style="text-align:center">
      <a data-reveal="" href="${SCHOLARSHIP_APPLY_LINK}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Start Scholarship Application <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </section>

  <section id="scholarship-details" style="max-width:1000px;margin:0 auto;padding:60px 32px 40px">
    <div style="max-width:640px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Scholarship Details &amp; Eligibility</h2>
    </div>
    <div style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(16,14,13,.06)">
${SCHOLARSHIPS.map(detailAccordion).join('\n')}
    </div>
  </section>

  <section id="scholarships-help" style="max-width:800px;margin:100px auto 0;padding:0 32px 120px;text-align:center">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">We're Here to Help</div>
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Have Questions About Scholarships?</h2>
    <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Not sure which scholarship may be right for you? Our Admissions and Financial Aid teams can help you understand your options and next steps.</p>
    <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="${ADMISSIONS_COUNSELOR_LINK}" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Talk to Admissions</a>
      <a data-reveal="" href="${FINANCIAL_AID_LINK}" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Contact Financial Aid</a>
    </div>
  </section>`;

module.exports = { TUITION_SCHOLARSHIPS_BODY };
