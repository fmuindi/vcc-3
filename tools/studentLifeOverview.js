const { IMG, HERO_VIDEO } = require('./build-site');
const { studentLifeGalleryGrid } = require('./studentLife');

// TODO: "Mac Café" is called for as its own linkable destination (a card in
// Experience Valor + a secondary link for Current Students) but no such page
// or nav entry exists yet on this site. Routed to Get Involved in the
// interim — the closest existing page — until a real Mac Café page/URL is
// created.
const MAC_CAFE_LINK = 'student-life-get-involved.html';

const EXPERIENCE_CARDS = [
  { title: 'Get Involved', copy: 'Connect, serve, lead, and become part of the Valor community.', href: 'student-life-get-involved.html', img: IMG.studentLifeGallery[2] },
  { title: 'Events & Campus Life', copy: 'Experience the moments that bring the Valor community together.', href: 'student-life-events-calendar.html', img: IMG.studentLifeGallery[4] },
  { title: 'Mac Café', copy: 'Grab a meal, connect with friends, and experience another part of everyday life at Valor.', href: MAC_CAFE_LINK, img: IMG.studentLifeGallery[5] },
];

const experienceCard = (c) => `      <a href="${c.href}" data-reveal="" style="position:relative;height:340px;border-radius:20px;overflow:hidden;display:block;background:#100E0D;transition:transform .3s ease,box-shadow .3s ease" style-hover="transform:translateY(-6px);box-shadow:0 26px 60px rgba(16,14,13,.3);color:#fff">
        <img src="${c.img}" alt="" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.7">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.92),rgba(16,14,13,0) 62%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:22px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;line-height:1.1;color:#FAF5EE;margin-bottom:8px">${c.title}</div>
          <p style="margin:0;font-size:13.5px;line-height:1.5;color:rgba(250,245,238,.82)">${c.copy}</p>
        </div>
      </a>`;

const STUDENT_LIFE_OVERVIEW_BODY = `  <section id="student-life-hero" style="position:relative;min-height:92vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <video src="${HERO_VIDEO}" autoplay="" muted="" loop="" playsinline="" preload="auto" poster="${IMG.heroPoster}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55"></video>
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.3) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1000px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:18px">Student Life</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(38px,7vw,96px);line-height:.98;letter-spacing:-.03em;text-wrap:balance">This Is Life at Valor.</h1>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:14px;margin-bottom:28px">
        <span style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(16px,2vw,22px);letter-spacing:.02em;color:#FF8A93">Faith</span>
        <span style="width:5px;height:5px;border-radius:50%;background:rgba(250,245,238,.4)"></span>
        <span style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(16px,2vw,22px);letter-spacing:.02em;color:#FF8A93">Community</span>
        <span style="width:5px;height:5px;border-radius:50%;background:rgba(250,245,238,.4)"></span>
        <span style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(16px,2vw,22px);letter-spacing:.02em;color:#FF8A93">Purpose</span>
      </div>
      <p data-reveal="" style="margin:0 auto 36px;max-width:60ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Life at Valor goes beyond the classroom. It's where friendships are built, faith is strengthened, gifts are developed, and students learn what it means to live out their calling together.</p>
      <a data-reveal="" href="#community" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Explore Student Life <i class="fa-solid fa-arrow-down"></i></a>
    </div>
  </section>

  <section id="community" style="max-width:1320px;margin:0 auto;padding:110px 32px 40px">
    <div style="max-width:680px;margin:0 auto 52px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Find Your People</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">You Belong Here.</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">College is about more than where you study. It's about the people you experience it with. At Valor, students build meaningful relationships through everyday campus life, shared experiences, ministry, and community.</p>
    </div>
${studentLifeGalleryGrid()}
    <div style="text-align:center;margin-top:44px">
      <a data-reveal="" href="student-life-get-involved.html" style="font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:4px" style-hover="color:#E01B2E">Get Involved →</a>
    </div>
  </section>

  <section id="spiritual-life" data-reveal="" style="position:relative;min-height:82vh;display:flex;align-items:center;margin-top:80px;overflow:hidden;background:#100E0D">
    <img src="${IMG.studentLifeGallery[1]}" alt="Worship gathering at Valor Christian College" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5">
    <div style="position:absolute;inset:0;background:radial-gradient(65% 90% at 50% 30%,rgba(224,27,46,.3),rgba(16,14,13,.93))"></div>
    <div style="position:relative;max-width:820px;margin:0 auto;padding:80px 32px;text-align:center">
      <div style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.7);margin-bottom:20px">Grow in Your Faith</div>
      <h2 style="margin:0 0 28px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,5vw,58px);line-height:1.05;letter-spacing:-.03em;color:#FAF5EE;text-wrap:balance">More Than an Education.</h2>
      <p style="margin:0 auto;max-width:58ch;font-size:clamp(17px,2vw,20px);line-height:1.65;color:rgba(250,245,238,.88)">At Valor, spiritual formation is part of everyday life. Through chapel, worship, prayer, ministry, and serving others, students are challenged to deepen their relationship with God and put their faith into action.</p>
    </div>
  </section>

  <section id="experience-valor" style="max-width:1320px;margin:0 auto;padding:110px 32px 40px">
    <div style="max-width:680px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Life Beyond the Classroom</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">There's More to College Than Class.</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${EXPERIENCE_CARDS.map(experienceCard).join('\n')}
    </div>
  </section>

  <section id="student-support" style="max-width:800px;margin:60px auto 0;padding:0 32px 120px;text-align:center">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">You're Not Doing This Alone</div>
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Support for the Journey.</h2>
    <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Your college journey will have challenges, questions, and opportunities to grow. Valor provides resources designed to support students as they pursue their academic goals and move forward in their calling.</p>
    <a data-reveal="" href="student-life-support.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Explore Student Support <i class="fa-solid fa-arrow-right"></i></a>
  </section>

  <section id="current-students" style="background:#100E0D;padding:90px 32px">
    <div style="max-width:760px;margin:0 auto;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.55);margin-bottom:16px">Current Students</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.2vw,38px);line-height:1.1;letter-spacing:-.02em;color:#FAF5EE;text-wrap:balance">Looking for Your Student Resources?</h2>
      <p data-reveal="" style="margin:0 0 30px;font-size:15px;line-height:1.6;color:rgba(250,245,238,.65)">Current Valor students can access courses, student information, academic resources, and other personalized tools through Populi.</p>
      <a data-reveal="" href="student-life-portal.html" style="display:inline-flex;align-items:center;gap:10px;background:#FAF5EE;color:#100E0D;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:16px 28px;border-radius:999px;transition:transform .18s ease;margin-bottom:26px" style-hover="transform:translateY(-2px);background:#fff;color:#100E0D">Go to Student Portal <i class="fa-solid fa-arrow-right"></i></a>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:14px;font-size:13px">
        <a href="student-life-handbook.html" style="color:rgba(250,245,238,.6)" style-hover="color:#fff">Student Handbook</a>
        <span style="color:rgba(250,245,238,.25)">·</span>
        <a href="${MAC_CAFE_LINK}" style="color:rgba(250,245,238,.6)" style-hover="color:#fff">Mac Café Menu</a>
        <span style="color:rgba(250,245,238,.25)">·</span>
        <a href="student-life-events-calendar.html" style="color:rgba(250,245,238,.6)" style-hover="color:#fff">Student Events</a>
      </div>
    </div>
  </section>

  <section id="final-cta" style="position:relative;background:#E01B2E;color:#fff;padding:120px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:800px;margin:0 auto;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:16px">Experience Valor</div>
      <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,5.5vw,64px);line-height:1;letter-spacing:-.03em">Don't Just Hear About It. Experience It.</h2>
      <p data-reveal="" style="margin:0 auto 34px;max-width:56ch;font-size:17px;line-height:1.55;color:rgba(255,255,255,.85)">See what makes the Valor community different and discover what your college experience could look like here.</p>
      <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="admissions.html" style="background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 40px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Plan a Visit</a>
        <a data-reveal="" href="admissions-apply-now.html" style="border:1.5px solid rgba(255,255,255,.55);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 38px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.14);color:#fff">Apply to Valor</a>
      </div>
    </div>
  </section>`;

module.exports = { STUDENT_LIFE_OVERVIEW_BODY };
