const { IMG } = require('./build-site');

// One entry per nav destination (except Home). "blurb" is a short, honest
// description of what the page will contain — no invented facts/figures.
// NOTE: this previously referenced IMG.whyValor1/gallery1/gallery2, none of
// which exist on the IMG object (whyValor1 was renamed to whyValorMain at
// some point; gallery1/gallery2 never existed after the gallery became
// IMG.studentLifeGallery). That silently produced src="undefined" on any
// page landing on one of those 3 rotation slots — about-contact,
// admissions-international-students (then still admissions-complete-your-
// enrollment), admissions-forms, tuition-aid, tuition-aid-scholarships,
// student-life-work-study, student-life-handbook, and alumni-city-harvest-
// network (the first 4 happen to be custom-built pages that don't use this
// template, so it was invisible there, but the other 4 shipped a broken
// hero background image).
const IMAGE_ROTATION = [
  IMG.onCampus, IMG.online, IMG.cohort, IMG.whyValorMain, IMG.whyValor2,
  IMG.testimonial, IMG.prog1, IMG.prog2, IMG.prog3, IMG.prog4, IMG.prog5,
  IMG.studentLifeGallery[0], IMG.studentLifeGallery[3], IMG.heroPoster,
];

const PAGES = [
  { href: 'about-our-legacy.html', section: 'About', title: 'Our Legacy', blurb: "The story behind Valor — why it exists, what “School of the Spirit” means, a welcome from our founder, and the alumni carrying the legacy forward." },
  { href: 'about-meet-our-team.html', section: 'About', title: 'Meet Our Team', blurb: 'The pastors, mentors, and leaders behind Valor — leadership, faculty by department, and the student support team.' },
  { href: 'about-why-valor.html', section: 'About', title: 'Why Valor', blurb: 'What sets a Valor education apart, in plain terms.' },
  { href: 'about-contact.html', section: 'About', title: 'Contact', blurb: 'How to reach our campus, admissions, and staff.' },
  { href: 'academics-degree-programs.html', section: 'Academics', title: 'Degree Programs', blurb: "Bachelor's degrees, associate degrees, and one-year certificates — compare programs and find the one that fits your calling." },
  { href: 'academics-academic-catalog.html', section: 'Academics', title: 'Academic Catalog', blurb: 'The current academic catalog, policies, and course descriptions.' },
  { href: 'academics-class-schedules.html', section: 'Academics', title: 'Class Schedules', blurb: 'Current class schedules by term.' },
  { href: 'academics-credit-for-prior-learning.html', section: 'Academics', title: 'Credit for Prior Learning', blurb: 'How prior coursework, ministry experience, or training may count toward your degree.' },
  { href: 'admissions.html', section: 'Admissions', title: 'Admissions Overview', blurb: 'Every degree and program at Valor, and every way to take the next step — speak with a counselor, apply, or complete your enrollment.' },
  { href: 'admissions-speak-with-a-counselor.html', section: 'Admissions', title: 'Speak with a Counselor', blurb: 'Book time with an admissions counselor to talk through programs, cost, and next steps.' },
  { href: 'admissions-apply-now.html', section: 'Admissions', title: 'Apply Now', blurb: 'Start your Valor application.' },
  { href: 'admissions-international-students.html', section: 'Admissions', title: 'International Students', blurb: 'Everything international students need to know about applying, financial requirements, and enrolling at Valor.' },
  { href: 'admissions-forms.html', section: 'Admissions', title: 'Admissions & Enrollment Forms', blurb: 'Downloadable admissions and enrollment forms.' },
  { href: 'tuition-aid.html', section: 'Tuition & Aid', title: 'Financial Overview', blurb: 'A clear look at cost, aid, and scholarships for paying for Valor.' },
  { href: 'tuition-aid-tuition-fees.html', section: 'Tuition & Aid', title: 'Tuition & Fees', blurb: 'Your estimated cost to attend Valor, a full tuition and fee breakdown, and how financial aid and scholarships can lower it.' },
  { href: 'tuition-aid-international.html', section: 'Tuition & Aid', title: 'International Student Tuition & Fees', blurb: 'Your estimated annual cost paid to Valor and the minimum financial requirement for international students.' },
  { href: 'tuition-aid-financial-aid.html', section: 'Tuition & Aid', title: 'Financial Aid', blurb: 'Start your FAFSA, explore grants, loans, and scholarships, and connect with our Financial Aid team.' },
  { href: 'tuition-aid-scholarships.html', section: 'Tuition & Aid', title: 'Scholarships', blurb: 'Explore the World Changer, Word Network, City Harvest Network, and Presidential scholarships available to Valor students.' },
  { href: 'student-life.html', section: 'Student Life', title: 'Student Life Overview', blurb: 'What life as a Valor student looks like — community, events, support, and fast access to the student portal.' },
  { href: 'student-life-get-involved.html', section: 'Student Life', title: 'Get Involved', blurb: 'Ways to plug into campus and community life.' },
  { href: 'student-life-events-calendar.html', section: 'Student Life', title: 'Student Events & Calendar', blurb: 'Upcoming campus events and the academic calendar.' },
  { href: 'student-life-support.html', section: 'Student Life', title: 'Student Support', blurb: 'Support resources available to every Valor student.' },
  { href: 'student-life-accessibility.html', section: 'Student Life', title: 'Academic Support & Accessibility', blurb: 'Disability services and academic accommodations.' },
  { href: 'student-life-work-study.html', section: 'Student Life', title: 'Work-Study Program', blurb: 'How the work-study program works and how to apply.' },
  { href: 'student-life-handbook.html', section: 'Student Life', title: 'Student Handbook', blurb: 'Campus policies and expectations for Valor students.' },
  { href: 'student-life-portal.html', section: 'Student Life', title: 'Student Portal', blurb: 'Sign in to Populi, the system that powers the Valor student portal, to manage classes, grades, and billing.', isPortal: true },
  { href: 'alumni.html', section: 'Alumni', title: 'Alumni Overview', blurb: "Your Valor journey doesn't end at graduation — alumni stories, City Harvest Network, and ways to stay connected." },
  { href: 'alumni-stories.html', section: 'Alumni', title: 'Alumni Stories', blurb: 'Stories of Valor graduates serving in ministry, missions, business, and media.' },
  { href: 'alumni-stay-connected.html', section: 'Alumni', title: 'Stay Connected', blurb: 'Ways to stay connected to Valor after graduation.' },
  { href: 'alumni-city-harvest-network.html', section: 'Alumni', title: 'City Harvest Network', blurb: 'Continue learning and stay connected to pastors and ministry leaders worldwide through City Harvest Network.' },
  { href: 'alumni-continue-your-calling.html', section: 'Alumni', title: 'Continue Your Calling', blurb: 'Resources for alumni continuing to grow in their calling after Valor.' },
  { href: 'alumni-career-ministry.html', section: 'Alumni', title: 'Career & Ministry Opportunities', blurb: 'Career and ministry opportunities for Valor graduates.' },
  { href: 'alumni-share-your-story.html', section: 'Alumni', title: 'Share Your Story', blurb: 'Tell us where your calling has taken you since Valor.' },
];

PAGES.forEach((p, i) => { p.img = IMAGE_ROTATION[i % IMAGE_ROTATION.length]; });

function placeholderBody(p) {
  return `  <section style="position:relative;min-height:52vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${p.img}" alt="" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.4">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.55) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">${p.section}</div>
      <h1 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,64px);line-height:1.02;letter-spacing:-.03em">${p.title}</h1>
      <p data-reveal="" style="margin:0 auto;max-width:56ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.82)">${p.blurb}</p>
    </div>
  </section>

  <section style="max-width:760px;margin:0 auto;padding:70px 32px;text-align:center">
    <div data-reveal="" style="display:inline-block;background:rgba(224,27,46,.08);border:1px solid rgba(224,27,46,.25);color:#B3121F;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:10px 18px;border-radius:999px;margin-bottom:20px">${p.isPortal ? 'Portal link coming soon' : 'Page coming soon'}</div>
    <p data-reveal="" style="margin:0 0 30px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">${p.isPortal ? "This page will link straight to the Populi student portal once the deep link is confirmed." : 'This page is part of the Valor 2026 site update and is being finished. In the meantime, our team is happy to help directly.'}</p>
    <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="admissions-apply-now.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:16px 28px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Apply now</a>
      <a data-reveal="" href="admissions-speak-with-a-counselor.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Speak with admissions</a>
      <a data-reveal="" href="index.html" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Back to home</a>
    </div>
  </section>`;
}

module.exports = { PAGES, placeholderBody };
