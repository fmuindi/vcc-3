const { IMG } = require('./build-site');

// Content sourced from valorcollege.edu/contact (via client-supplied reference
// screenshot). No invented emails, phone numbers, or addresses.
const HELP_CARDS = [
  {
    icon: 'fa-user-graduate',
    title: 'Admissions',
    copy: 'Questions about applying, programs, or becoming a Valor student?',
    email: 'admissions@valorcollege.edu',
    phone: '1-855-219-6538',
    cta: 'Contact Admissions',
  },
  {
    icon: 'fa-hand-holding-dollar',
    title: 'Financial Aid',
    copy: 'Questions about financial aid, tuition assistance, or funding your education?',
    email: 'financialaid@valorcollege.edu',
    cta: 'Contact Financial Aid',
  },
  {
    icon: 'fa-book-open',
    title: 'Academics',
    copy: 'Questions about academic programs, courses, or your educational path?',
    email: 'academics@valorcollege.edu',
    cta: 'Contact Academics',
  },
  {
    icon: 'fa-people-group',
    title: 'Current Students',
    copy: 'Need help with registration, housing, student life, or another student service?',
    href: 'student-life-portal.html',
    cta: 'View Student Contacts',
  },
];

const helpCard = (c) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:28px 24px">
        <div style="width:44px;height:44px;border-radius:50%;background:#E01B2E;display:grid;place-items:center;margin-bottom:18px"><i class="fa-solid ${c.icon}" style="color:#fff;font-size:17px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#100E0D;margin-bottom:10px">${c.title}</div>
        <p style="margin:0 0 16px;font-size:14px;line-height:1.55;color:rgba(16,14,13,.62);min-height:66px">${c.copy}</p>
        ${c.email ? `<a href="mailto:${c.email}" style="display:block;font-size:12.5px;color:#B3121F;margin-bottom:2px" style-hover="color:#E01B2E">${c.email.replace('@', '@<wbr>')}</a>` : ''}
        ${c.phone ? `<div style="font-size:12.5px;color:rgba(16,14,13,.6);margin-bottom:14px">${c.phone}</div>` : '<div style="margin-bottom:14px"></div>'}
        <a href="${c.href || `mailto:${c.email}`}" style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:3px" style-hover="color:#E01B2E">${c.cta} →</a>
      </div>`;

const DIRECTORY = [
  [
    { icon: 'fa-user-graduate', label: 'Admissions', email: 'admissions@valorcollege.edu', phone: '1-855-219-6538' },
    { icon: 'fa-book', label: 'Academics', email: 'academics@valorcollege.edu' },
    { icon: 'fa-hand-holding-dollar', label: 'Financial Aid', email: 'financialaid@valorcollege.edu' },
    { icon: 'fa-building-columns', label: 'Finance', email: 'finance@valorcollege.edu' },
  ],
  [
    { icon: 'fa-clipboard-list', label: 'Registrar', email: 'registrar@valorcollege.edu' },
    { icon: 'fa-house', label: 'Housing', email: 'housing@valorcollege.edu' },
    { icon: 'fa-user-tie', label: 'Dean of Students', email: 'deanofstudents@valorcollege.edu' },
    { icon: 'fa-building', label: 'Administration', email: 'admin@valorcollege.edu' },
  ],
  [
    { icon: 'fa-shield-halved', label: "President's Office", email: 'president@valorcollege.edu' },
    { icon: 'fa-flag-usa', label: 'Veterans Services', email: 'veterans@valorcollege.edu' },
    { icon: 'fa-globe', label: 'Website Support', email: 'webmaster@valorcollege.edu' },
    { icon: 'fa-phone', label: 'General Phone', phone: '1-800-940-9422', tel: '18009409422' },
    { icon: 'fa-fax', label: 'Fax', phone: '(614) 837-6904' },
  ],
];

const directoryRow = (d) => {
  const link = d.email
    ? `<a href="mailto:${d.email}" style="font-size:13px;color:#B3121F" style-hover="color:#E01B2E">${d.email.replace('@', '@<wbr>')}</a>`
    : d.tel
      ? `<a href="tel:${d.tel}" style="font-size:13px;color:#B3121F" style-hover="color:#E01B2E">${d.phone}</a>`
      : `<span style="font-size:13px;color:rgba(16,14,13,.6)">${d.phone}</span>`;
  return `        <div data-reveal="" style="display:flex;align-items:flex-start;gap:14px">
          <div style="flex:none;width:36px;height:36px;border-radius:50%;background:#100E0D;display:grid;place-items:center"><i class="fa-solid ${d.icon}" style="color:#fff;font-size:13px"></i></div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#100E0D;margin-bottom:3px">${d.label}</div>
            ${link}
          </div>
        </div>`;
};

const directoryColumn = (rows) => `      <div style="display:flex;flex-direction:column;gap:26px">
${rows.map(directoryRow).join('\n')}
      </div>`;

const ABOUT_CONTACT_BODY = `  <section id="contact-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Contact Valor</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,64px);line-height:1.03;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">We're Here to Help.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Whether you have questions about admissions, academics, financial aid, student life, or your next steps at Valor, our team is ready to help you find the answers you need.</p>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:14px">
        <a href="admissions.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Request Info</a>
        <a href="admissions-speak-with-a-counselor.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Speak with Admissions</a>
      </div>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[2]}" alt="A staff member talking with Valor students" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="how-can-we-help" style="max-width:1320px;margin:0 auto;padding:80px 32px 40px">
    <div style="text-align:center;max-width:600px;margin:0 auto 44px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Get in Touch</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">How Can We Help?</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px">
${HELP_CARDS.map(helpCard).join('\n')}
    </div>
  </section>

  <section id="contact-directory" style="max-width:1320px;margin:0 auto;padding:90px 32px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Contact Directory</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Find the Right Department.</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px">
${DIRECTORY.map(directoryColumn).join('\n')}
    </div>
  </section>

  <section id="visit-valor" style="background:#100E0D;padding:100px 32px">
    <div class="about-grid" style="max-width:1320px;margin:0 auto;display:grid;grid-template-columns:1fr auto 1fr;gap:48px;align-items:center">
      <div>
        <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Visit Valor</div>
        <h2 data-reveal="" style="margin:0 0 30px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.08;letter-spacing:-.03em;color:#FAF5EE;text-wrap:balance">Come See Valor for Yourself.</h2>
        <div style="display:flex;flex-wrap:wrap;gap:14px">
          <a data-reveal="" href="https://www.google.com/maps/search/?api=1&query=4595+Gender+Road+Canal+Winchester+OH+43110" target="_blank" rel="noopener" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Get Directions</a>
          <a data-reveal="" href="admissions.html" style="border:1.5px solid rgba(250,245,238,.4);color:#FAF5EE;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(250,245,238,.1);color:#FAF5EE">Plan a Visit</a>
        </div>
      </div>
      <div class="visit-divider" style="width:1px;align-self:stretch;background:rgba(250,245,238,.14)"></div>
      <div style="display:flex;flex-wrap:wrap;gap:40px">
        <div data-reveal="">
          <div style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#E01B2E;margin-bottom:10px"><i class="fa-solid fa-location-dot"></i> Physical Address</div>
          <p style="margin:0;font-size:15px;line-height:1.6;color:rgba(250,245,238,.82)">Valor Christian College<br>4595 Gender Road<br>Canal Winchester, OH 43110</p>
        </div>
        <div data-reveal="">
          <div style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#E01B2E;margin-bottom:10px"><i class="fa-solid fa-envelope"></i> Mailing Address</div>
          <p style="margin:0;font-size:15px;line-height:1.6;color:rgba(250,245,238,.82)">Valor Christian College<br>P.O. Box 800<br>Columbus, OH 43216 0800</p>
        </div>
      </div>
      <div data-reveal="" style="grid-column:1/-1;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.35)">
        <iframe src="https://maps.google.com/maps?q=39.890617,-82.829987&z=11&output=embed" width="100%" height="380" style="border:0;display:block" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map to Valor Christian College"></iframe>
      </div>
    </div>
  </section>

  <section id="contact-form-section" style="background:#6E0F16;padding:100px 32px">
    <div style="max-width:1000px;margin:0 auto">
      <h2 data-reveal="" style="margin:0 0 56px;text-align:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);letter-spacing:.04em;text-transform:uppercase;color:#fff">Contact Form</h2>
      <form class="contact-form" action="mailto:admissions@valorcollege.edu" method="post" enctype="text/plain">
        <div class="contact-form-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:40px 56px;margin-bottom:40px">
          <div data-reveal="">
            <label for="contact-first-name" style="display:block;font-size:14px;color:#fff;margin-bottom:14px">First Name*</label>
            <input id="contact-first-name" type="text" name="firstName" required style="width:100%;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.4);color:#fff;font-size:15px;padding:0 0 10px;font-family:Archivo,sans-serif">
          </div>
          <div data-reveal="">
            <label for="contact-last-name" style="display:block;font-size:14px;color:#fff;margin-bottom:14px">Last Name*</label>
            <input id="contact-last-name" type="text" name="lastName" required style="width:100%;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.4);color:#fff;font-size:15px;padding:0 0 10px;font-family:Archivo,sans-serif">
          </div>
          <div data-reveal="">
            <label for="contact-email" style="display:block;font-size:14px;color:#fff;margin-bottom:14px">Email*</label>
            <input id="contact-email" type="email" name="email" required style="width:100%;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.4);color:#fff;font-size:15px;padding:0 0 10px;font-family:Archivo,sans-serif">
          </div>
          <div data-reveal="">
            <label for="contact-phone" style="display:block;font-size:14px;color:#fff;margin-bottom:14px">Phone*</label>
            <input id="contact-phone" type="tel" name="phone" required style="width:100%;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.4);color:#fff;font-size:15px;padding:0 0 10px;font-family:Archivo,sans-serif">
          </div>
        </div>
        <div data-reveal="" style="margin-bottom:44px">
          <label for="contact-message" style="display:block;font-size:14px;color:#fff;margin-bottom:14px">Message*</label>
          <textarea id="contact-message" name="message" required rows="2" style="width:100%;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.4);color:#fff;font-size:15px;padding:0 0 10px;font-family:Archivo,sans-serif;resize:vertical"></textarea>
        </div>
        <div data-reveal="" style="text-align:right">
          <button type="submit" style="background:#fff;color:#100E0D;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:16px 40px;border:none;border-radius:4px;cursor:pointer">Submit</button>
        </div>
      </form>
    </div>
  </section>`;

module.exports = { ABOUT_CONTACT_BODY };
