const { IMG } = require('./build-site');

const CALLOUTS = [
  { icon: 'fa-book-open', label: 'Learn', copy: 'Biblically grounded academics' },
  { icon: 'fa-hand-holding-heart', label: 'Serve', copy: 'Hands-on ministry experience' },
  { icon: 'fa-compass', label: 'Lead', copy: 'Preparation for your calling' },
];

const callout = (c) => `        <div data-reveal="" style="text-align:center;padding:26px 18px;background:rgba(16,14,13,.04);border:1px solid rgba(16,14,13,.12);border-radius:16px">
          <i class="fa-solid ${c.icon}" style="font-size:22px;color:#E01B2E;margin-bottom:12px;display:block"></i>
          <div style="font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#100E0D;margin-bottom:10px">${c.label}</div>
          <p style="margin:0;font-size:14px;line-height:1.5;color:rgba(16,14,13,.65)">${c.copy}</p>
        </div>`;

const ABOUT_LEGACY_BODY = `  <section id="legacy-hero" style="position:relative;min-height:86vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:70px">
    <img src="${IMG.studentLifeGallery[0]}" alt="Students together at Valor Christian College" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 80px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">About &nbsp;·&nbsp; Our Legacy</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(36px,6vw,84px);line-height:1;letter-spacing:-.03em;max-width:16ch;text-wrap:balance">A Legacy of Raising <span style="color:#E01B2E">World Changers.</span></h1>
      <p data-reveal="" style="margin:0;max-width:62ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Valor Christian College was born from Dr. Rod Parsley's vision to raise up Spirit-filled men and women equipped to impact the world for the Kingdom of God. Since 1990, that vision has remained at the heart of Valor — preparing students academically, spiritually, and practically to fulfill the calling God has placed on their lives.</p>
      <a data-reveal="" href="#vision" style="display:inline-flex;align-items:center;gap:10px;margin-top:44px;font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,245,238,.75)" style-hover="color:#FAF5EE"><i class="fa-solid fa-arrow-down"></i> Discover Our Story</a>
    </div>
  </section>

  <section id="vision" class="about-grid" style="max-width:1320px;margin:0 auto;padding:110px 32px 40px;display:grid;grid-template-columns:.95fr 1.05fr;gap:64px;align-items:center">
    <div data-reveal="" class="about-collage" style="height:560px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.22)">
      <img src="${IMG.whyValorMain}" alt="Valor graduation" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:18px">The Vision</div>
      <h2 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">More Than an Education. Preparation for Your Calling.</h2>
      <p data-reveal="" style="margin:0 0 20px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.72);max-width:56ch">Valor was founded with a vision for an educational experience that would develop more than knowledge — it would develop the whole person.</p>
      <p data-reveal="" style="margin:0 0 30px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.72);max-width:56ch">Here, biblical education, spiritual formation, and practical ministry come together to prepare students to influence their generation for the Kingdom of God.</p>
      <div data-reveal="" style="font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#100E0D;border-top:1px solid rgba(16,14,13,.12);padding-top:24px">Know God. <span style="color:#E01B2E">Discover Your Calling.</span> Impact Your World.</div>
    </div>
  </section>

  <section id="school-of-the-spirit" data-reveal="" style="position:relative;margin-top:60px;padding:130px 32px;background:#100E0D;overflow:hidden">
    <img src="${IMG.prog2}" alt="Worship team leading a service at Valor" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.32">
    <div style="position:absolute;inset:0;background:radial-gradient(60% 90% at 25% 25%,rgba(224,27,46,.35),rgba(16,14,13,.9))"></div>
    <div style="position:relative;max-width:900px;margin:0 auto;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.7);margin-bottom:16px">The Heart of Valor</div>
      <h2 data-reveal="" style="margin:0 0 44px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#FAF5EE">A School of the Spirit.</h2>
      <div data-reveal="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(24px,3.2vw,42px);line-height:1.18;letter-spacing:-.02em;color:#FAF5EE;text-wrap:balance">"Valor is a '<span style="color:#E01B2E">School of the Spirit</span>' for the Spirit-led, Spirit-filled, Spirit-anointed life and ministry."</div>
      <footer data-reveal="" style="margin:22px 0 40px;font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,245,238,.6)">— Dr. Rod Parsley, Founder &amp; Chancellor</footer>
      <p data-reveal="" style="margin:0 auto;max-width:58ch;font-size:17px;line-height:1.65;color:rgba(250,245,238,.82)">At Valor, spiritual formation isn't separate from your education — it's woven into it. Through biblical teaching, chapel, prayer, Spirit-filled community, and hands-on ministry, students are challenged to grow in both their faith and their calling.</p>
    </div>
  </section>

  <section id="legacy-numbers" style="max-width:1320px;margin:0 auto;padding:110px 32px 60px;text-align:center">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:44px">A Vision That Continues</div>
    <div class="stats-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">
      <div data-reveal=""><div data-count="1990" class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,54px);line-height:1;color:#E01B2E">1990</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:10px">Established</div></div>
      <div data-reveal=""><div data-count="30" data-suffix="+" class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,54px);line-height:1;color:#E01B2E">30+</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:10px">Nations Represented*</div></div>
      <div data-reveal=""><div class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,54px);line-height:1;color:#E01B2E">ABHE</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:10px">Accredited</div></div>
      <div data-reveal=""><div class="stat-num" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,54px);line-height:1;color:#E01B2E">Thousands</div><div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-top:10px">Alumni &amp; Graduates*</div></div>
    </div>
    <div data-reveal="" style="margin-top:36px;font-size:12px;color:rgba(16,14,13,.45)">*Approximate — final figures to be confirmed.</div>
  </section>

  <section id="then-now-next" style="max-width:1320px;margin:0 auto;padding:40px 32px 100px">
    <div style="text-align:center;max-width:640px;margin:0 auto 48px">
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Then. Now. Next.</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
      <div data-reveal="" style="position:relative;height:480px;border-radius:20px;overflow:hidden;color:#fff">
        <img src="${IMG.founderPortrait}" alt="Dr. Rod Parsley, founder of Valor Christian College" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.94),rgba(16,14,13,.05) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:24px;height:220px;display:flex;flex-direction:column;justify-content:flex-start">
          <div style="font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E01B2E;margin-bottom:10px">Then.</div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;color:#FAF5EE;margin-bottom:10px">A Vision Was Born.</div>
          <p style="margin:0;font-size:14px;line-height:1.55;color:rgba(250,245,238,.8)">Valor began with a calling to build a college where students could receive a strong education while being prepared spiritually for their God-given purpose.</p>
        </div>
      </div>
      <div data-reveal="" style="position:relative;height:480px;border-radius:20px;overflow:hidden;color:#fff">
        <img src="${IMG.studentLifeGallery[1]}" alt="Students in worship at Valor" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.94),rgba(16,14,13,.05) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:24px;height:220px;display:flex;flex-direction:column;justify-content:flex-start">
          <div style="font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E01B2E;margin-bottom:10px">Now.</div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;color:#FAF5EE;margin-bottom:10px">World Changers Are Being Made.</div>
          <p style="margin:0;font-size:14px;line-height:1.55;color:rgba(250,245,238,.8)">Today, students from different backgrounds and places come to Valor to learn, worship, serve, build lifelong relationships, and discover who God has called them to become.</p>
        </div>
      </div>
      <div data-reveal="" style="position:relative;height:480px;border-radius:20px;overflow:hidden;color:#fff">
        <img src="${IMG.studentLifeGallery[10]}" alt="Valor students serving" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.94),rgba(16,14,13,.05) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:24px;height:220px;display:flex;flex-direction:column;justify-content:flex-start">
          <div style="font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E01B2E;margin-bottom:10px">Next.</div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;color:#FAF5EE;margin-bottom:10px">The Legacy Continues.</div>
          <p style="margin:0;font-size:14px;line-height:1.55;color:rgba(250,245,238,.8)">A new generation is being equipped to carry the Gospel into ministry, business, media, worship, missions, and every place God opens the door.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="hands-on-ministry" class="about-grid" style="max-width:1320px;margin:0 auto;padding:40px 32px 110px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:18px">Built Different</div>
      <h2 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Learn It. Live It. Lead It.</h2>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.72);max-width:56ch">At Valor, what you learn doesn't stay in the classroom. Through the college's connection with World Harvest Church and hands-on ministry opportunities, students have the opportunity to put their faith, leadership, and education into practice.</p>
      <div class="pathways-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
${CALLOUTS.map(callout).join('\n')}
      </div>
    </div>
    <div data-reveal="" style="position:relative;width:100%;aspect-ratio:548/308;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.22);background:#100E0D">
      <iframe src="https://player.vimeo.com/video/1217768580?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" style="position:absolute;inset:0;width:100%;height:100%;border:0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="OSU Outreach VCC POST 20250411" loading="lazy"></iframe>
    </div>
  </section>

  <section id="founder-message" class="about-grid" style="max-width:1320px;margin:0 auto;padding:40px 32px 120px;display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:center">
    <div data-reveal="" class="about-collage" style="height:600px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.22)">
      <img src="${IMG.founderPortrait}" alt="Dr. Rod Parsley, Founder and Chancellor of Valor Christian College" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block">
    </div>
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:18px">A Message From Our Founder</div>
      <h2 data-reveal="" style="margin:0 0 26px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">This Vision Is Personal.</h2>
      <blockquote data-reveal="" style="margin:0 0 24px;font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(19px,2.4vw,26px);line-height:1.35;letter-spacing:-.01em;color:#100E0D;text-wrap:balance">"I believe that during your time with us, you will receive an impartation that will help prepare you to fulfill your destiny in God's Kingdom."</blockquote>
      <div data-reveal="" style="font-family:'Bricolage Grotesque',cursive;font-style:italic;font-size:26px;color:#B3121F;margin-bottom:6px">Rod Parsley</div>
      <div data-reveal="" style="font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-bottom:30px">Dr. Rod Parsley · Founder &amp; Chancellor</div>
      <div data-reveal="" style="display:inline-flex;align-items:center;gap:12px;opacity:.55">
        <span style="display:grid;place-items:center;width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(16,14,13,.35);color:#100E0D;font-size:14px"><i class="fa-solid fa-play"></i></span>
        <span style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#100E0D">Watch the Founder's Message<br><span style="font-weight:500;letter-spacing:.03em;text-transform:none;color:rgba(16,14,13,.55)">Coming soon</span></span>
      </div>
    </div>
  </section>

  <section id="handoff" style="position:relative;min-height:74vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#100E0D">
    <img src="${IMG.studentLifeGallery[12]}" alt="Students at Valor Christian College" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5">
    <div style="position:absolute;inset:0;background:radial-gradient(70% 90% at 50% 100%,rgba(224,27,46,.3),rgba(16,14,13,.92))"></div>
    <div style="position:relative;max-width:760px;margin:0 auto;padding:100px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.7);margin-bottom:18px">The Story Isn't Finished</div>
      <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4.5vw,58px);line-height:1.05;letter-spacing:-.03em;color:#FAF5EE">The Legacy Continues With You.</h2>
      <p data-reveal="" style="margin:0 auto 40px;max-width:52ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.82)">You've seen where Valor came from. Now discover where God could take you. Come grow in your faith, discover your calling, and leave equipped to impact the world for Christ.</p>
      <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="admissions-apply-now.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:18px 32px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Apply Now</a>
        <a data-reveal="" href="admissions.html" style="border:1.5px solid rgba(250,245,238,.55);color:#FAF5EE;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(250,245,238,.14);color:#FAF5EE">Visit Valor</a>
      </div>
    </div>
  </section>`;

module.exports = { ABOUT_LEGACY_BODY };
