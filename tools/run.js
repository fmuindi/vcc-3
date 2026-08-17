const fs = require('fs');
const path = require('path');
const { renderPage, ROOT, IMG } = require('./build-site');
const { HOME_BODY } = require('./home');
const { PAGES, placeholderBody } = require('./placeholders');
const { studentLifeGallery } = require('./studentLife');
const { ABOUT_LEGACY_BODY } = require('./aboutLegacy');
const { ABOUT_MEET_TEAM_BODY } = require('./aboutMeetTeam');
const { ABOUT_PRESIDENT_BODY } = require('./aboutPresident');
const { ABOUT_WHY_VALOR_BODY } = require('./aboutWhyValor');
const { ABOUT_CONTACT_BODY } = require('./aboutContact');
const { ACADEMICS_DEGREE_PROGRAMS_BODY } = require('./academicsDegreePrograms');
const { ACADEMICS_CATALOG_BODY } = require('./academicsCatalog');
const { ACADEMICS_CLASS_SCHEDULE_BODY } = require('./academicsClassSchedule');
const { ACADEMICS_CREDIT_FOR_PRIOR_LEARNING_BODY } = require('./academicsCreditForPriorLearning');
const { ADMISSIONS_OVERVIEW_BODY } = require('./admissionsOverview');
const { ADMISSIONS_SPEAK_WITH_COUNSELOR_BODY } = require('./admissionsSpeakWithCounselor');

function write(file, html) {
  fs.writeFileSync(path.join(ROOT, file), html);
  console.log('wrote', file);
}

write('index.html', renderPage({
  title: 'Valor Christian College — A Place Where World Changers Are Made',
  description: "At Valor Christian College, you'll be challenged academically, strengthened spiritually, and equipped to lead. Explore degree programs on campus, online, or in a cohort.",
  socialImage: IMG.social,
  bodyHtml: HOME_BODY,
}));

PAGES.forEach((p) => {
  let bodyHtml = placeholderBody(p);
  if (p.href === 'student-life.html') bodyHtml += '\n\n' + studentLifeGallery();
  if (p.href === 'about-our-legacy.html') bodyHtml = ABOUT_LEGACY_BODY;
  if (p.href === 'about-meet-our-team.html') bodyHtml = ABOUT_MEET_TEAM_BODY;
  if (p.href === 'about-why-valor.html') bodyHtml = ABOUT_WHY_VALOR_BODY;
  if (p.href === 'about-contact.html') bodyHtml = ABOUT_CONTACT_BODY;
  if (p.href === 'academics-degree-programs.html') bodyHtml = ACADEMICS_DEGREE_PROGRAMS_BODY;
  if (p.href === 'academics-academic-catalog.html') bodyHtml = ACADEMICS_CATALOG_BODY;
  if (p.href === 'academics-class-schedules.html') bodyHtml = ACADEMICS_CLASS_SCHEDULE_BODY;
  if (p.href === 'academics-credit-for-prior-learning.html') bodyHtml = ACADEMICS_CREDIT_FOR_PRIOR_LEARNING_BODY;
  if (p.href === 'admissions.html') bodyHtml = ADMISSIONS_OVERVIEW_BODY;
  if (p.href === 'admissions-speak-with-a-counselor.html') bodyHtml = ADMISSIONS_SPEAK_WITH_COUNSELOR_BODY;
  write(p.href, renderPage({
    title: `${p.title} — Valor Christian College`,
    description: p.blurb,
    socialImage: IMG.social,
    bodyHtml,
  }));
});

write('about-meet-our-president.html', renderPage({
  title: 'Dr. Scott Camp, President — Valor Christian College',
  description: "Meet Dr. Scott Camp, President of Valor Christian College and Professor of Preaching, Missions & Evangelism.",
  socialImage: IMG.social,
  bodyHtml: ABOUT_PRESIDENT_BODY,
}));

console.log(`\nDone: ${PAGES.length + 2} pages written.`);
