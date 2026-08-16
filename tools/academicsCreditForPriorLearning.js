const { IMG } = require('./build-site');

const ACADEMICS_EMAIL = 'academics@valorcollege.edu';
const REGISTRAR_EMAIL = 'registrar@valorcollege.edu';

// Each top card and its matching accordion row share the same data-view-all
// key, so the "Learn More" button and the accordion row header both toggle
// the same panel. Top-card buttons keep static text (no label swap); only
// the accordion row's own label swaps its trailing chevron.
const OPTIONS = [
  {
    key: 'portfolio',
    icon: 'fa-briefcase',
    eyebrow: 'Life Experience',
    title: 'Credit by Portfolio',
    teaser: 'Students with college level learning gained outside of the traditional classroom may be eligible to receive credit through a portfolio review.',
  },
  {
    key: 'transfer',
    icon: 'fa-graduation-cap',
    eyebrow: 'Previous College Credit',
    title: 'Transfer Credits',
    teaser: "Previously completed courses from an accredited college or university may be evaluated for transfer into your Valor degree program.",
  },
  {
    key: 'exams-military',
    icon: 'fa-star',
    eyebrow: 'Additional Credit Options',
    title: 'Exams & Military Training',
    teaser: 'Qualifying examination credit, including CLEP and AP, as well as eligible military training may be considered for credit.',
  },
];

const optionCard = (o) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:30px 26px">
        <div style="width:50px;height:50px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid ${o.icon}" style="color:#E01B2E;font-size:19px"></i></div>
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#E01B2E;margin-bottom:8px">${o.eyebrow}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:19px;color:#100E0D;margin-bottom:12px">${o.title}</div>
        <p style="flex:1;margin:0 0 22px;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.62)">${o.teaser}</p>
        <button type="button" data-view-all="${o.key}" data-more-label="Learn More ▾" data-less-label="Learn More ▾" style="align-self:flex-start;display:inline-flex;align-items:center;gap:8px;border:1.5px solid rgba(224,27,46,.4);background:none;color:#B3121F;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:13px 22px;border-radius:999px;cursor:pointer" style-hover="background:rgba(224,27,46,.08)">Learn More ▾</button>
      </div>`;

const accordionHeader = (key, icon, title, small) => `        <button type="button" data-view-all="${key}" data-more-label="${title} ▾" data-less-label="${title} ▴" style="display:flex;align-items:center;gap:${small ? '14' : '18'}px;width:100%;background:none;border:none;padding:0;cursor:pointer;text-align:left">
          <div style="flex:none;width:${small ? '36' : '44'}px;height:${small ? '36' : '44'}px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center"><i class="fa-solid ${icon}" style="color:#E01B2E;font-size:${small ? '13' : '17'}px"></i></div>
          <span data-swap-label="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:${small ? '15' : '17'}px;color:#100E0D">${title} ▾</span>
        </button>`;

const ACCORDION_ROWS = `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 28px">
${accordionHeader('portfolio', 'fa-briefcase', 'Credit by Portfolio', false)}
        <div data-more="portfolio" style="display:none;margin-top:22px;padding-top:22px;border-top:1px solid rgba(16,14,13,.08)">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.7);max-width:70ch">Valor Christian College recognizes that college level learning can take place outside of the traditional classroom. Students enrolled in a degree program may apply to have qualifying life and professional experience evaluated for potential college credit.</p>
          <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.7);max-width:70ch">Students must apply within their first year of enrollment. Credit is awarded only after all required documentation has been submitted, reviewed by a qualified faculty member, and validated by the Vice President for Academic Affairs.</p>
          <a href="mailto:${ACADEMICS_EMAIL}" style="display:inline-flex;align-items:center;gap:8px;background:#E01B2E;color:#fff;font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:14px 24px;border-radius:999px" style-hover="background:#F02338;color:#fff"><i class="fa-solid fa-envelope"></i> Request More Information</a>
        </div>
      </div>

      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 28px">
${accordionHeader('transfer', 'fa-graduation-cap', 'Transfer Credits', false)}
        <div data-more="transfer" style="display:none;margin-top:22px;padding-top:22px;border-top:1px solid rgba(16,14,13,.08)">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.7);max-width:70ch">Students who have attended an accredited college or university may submit an official transcript for evaluation. Transfer credit may be awarded when previous coursework is compatible with the student's Valor degree program and a grade of <strong>C or better</strong> was earned.</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.7);max-width:70ch">Additional documentation, such as a course description or syllabus, may be requested during the evaluation process.</p>
          <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.7);max-width:70ch">Valor allows a maximum of <strong>20 hours of nontraditional credit</strong>, including qualifying examination credit, military training, and life experience.</p>
          <a href="mailto:${REGISTRAR_EMAIL}" style="display:inline-flex;align-items:center;gap:8px;background:#E01B2E;color:#fff;font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:14px 24px;border-radius:999px" style-hover="background:#F02338;color:#fff"><i class="fa-solid fa-envelope"></i> Request a Transcript Evaluation</a>
        </div>
      </div>

      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 28px">
${accordionHeader('exams-military', 'fa-star', 'Exams & Military Training', false)}
        <div data-more="exams-military" style="display:none;margin-top:22px;padding-top:22px;border-top:1px solid rgba(16,14,13,.08)">
          <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.7);max-width:70ch">Qualifying examination credit, including CLEP and AP, as well as eligible military training may be considered for credit.</p>
          <a href="mailto:${ACADEMICS_EMAIL}" style="display:inline-flex;align-items:center;gap:8px;background:#E01B2E;color:#fff;font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:14px 24px;border-radius:999px" style-hover="background:#F02338;color:#fff"><i class="fa-solid fa-envelope"></i> Request More Information</a>
        </div>
      </div>

      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:14px;padding:18px 22px">
${accordionHeader('auditing', 'fa-file-signature', 'Auditing Courses', true)}
        <div data-more="auditing" style="display:none;margin-top:16px;padding-top:16px;border-top:1px solid rgba(16,14,13,.08)">
          <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.65);max-width:70ch">Students interested in auditing a course must receive academic permission during registration or within the allowable schedule change period. Audit courses cannot later be changed to credit courses.</p>
        </div>
      </div>`;

const ACADEMICS_CREDIT_FOR_PRIOR_LEARNING_BODY = `  <section id="credit-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Credit for Prior Learning</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,60px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Your Experience Could Count Toward Your Degree.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Your education does not always begin in a classroom. Previous college coursework, professional experience, military training, examinations, and other qualifying learning may be eligible for college credit at Valor Christian College.</p>
      <a data-reveal="" href="mailto:${ACADEMICS_EMAIL}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-file-lines"></i> Request Credit Information</a>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.creditForPriorLearningHero}" alt="Valor Christian College students" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="credit-options" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Turn What You've Learned Into Credit</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">You May Be Closer Than You Think.</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:60px">
${OPTIONS.map(optionCard).join('\n')}
    </div>
    <div style="max-width:920px;margin:0 auto;display:flex;flex-direction:column;gap:14px">
${ACCORDION_ROWS}
    </div>
  </section>

  <section id="credit-help" style="max-width:1000px;margin:0 auto;padding:20px 32px 120px">
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:28px;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:24px;padding:44px 40px">
      <div style="display:flex;align-items:center;gap:20px">
        <div style="flex:none;width:56px;height:56px;border-radius:50%;border:1.5px solid rgba(224,27,46,.35);display:grid;place-items:center"><i class="fa-solid fa-headset" style="color:#E01B2E;font-size:22px"></i></div>
        <div>
          <div data-reveal="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#100E0D;margin-bottom:6px">Questions? We're Here to Help.</div>
          <p data-reveal="" style="margin:0;font-size:14.5px;line-height:1.55;color:rgba(16,14,13,.62);max-width:46ch">Our Academic Affairs and Registrar teams can help you understand transfer credits, prior learning, and your next steps.</p>
        </div>
      </div>
      <div data-reveal="" class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:12px">
        <a href="mailto:${ACADEMICS_EMAIL}" style="background:#E01B2E;color:#fff;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 24px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact Academic Affairs</a>
        <a href="mailto:${REGISTRAR_EMAIL}" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:13px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:13.5px 22px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Contact the Registrar</a>
      </div>
    </div>
  </section>`;

module.exports = { ACADEMICS_CREDIT_FOR_PRIOR_LEARNING_BODY };
