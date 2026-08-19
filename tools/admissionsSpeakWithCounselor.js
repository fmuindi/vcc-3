const { IMG } = require('./build-site');

const HELP_TOPICS = [
  { icon: 'fa-graduation-cap', title: 'Degree Programs', copy: 'Find the program that fits your goals and calling.' },
  { icon: 'fa-clipboard-list', title: 'Admissions Process', copy: 'Understand what you need to apply and what happens next.' },
  { icon: 'fa-hand-holding-dollar', title: 'Tuition & Financial Aid', copy: 'Learn more about tuition, scholarships, and available financial aid options.' },
  { icon: 'fa-people-group', title: 'Campus & Student Life', copy: 'Discover what it is like to learn, grow, and build community at Valor.' },
];

const helpCard = (h) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:28px 24px">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid ${h.icon}" style="color:#E01B2E;font-size:18px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D;margin-bottom:8px">${h.title}</div>
        <p style="flex:1;margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.62)">${h.copy}</p>
      </div>`;

const ADMISSIONS_SPEAK_WITH_COUNSELOR_BODY = `  <section id="counselor-hero" style="position:relative;min-height:74vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.studentLifeGallery[7]}" alt="Valor Christian College students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 80px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Admissions</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(36px,6vw,72px);line-height:1.03;letter-spacing:-.03em;max-width:16ch;text-wrap:balance">Let's Talk About Your Future.</h1>
      <p data-reveal="" style="margin:0 0 14px;max-width:60ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Have questions about Valor? Our Admissions Team is here to help you explore your options, understand the admissions process, and determine your next step.</p>
      <p data-reveal="" style="margin:0 0 36px;max-width:60ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Whether you are interested in studying on campus, online, or through a cohort, we are ready to help.</p>
      <a data-reveal="" href="#connect" style="display:inline-block;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Request Info</a>
    </div>
  </section>

  <section id="how-can-we-help" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:680px;margin:0 auto 48px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">How Can We Help?</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Our Admissions Team can help answer questions about:</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px">
${HELP_TOPICS.map(helpCard).join('\n')}
    </div>
  </section>

  <section id="connect" style="max-width:1000px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:680px;margin:0 auto 48px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Connect With Admissions</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Have a question or not sure where to begin? Reach out to our Admissions Team and we will help you take the next step.</p>
    </div>
    <div class="about-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:40px">
      <a href="tel:18552196538" data-reveal="" style="display:flex;flex-direction:column;align-items:center;text-align:center;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:32px 24px;color:#100E0D" style-hover="color:#100E0D">
        <div style="width:52px;height:52px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid fa-phone" style="color:#E01B2E;font-size:19px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;margin-bottom:8px">Call Admissions</div>
        <div style="font-size:15px;color:#B3121F">1-855-219-6538</div>
      </a>
      <a href="mailto:admissions@valorcollege.edu" data-reveal="" style="display:flex;flex-direction:column;align-items:center;text-align:center;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:32px 24px;color:#100E0D" style-hover="color:#100E0D">
        <div style="width:52px;height:52px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid fa-envelope" style="color:#E01B2E;font-size:19px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;margin-bottom:8px">Email Admissions</div>
        <div style="font-size:15px;color:#B3121F">admissions@valorcollege.edu</div>
      </a>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="mailto:admissions@valorcollege.edu" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Request Info</a>
      <a data-reveal="" href="admissions-apply-now.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Apply Now</a>
    </div>
  </section>

  <section id="ready-when-you-are" style="position:relative;margin-top:60px;background:#E01B2E;color:#fff;padding:110px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:900px;margin:0 auto;text-align:center">
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5.5vw,74px);line-height:.98;letter-spacing:-.03em">Ready When You Are.</h2>
      <p data-reveal="" style="margin:22px auto 34px;max-width:52ch;font-size:18px;line-height:1.55;color:rgba(255,255,255,.85)">You do not have to have everything figured out before taking your next step. Start the conversation and discover what your future at Valor could look like.</p>
      <a data-reveal="" href="mailto:admissions@valorcollege.edu" style="display:inline-block;background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 38px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Request Info</a>
    </div>
  </section>`;

module.exports = { ADMISSIONS_SPEAK_WITH_COUNSELOR_BODY };
