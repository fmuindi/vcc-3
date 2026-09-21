const { IMG } = require('./build-site');

const LEARNING_SUPPORT_EMAIL = 'learningsupport@valorcollege.edu';
const LEARNING_CENTER_EMAIL = 'learningcenter@valorcollege.edu';
const LEARNING_CENTER_PHONE = '(614) 837-1990 ext. 472';
const LEARNING_CENTER_REQUEST_FORM = 'https://www.surveymonkey.com/r/c5p5p26';

const DOC_REQUIREMENTS = [
  'Description of the diagnosis and the major life activities it affects',
  'Recommended accommodations, with rationale',
  "The healthcare professional's name, title, address, and phone number",
];

const STUDENT_LIFE_ACCESSIBILITY_BODY = `  <section id="accessibility-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Student Life &nbsp;&middot;&nbsp; Academic Support &amp; Accessibility</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Support to Help You Succeed.</h1>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Disability accommodations and free academic coaching are available to every Valor student, on campus and online.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[6]}" alt="Valor Christian College students studying" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="disability-services" style="max-width:1000px;margin:0 auto;padding:80px 32px 40px">
    <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:24px;padding:48px 44px;box-shadow:0 20px 60px rgba(16,14,13,.06)">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:22px">
        <div style="flex:none;width:52px;height:52px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center"><i class="fa-solid fa-universal-access" style="color:#E01B2E;font-size:22px"></i></div>
        <h2 style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(24px,3vw,32px);letter-spacing:-.02em;color:#100E0D">Disability Services</h2>
      </div>
      <p style="margin:0 0 24px;font-size:15.5px;line-height:1.7;color:rgba(16,14,13,.65)">Accommodation requests require documentation of a disability as defined by Section 504 of the Rehabilitation Act of 1973 and Title II of the ADA (1990). Documentation must come from a licensed professional qualified to diagnose the condition, on official letterhead, and must include:</p>
      <div style="margin:0 0 24px;display:flex;flex-direction:column;gap:10px">
${DOC_REQUIREMENTS.map((d) => `        <div style="display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:rgba(16,14,13,.7)"><i class="fa-solid fa-check" style="color:#B3121F;font-size:12px;margin-top:5px;flex:none"></i>${d}</div>`).join('\n')}
      </div>
      <p style="margin:0 0 28px;font-size:15.5px;line-height:1.7;color:rgba(16,14,13,.65)">Students register via a Learning Support Accommodation Request form; once received, official documentation is reviewed before accommodations are confirmed.</p>
      <a href="mailto:${LEARNING_SUPPORT_EMAIL}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:13.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 26px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact Learning Support</a>
    </div>
  </section>

  <section id="learning-center" style="max-width:1000px;margin:0 auto;padding:40px 32px 120px">
    <div data-reveal="" style="background:#100E0D;border-radius:24px;padding:48px 44px;color:#FAF5EE">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">
        <div style="flex:none;width:52px;height:52px;border-radius:50%;background:rgba(224,27,46,.18);display:grid;place-items:center"><i class="fa-solid fa-pen-nib" style="color:#E01B2E;font-size:22px"></i></div>
        <div>
          <h2 style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(24px,3vw,32px);letter-spacing:-.02em;color:#FAF5EE">Valor Learning Center</h2>
          <div style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(250,245,238,.5);margin-top:4px">Established 2015</div>
        </div>
      </div>
      <p style="margin:0 0 20px;font-size:15.5px;line-height:1.7;color:rgba(250,245,238,.8)">A free resource for all Valor students — on campus and online — for help with papers, written assignments, and oral or multimedia presentations. The Center exists to reinforce a culture of communication so students become more effective ministers of the Gospel.</p>
      <p style="margin:0 0 28px;font-size:14px;line-height:1.7;color:rgba(250,245,238,.6);font-style:italic">The VLC is a coaching resource, not an editing service — consultants don't edit, proofread, format, or do research; the library handles research help.</p>
      <div style="display:flex;flex-wrap:wrap;gap:14px">
        <a href="mailto:${LEARNING_CENTER_EMAIL}" style="background:#E01B2E;color:#fff;font-size:13.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 26px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Email the Learning Center</a>
        <a href="${LEARNING_CENTER_REQUEST_FORM}" target="_blank" rel="noopener" style="border:1.5px solid rgba(250,245,238,.4);color:#FAF5EE;font-size:13.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:14px 24px;border-radius:999px" style-hover="background:rgba(250,245,238,.1);color:#FAF5EE">Request a Consultation</a>
      </div>
      <p style="margin:24px 0 0;font-size:13px;color:rgba(250,245,238,.5)">Consultations happen by email, phone, or in person &middot; ${LEARNING_CENTER_PHONE}</p>
    </div>
  </section>`;

module.exports = { STUDENT_LIFE_ACCESSIBILITY_BODY };
