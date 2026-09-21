const { IMG } = require('./build-site');

// No live-site content or dedicated alumni-relations contact exists for
// this page — routes to the site's real, working Contact form rather than
// inventing a submission email or a separate form that doesn't exist.
const ALUMNI_SHARE_YOUR_STORY_BODY = `  <section id="share-story-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Alumni &nbsp;&middot;&nbsp; Share Your Story</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Where Has Your Calling Taken You?</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Tell us where your calling has taken you since Valor. We'd love to hear it — and maybe feature it alongside our other alumni stories.</p>
      <a data-reveal="" href="about-contact.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Share Your Story <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[3]}" alt="Valor Christian College graduate" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="other-stories-cta" style="max-width:800px;margin:60px auto 0;padding:0 32px 120px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(24px,3.2vw,32px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Read What Other Grads Are Doing</h2>
    <a data-reveal="" href="alumni-stories.html" style="font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#B3121F;border-bottom:2px solid #E01B2E;padding-bottom:3px">View Alumni Stories →</a>
  </section>`;

module.exports = { ALUMNI_SHARE_YOUR_STORY_BODY };
