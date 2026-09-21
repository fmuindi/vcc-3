const { IMG } = require('./build-site');

// Source: valorcollege.edu/stories (fetched 2026-09-21) — the only 2 graduate
// profiles the live site has. No photos or fuller bios came through in the
// page text; the client should confirm/supply those and any additional
// stories directly rather than have more invented here.
const STORIES = [
  { name: 'Dr. Medina Pullings', role: 'United Nations Church International', location: 'Richmond, VA' },
  { name: 'Bishop RJ Matthews', role: 'The Harvest Church', location: 'Houston, TX' },
];

const storyCard = (s) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:22px;padding:36px 32px;display:flex;align-items:center;gap:24px">
        <div style="flex:none;width:64px;height:64px;border-radius:50%;background:${'linear-gradient(135deg,#1a0508 0%,#4a0d15 55%,#E01B2E 100%)'};display:grid;place-items:center"><i class="fa-solid fa-quote-left" style="color:#fff;font-size:20px"></i></div>
        <div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:19px;color:#100E0D;margin-bottom:6px">${s.name}</div>
          <p style="margin:0;font-size:14.5px;line-height:1.5;color:rgba(16,14,13,.6)">${s.role} &middot; ${s.location}</p>
        </div>
      </div>`;

const ALUMNI_STORIES_BODY = `  <section id="stories-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Alumni &nbsp;&middot;&nbsp; Stories</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">World Changers, at Work in the World.</h1>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Stories of Valor graduates serving in ministry, missions, business, and media.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[10]}" alt="Valor Christian College graduates" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="stories" style="max-width:900px;margin:0 auto;padding:80px 32px 60px">
    <div style="display:flex;flex-direction:column;gap:20px">
${STORIES.map(storyCard).join('\n')}
    </div>
  </section>

  <section id="share-cta" style="max-width:800px;margin:40px auto 0;padding:0 32px 120px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.4vw,38px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Where Has Your Calling Taken You?</h2>
    <p data-reveal="" style="margin:0 0 30px;font-size:15.5px;line-height:1.6;color:rgba(16,14,13,.65)">We'd love to feature your story alongside these.</p>
    <a data-reveal="" href="alumni-share-your-story.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Share Your Story</a>
  </section>`;

module.exports = { ALUMNI_STORIES_BODY };
