export default function ContactSection({
  formValues,
  formErrors,
  isSubmitting,
  formSuccess,
  formServerError,
  onInputChange,
  onBlur,
  onSubmit,
}) {
  return (
    <section className="contact section" id="ContactMe">
      <h2>Get In Touch</h2>
      <hr />
      <p className="section-subtitle">Have a project in mind? Let&apos;s talk about it.</p>
      <div className="contact-wrapper">
        <form className="contact-form glass-card" id="contactForm" onSubmit={onSubmit} noValidate>
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <label htmlFor="contactCompany">Company</label>
            <input
              type="text"
              id="contactCompany"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              value={formValues.company}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactName">Name</label>
            <input
              type="text"
              id="contactName"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
              value={formValues.name}
              onChange={onInputChange}
              onBlur={onBlur}
            />
            <span className="form-error" aria-live="polite">{formErrors.name}</span>
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
              value={formValues.email}
              onChange={onInputChange}
              onBlur={onBlur}
            />
            <span className="form-error" aria-live="polite">{formErrors.email}</span>
          </div>
          <div className="form-group">
            <label htmlFor="contactMessage">Message</label>
            <textarea
              id="contactMessage"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              value={formValues.message}
              onChange={onInputChange}
              onBlur={onBlur}
            />
            <span className="form-error" aria-live="polite">{formErrors.message}</span>
          </div>
          <button
            type="submit"
            className={`button-cta button-cta--primary ${isSubmitting ? "loading" : ""}`}
            id="contactSubmit"
            disabled={isSubmitting}
          >
            <span className="btn-text">Send Message</span>
            <span className="btn-loading" aria-hidden="true">Sending...</span>
          </button>
          {formServerError ? (
            <div className="form-error" role="status" aria-live="polite">{formServerError}</div>
          ) : null}
          {formSuccess ? <div className="form-success">✓ Message sent successfully!</div> : null}
        </form>
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-icon">📧</span>
            <div>
              <h3>Email</h3>
              <a href="mailto:vick@victornwafor.me">vick@victornwafor.me</a>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>Abakaliki, Nigeria</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">🟢</span>
            <div>
              <h3>Availability</h3>
              <p>Open to freelance &amp; full-time roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
