const { IMG } = require('./build-site');

// No live-site content exists for this page (confirmed with the client —
// the live site has no Alumni section at all). Built using only things
// already real and confirmed elsewhere on this site: the actual social
// links used in the footer, and the existing Contact page as the real
// channel for updating contact info — no invented alumni programs,
// events, or numbers.
const SOCIALS = [
  { label: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/valorcollege/' },
  { label: 'YouTube', icon: 'fa-youtube', href: 'https://www.youtube.com/@ValorCollege' },
  { label: 'TikTok', icon: 'fa-tiktok', href: 'https://www.tiktok.com/@valorcollege' },
  { label: 'Facebook', icon: 'fa-facebook-f', href: 'https://www.facebook.com/valorcollege/' },
];

const socialCard = (s) => `      <a href="${s.href}" target="_blank" rel="noopener" data-reveal="" style="display:flex;flex-direction:column;align-items:center;gap:14px;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:18px;padding:32px 20px;color:#100E0D" style-hover="color:#100E0D;border-color:rgba(224,27,46,.3)">
        <div style="width:52px;height:52px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center"><i class="fa-brands ${s.icon}" style="color:#E01B2E;font-size:20px"></i></div>
        <span style="font-size:13.5px;font-weight:700">${s.label}</span>
      </a>`;

const ALUMNI_STAY_CONNECTED_BODY = `  <section id="stay-connected-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Alumni &nbsp;&middot;&nbsp; Stay Connected</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">You're Still Part of the Family.</h1>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Follow along, keep in touch, and see what God is doing in the Valor community.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[11]}" alt="Valor Christian College community" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="follow" style="max-width:900px;margin:0 auto;padding:80px 32px 60px">
    <div style="max-width:600px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Follow Valor</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px">
${SOCIALS.map(socialCard).join('\n')}
    </div>
  </section>

  <section id="update-info" style="max-width:800px;margin:40px auto 0;padding:0 32px 120px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(24px,3.2vw,32px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Moved? New Job? Let Us Know.</h2>
    <p data-reveal="" style="margin:0 0 28px;font-size:15.5px;line-height:1.6;color:rgba(16,14,13,.65)">Keeping your contact info current helps us stay in touch — and helps other alumni find you.</p>
    <a data-reveal="" href="about-contact.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Update Your Info</a>
  </section>`;

module.exports = { ALUMNI_STAY_CONNECTED_BODY };
