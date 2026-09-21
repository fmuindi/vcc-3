const DEAN_EMAIL = 'deanofstudents@valorcollege.edu';

// Source: valorcollege.edu (fetched 2026-09-21). The live page is a title
// plus one download link, nothing else — mirrored here rather than
// inventing a summarized version, per the client's own source-content note.
// TODO: the live PDF still lives on valorcollege.edu, not Directus — swap
// this for a Directus-hosted link once the client uploads the current
// edition (same migration pattern used for the site's other PDFs).
const HANDBOOK_PDF = 'https://valorcollege.edu/root/pdf/information/2026/2026-2027_Student-Handbook.pdf';

const STUDENT_LIFE_HANDBOOK_BODY = `  <section id="handbook-hero" style="max-width:800px;margin:0 auto;padding:180px 32px 140px;text-align:center">
    <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Student Life &nbsp;&middot;&nbsp; Student Handbook</div>
    <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">2026–2027 Student Handbook.</h1>
    <p data-reveal="" style="margin:0 auto 40px;max-width:52ch;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68)">Campus policies, community expectations, housing rules, and everything else every Valor student should know.</p>
    <a data-reveal="" href="${HANDBOOK_PDF}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:12px;background:#E01B2E;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 40px;border-radius:999px;box-shadow:0 10px 30px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff"><i class="fa-solid fa-file-pdf"></i> Download the Student Handbook (PDF)</a>
    <p data-reveal="" style="margin:32px 0 0;font-size:13.5px;color:rgba(16,14,13,.5)">Questions about a policy in the handbook? <a href="mailto:${DEAN_EMAIL}" style="color:#B3121F;font-weight:700">Contact the Dean of Students</a>.</p>
  </section>`;

module.exports = { STUDENT_LIFE_HANDBOOK_BODY };
