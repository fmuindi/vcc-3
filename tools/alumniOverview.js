const { IMG } = require('./build-site');

// Card copy reuses the exact blurbs already approved in tools/placeholders.js
// (no new claims invented here) — the live valorcollege.edu site has no
// Alumni section at all to draw real copy from.
const ALUMNI_LINKS = [
  { href: 'alumni-stories.html', icon: 'fa-book-open', title: 'Alumni Stories', blurb: 'Stories of Valor graduates serving in ministry, missions, business, and media.' },
  { href: 'alumni-stay-connected.html', icon: 'fa-link', title: 'Stay Connected', blurb: 'Ways to stay connected to Valor after graduation.' },
  { href: 'alumni-city-harvest-network.html', icon: 'fa-people-group', title: 'City Harvest Network', blurb: 'Continue learning and stay connected to pastors and ministry leaders worldwide through City Harvest Network.' },
  { href: 'alumni-continue-your-calling.html', icon: 'fa-compass', title: 'Continue Your Calling', blurb: 'Resources for alumni continuing to grow in their calling after Valor.' },
  { href: 'alumni-career-ministry.html', icon: 'fa-briefcase', title: 'Career & Ministry Opportunities', blurb: 'Career and ministry opportunities for Valor graduates.' },
  { href: 'alumni-share-your-story.html', icon: 'fa-comment-dots', title: 'Share Your Story', blurb: 'Tell us where your calling has taken you since Valor.' },
];

const linkCard = (a) => `      <a href="${a.href}" data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:20px;padding:32px 26px;color:#100E0D;transition:transform .2s ease,box-shadow .2s ease" style-hover="color:#100E0D;transform:translateY(-6px);box-shadow:0 24px 50px rgba(16,14,13,.14)">
        <div style="flex:none;width:48px;height:48px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:20px"><i class="fa-solid ${a.icon}" style="color:#E01B2E;font-size:19px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;margin-bottom:10px">${a.title}</div>
        <p style="flex:1;margin:0 0 18px;font-size:14px;line-height:1.6;color:rgba(16,14,13,.6)">${a.blurb}</p>
        <span style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#B3121F">Explore →</span>
      </a>`;

const ALUMNI_OVERVIEW_BODY = `  <section id="alumni-hero" style="position:relative;min-height:62vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.studentLifeGallery[9]}" alt="Valor Christian College graduates" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.5) 45%,rgba(16,14,13,.97) 100%)"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Alumni</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,64px);line-height:1.05;letter-spacing:-.03em;text-wrap:balance">Your Story Doesn't End at Graduation.</h1>
      <p data-reveal="" style="margin:0 auto;max-width:58ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.85)">Wherever your calling has taken you, you're still part of the Valor family. Explore stories, stay connected, and find ways to keep growing.</p>
    </div>
  </section>

  <section id="alumni-links" style="max-width:1320px;margin:0 auto;padding:100px 32px 120px">
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
${ALUMNI_LINKS.map(linkCard).join('\n')}
    </div>
  </section>`;

module.exports = { ALUMNI_OVERVIEW_BODY };
