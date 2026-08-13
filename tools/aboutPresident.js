const { IMG } = require('./build-site');

const ABOUT_PRESIDENT_BODY = `  <section id="president-hero" style="position:relative;min-height:78vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:70px">
    <img src="${IMG.presidentPortrait}" alt="Dr. Scott Camp, President of Valor Christian College" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:.6">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.45) 45%,rgba(16,14,13,.97) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 80px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">About Our President</div>
      <h1 data-reveal="" style="margin:0 0 10px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(38px,7vw,96px);line-height:1;letter-spacing:-.03em">Dr. Scott Camp</h1>
      <div data-reveal="" style="display:flex;align-items:center;gap:14px;margin-bottom:26px">
        <span style="width:34px;height:1.5px;background:#E01B2E"></span>
        <span style="font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#E01B2E">President</span>
      </div>
      <p data-reveal="" style="margin:0;max-width:58ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Bringing decades of ministry, leadership, and theological education to Valor Christian College — equipping students with a strong biblical foundation to fulfill their God-given calling.</p>
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

  <section id="president-contact" style="max-width:760px;margin:0 auto;padding:100px 32px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.6vw,42px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Reach the President's Office</h2>
    <p data-reveal="" style="margin:0 0 30px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Questions for Dr. Camp or his office are always welcome.</p>
    <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="mailto:camps@valorcollege.edu" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-envelope"></i> camps@valorcollege.edu</a>
      <a data-reveal="" href="about-meet-our-team.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Meet the Rest of Our Team</a>
    </div>
  </section>`;

module.exports = { ABOUT_PRESIDENT_BODY };
