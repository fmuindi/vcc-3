const { ASSOCIATE_DEGREES } = require('./academicsDegreePrograms');
const {
  textField, selectField, checkboxGroupField, section,
} = require('./formFields');

// ---- Option lists (per client field map) ----------------------------------

const TYPE_OF_STUDENT = ['New / First Year Student', 'Current Valor Student', 'Transfer Student'];
const DEGREE_PROGRAMS = ['Bachelor of Arts in Christian Ministry (BA)', 'Associates of Applied Sciences (AAS)'];
// Sourced from the site's own real Associate program catalog
// (tools/academicsDegreePrograms.js) rather than retyped — this list matches
// what the field map calls "Intended Focus (BA Major/AAS Minor)" almost
// exactly (one field map entry read "Communication and Media"; kept this
// codebase's existing "Communications and Media" spelling for consistency).
const INTENDED_FOCUS_OPTIONS = ASSOCIATE_DEGREES.map((d) => d.name);
const PROGRAM_OF_INTEREST = ['On-Campus', 'Online', 'Cohort'];
const SALUTATIONS = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Col.', 'Dr.', 'Fr.', 'Rev.', 'Sr.'];
const SUFFIXES = ['None', 'Sr.', 'Jr.', 'II', 'III', 'IV', 'V', 'VI', 'Ph.D.', 'M.D.'];

// Only the 3 scholarships this site currently offers (Word Network was
// removed from tuition-aid-scholarships.html earlier in this project even
// though the source field map — describing the live legacy form — still
// lists it as a 4th option; not reintroducing it here).
const SCHOLARSHIPS = [
  { key: 'world-changer', value: 'World Changer Scholarship', blurb: 'Up to 20% of tuition', availability: 'On-Campus or Online' },
  { key: 'city-harvest', value: 'City Harvest Network Scholarship', blurb: 'Up to 25% of tuition', availability: 'On-Campus or Online' },
  { key: 'presidential', value: 'Presidential Scholarship', blurb: 'Up to $1,250 toward tuition when you refer a friend who applies and enrolls', availability: 'On-Campus only' },
];

const referenceCard = (s) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:24px 22px">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:15px;color:#100E0D;margin-bottom:10px;min-height:38px">${s.value}</div>
        <p style="margin:0 0 6px;font-size:13.5px;color:#B3121F;font-weight:700">${s.blurb}</p>
        <p style="margin:0 0 16px;font-size:12.5px;color:rgba(16,14,13,.55)">${s.availability}</p>
        <a href="tuition-aid-scholarships.html#${s.key}" style="font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:2px">View Details &amp; Terms →</a>
      </div>`;

const SCHOLARSHIP_APPLICATION_BODY = `  <section class="va-hero">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Tuition &amp; Aid</div>
    <h1 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4.6vw,52px);line-height:1.08;letter-spacing:-.03em;color:#FAF5EE">Scholarship Application</h1>
    <p data-reveal="" style="margin:0 auto;max-width:52ch;font-size:16px;line-height:1.6;color:rgba(250,245,238,.8)">Fill out the form below completely to apply for any scholarship you believe you may be eligible to receive.</p>
  </section>

  <div class="va-wrap" id="scholarship-application-form" style="max-width:900px;margin-top:-40px">
    <div class="va-page" style="margin-bottom:24px">
      <div class="va-section" style="padding-top:0;margin-top:0;border-top:none">
        <h3 class="va-section-title">Scholarships Offered</h3>
        <p class="va-section-sub">Each scholarship links to its own Terms &amp; Conditions.</p>
        <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
${SCHOLARSHIPS.map(referenceCard).join('\n')}
        </div>
      </div>
    </div>

    <div class="va-progress">
      <div class="va-progress-label"><span>Form Progress</span><span class="va-progress-percent" id="scholarship-progress-percent">0%</span></div>
      <div class="va-progress-bar"><div class="va-progress-fill" id="scholarship-progress-fill"></div></div>
    </div>

    <form id="scholarship-form" novalidate>
      <div class="va-page">
${section('Academic Interest', `      <div class="va-row va-row-2">
${selectField({ name: 'type_of_student', label: 'Type of Student', required: true, options: TYPE_OF_STUDENT })}
${selectField({ name: 'intended_degree', label: 'Intended Degree Program', required: true, options: DEGREE_PROGRAMS })}
      </div>
      <div class="va-row va-row-2">
${selectField({ name: 'intended_focus', label: 'Intended Focus (BA Major/AAS Minor)', required: true, options: INTENDED_FOCUS_OPTIONS })}
${selectField({ name: 'program_of_interest', label: 'Program of Interest', required: true, options: PROGRAM_OF_INTEREST })}
      </div>`)}
${section('Application For…', checkboxGroupField({ name: 'scholarships', label: 'Select as many for which you wish to apply', required: true, options: SCHOLARSHIPS.map((s) => s.value) }), { sub: 'See Terms & Conditions for each scholarship above.' })}
${section('Applicant Information', `      <div class="va-row va-row-5">
${selectField({ name: 'salutation', label: 'Salutation', options: SALUTATIONS })}
${textField({ name: 'first_name', label: 'First Name', required: true })}
${textField({ name: 'middle_name', label: 'Middle Name' })}
${textField({ name: 'last_name', label: 'Last Name', required: true })}
${selectField({ name: 'suffix', label: 'Suffix', options: SUFFIXES })}
      </div>
      <div class="va-row va-row-2">
${textField({ name: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '###-###-####' })}
${textField({ name: 'email', label: 'Email', type: 'email', required: true })}
      </div>
      <label class="va-checkbox-single" style="margin-bottom:16px">
        <input type="checkbox" name="consent_email" data-required="true">
        <span>I would like to receive emails.</span>
      </label>
      <label class="va-checkbox-single">
        <input type="checkbox" name="consent_sms" data-required="true">
        <span>I would like to receive Text Messages (SMS).</span>
      </label>`)}
${section('Address', `${textField({ name: 'country', label: 'Country', required: true, value: 'United States' })}
      <div class="va-row va-row-2">
${textField({ name: 'address_line1', label: 'Address Line 1', required: true })}
${textField({ name: 'address_line2', label: 'Address Line 2' })}
      </div>
      <div class="va-row va-row-3">
${textField({ name: 'zip', label: 'Zip Code', required: true })}
${textField({ name: 'city', label: 'City', required: true })}
${textField({ name: 'state', label: 'State', required: true })}
      </div>`)}
${section('Agreement', `      <label class="va-checkbox-single" style="margin-bottom:18px">
        <input type="checkbox" name="agree_scholarship_terms" data-required="true">
        <span>I have read, understand, and agree to the Terms and Conditions for each scholarship I have selected.</span>
      </label>
      <label class="va-checkbox-single">
        <input type="checkbox" name="agree_site_terms" data-required="true">
        <span>I have read, understand, and agree with the Valor Christian College <a href="#">Terms and Conditions</a> and the <a href="#">Privacy Policy</a>.</span>
      </label>
      <!-- The live form has a reCAPTCHA widget here; that needs a Google
           reCAPTCHA site key registered to this domain, which isn't
           available in this project — a honeypot field is the practical
           spam-protection stand-in for now (same pattern as the Contact form). -->
      <div aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden">
        <label>Leave this field blank<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
      </div>`)}
        <div class="va-nav" style="justify-content:flex-end">
          <button type="button" id="scholarship-submit" class="va-btn-primary">Submit Application Now</button>
        </div>
      </div>
    </form>

    <div class="va-confirmation" id="scholarship-confirmation" hidden>
      <i class="fa-solid fa-circle-check"></i>
      <h2 style="margin:0 0 14px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:28px;color:#100E0D">Application Received!</h2>
      <p style="margin:0;font-size:15px;line-height:1.6;color:rgba(16,14,13,.65);max-width:52ch;margin-left:auto;margin-right:auto">Thank you for applying. Our Financial Aid team will review your scholarship application and follow up with next steps.</p>
    </div>
  </div>`;

module.exports = { SCHOLARSHIP_APPLICATION_BODY };
