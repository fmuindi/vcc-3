// Shared form-field renderers, used by both admissionsApplication.js and
// scholarshipApplication.js. None of these rely on the native `required`
// attribute or checkValidity()/reportValidity() — this site's runtime
// silently strips required/checked/selected/hidden from elements shortly
// after load (found while building the Contact form and Admissions
// Application), so every required/default check is done by hand at runtime
// via data-required="true"/data-default="true" markers instead.

const fieldWrap = (label, required, inputHtml, hint) => `      <div class="va-field">
        ${label ? `<label class="va-label">${label}${required ? ' <span class="req">*</span>' : ''}</label>` : ''}
        ${inputHtml}
        ${hint ? `<div class="va-hint">${hint}</div>` : ''}
        <div class="va-msg" aria-live="polite"></div>
      </div>`;

const textField = ({ name, label, type = 'text', required = false, placeholder = '', value, hint }) =>
  fieldWrap(label, required, `<input type="${type}" name="${name}" class="va-input" ${required ? 'data-required="true"' : ''} placeholder="${placeholder}"${value != null ? ` value="${value}"` : ''}>`, hint);

const selectField = ({ name, label, required = false, options, selected = '', placeholder = 'Select…', hint }) => {
  const opts = options.map((o) => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return `<option value="${val}"${val === selected ? ' selected data-default="true"' : ''}>${lab}</option>`;
  }).join('');
  return fieldWrap(label, required, `<select name="${name}" class="va-input" ${required ? 'data-required="true"' : ''}><option value="">${placeholder}</option>${opts}</select>`, hint);
};

const dateField = ({ name, label, required = false, hint }) =>
  fieldWrap(label, required, `<input type="date" name="${name}" class="va-input" ${required ? 'data-required="true"' : ''}>`, hint);

const numberField = ({ name, label, required = false, value }) =>
  fieldWrap(label, required, `<input type="number" name="${name}" class="va-input" min="0" ${value != null ? `value="${value}"` : ''} ${required ? 'data-required="true"' : ''}>`);

const textareaField = ({ name, label, required = false }) =>
  fieldWrap(label, required, `<textarea name="${name}" class="va-input" rows="3" ${required ? 'data-required="true"' : ''}></textarea>`);

const radioField = ({ name, label, required = false, options, defaultValue, hint }) => {
  const pills = options.map((o) => `<label class="va-radio-pill"><input type="radio" name="${name}" value="${o}" ${required ? 'data-required="true"' : ''} ${o === defaultValue ? 'checked data-default="true"' : ''}><span>${o}</span></label>`).join('');
  return fieldWrap(label, required, `<div class="va-radio-row">${pills}</div>`, hint);
};

const checkboxGroupField = ({ name, label, required = false, options, hint }) => {
  const pills = options.map((o) => `<label class="va-checkbox-pill"><input type="checkbox" name="${name}" value="${o}" ${required ? 'data-required="true"' : ''}><span>${o}</span></label>`).join('');
  return fieldWrap(label, required, `<div class="va-checkbox-grid">${pills}</div>`, hint);
};

const conditionalPanel = (showIfName, showIfValue, innerHtml, { id } = {}) =>
  `      <div class="va-conditional" data-show-if-name="${showIfName}" data-show-if-value="${showIfValue}" hidden${id ? ` id="${id}"` : ''}>
${innerHtml}
      </div>`;

const section = (title, bodyHtml, { sub } = {}) => `    <div class="va-section">
      <h3 class="va-section-title">${title}</h3>
${sub ? `      <p class="va-section-sub">${sub}</p>\n` : ''}${bodyHtml}
    </div>`;

module.exports = {
  fieldWrap, textField, selectField, dateField, numberField, textareaField,
  radioField, checkboxGroupField, conditionalPanel, section,
};
