const { IMG, HERO_VIDEO } = require('./build-site');

const PROGRAMS = [
  { img: IMG.prog1, title: 'Pastoral Ministry', alt: 'Pastoral ministry students' },
  { img: IMG.prog2, title: 'Praise &amp; Worship', alt: 'Worship team leading a service' },
  { img: IMG.prog3, title: 'Evangelism &amp; Missions', alt: 'Students on a missions outreach' },
  { img: IMG.prog4, title: "Youth &amp; Children's Ministry", alt: 'Youth ministry students' },
  { img: IMG.prog5, title: 'Biblical Studies', alt: 'Students in biblical studies class' },
];

const GALLERY_CAPTIONS = [
  'Campus community', 'Worship gathering', 'Student life', 'Students together',
  'Campus life', 'Community fellowship', 'Ministry team', 'Student fellowship',
];

const programCard = (p) => `      <a href="academics-degree-programs.html" style="position:relative;height:300px;border-radius:20px;overflow:hidden;display:block;background:#100E0D;transition:transform .3s ease,box-shadow .3s ease" style-hover="transform:translateY(-6px);box-shadow:0 26px 60px rgba(16,14,13,.3);color:#fff">
        <img src="${p.img}" alt="${p.alt}" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.72">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.9),rgba(16,14,13,0) 62%)"></div>
        <div style="position:absolute;left:22px;right:22px;bottom:20px"><div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;line-height:1.05;color:#FAF5EE">${p.title}</div></div>
      </a>`;

const HOME_BODY = `  <section id="top" class="hero-section" style="position:relative;min-height:100svh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D">
    <video src="${HERO_VIDEO}" autoplay="" muted="" loop="" playsinline="" poster="${IMG.heroPoster}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.62"></video>
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.35) 45%,rgba(16,14,13,.95) 100%)"></div>
    <div class="hero-inner" style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 72px">
      <div data-reveal="" style="font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:14px">Valor Christian College</div>
      <h1 data-reveal="" class="hero-title" style="margin:0;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(42px,7.5vw,110px);line-height:.92;letter-spacing:-.03em;text-wrap:balance">Where world<br>changers <span style="color:#E01B2E">are made.</span></h1>
      <div data-reveal="" class="hero-ctas" style="display:flex;gap:12px;max-width:560px;margin-top:30px">
        <a href="academics-degree-programs.html" class="hero-cta-btn" style="flex:1;text-align:center;border:1.5px solid rgba(250,245,238,.55);color:#FAF5EE;font-size:14px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:17px 16px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(250,245,238,.14);color:#FAF5EE">On Campus</a>
        <a href="academics-degree-programs.html" class="hero-cta-btn" style="flex:1;text-align:center;border:1.5px solid rgba(250,245,238,.55);color:#FAF5EE;font-size:14px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:17px 16px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(250,245,238,.14);color:#FAF5EE">Online</a>
        <a href="academics-degree-programs.html" class="hero-cta-btn" style="flex:1;text-align:center;border:1.5px solid rgba(250,245,238,.55);color:#FAF5EE;font-size:14px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:17px 16px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(250,245,238,.14);color:#FAF5EE">Cohort</a>
      </div>
    </div>
  </section>

  <section id="pathways" style="max-width:1320px;margin:0 auto;padding:96px 32px 40px">
    <div style="text-align:center;max-width:720px;margin:0 auto 40px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Choose Your Path</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Study the way that fits your calling.</h2>
    </div>
    <div class="pathways-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
      <a href="academics-degree-programs.html" data-reveal="" style="position:relative;height:340px;border-radius:20px;overflow:hidden;display:block;color:#fff" style-hover="color:#fff">
        <img src="${IMG.onCampus}" alt="Students on the Valor campus" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.92),rgba(16,14,13,.1) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:22px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px;color:#FAF5EE;margin-bottom:8px">On Campus</div>
          <p style="margin:0;font-size:14px;line-height:1.5;color:rgba(250,245,238,.75)">Live and learn in daily community, chapel, and hands-on ministry.</p>
        </div>
      </a>
      <a href="academics-degree-programs.html" data-reveal="" style="position:relative;height:340px;border-radius:20px;overflow:hidden;display:block;color:#fff" style-hover="color:#fff">
        <img src="${IMG.online}" alt="Student studying online" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.92),rgba(16,14,13,.1) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:22px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px;color:#FAF5EE;margin-bottom:8px">Online</div>
          <p style="margin:0;font-size:14px;line-height:1.5;color:rgba(250,245,238,.75)">Earn your degree from anywhere with Spirit-filled coursework built around your schedule.</p>
        </div>
      </a>
      <a href="academics-degree-programs.html" data-reveal="" style="position:relative;height:340px;border-radius:20px;overflow:hidden;display:block;color:#fff" style-hover="color:#fff">
        <img src="${IMG.cohort}" alt="Cohort of students together" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.92),rgba(16,14,13,.1) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:22px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px;color:#FAF5EE;margin-bottom:8px">Cohort</div>
          <p style="margin:0;font-size:14px;line-height:1.5;color:rgba(250,245,238,.75)">Grow with a small group of students journeying through the program together.</p>
        </div>
      </a>
    </div>
    <div style="text-align:center;margin-top:34px">
      <a data-reveal="" href="academics-degree-programs.html" style="font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:4px" style-hover="color:#E01B2E">Want more info about our degree programs? →</a>
    </div>
  </section>

  <section id="why-valor" class="about-grid" style="max-width:1320px;margin:0 auto;padding:96px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:64px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:18px">Why Valor</div>
      <h2 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Faith, family, and a future worth pursuing.</h2>
      <p data-reveal="" style="margin:0 0 30px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.72);max-width:56ch">Everything at Valor is built around one goal: helping you discover and fulfill your calling — through Spirit-filled community, hands-on ministry, and biblically grounded academics.</p>
      <div class="stats-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;border-top:1px solid rgba(16,14,13,.12);padding-top:26px">
        <div data-reveal=""><div data-count="36" class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:46px;line-height:1;color:#E01B2E">36</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:6px">Years</div></div>
        <div data-reveal=""><div data-count="50" class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:46px;line-height:1;color:#E01B2E">50</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:6px">States</div></div>
        <div data-reveal=""><div data-count="30" data-suffix="+" class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:46px;line-height:1;color:#E01B2E">30+</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:6px">Nations</div></div>
        <div data-reveal=""><div class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:46px;line-height:1;color:#E01B2E">ABHE</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:6px">Accredited</div></div>
      </div>
    </div>
    <div data-reveal="" class="about-collage" style="position:relative;height:640px">
      <div style="position:absolute;top:0;left:0;right:0;height:60%;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.22)"><img src="${IMG.whyValorMain}" alt="Valor graduation 2026" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block"></div>
      <div class="collage-bounce" style="position:absolute;top:46%;left:4%;width:44%;height:42%;border-radius:18px;overflow:hidden;border:7px solid #FAF5EE;box-shadow:0 20px 44px rgba(16,14,13,.28);animation:vfloat 6s ease-in-out infinite"><img src="${IMG.whyValor2}" alt="Valor students" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block"></div>
      <div class="collage-bounce" style="position:absolute;top:46%;right:4%;width:44%;height:42%;border-radius:18px;overflow:hidden;border:7px solid #FAF5EE;box-shadow:0 20px 44px rgba(16,14,13,.28);animation:vfloat 6s ease-in-out infinite;animation-delay:1.4s"><img src="${IMG.whyValor3}" alt="Campus community" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block"></div>
      <div style="position:absolute;left:50%;top:67%;transform:translate(-50%,-50%);width:min(120px,20%);height:min(120px,20%);border-radius:50%;background:#E01B2E;color:#fff;display:grid;place-items:center;text-align:center;font-size:clamp(8px,2.2vw,11px);font-weight:700;letter-spacing:.1em;text-transform:uppercase;line-height:1.3;box-shadow:0 16px 40px rgba(224,27,46,.4);z-index:2">Since<br>1990</div>
    </div>
  </section>

  <section style="position:relative;margin-top:40px;padding:120px 32px;background:#100E0D;overflow:hidden">
    <img src="${IMG.testimonial}" alt="" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.3">
    <div style="position:absolute;inset:0;background:radial-gradient(60% 90% at 20% 30%,rgba(224,27,46,.35),rgba(16,14,13,.88))"></div>
    <blockquote data-reveal="" style="position:relative;max-width:1000px;margin:0 auto;text-align:center">
      <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.8vw,54px);line-height:1.12;letter-spacing:-.02em;color:#FAF5EE;text-wrap:balance">"Valor is not a place to be, but a place to <span style="color:#E01B2E">become</span>."</div>
      <footer style="margin-top:26px;font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,245,238,.6)">Elder Thomas Bender · Professor</footer>
    </blockquote>
  </section>

  <section id="programs" style="max-width:1320px;margin:0 auto;padding:80px 32px 40px">
    <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:40px">
      <div>
        <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Explore Programs</div>
        <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1;letter-spacing:-.03em;color:#100E0D">Find your calling.</h2>
      </div>
      <a data-reveal="" href="academics-degree-programs.html" style="font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:4px" style-hover="color:#E01B2E">All programs →</a>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${PROGRAMS.map(programCard).join('\n')}
    </div>
  </section>

  <section id="life" style="max-width:1320px;margin:0 auto;padding:80px 32px 40px">
    <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:30px">
      <div>
        <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Life at Valor</div>
        <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1;letter-spacing:-.03em;color:#100E0D">A tight-knit, Spirit-filled community.</h2>
      </div>
      <a data-reveal="" href="student-life.html" style="font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:4px" style-hover="color:#E01B2E">Student life →</a>
    </div>
    <div class="gallery-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
${GALLERY_CAPTIONS.map((alt, i) => `      <div data-reveal="" ${i % 2 === 1 ? 'class="gallery-offset" ' : ''}style="border-radius:16px;overflow:hidden;aspect-ratio:3/4${i % 2 === 1 ? ';margin-top:34px' : ''}"><img src="${IMG.gallery[i]}" alt="${alt}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease" style-hover="transform:scale(1.06)"></div>`).join('\n')}
    </div>
  </section>

  <section id="apply" style="position:relative;margin-top:60px;background:#E01B2E;color:#fff;padding:110px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:1000px;margin:0 auto;text-align:center">
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5.5vw,74px);line-height:.98;letter-spacing:-.03em">Take your next step.</h2>
      <p data-reveal="" style="margin:22px auto 34px;max-width:46ch;font-size:18px;line-height:1.55;color:rgba(255,255,255,.85)">Ready to discover your calling? We're here to help.</p>
      <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="admissions-apply-now.html" style="background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 38px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Apply now</a>
        <a data-reveal="" href="admissions-speak-with-a-counselor.html" style="border:1.5px solid rgba(255,255,255,.6);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 32px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.16);color:#fff">Speak with admissions</a>
        <a data-reveal="" href="admissions.html" style="border:1.5px solid rgba(255,255,255,.6);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 32px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.16);color:#fff">Schedule a visit</a>
      </div>
    </div>
  </section>`;

module.exports = { HOME_BODY };
