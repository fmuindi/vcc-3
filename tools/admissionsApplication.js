const { BACHELOR_DEGREES, ASSOCIATE_DEGREES, CERTIFICATE_PROGRAMS } = require('./academicsDegreePrograms');

// ---- Shared option lists (per client field map) --------------------------

const SALUTATIONS = ['Mr.', 'Ms.', 'Mrs.', 'Mr. & Mrs.', 'Dr.', 'Pastor', 'Reverend', 'Assoc. Pastor', 'Bishop', 'Apostle', 'Evangelist', 'Minister', 'Asst. Pastor', 'Youth Pastor', 'Missionary', 'Elder'];
const SUFFIXES = ['Sr.', 'Jr.', 'II', 'III', 'IV', 'V', 'VI', 'Ph.D.', 'M.D.'];
const RELATIONSHIPS = ['Aunt', 'Brother', 'Child', 'Cousin', 'Coworker', 'Daughter', 'Dependent', 'Emergency Contact', 'Employee', 'Employer', 'Family', 'Father', 'Foster Child', 'Foster Daughter', 'Foster Parent', 'Foster Son', 'Friend', 'Grandchild', 'Granddaughter', 'Grandfather', 'Grandmother', 'Grandparent', 'Grandson', 'Guardian', 'Husband', 'Mother', 'Nephew', 'Niece', 'Parent', "Parent's Sibling"];
const HOW_HEARD = ['ARK - Fall 2024', 'Breakthrough', 'Called In', 'Daystar', 'DCM', 'DCM - 2025', 'Emailed in', 'Encoura Lead', 'Recruitment Trip', 'Referral', 'Social Media', 'Summer Internship', 'Television', 'VIP Weekend', 'VIP Weekend - Fall 2025', 'VIP Weekend - Spring 2025', 'Website', 'Word of mouth'];
const CHRISTIAN_SERVICE = ['Church Volunteer', 'Music Program', 'Mission Trips', 'Prayer Group', 'Church Leadership', 'Youth Group', 'Student Council', 'Drama/Performances', 'Soul Winning'];
const CONDUCT_ITEMS = ['Smoking/Tobacco Use', 'Drinking Alcohol', 'Pornography', 'Illegal Drug Use', 'Homosexuality/Lesbianism', 'Fornication/Adultery', 'Child Abuse', 'Other Immoral Acts', 'Cult/Occult Involvement', 'None of the above'];
const PAYMENT_METHODS = ['Church', 'Financial Aid', 'Loans', 'Parents/Relatives', 'Personal Employment', 'Savings', 'Veteran Benefits', 'Other'];
const FIRST_TIME_OPTIONS = ['First Time in College', 'Transfer - Transfer into Valor', 'Returning Student', 'Graduate Returning for another Degree (AA to BA)', 'Undecided'];
const DEGREE_LEVELS = ['Intensive', 'Bachelor', 'Associate', 'Certificate', 'Audit Only'];
const CAMPUSES = ['On Campus', 'Online', 'Partner Site', 'Undecided'];
const RACE_OPTIONS = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanic or Latino', 'Native Hawaiian or Other Pacific Islander', 'White'];
const ETHNICITY_OPTIONS = ['Hispanic or Latino', 'Not Hispanic or Latino'];
const CITIZENSHIP_OPTIONS = ['U.S. Citizen or U.S. National', 'U.S. Dual Citizen', 'U.S. Permanent Resident', 'U.S. Refugee or Asylee', 'Other (Non-U.S.)'];
const DEGREE_EARNED_OPTIONS = ['AA', 'AS', 'BA', 'BS', 'MA', 'MBA', 'MS', 'JD', 'MD', 'PhD', 'Other'];

const COUNTRIES = ['United States', 'Canada', 'Mexico', 'United Kingdom', 'Ireland', 'Australia', 'New Zealand', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

// Bachelor/Associate/Certificate + campus catalog, sourced from the site's own
// real degree data (tools/academicsDegreePrograms.js) — never invented. Any
// Degree Level + Campus combination with no confirmed catalog here falls back
// to a free-text "program of interest" field instead of a fabricated list.
const PROGRAM_CATALOG = {
  'Bachelor|On Campus': BACHELOR_DEGREES.filter((d) => d.formats.includes('Campus')).map((d) => d.name),
  'Bachelor|Online': BACHELOR_DEGREES.filter((d) => d.formats.includes('Online')).map((d) => d.name),
  'Associate|On Campus': ASSOCIATE_DEGREES.map((d) => `Associate of Applied Science in ${d.name}`),
  'Certificate|On Campus': CERTIFICATE_PROGRAMS.map((name) => `${name} Certificate`),
};

// Rebuilt as a rolling window from today rather than a hardcoded year list
// (the field map flags the live version as backend-driven, not a static
// dropdown — this keeps it from ever going stale).
function upcomingSemesters(count = 9) {
  const now = new Date();
  const terms = ['Spring', 'Summer', 'Fall'];
  let idx = now.getMonth() < 4 ? 0 : now.getMonth() < 7 ? 1 : 2;
  let year = now.getFullYear();
  const list = [];
  while (list.length < count) {
    list.push(`${terms[idx]} ${year}`);
    idx += 1;
    if (idx > 2) { idx = 0; year += 1; }
  }
  return list;
}

const {
  textField, selectField, dateField, numberField, textareaField,
  radioField, checkboxGroupField, conditionalPanel, section,
} = require('./formFields');

// ---- Field-rendering helpers specific to this page (componentized per the
// field map's own "Rebuild Notes": name blocks x6 and address blocks x5
// share identical sub-fields). -----------------------------------------

const nameBlock = (prefix, { firstRequired = false, lastRequired = false } = {}) => `      <div class="va-row va-row-5">
${selectField({ name: `${prefix}_salutation`, label: 'Salutation', options: SALUTATIONS })}
${textField({ name: `${prefix}_first`, label: 'First Name', required: firstRequired })}
${textField({ name: `${prefix}_middle`, label: 'Middle Name' })}
${textField({ name: `${prefix}_last`, label: 'Last Name', required: lastRequired })}
${selectField({ name: `${prefix}_suffix`, label: 'Suffix', options: SUFFIXES })}
      </div>`;

const addressBlock = (prefix, { required = false } = {}) => `      <div class="va-row va-row-2">
${textField({ name: `${prefix}_street`, label: 'Street Address', required })}
${textField({ name: `${prefix}_line2`, label: 'Address Line 2' })}
      </div>
      <div class="va-row va-row-3">
${textField({ name: `${prefix}_city`, label: 'City', required })}
${textField({ name: `${prefix}_state`, label: 'State / Province / Region', required })}
${textField({ name: `${prefix}_zip`, label: 'Postal / Zip Code', required })}
      </div>
${selectField({ name: `${prefix}_country`, label: 'Country', required, options: COUNTRIES, selected: 'United States' })}`;

const contactPersonBlock = (prefix) => `${nameBlock(prefix)}
      <div class="va-row va-row-2">
${textField({ name: `${prefix}_email`, label: 'Email', type: 'email' })}
${textField({ name: `${prefix}_phone`, label: 'Phone', type: 'tel' })}
      </div>
${addressBlock(prefix)}
${selectField({ name: `${prefix}_relationship`, label: 'Relationship', options: RELATIONSHIPS })}`;

// ---- Page 1 — Personal ----------------------------------------------------

const STEP1 = `${section('Your Legal Name', nameBlock('legal', { firstRequired: true, lastRequired: true }))}
${section('Previous Name by Which You Have Been Known', nameBlock('prev'), { sub: 'If applicable — every field here is optional.' })}
${section('Contact Methods', `      <div class="va-row va-row-2">
${textField({ name: 'phone_mobile', label: 'Mobile Phone', type: 'tel', required: true })}
${textField({ name: 'phone_home', label: 'Home Phone', type: 'tel' })}
      </div>
      <div class="va-row va-row-2">
${textField({ name: 'email', label: 'Email', type: 'email', required: true })}
      </div>`)}
${section('Permanent Address', addressBlock('perm', { required: true }))}
${section('Personal Information', `      <div class="va-row va-row-2">
${textField({ name: 'ssn', label: 'Social Security Number', type: 'password', required: true, placeholder: 'XXX-XX-XXXX', hint: 'Stored securely — never displayed once entered.' })}
${dateField({ name: 'birthdate', label: 'Birthdate', required: true })}
      </div>
      <div class="va-row va-row-2">
${selectField({ name: 'gender', label: 'Gender', required: true, options: ['Male', 'Female'] })}
${radioField({ name: 'ohio_resident', label: 'Are you an Ohio Resident?', required: true, options: ['Yes', 'No'], defaultValue: 'No' })}
      </div>
${radioField({ name: 'marital_status', label: 'Marital Status', options: ['Single', 'Engaged', 'Married', 'Separated', 'Divorced', 'Widowed'] })}
${conditionalPanel('marital_status', 'Married', `        <div class="va-row va-row-2">
${dateField({ name: 'marriage_date', label: 'Date Married' })}
${textField({ name: 'marriage_spouse', label: "Spouse's Full Name" })}
        </div>`)}`)}
${section('Emergency Contact', contactPersonBlock('ec'), { sub: 'None of these fields are required, but please share as much as you can.' })}
${section('Parent / Guardian 1', `      <label class="va-checkbox-single" style="margin-bottom:24px">
        <input type="checkbox" id="same-as-emergency">
        <span>Same as Emergency Contact</span>
      </label>
${contactPersonBlock('g1')}`)}
${section('Parent / Guardian 2', contactPersonBlock('g2'))}
${section('Enrollment Info', `      <div class="va-row va-row-2">
${selectField({ name: 'first_college', label: 'Is Valor your first college to attend?', required: true, options: FIRST_TIME_OPTIONS })}
${selectField({ name: 'desired_semester', label: 'Desired Semester', required: true, options: upcomingSemesters() })}
      </div>
      <div class="va-row va-row-2">
${selectField({ name: 'previously_enrolled', label: 'Have you previously been enrolled at Valor Christian College?', options: ['Yes', 'No'] })}
${selectField({ name: 'degree_level', label: 'Degree Level Interest', required: true, options: DEGREE_LEVELS })}
      </div>
${selectField({ name: 'campus', label: 'Location/Campus', required: true, options: CAMPUSES })}
      <div class="va-field">
        <label class="va-label">Academic Program <span class="req">*</span></label>
        <select name="academic_program" class="va-input" data-required="true">
          <option value="">Select a degree level and campus first…</option>
        </select>
        <input type="text" name="academic_program_other" class="va-input" placeholder="Tell us the program you're interested in" style="margin-top:10px" hidden>
        <div class="va-hint" hidden>We don't have a confirmed program list for this combination yet — describe your program of interest above and an admissions counselor will follow up.</div>
        <div class="va-msg" aria-live="polite"></div>
      </div>`)}
${section('Demographic Info', `${radioField({ name: 'race', label: 'Race', required: true, options: RACE_OPTIONS })}
      <div class="va-row va-row-2">
${selectField({ name: 'ethnicity', label: 'Ethnicity', required: true, options: ETHNICITY_OPTIONS })}
${selectField({ name: 'citizenship_status', label: 'Citizenship Status', required: true, options: CITIZENSHIP_OPTIONS })}
      </div>`)}
${section('Military Status', `      <div class="va-row va-row-2">
${selectField({ name: 'active_duty', label: 'Are you currently serving on Active Duty?', options: ['Yes', 'No'] })}
${selectField({ name: 'veteran', label: 'Are you a Veteran of the U.S. Armed Forces?', options: ['Yes', 'No'] })}
      </div>
      <div class="va-row va-row-2">
${selectField({ name: 'national_guard', label: 'Are you a member of the National Guard or the U.S. Armed Forces Reserve?', options: ['Yes', 'No'] })}
${textField({ name: 'va_chapter_number', label: "Veteran's Educational Benefits Chapter Number", placeholder: 'Chapter number only' })}
      </div>`)}
${section('Referral', selectField({ name: 'how_heard', label: 'How did you hear about Valor Christian College?', required: true, options: HOW_HEARD }))}`;

// ---- Page 2 — Church -------------------------------------------------------

const STEP2 = `${section('Spiritual Health and Christian Activity', `${checkboxGroupField({ name: 'christian_service', label: 'Christian Service', options: CHRISTIAN_SERVICE })}
      <div class="va-row va-row-2">
${dateField({ name: 'born_again_date', label: 'When were you born again?' })}
${radioField({ name: 'baptism_holy_spirit', label: 'Have you received the baptism of the Holy Spirit (Acts 2:4)?', options: ['Yes', 'No'] })}
      </div>
${conditionalPanel('baptism_holy_spirit', 'Yes', dateField({ name: 'baptism_date', label: 'If so, then what date?' }))}
${radioField({ name: 'lived_christian_life', label: 'Have you lived a Christian life since conversion?', options: ['Yes', 'No'] })}
${conditionalPanel('lived_christian_life', 'No', textareaField({ name: 'lived_christian_life_explain', label: 'If no, please explain' }))}`)}
${section('Church Information', `${addressBlock('church')}
      <div class="va-row va-row-2">
${textField({ name: 'pastor_name', label: "Senior Pastor's Name" })}
${textField({ name: 'pastor_email', label: "Pastor's Email Address", type: 'email' })}
      </div>
      <div class="va-row va-row-2">
${textField({ name: 'church_name', label: 'Church Name' })}
${textField({ name: 'church_email', label: 'Church Email Address', type: 'email' })}
      </div>
      <div class="va-row va-row-2">
${textField({ name: 'church_phone', label: 'Church Phone', type: 'tel' })}
${selectField({ name: 'church_member', label: 'Are you a member of this church?', options: ['Yes', 'No'] })}
      </div>
${conditionalPanel('church_member', 'Yes', numberField({ name: 'church_member_years', label: 'If you are a member, how many years have you been a member of your church?', value: 0 }))}`)}`;

// ---- Page 3 — Education -----------------------------------------------------

const STEP3 = `${section('Background', `${checkboxGroupField({ name: 'conduct_items', label: 'Please indicate if you have been involved in any of the following activities in the past two years (only)', required: true, options: CONDUCT_ITEMS })}
      <div class="va-row va-row-2">
${radioField({ name: 'felony_convicted', label: 'Have you been convicted of a felony?', required: true, options: ['Yes', 'No'] })}
${radioField({ name: 'felony_minor', label: 'Were you convicted of a felony as a minor?', required: true, options: ['Yes', 'No'] })}
      </div>
${conditionalPanel('felony_convicted', 'Yes', dateField({ name: 'felony_date', label: 'Felony Conviction Date' }))}
${conditionalPanel('felony_minor', 'Yes', `${dateField({ name: 'felony_minor_date', label: 'Felony Conviction Date as Minor' })}
${textareaField({ name: 'felony_minor_explain', label: 'Please explain' })}`)}`)}
${section('High School Information', `${textField({ name: 'hs_name', label: 'High School Name', required: true, placeholder: 'Start typing your high school name' })}
      <label class="va-checkbox-single" style="margin:-10px 0 22px">
        <input type="checkbox" name="hs_not_listed"><span>My school is not listed</span>
      </label>
${radioField({ name: 'hs_institution_type', label: 'Institution Type', options: ['Public', 'Private', 'Home'], defaultValue: 'Public' })}
      <div class="va-row va-row-2">
${selectField({ name: 'hs_credential', label: 'Academic Credential Earned', required: true, options: ['GED', 'High School Diploma'] })}
      </div>
      <div class="va-row va-row-2">
${dateField({ name: 'hs_begin_date', label: 'Beginning Date of Attendance' })}
${dateField({ name: 'hs_grad_date', label: 'Date of Expected Graduation' })}
      </div>`)}
${section('College History', `${radioField({ name: 'attended_college', label: 'Have you attended College previously?', required: true, options: ['Yes, I attended College', 'No, I have not attended College'], defaultValue: 'No, I have not attended College' })}
${conditionalPanel('attended_college', 'Yes, I attended College', `${numberField({ name: 'colleges_count', label: 'How many Colleges have you attended?', required: true, value: 1 })}
        <div id="college-repeater-list"></div>
        <button type="button" id="college-repeater-add" class="va-add-btn">+ Add College / University</button>`)}`)}
${section('Finances', `${checkboxGroupField({ name: 'payment_methods', label: 'How do you plan to pay for your education at Valor?', required: true, options: PAYMENT_METHODS })}
      <p class="va-hint" style="margin-top:-6px">An admissions counselor will follow up about your plans to fulfill your financial commitment to Valor for the next four years. Valor currently qualifies for federal financial aid and loan programs and offers limited scholarships; money from outside sources is accepted.</p>`)}
${section('Agreement &amp; E-Sign', `      <div class="va-static-copy">
        <p>By submitting this application, you waive confidentiality regarding the information provided and certify that all information given is true and accurate to the best of your knowledge.</p>
        <p>Submission of this application does not guarantee admission to Valor Christian College. The Admissions Committee reserves the right to make all admissions decisions and owes no explanation for any decision made.</p>
        <p>You acknowledge financial responsibility for all tuition, fees, and related costs associated with your enrollment, and you authorize Valor Christian College to seek emergency medical treatment on your behalf if you are unable to consent and cannot be reached in an emergency.</p>
        <p>Entering your initials below constitutes your electronic signature and certifies that you have read, understand, and agree to the above.</p>
      </div>
      <label class="va-checkbox-single" style="margin-bottom:26px">
        <input type="checkbox" name="agree_terms" data-required="true">
        <span>I have read, understand, and agree with the Valor Christian College <a href="#">Terms and Conditions</a> and the <a href="#">Privacy Policy</a>.</span>
      </label>
      <div class="va-fee-display">
        <span style="font-size:12.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:rgba(16,14,13,.6)">Application Fee</span>
        <span class="amount">$50</span>
      </div>
      <div class="va-row va-row-2">
${textField({ name: 'initials', label: 'Your Initials', required: true, placeholder: 'Enter your initials' })}
        <div class="va-field">
          <label class="va-label">Today's Date</label>
          <input type="text" class="va-input" id="todays-date-display" readonly>
        </div>
      </div>`)}`;

// Markup for one repeated College/University row, cloned by applicationWizard()
// at runtime. Not a <template> element: this site's runtime empties out
// <template> content entirely (found while building this page) — embedding
// it as JSON text instead and inserting it via innerHTML sidesteps that.
const COLLEGE_ROW_HTML = `<div class="va-repeater-item">
  <button type="button" class="va-repeater-remove" aria-label="Remove this entry">✕</button>
${textField({ name: 'college_name', label: 'Name of Current College/University' })}
  <label class="va-checkbox-single" style="margin-bottom:20px"><input type="checkbox" name="college_not_listed"><span>My college is not listed</span></label>
  <div class="va-row va-row-2">
${selectField({ name: 'college_degree', label: 'Degree Earned', options: DEGREE_EARNED_OPTIONS })}
  </div>
  <div class="va-row va-row-3">
${dateField({ name: 'college_begin', label: 'Beginning Date of Attendance' })}
${dateField({ name: 'college_end', label: 'Ending Date of Attendance' })}
${dateField({ name: 'college_grad', label: 'Date of Graduation' })}
  </div>
</div>`;

const ADMISSIONS_APPLICATION_BODY = `  <section class="va-hero">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Admissions</div>
    <h1 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4.6vw,52px);line-height:1.08;letter-spacing:-.03em;color:#FAF5EE">Valor Christian College Application</h1>
    <p data-reveal="" style="margin:0 auto;max-width:52ch;font-size:16px;line-height:1.6;color:rgba(250,245,238,.8)">Welcome, future World Changer! We are so excited that you are here. Have your email and Social Security Number ready before you begin.</p>
    <div data-reveal="" class="va-hero-motto">SPIRITUS &middot; FIDEI &middot; VIRTUS</div>
  </section>

  <div class="va-wrap" id="application-wizard">
    <div class="va-tracker">
      <div class="va-tracker-step is-active">
        <div class="va-tracker-num">1</div>
        <div class="va-tracker-label">Personal</div>
      </div>
      <div class="va-tracker-line"></div>
      <div class="va-tracker-step">
        <div class="va-tracker-num">2</div>
        <div class="va-tracker-label">Church</div>
      </div>
      <div class="va-tracker-line"></div>
      <div class="va-tracker-step">
        <div class="va-tracker-num">3</div>
        <div class="va-tracker-label">Education</div>
      </div>
    </div>

    <form id="application-form" novalidate>
      <div class="va-page">
${STEP1}
      </div>
      <div class="va-page" hidden>
${STEP2}
      </div>
      <div class="va-page" hidden>
${STEP3}
      </div>
      <div class="va-nav">
        <button type="button" id="wizard-back" class="va-btn-secondary" style="visibility:hidden">Back</button>
        <button type="button" id="wizard-next" class="va-btn-primary">Next</button>
        <button type="button" id="wizard-submit" class="va-btn-primary" hidden>Submit Application</button>
      </div>
    </form>

    <div class="va-confirmation" id="application-confirmation" hidden>
      <i class="fa-solid fa-circle-check"></i>
      <h2 style="margin:0 0 14px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:28px;color:#100E0D">Application Received!</h2>
      <p style="margin:0;font-size:15px;line-height:1.6;color:rgba(16,14,13,.65);max-width:52ch;margin-left:auto;margin-right:auto">Thank you for applying to Valor Christian College. A Student Ambassador will follow up with you within 24 hours to walk through the $50 application fee, e-signature, and next steps.</p>
    </div>
  </div>

  <script type="application/json" id="va-program-catalog">${JSON.stringify(PROGRAM_CATALOG)}</script>
  <script type="application/json" id="va-college-row-template">${JSON.stringify(COLLEGE_ROW_HTML)}</script>`;

module.exports = { ADMISSIONS_APPLICATION_BODY };
