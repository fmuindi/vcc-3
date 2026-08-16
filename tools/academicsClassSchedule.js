const { IMG } = require('./build-site');

// Schedule PDF links per the client-supplied URLs (tracking query param
// stripped from the campus link). No invented dates or destinations.
const SCHEDULE_BASE = 'https://valorcollege.edu/root/pdf/academics/schedule/';
const SCHEDULES = [
  {
    icon: 'fa-building-columns',
    label: 'Campus',
    title: 'Fall 2026 Campus Schedule',
    dates: 'August 17 – December 6, 2026',
    file: 'Fall-2026_Campus-Schedule.pdf',
    cta: 'View Campus Schedule',
  },
  {
    icon: 'fa-desktop',
    label: 'Online Session One',
    title: 'Fall 2026 Online Session One',
    dates: 'August 17 – October 11, 2026',
    file: 'Fall-2026_Online-Schedule_Session-One.pdf',
    cta: 'View Schedule',
  },
  {
    icon: 'fa-laptop',
    label: 'Online Session Two',
    title: 'Fall 2026 Online Session Two',
    dates: 'October 12 – December 6, 2026',
    file: 'Fall-2026_Online-Schedule_Session-Two.pdf',
    cta: 'View Schedule',
  },
];

const scheduleCard = (s) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:32px 28px;text-align:center">
        <div style="width:56px;height:56px;margin:0 auto 18px;border-radius:50%;border:1.5px solid rgba(224,27,46,.35);display:grid;place-items:center"><i class="fa-solid ${s.icon}" style="color:#E01B2E;font-size:22px"></i></div>
        <div style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#100E0D;margin-bottom:14px">${s.label}</div>
        <div style="font-weight:700;font-size:15px;color:#100E0D;margin-bottom:6px">${s.title}</div>
        <p style="margin:0 0 22px;font-size:13.5px;color:rgba(16,14,13,.55)">${s.dates}</p>
        <a href="${SCHEDULE_BASE}${s.file}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#E01B2E;color:#fff;font-size:12.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:14px 22px;border-radius:999px" style-hover="background:#F02338;color:#fff"><i class="fa-solid fa-file-lines"></i> ${s.cta}</a>
      </div>`;

const TEXTBOOK_RESOURCES = [
  { icon: 'fa-book-open-reader', name: 'LOGOS', copy: 'Create or log into your LOGOS account. After your initial login, you will be automatically directed to your digital bookshelf.' },
  { icon: 'fa-graduation-cap', name: 'eCampus', copy: 'Log into eCampus to access your textbook through the VitalSource Bookshelf.' },
  { icon: 'fa-book', name: 'GALE', copy: 'Access digital resources through the VCC Library GALE resource. Use the password valor when prompted. GALE also includes a feature that can read content aloud.' },
];

const ACADEMICS_CLASS_SCHEDULE_BODY = `  <section id="schedule-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Class Schedule</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5vw,64px);line-height:1.03;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Find Your Classes. Plan Your Semester.</h1>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">View current class schedules for Valor Christian College campus and online programs. Students should review their Academic Plan and Degree Audit in Populi before registering.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[5]}" alt="Valor Christian College students on campus" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="current-semester" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Fall 2026</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Fall 2026 Class Schedules</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Choose your program format below to view the current class schedule.</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${SCHEDULES.map(scheduleCard).join('\n')}
    </div>
  </section>

  <section id="academic-resources" style="max-width:1000px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:640px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Academic Resources</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Resources for Your Semester</h2>
    </div>
    <div class="about-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start">
      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:30px 26px">
        <div style="width:50px;height:50px;border-radius:50%;background:rgba(16,14,13,.05);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid fa-book-open" style="color:#100E0D;font-size:19px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D;margin-bottom:8px">Academic Resource Guide</div>
        <p style="margin:0 0 20px;font-size:14px;line-height:1.55;color:rgba(16,14,13,.6)">Find information about class formats, academic policies, textbooks, academic resources, and important contacts.</p>
        <a href="academics-academic-catalog.html" style="display:inline-flex;align-items:center;gap:8px;border:1.5px solid rgba(224,27,46,.4);color:#B3121F;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:12px 20px;border-radius:999px" style-hover="background:rgba(224,27,46,.08)"><i class="fa-solid fa-file-lines"></i> View Resource Guide</a>
      </div>
      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:30px 26px">
        <div style="width:50px;height:50px;border-radius:50%;background:rgba(16,14,13,.05);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid fa-layer-group" style="color:#100E0D;font-size:19px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D;margin-bottom:8px">Textbook Information</div>
        <p style="margin:0 0 20px;font-size:14px;line-height:1.55;color:rgba(16,14,13,.6)">Learn about digital textbooks, how to access your materials, and important information for the semester.</p>
        <button type="button" data-view-all="textbook-info" data-more-label="Textbook Information ▾" data-less-label="Hide Textbook Information ▴" style="display:inline-flex;align-items:center;gap:8px;background:none;border:none;padding:0;cursor:pointer;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#B3121F" style-hover="color:#E01B2E">Textbook Information ▾</button>
      </div>
    </div>
    <div data-more="textbook-info" style="display:none;margin-top:18px;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:16px;padding:36px 32px">
      <div style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Textbook Information</div>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.72);max-width:70ch">Valor Christian College provides digital textbook resources for students. The cost of educational resources is included in tuition, so students are not required to purchase textbooks separately.</p>
      <p style="margin:0 0 26px;font-size:15px;line-height:1.65;color:rgba(16,14,13,.72);max-width:70ch">Your textbook information can be found under <strong>Links</strong> inside each Populi class. Look for the title of your textbook or the word <strong>TEXTBOOK</strong>.</p>
      <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(16,14,13,.5);margin-bottom:18px">Your digital textbook may be provided through one of these resources:</div>
      <div class="pathways-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:26px">
${TEXTBOOK_RESOURCES.map((r) => `        <div style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:14px;padding:22px 20px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><i class="fa-solid ${r.icon}" style="color:#E01B2E;font-size:16px"></i><span style="font-weight:800;font-size:14px;color:#100E0D">${r.name}</span></div>
          <p style="margin:0;font-size:13px;line-height:1.55;color:rgba(16,14,13,.6)">${r.copy}</p>
        </div>`).join('\n')}
      </div>
      <p style="margin:0;font-size:13.5px;line-height:1.6;color:rgba(16,14,13,.55);max-width:70ch">Students may purchase physical copies of textbooks at their own expense. However, we recommend using the digital resources provided by Valor since they are already included in tuition.</p>
    </div>
  </section>

  <section id="registration-help" style="max-width:1000px;margin:0 auto;padding:80px 32px 120px">
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:28px;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:24px;padding:44px 40px">
      <div style="display:flex;align-items:center;gap:20px">
        <div style="flex:none;width:56px;height:56px;border-radius:50%;border:1.5px solid rgba(224,27,46,.35);display:grid;place-items:center"><i class="fa-solid fa-headset" style="color:#E01B2E;font-size:22px"></i></div>
        <div>
          <div data-reveal="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#100E0D;margin-bottom:6px">Questions About Your Schedule?</div>
          <p data-reveal="" style="margin:0 0 8px;font-size:14.5px;line-height:1.55;color:rgba(16,14,13,.62);max-width:46ch">Need help with registration, your academic plan, or choosing the right classes? Contact the Office of the Registrar.</p>
          <a href="mailto:registrar@valorcollege.edu" style="font-size:13.5px;color:#B3121F" style-hover="color:#E01B2E">registrar@valorcollege.edu</a>
        </div>
      </div>
      <a data-reveal="" href="mailto:registrar@valorcollege.edu" style="flex:none;display:inline-flex;align-items:center;gap:8px;background:#E01B2E;color:#fff;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 24px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-envelope"></i> Contact the Registrar</a>
    </div>
  </section>`;

module.exports = { ACADEMICS_CLASS_SCHEDULE_BODY };
