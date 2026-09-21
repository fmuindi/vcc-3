const { IMG } = require('./build-site');

// No live-site content exists for this page. Built around the one real,
// confirmed path back to Valor for alumni: returning for another degree —
// already a real enrollment option in the Admissions Application ("Graduate
// Returning for another Degree (AA to BA)") — rather than inventing
// alumni-specific programs, mentorship tracks, or events that aren't real.
const NEXT_STEPS = [
  { icon: 'fa-graduation-cap', title: 'Continue Your Education', copy: 'Return to Valor for another degree — from an Associate to a Bachelor’s, or a second area of focus.', href: 'academics-degree-programs.html', cta: 'Explore Degree Programs' },
  { icon: 'fa-comments', title: 'Talk It Through', copy: "Not sure what's next? An admissions counselor can help you think through your options.", href: 'admissions-speak-with-a-counselor.html', cta: 'Speak with a Counselor' },
];

const stepCard = (s) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:20px;padding:34px 30px">
        <div style="flex:none;width:52px;height:52px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:22px"><i class="fa-solid ${s.icon}" style="color:#E01B2E;font-size:21px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:19px;color:#100E0D;margin-bottom:12px">${s.title}</div>
        <p style="flex:1;margin:0 0 22px;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.62)">${s.copy}</p>
        <a href="${s.href}" style="align-self:flex-start;font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#B3121F;border-bottom:2px solid #E01B2E;padding-bottom:2px">${s.cta} →</a>
      </div>`;

const ALUMNI_CONTINUE_YOUR_CALLING_BODY = `  <section id="calling-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Alumni &nbsp;&middot;&nbsp; Continue Your Calling</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Your Calling Keeps Growing.</h1>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Graduation isn't the finish line — it's the next step. Here's how to keep growing in what God has called you to.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[12]}" alt="Valor Christian College graduate" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="next-steps" style="max-width:900px;margin:0 auto;padding:80px 32px 120px">
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px">
${NEXT_STEPS.map(stepCard).join('\n')}
    </div>
  </section>`;

module.exports = { ALUMNI_CONTINUE_YOUR_CALLING_BODY };
