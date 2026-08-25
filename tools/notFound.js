const { IMG } = require('./build-site');

const NOT_FOUND_BODY = `  <section style="position:relative;min-height:74vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.whyValorMain}" alt="" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.35">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.55) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:760px;margin:0 auto;padding:60px 32px;text-align:center">
      <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;color:#E01B2E;font-size:clamp(64px,12vw,140px);line-height:1;letter-spacing:-.03em;margin-bottom:8px">404</div>
      <h1 style="margin:0 0 18px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(28px,4.5vw,48px);line-height:1.05;letter-spacing:-.03em">Page Not Found</h1>
      <p style="margin:0 auto 36px;max-width:52ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.82)">The page you're looking for doesn't exist or may have moved. Let's get you back on track.</p>
      <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a href="index.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:16px 28px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Back to Home</a>
        <a href="about-contact.html" style="border:1.5px solid rgba(250,245,238,.4);color:#FAF5EE;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(250,245,238,.1);color:#FAF5EE">Contact Us</a>
      </div>
    </div>
  </section>`;

module.exports = { NOT_FOUND_BODY };
