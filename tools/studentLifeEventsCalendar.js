const { IMG } = require('./build-site');

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

const STUDENT_LIFE_EVENTS_CALENDAR_BODY = `  <section id="calendar-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Student Life &nbsp;&middot;&nbsp; Events &amp; Calendar</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Mark Your Calendar.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Key academic dates for the 2026–2027 school year — registration windows, breaks, withdrawal deadlines, and graduation.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[4]}" alt="Valor Christian College students on campus" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="academic-calendar" style="max-width:1000px;margin:0 auto;padding:80px 32px 120px">
    <div style="max-width:640px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">2026–2027 Academic Calendar</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Dates apply to both on-campus and online students unless noted otherwise. Confirm exact dates with the Registrar before making travel or work plans.</p>
    </div>
    <div class="acc-group" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(16,14,13,.06)">
${semesterCard('Fall 2026', FALL_2026)}
${semesterCard('Spring 2027', SPRING_2027)}
${semesterCard('Summer 2027', SUMMER_2027)}
    </div>
  </section>`;

module.exports = { STUDENT_LIFE_EVENTS_CALENDAR_BODY };
