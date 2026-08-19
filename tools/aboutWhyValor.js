const { IMG } = require('./build-site');

const DIFFERENCE_CARDS = [
  { icon: 'fa-dove', title: 'Spirit-Filled Community', img: IMG.whyValorPageCommunity, copy: 'Grow in an environment where faith is not separate from your education. It is at the center of it.' },
  { icon: 'fa-hand-holding-heart', title: 'Hands-On Ministry', img: IMG.whyValorPageMinistry, copy: 'Put what you are learning into practice through real opportunities to serve, lead, and impact others.' },
  { icon: 'fa-book-open', title: 'Biblically Grounded Education', img: IMG.whyValorPageAcademics, copy: 'Build a strong academic foundation shaped by biblical truth and professors committed to your growth.' },
];

const differenceCard = (c) => `      <div data-reveal="" style="position:relative;height:360px;border-radius:20px;overflow:hidden;color:#fff">
        <img src="${c.img}" alt="${c.title}" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.94),rgba(16,14,13,.1) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:24px">
          <div style="width:42px;height:42px;border-radius:50%;background:rgba(224,27,46,.16);border:1px solid rgba(250,245,238,.3);display:grid;place-items:center;margin-bottom:14px"><i class="fa-solid ${c.icon}" style="color:#FF8A93;font-size:16px"></i></div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#FAF5EE;margin-bottom:8px">${c.title}</div>
          <p style="margin:0;font-size:14px;line-height:1.55;color:rgba(250,245,238,.8)">${c.copy}</p>
        </div>
      </div>`;

const EXPERIENCE_ITEMS = [
  { label: 'Faith', copy: 'Grow through worship, prayer, chapel, and a community centered on pursuing God.' },
  { label: 'Community', copy: 'Build meaningful relationships and experience college alongside people who encourage your faith and your purpose.' },
  { label: 'Purpose', copy: 'Discover your calling and gain real experience serving, leading, and making an impact.' },
];

const experienceItem = (e) => `        <div data-reveal="">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;color:#E01B2E;margin-bottom:12px">${e.label}</div>
          <p style="margin:0;font-size:15px;line-height:1.65;color:rgba(250,245,238,.8)">${e.copy}</p>
        </div>`;

const ABOUT_WHY_VALOR_BODY = `  <section id="why-valor-hero" style="position:relative;min-height:78vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.whyValorPageHero}" alt="Students together at Valor Christian College" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 80px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Why Valor</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(36px,6vw,80px);line-height:1.03;letter-spacing:-.03em;max-width:18ch;text-wrap:balance">More Than a Degree. <span style="color:#E01B2E">A Calling Worth Pursuing.</span></h1>
      <p data-reveal="" style="margin:0 0 36px;max-width:60ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">At Valor Christian College, your education is about more than preparing for a career. It's about discovering who God has called you to be and becoming equipped to live it out.</p>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:14px">
        <a href="admissions.html" style="background:#FAF5EE;color:#100E0D;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#fff;color:#100E0D">Request Info</a>
        <a href="admissions-apply-now.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Apply Now</a>
      </div>
    </div>
  </section>

  <section id="valor-difference" style="max-width:1320px;margin:0 auto;padding:110px 32px 40px">
    <div style="text-align:center;max-width:720px;margin:0 auto 56px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">The Valor Difference</div>
      <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Where Faith Meets Purpose.</h2>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68)">Valor is a place where faith comes alive, purpose is refined, and lifelong relationships are built. Through biblically grounded academics, Spirit-filled community, and hands-on ministry, you will be equipped with more than knowledge — you will develop the character, confidence, and calling to make a difference wherever God opens the door.</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${DIFFERENCE_CARDS.map(differenceCard).join('\n')}
    </div>
  </section>

  <section id="valor-experience" data-reveal="" style="position:relative;margin-top:100px;padding:120px 32px;background:#100E0D;overflow:hidden">
    <img src="${IMG.whyValorPageExperience}" alt="" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.28">
    <div style="position:absolute;inset:0;background:radial-gradient(60% 90% at 25% 20%,rgba(224,27,46,.32),rgba(16,14,13,.92))"></div>
    <div style="position:relative;max-width:1100px;margin:0 auto">
      <div style="text-align:center;max-width:640px;margin:0 auto 56px">
        <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.7);margin-bottom:14px">The Valor Experience</div>
        <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#FAF5EE">Learn It. Live It. Lead It.</h2>
      </div>
      <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:36px;margin-bottom:56px">
${EXPERIENCE_ITEMS.map(experienceItem).join('\n')}
      </div>
      <p data-reveal="" style="margin:0;text-align:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(19px,2.4vw,26px);line-height:1.4;letter-spacing:-.01em;color:#FAF5EE;text-wrap:balance">Your college years should shape more than what you know. <span style="color:#E01B2E">They should shape who you become.</span></p>
    </div>
  </section>

  <section id="why-valor-cta" style="position:relative;margin-top:0;background:#E01B2E;color:#fff;padding:110px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:1000px;margin:0 auto;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:16px">Your Next Chapter Starts Here</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5.5vw,74px);line-height:.98;letter-spacing:-.03em">Ready to Become a World Changer?</h2>
      <p data-reveal="" style="margin:22px auto 20px;max-width:46ch;font-size:18px;line-height:1.55;color:rgba(255,255,255,.85)">Discover the Valor experience and find the learning option that is right for you.</p>
      <div data-reveal="" style="font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.8);margin-bottom:34px">On Campus <span style="color:#100E0D">|</span> Online <span style="color:#100E0D">|</span> Cohort</div>
      <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="admissions.html" style="border:1.5px solid rgba(255,255,255,.6);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 32px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.16);color:#fff">Request Info</a>
        <a data-reveal="" href="admissions-apply-now.html" style="background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 38px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Apply Now</a>
      </div>
    </div>
  </section>`;

module.exports = { ABOUT_WHY_VALOR_BODY };
