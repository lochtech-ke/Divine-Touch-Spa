"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>
            Divine Touch
            <span>Therapy Spa</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/book" className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We would love to hear from you. Reach out for bookings, inquiries, or just to say hello.</p>
        </div>
      </header>

      <main className="container" style={{ padding: "var(--space-lg) var(--space-sm)" }}>
        <div className={styles.grid}>
          {/* Contact Info */}
          <div className={styles.info}>
            <h2>Visit Us</h2>

            {[
              { icon: "📍", label: "Location", value: "Westlands Square, 4th Floor\nNairobi, Kenya" },
              { icon: "📞", label: "Phone", value: "+254 700 000 000" },
              { icon: "📧", label: "Email", value: "hello@divinetouchspa.co.ke" },
              { icon: "⏰", label: "Hours", value: "Mon–Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 6:00 PM" },
            ].map((item, i) => (
              <div key={i} className={styles.infoItem}>
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <p className={styles.infoValue} style={{ whiteSpace: "pre-line" }}>{item.value}</p>
                </div>
              </div>
            ))}

            <div className={styles.socials}>
              <h3>Follow Us</h3>
              <div className={styles.socialLinks}>
                <a href="#" id="instagram-link" className={styles.socialLink}>📸 Instagram</a>
                <a href="#" id="facebook-link" className={styles.socialLink}>👍 Facebook</a>
                <a href="#" id="whatsapp-link" className={styles.socialLink}>💬 WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✉️</div>
                <h2>Message Sent!</h2>
                <p>Thank you, {form.name}! We will get back to you within 24 hours.</p>
                <Link href="/" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Send a Message</h2>

                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-phone">Phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-subject">Subject</label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  >
                    <option value="">-- Select a topic --</option>
                    <option>Booking Inquiry</option>
                    <option>Service Information</option>
                    <option>Gift Vouchers</option>
                    <option>Corporate Wellness</option>
                    <option>Feedback & Complaints</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isLoading}>
                  {isLoading ? <span className={styles.spinner} /> : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className={styles.mapSection}>
          <h2>Find Us</h2>
          <div className={styles.mapPlaceholder}>
            <span>📍</span>
            <p>Westlands Square, 4th Floor, Nairobi, Kenya</p>
            <a
              href="https://maps.google.com/?q=Westlands+Nairobi+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ marginTop: "1rem" }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
