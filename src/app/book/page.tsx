"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./book.module.css";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => s - 1);

  const therapists = ["Any Therapist", "Sarah Jenkins", "Michael Chang", "Elena Rostova"];
  const timeslots = ["09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM"];
  
  // Flattened array of some popular services for the dropdown
  const servicesList = [
    "Swedish Massage", "Deep Tissue Massage", "Sensual Massage", "Tantric Yoni Massage",
    "Ombre Nails", "Bridal Makeup", "Brazilian Wax", "Forever Living Facial"
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>Divine Touch</Link>
          <Link href="/services" className="btn btn-secondary">Services</Link>
        </div>
      </nav>

      <main className="container" style={{ padding: 'var(--space-lg) 0' }}>
        <div className={styles.bookingCard}>
          <div className={styles.progress}>
            <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1. Service</div>
            <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2. Date & Time</div>
            <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3. Details</div>
          </div>

          <div className={styles.content}>
            {step === 1 && (
              <div className="animate-fade-in">
                <h2>Select Service & Therapist</h2>
                <div className={styles.formGroup}>
                  <label>Service</label>
                  <select 
                    value={selectedService} 
                    onChange={e => setSelectedService(e.target.value)}
                    className={styles.input}
                  >
                    <option value="">-- Choose a service --</option>
                    {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Preferred Therapist</label>
                  <div className={styles.therapistGrid}>
                    {therapists.map(t => (
                      <button 
                        key={t}
                        className={`${styles.therapistBtn} ${selectedTherapist === t ? styles.selected : ''}`}
                        onClick={() => setSelectedTherapist(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.actions}>
                  <button 
                    className="btn btn-primary" 
                    onClick={handleNext}
                    disabled={!selectedService || !selectedTherapist}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h2>Choose Date & Time</h2>
                <div className={styles.formGroup}>
                  <label>Date</label>
                  <input 
                    type="date" 
                    className={styles.input}
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {selectedDate && (
                  <div className={styles.formGroup}>
                    <label>Available Times</label>
                    <div className={styles.timeGrid}>
                      {timeslots.map(t => (
                        <button 
                          key={t}
                          className={`${styles.timeBtn} ${selectedTime === t ? styles.selected : ''}`}
                          onClick={() => setSelectedTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className={styles.actions}>
                  <button className="btn btn-secondary" onClick={handlePrev}>Back</button>
                  <button 
                    className="btn btn-primary" 
                    onClick={handleNext}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h2>Confirm Booking</h2>
                <div className={styles.summary}>
                  <p><strong>Service:</strong> {selectedService}</p>
                  <p><strong>Therapist:</strong> {selectedTherapist}</p>
                  <p><strong>Date:</strong> {selectedDate}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                </div>
                <div className="vertical-line" style={{ width: '100%', height: '1px', margin: '1rem 0' }}></div>
                <div className={styles.formGroup}>
                  <label>Special Requests (Optional)</label>
                  <textarea className={styles.input} rows={4} placeholder="Any health conditions or preferences?"></textarea>
                </div>
                <div className={styles.actions}>
                  <button className="btn btn-secondary" onClick={handlePrev}>Back</button>
                  <button className="btn btn-primary" onClick={() => alert("Booking confirmed! (Mock)")}>Confirm Appointment</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
