const { IMG } = require('./build-site');

const DEAN_OF_STUDENTS_EMAIL = 'deanofstudents@valorcollege.edu';

// Source: valorcollege.edu/calendar (fetched 2026-09-21). Full Fall
// 2026–Summer 2027 academic calendar, used as-is per the client's own
// source-content note ("usable as-is for the new site's calendar page").
const FALL_2026 = [
  ['Sep 25, 2026', 'Online Last Day to Withdraw/Passing'],
  ['Oct 2, 2026', 'Online Graduation Application Deadline'],
  ['Oct 11, 2026', 'Last Day of Online Classes'],
  ['Oct 12, 2026', 'Classes Resume'],
  ['Oct 12, 2026', 'Online Session Two Begins'],
  ['Oct 12, 2026', 'Session Two Late Registration'],
  ['Oct 13, 2026', 'Online Final Grades Due'],
  ['Oct 15–19, 2026', 'Fall Break'],
  ['Oct 16, 2026', 'Last Day to Add/Drop (Online)'],
  ['Oct 19, 2026', 'Last Day to Withdraw without Recording (Online)'],
  ['Oct 23, 2026', 'Graduation Application Deadline'],
  ['Oct 30, 2026', 'Last Day to Withdraw'],
  ['Nov 20, 2026', 'Last Day to Withdraw While Passing (Online)'],
  ['Nov 26–30, 2026', 'Thanksgiving Break'],
  ['Dec 6, 2026', 'Last Day of Fall Semester'],
  ['Dec 6, 2026', 'Residence Halls Close'],
  ['Dec 6, 2026', 'Last Day of Online Classes'],
  ['Dec 8, 2026', 'Grades Due'],
  ['Dec 8, 2026', 'Final Grades Due (Online)'],
];
const SPRING_2027 = [
  ['Jan 5, 2027', 'Residence Halls Open for Returning Students'],
  ['Jan 6, 2027', 'Final Follow Up with Returning Students'],
  ['Jan 7, 2027', 'Residence Halls Open for New Students'],
  ['Jan 8, 2027', 'New Student Orientation and Registration'],
  ['Jan 11, 2027', 'Spring 2027 Semester Begins'],
  ['Jan 11, 2027', 'Late Registration'],
  ['Jan 15, 2027', 'Last Day to Add/Drop'],
  ['Jan 18, 2027', 'Martin Luther King Holiday'],
  ['Jan 20, 2027', 'Last Day to Withdraw Online'],
  ['Feb 15, 2027', "President's Day"],
  ['Feb 21, 2027', 'Last Day to Withdraw w/ Passing (Online)'],
  ['Mar 1–7, 2027', 'Spring Break'],
  ['Mar 7, 2027', 'Last Day of Online Classes'],
  ['Mar 8, 2027', 'Classes Resume'],
  ['Mar 8, 2027', 'Online Spring Second Session Begins'],
  ['Mar 8, 2027', 'Online Late Registration'],
  ['Mar 9, 2027', 'Online Final Grades Due'],
  ['Mar 12, 2027', 'Last Day to Add/Drop'],
  ['Mar 17, 2027', 'Last Day to Withdraw without Recording'],
  ['Mar 26, 2027', 'Last Day to Officially Withdraw'],
  ['Mar 26, 2027', 'Good Friday'],
  ['Mar 29, 2027', 'Campus Classes Resume'],
  ['Apr 16, 2027', 'Last Day to Withdraw while Passing'],
  ['Apr 30, 2027', 'Last Day of Spring Semester'],
  ['May 2, 2027', 'Last Day of Online Classes'],
  ['May 2, 2027', 'Spring 2027 Graduation Rehearsal, 1:00 PM EST'],
  ['May 2, 2027', 'Spring 2027 Graduation, 7:00 PM EST'],
  ['May 2, 2027', 'Residence Halls Close'],
  ['May 4, 2027', 'Final Grades Due to Registrar'],
];
const SUMMER_2027 = [
  ['May 17, 2027', 'Summer 2027 Session Begins'],
  ['May 17, 2027', 'Late Registration (Last Day to Enroll)'],
  ['May 21, 2027', 'Last Day to Add/Drop (Enrolled Students Only)'],
  ['May 26, 2027', 'Last Day to Withdraw without Recording'],
  ['Jun 27, 2027', 'Last Day to Withdraw while Passing'],
  ['Jul 11, 2027', 'Last Day of Online Classes'],
  ['Jul 13, 2027', 'Final Grades Due to Registrar'],
];

const dateRow = ([date, event]) => `          <div style="display:flex;justify-content:space-between;gap:24px;padding:13px 0;border-bottom:1px solid rgba(16,14,13,.08);font-size:14.5px">
            <span style="color:rgba(16,14,13,.6);flex:none;font-weight:700">${date}</span><span style="color:#100E0D;text-align:right">${event}</span>
          </div>`;

const semesterCard = (label, dates) => `      <div id="${label.toLowerCase().replace(/\s+/g, '-')}" class="acc-row" data-reveal="" style="scroll-margin-top:130px">
        <button type="button" class="acc-header" data-view-all="${label}-dates" data-more-label="${label}" data-less-label="${label}">
          <div style="display:flex;align-items:center;gap:16px;min-width:0">
            <div style="flex:none;width:40px;height:40px;border-radius:11px;background:rgba(224,27,46,.08);display:grid;place-items:center"><i class="fa-solid fa-calendar-days" style="color:#E01B2E;font-size:16px"></i></div>
            <span data-swap-label="" class="acc-title">${label} <span style="font-weight:600;color:rgba(16,14,13,.45)">(${dates.length} dates)</span></span>
          </div>
          <span class="acc-toggle-btn"><i class="fa-solid fa-chevron-down" style="font-size:13px"></i></span>
        </button>
        <div data-more="${label}-dates">
          <div class="acc-panel-inner">
${dates.map(dateRow).join('\n')}
          </div>
        </div>
      </div>`;

// Real weekly Chapel schedule (client-supplied outline, "Student Events &
// Calendar — Final Web Outline"). All 5 land on Thursdays 7 days apart
// except the Oct 8 -> Oct 22 gap, which lines up with the confirmed real
// Fall Break (Oct 15-19) above -- not a fabricated schedule.
const EVENTS = [
  { month: 'SEP', day: '24', date: 'Sep 24, 2026', dow: 'THU', time: '10:00 AM', title: 'Valor Chapel', detail: 'Featuring Evans & Ashley Kariuki', location: 'Valor Chapel', category: 'Chapel', img: IMG.studentLifeGallery[1] },
  { month: 'OCT', day: '1', date: 'Oct 1, 2026', dow: 'THU', time: '10:00 AM', title: 'Valor Chapel', detail: 'Featuring Davi Edwards', location: 'Valor Chapel', category: 'Chapel', img: IMG.studentLifeGallery[1] },
  { month: 'OCT', day: '8', date: 'Oct 8, 2026', dow: 'THU', time: '10:00 AM', title: 'Alumni Chapel', detail: 'Valor Chapel', location: 'Valor Chapel', category: 'Chapel', img: IMG.studentLifeGallery[10] },
  { month: 'OCT', day: '22', date: 'Oct 22, 2026', dow: 'THU', time: '10:00 AM', title: 'Valor Chapel', detail: 'Featuring Debra George', location: 'Valor Chapel', category: 'Chapel', img: IMG.studentLifeGallery[1] },
  { month: 'OCT', day: '29', date: 'Oct 29, 2026', dow: 'THU', time: '10:00 AM', title: 'Valor Chapel', detail: 'Featuring Joel Bobbitt', location: 'Valor Chapel', category: 'Chapel', img: IMG.studentLifeGallery[1] },
];

const CATEGORIES = ['All', 'Chapel', 'Student Life', 'Academics', 'Outreach', 'Special Events'];

const eventCard = (e) => `        <a href="mailto:${DEAN_OF_STUDENTS_EMAIL}?subject=${encodeURIComponent(`Question about ${e.title} (${e.date})`)}" class="event-card" data-reveal="">
          <div class="event-card-img">
            <img src="${e.img}" alt="${e.title} at Valor Christian College" loading="lazy" decoding="async">
            <div class="event-card-date"><span class="mon">${e.month}</span><span class="day">${e.day}</span></div>
          </div>
          <div class="event-card-body">
            <div class="event-card-title">${e.title}</div>
            <div class="event-card-detail">${e.detail}</div>
            <div class="event-card-meta">
              <span><i class="fa-regular fa-clock" style="width:14px"></i> ${e.time}</span>
              <span><i class="fa-solid fa-location-dot" style="width:14px"></i> ${e.location}</span>
            </div>
          </div>
        </a>`;

const eventListRow = (e) => `          <div class="events-list-row" data-category="${e.category}" data-search="${(`${e.title} ${e.detail} ${e.location}`).toLowerCase()}">
            <div class="events-list-date"><span class="dow">${e.dow}</span><span class="dom">${e.month} ${e.day}</span></div>
            <div class="events-list-time">${e.time}</div>
            <div class="events-list-info">
              <div class="events-list-title">${e.title}</div>
              <div class="events-list-loc">${e.detail} &middot; ${e.location}</div>
            </div>
            <a class="events-list-link" href="mailto:${DEAN_OF_STUDENTS_EMAIL}?subject=${encodeURIComponent(`Question about ${e.title} (${e.date})`)}">View Details →</a>
          </div>`;

const filterPill = (c) => `        <button type="button" class="events-filter-pill${c === 'All' ? ' is-active' : ''}" data-category="${c}">${c.toUpperCase()}</button>`;

const KEY_DATES = [
  { label: 'Fall Semester Begins', value: 'August 2026 (exact date TBD)' },
  { label: 'Online Session One Ends', value: 'October 11, 2026' },
  { label: 'Online Session Two Begins', value: 'October 12, 2026' },
  { label: 'Fall Semester Ends', value: 'December 6, 2026' },
];

const keyDateItem = (d) => `        <div class="key-date-item" data-reveal="">
          <div class="key-date-icon"><i class="fa-solid fa-calendar-day"></i></div>
          <div>
            <div class="key-date-label">${d.label}</div>
            <div class="key-date-value">${d.value}</div>
          </div>
        </div>`;

const STUDENT_LIFE_EVENTS_CALENDAR_BODY = `  <section id="calendar-hero" style="position:relative;min-height:56vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.studentLifeGallery[1]}" alt="Worship gathering at Valor Christian College" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.5) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Student Life</div>
      <h1 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,68px);line-height:1.03;letter-spacing:-.03em;text-wrap:balance">What's Happening at Valor?</h1>
      <p data-reveal="" style="margin:0 auto;max-width:58ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.85)">Stay connected to campus life with upcoming student events, activities, chapel gatherings, important dates, and opportunities to be part of the Valor community.</p>
    </div>
  </section>

  <section id="featured-event" style="max-width:1320px;margin:0 auto;padding:80px 32px 0">
    <div style="text-align:center;max-width:640px;margin:0 auto 32px">
      <div data-reveal="" style="font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E">Featured Event</div>
    </div>
    <div data-reveal="" style="border-radius:24px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.18);background:#100E0D;min-height:260px;display:flex;align-items:center;justify-content:center">
      <img src="${IMG.vipWeekendGraphic}" alt="VIP Weekend 2027 at Valor Christian College" loading="eager" decoding="async" style="display:block;width:100%;max-height:640px;object-fit:contain">
    </div>
    <div data-reveal="" style="max-width:720px;margin:36px auto 0;text-align:center">
      <h2 style="margin:0 0 10px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.4vw,40px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">VIP Weekend 2027</h2>
      <div style="font-size:14px;font-weight:700;color:rgba(16,14,13,.6);margin-bottom:16px">April 2027 &middot; exact dates to be announced</div>
      <p style="margin:0 auto 24px;font-size:15.5px;line-height:1.6;color:rgba(16,14,13,.65);max-width:52ch">A weekend designed to experience Valor, connect with our community, and see what life as a World Changer could look like.</p>
      <a href="mailto:admissions@valorcollege.edu?subject=${encodeURIComponent('VIP Weekend 2027')}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 10px 30px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Learn More / Register <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </section>

  <section id="coming-up" style="max-width:1320px;margin:0 auto;padding:90px 32px 0">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:32px;flex-wrap:wrap">
      <div>
        <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Coming Up</div>
        <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Don't Miss What's Next.</h2>
      </div>
      <a data-reveal="" href="#events-finder" style="font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#E01B2E;white-space:nowrap">View All Events →</a>
    </div>
    <div class="reel-scroller" data-scroller>
      <button type="button" class="reel-scroll-btn reel-scroll-prev" data-scroll-prev aria-label="Scroll events left"><i class="fa-solid fa-chevron-left"></i></button>
      <div class="reel-track" data-scroll-track>
${EVENTS.map(eventCard).join('\n')}
      </div>
      <button type="button" class="reel-scroll-btn reel-scroll-next" data-scroll-next aria-label="Scroll events right"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  </section>

  <section id="events-finder" class="about-grid" style="max-width:1320px;margin:0 auto;padding:90px 32px 0;display:grid;grid-template-columns:1.6fr .9fr;gap:44px;align-items:start;scroll-margin-top:120px">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Find an Event</div>
      <h2 data-reveal="" style="margin:0 0 28px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Find an Event.</h2>
      <div class="events-search-row" data-reveal="">
        <input type="text" class="events-search-input" id="events-search-input" placeholder="Search events…">
        <div class="events-view-toggle">
          <button type="button" class="events-view-btn is-active" id="events-view-list"><i class="fa-solid fa-list"></i> List</button>
          <button type="button" class="events-view-btn" id="events-view-month"><i class="fa-solid fa-calendar"></i> Month</button>
        </div>
      </div>
      <div class="events-filter-row" data-reveal="">
${CATEGORIES.map(filterPill).join('\n')}
      </div>
      <div id="events-list-panel">
${EVENTS.map(eventListRow).join('\n')}
        <div class="events-empty" id="events-empty-state">No events in this category right now — check back soon, or browse all upcoming events above.</div>
      </div>
      <div id="events-month-placeholder" class="events-empty" style="border:1.5px dashed rgba(16,14,13,.15);border-radius:16px">Month view is coming soon. Browse the list above in the meantime.</div>
    </div>

    <div>
      <div style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:20px;padding:28px 26px;margin-bottom:24px">
        <div data-reveal="" style="font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#E01B2E;margin-bottom:12px">Important Academic Dates</div>
        <h3 data-reveal="" style="margin:0 0 8px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;letter-spacing:-.02em;color:#100E0D">Key Dates to Know.</h3>
        <div style="margin-top:16px">
${KEY_DATES.map(keyDateItem).join('\n')}
        </div>
        <a data-reveal="" href="#full-academic-calendar" style="display:block;text-align:center;margin-top:20px;border:1.5px solid rgba(16,14,13,.18);color:#100E0D;font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:14px 20px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">View Full Academic Calendar →</a>
      </div>
      <a data-reveal="" href="student-life-get-involved.html" style="position:relative;display:block;border-radius:20px;overflow:hidden;min-height:220px;color:#fff">
        <img src="${IMG.studentLifeGallery[9]}" alt="Student life at Valor Christian College" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.92) 15%,rgba(16,14,13,.25) 70%)"></div>
        <div style="position:relative;padding:24px">
          <div style="font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:10px">See Student Life in Action</div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;margin-bottom:18px">Experience Valor.</div>
          <span style="display:inline-flex;align-items:center;gap:10px;background:rgba(250,245,238,.95);color:#100E0D;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:12px 18px;border-radius:999px"><i class="fa-solid fa-play" style="color:#E01B2E"></i> Explore Student Life</span>
        </div>
      </a>
    </div>
  </section>

  <section style="max-width:1320px;margin:100px auto 0;padding:0 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;background:#FAF5EE;border-radius:24px;padding:36px 40px">
    <div style="display:flex;align-items:center;gap:20px">
      <div style="flex:none;width:52px;height:52px;border-radius:50%;background:rgba(224,27,46,.1);display:grid;place-items:center"><i class="fa-solid fa-comment-dots" style="color:#E01B2E;font-size:20px"></i></div>
      <div>
        <div style="font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#E01B2E;margin-bottom:6px">Have a Question?</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#100E0D;margin-bottom:4px">Can't Find What You're Looking For?</div>
        <p style="margin:0;font-size:14px;line-height:1.5;color:rgba(16,14,13,.62);max-width:52ch">We're here to help. Reach out to Student Life and we'll help you find the information or event you need.</p>
      </div>
    </div>
    <a href="mailto:${DEAN_OF_STUDENTS_EMAIL}" style="flex:none;display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact Student Life <i class="fa-solid fa-arrow-right"></i></a>
  </section>

  <section id="full-academic-calendar" style="max-width:1000px;margin:0 auto;padding:120px 32px 120px;scroll-margin-top:130px">
    <div style="max-width:640px;margin:0 auto 44px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Important Dates</div>
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Full 2026–2027 Academic Calendar</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Dates apply to both on-campus and online students unless noted otherwise. Confirm exact dates with the Registrar before making travel or work plans.</p>
    </div>
    <div class="acc-group" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(16,14,13,.06)">
${semesterCard('Fall 2026', FALL_2026)}
${semesterCard('Spring 2027', SPRING_2027)}
${semesterCard('Summer 2027', SUMMER_2027)}
    </div>
  </section>`;

module.exports = { STUDENT_LIFE_EVENTS_CALENDAR_BODY };
