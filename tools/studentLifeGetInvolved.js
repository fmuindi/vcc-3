const { IMG } = require('./build-site');

const DEAN_OF_STUDENTS_EMAIL = 'deanofstudents@valorcollege.edu';

const WAYS_TO_GET_INVOLVED = [
  { icon: 'fa-people-group', title: 'Campus Life', copy: 'Connect with other students through activities, gatherings, and experiences throughout the year.' },
  { icon: 'fa-hand-holding-heart', title: 'Serve', copy: 'Put your gifts into action through opportunities to serve the Valor community and beyond.' },
  { icon: 'fa-cross', title: 'Ministry', copy: "Find opportunities to gain hands-on experience and live out what you're learning." },
  { icon: 'fa-compass', title: 'Lead', copy: 'Develop as a leader by taking responsibility, serving others, and contributing to the Valor community.' },
];

// Cards are intentionally not links — the brief is explicit that these
// explain what "getting involved" means and don't all need a click-through.
const wayCard = (w) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:18px;padding:32px 26px;text-align:center">
        <div style="width:54px;height:54px;margin:0 auto 18px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center"><i class="fa-solid ${w.icon}" style="color:#E01B2E;font-size:20px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D;margin-bottom:10px">${w.title}</div>
        <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.62)">${w.copy}</p>
      </div>`;

// Client brief: "Make this highly visual with candid student-life videos
// from YT Shorts (use all)" — all 7 supplied links, embedded as vertical
// (9:16) YouTube embeds in a horizontally scrollable reel.
const SHORTS = [
  'Bprie6VN76c', 'r-OJ7NNCEuE', '5QnkiMFNH8Y', '3TqOqRWKJR8',
  'T6wSSv7jUmQ', 'LNXikOmHIxY', 'ulCOeBCAIhI',
];

const shortEmbed = (id) => `      <button type="button" class="reel-item" data-video-id="${id}" data-reveal="" aria-label="Play video">
        <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="Life at Valor Christian College" loading="lazy" decoding="async">
        <span class="reel-play-btn" aria-hidden="true"><i class="fa-solid fa-play"></i></span>
      </button>`;

const STUDENT_LIFE_GET_INVOLVED_BODY = `  <section id="get-involved-hero" style="position:relative;min-height:60vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.studentLifeGallery[9]}" alt="Valor Christian College students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.5) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Student Life &nbsp;·&nbsp; Get Involved</div>
      <h1 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,68px);line-height:1.03;letter-spacing:-.03em;text-wrap:balance">Find Your Place. Make an Impact.</h1>
      <p data-reveal="" style="margin:0 auto;max-width:58ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.85)">Build relationships, develop your gifts, serve others, and become an active part of the Valor community.</p>
    </div>
  </section>

  <section id="ways-to-get-involved" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Find Your Place</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">There's a Place for You Here.</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px">
${WAYS_TO_GET_INVOLVED.map(wayCard).join('\n')}
    </div>
  </section>

  <section id="whats-happening" style="position:relative;margin-top:80px;background:#100E0D;padding:100px 32px;overflow:hidden">
    <div style="position:absolute;inset:0;background:radial-gradient(60% 90% at 75% 25%,rgba(224,27,46,.28),rgba(16,14,13,.92))"></div>
    <div style="position:relative;max-width:800px;margin:0 auto;text-align:center">
      <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4.5vw,54px);line-height:1.08;letter-spacing:-.03em;color:#FAF5EE;text-wrap:balance">Find Something to Be Part Of.</h2>
      <p data-reveal="" style="margin:0 auto 36px;max-width:56ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.85)">From campus gatherings and student activities to special events and ministry opportunities, there's always something happening at Valor.</p>
      <a data-reveal="" href="student-life-events-calendar.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:19px 36px;border-radius:999px;box-shadow:0 10px 30px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">View Student Events &amp; Calendar <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </section>

  <section id="community-showing-up" style="max-width:1320px;margin:0 auto;padding:110px 32px 40px">
    <div style="max-width:680px;margin:0 auto 44px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Do Life Together</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Community Starts With Showing Up.</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Some of the best parts of college happen between classes. Show up, meet people, try something new, and make the most of your time at Valor.</p>
    </div>
    <div class="reel-grid">
${SHORTS.map(shortEmbed).join('\n')}
    </div>
    <div style="text-align:center;margin-top:20px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.5);margin-bottom:16px">Follow Us on Social Media</div>
      <div style="display:flex;gap:12px;justify-content:center">
        <a href="https://www.instagram.com/valorcollege/" target="_blank" rel="noopener" aria-label="Instagram" style="display:grid;place-items:center;width:48px;height:48px;border-radius:50%;border:1.5px solid rgba(16,14,13,.18);color:#100E0D" style-hover="background:#E01B2E;border-color:#E01B2E;color:#fff"><i class="fa-brands fa-instagram" style="font-size:19px"></i></a>
        <a href="https://www.youtube.com/@ValorCollege" target="_blank" rel="noopener" aria-label="YouTube" style="display:grid;place-items:center;width:48px;height:48px;border-radius:50%;border:1.5px solid rgba(16,14,13,.18);color:#100E0D" style-hover="background:#E01B2E;border-color:#E01B2E;color:#fff"><i class="fa-brands fa-youtube" style="font-size:19px"></i></a>
      </div>
    </div>
  </section>

  <section id="get-involved-final-cta" style="max-width:800px;margin:60px auto 0;padding:0 32px 120px;text-align:center">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Ready to Connect?</div>
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Find Your Place at Valor.</h2>
    <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Looking for a way to serve, connect, or get involved but not sure where to start? Student Life can help point you in the right direction.</p>
    <a data-reveal="" href="mailto:${DEAN_OF_STUDENTS_EMAIL}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact Student Life <i class="fa-solid fa-arrow-right"></i></a>
  </section>

  <div class="reel-lightbox-overlay" id="reel-lightbox">
    <div class="reel-lightbox-card">
      <button type="button" class="reel-lightbox-close" id="reel-lightbox-close" aria-label="Close video">&times;</button>
      <div class="reel-lightbox-frame">
        <iframe id="reel-lightbox-iframe" src="" style="position:absolute;inset:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Life at Valor Christian College" allowfullscreen></iframe>
      </div>
    </div>
  </div>`;

module.exports = { STUDENT_LIFE_GET_INVOLVED_BODY };
