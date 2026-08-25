const { IMG } = require('./build-site');

const ABOUT_PRESIDENT_BODY = `  <section id="president-hero" style="position:relative;min-height:78vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.presidentPortrait}" alt="Dr. Scott Camp, President of Valor Christian College" loading="eager" decoding="async" class="president-hero-img" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:22% 32%">
    <div class="president-hero-scrim" style="position:absolute;inset:0;background:linear-gradient(100deg,rgba(16,14,13,0) 15%,rgba(16,14,13,.6) 48%,rgba(16,14,13,.94) 78%)"></div>
    <div class="president-hero-text" style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px;display:flex;justify-content:flex-end">
      <div style="max-width:540px;text-align:right">
        <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">About Our President</div>
        <h1 data-reveal="" style="margin:0 0 10px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(36px,6vw,80px);line-height:1;letter-spacing:-.03em">Dr. Scott Camp</h1>
        <div data-reveal="" style="display:flex;align-items:center;justify-content:flex-end;gap:14px;margin-bottom:26px">
          <span style="font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#E01B2E">President</span>
          <span style="width:34px;height:1.5px;background:#E01B2E"></span>
        </div>
        <p data-reveal="" style="margin:0;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Bringing decades of ministry, leadership, and theological education to Valor Christian College — equipping students with a strong biblical foundation to fulfill their God-given calling.</p>
      </div>
    </div>
  </section>

  <section id="president-bio" class="about-grid" style="max-width:1000px;margin:0 auto;padding:110px 32px">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:18px;text-align:center">A Legacy of Theological Education</div>
    <p data-reveal="" style="margin:0 0 24px;font-size:19px;line-height:1.7;color:rgba(16,14,13,.75);text-align:center">Dr. Camp's academic achievements are a testament to his scholarly depth and dedication to theological education. He holds a Master of Arts in Theology (Summa Cum Laude) from Criswell College, a Master of Divinity from Southwestern Assemblies of God University, and a Master of Theology from Southwestern Baptist Theological Seminary.</p>
    <p data-reveal="" style="margin:0;font-size:19px;line-height:1.7;color:rgba(16,14,13,.75);text-align:center">His pursuit of knowledge has taken him to doctoral studies at Southwestern Baptist Theological Seminary, Assemblies of God Theological Seminary, Baylor University, and Southern Evangelical Seminary. In 2007, he received an honorary Doctor of Divinity from St. Thomas Christian College in Jacksonville, FL, and earned his Doctorate of Ministry from Trinity Seminary in Accra, Ghana in 2025.</p>
  </section>

  <section id="president-role" data-reveal="" style="position:relative;padding:100px 32px;background:#100E0D;overflow:hidden">
    <div style="position:absolute;inset:0;background:radial-gradient(60% 90% at 75% 25%,rgba(224,27,46,.28),rgba(16,14,13,.92))"></div>
    <div style="position:relative;max-width:900px;margin:0 auto;text-align:center">
      <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(24px,3.2vw,38px);line-height:1.3;letter-spacing:-.01em;color:#FAF5EE;text-wrap:balance">President &amp; Professor of Preaching, Missions <span style="color:#E01B2E">&amp; Evangelism</span></div>
      <p style="margin:24px auto 0;max-width:58ch;font-size:16px;line-height:1.65;color:rgba(250,245,238,.8)">Dr. Camp leads Valor Christian College both in the classroom and from the president's office — shaping the academic direction of the college while continuing to teach and mentor students preparing for ministry.</p>
    </div>
  </section>

  <section id="scholarship" style="max-width:1320px;margin:100px auto 0;padding:0 32px">
    <div class="about-grid scholarship-card" style="position:relative;display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center;background:linear-gradient(135deg,#1a0508 0%,#4a0d15 55%,#E01B2E 100%);border-radius:28px;padding:60px;overflow:hidden;box-shadow:0 30px 80px rgba(224,27,46,.28)">
      <div style="position:absolute;top:-130px;right:-90px;width:340px;height:340px;border:1px solid rgba(255,255,255,.14);border-radius:50%"></div>
      <div style="position:absolute;bottom:-170px;left:-90px;width:380px;height:380px;border:1px solid rgba(255,255,255,.1);border-radius:50%"></div>
      <div style="position:relative">
        <div data-reveal="" class="scholarship-badge" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.14);color:#fff;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:9px 18px;border-radius:999px;margin-bottom:22px"><i class="fa-solid fa-award"></i> Dr. Scott Camp Presidential Scholarship</div>
        <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.6vw,42px);line-height:1.08;letter-spacing:-.03em;color:#fff;text-wrap:balance">Invest in your future. Bring someone with you.</h2>
        <p data-reveal="" style="margin:0 0 28px;font-size:16px;line-height:1.6;color:rgba(255,255,255,.82);max-width:56ch">Invite a friend to Valor Christian College and receive up to <strong style="color:#fff">$2,500 per year</strong> toward your tuition when they apply and enroll.*</p>
        <a data-reveal="" href="tuition-aid-scholarships.html" class="scholarship-cta" style="display:inline-block;background:#fff;color:#100E0D;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#FAF5EE;color:#100E0D">Learn More About the Scholarship</a>
        <div data-reveal="" style="margin-top:16px;font-size:12px;color:rgba(255,255,255,.55)">*See scholarship terms for full eligibility details.</div>
      </div>
      <div data-reveal="" class="scholarship-stat" style="position:relative;text-align:center;border-left:1px solid rgba(255,255,255,.2);padding-left:56px">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(48px,6.5vw,70px);line-height:1;color:#fff">$2,500<span style="font-size:20px;font-weight:700">/yr</span></div>
        <div style="margin-top:12px;font-size:13px;font-weight:600;letter-spacing:.04em;color:rgba(255,255,255,.78)">Toward tuition when a friend you refer applies and enrolls</div>
      </div>
    </div>
  </section>

  <section id="president-contact" style="max-width:760px;margin:0 auto;padding:100px 32px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.6vw,42px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Reach the President's Office</h2>
    <p data-reveal="" style="margin:0 0 30px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Questions for Dr. Camp or his office are always welcome.</p>
    <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="mailto:camps@valorcollege.edu" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-envelope"></i> camps@valorcollege.edu</a>
      <a data-reveal="" href="about-meet-our-team.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Meet the Rest of Our Team</a>
    </div>
  </section>`;

module.exports = { ABOUT_PRESIDENT_BODY };
