"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./vouchers.module.css";

export default function VouchersPage() {
  const [amount, setAmount] = useState<number>(50);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const presetAmounts = [50, 100, 150, 200, 500];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>Divine Touch</Link>
          <Link href="/book" className="btn btn-primary">Book Now</Link>
        </div>
      </nav>

      <main className="container" style={{ padding: 'var(--space-lg) 0' }}>
        <div className="text-center">
          <h1 className="animate-fade-in">Gift the Spa Experience</h1>
          <p className="animate-fade-in" style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-lg)', animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            A Divine Touch gift voucher is the perfect present for someone special.
          </p>
        </div>

        <div className={styles.giftLayout}>
          {/* Voucher Preview */}
          <div className={styles.previewContainer}>
            <div className={styles.voucherCard}>
              <div className={styles.voucherHeader}>
                <h2>Divine Touch Therapy Spa</h2>
                <span className={styles.voucherLabel}>Gift Certificate</span>
              </div>
              <div className={styles.voucherBody}>
                <div className={styles.voucherValue}>
                  ${amount}
                </div>
                <div className={styles.voucherTo}>
                  To: <span>{recipient || "Recipient Name"}</span>
                </div>
                <div className={styles.voucherMessage}>
                  {message || "Write a thoughtful message here..."}
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Form */}
          <div className={styles.configForm}>
            <div className={styles.formGroup}>
              <label>Select Amount</label>
              <div className={styles.amountGrid}>
                {presetAmounts.map(preset => (
                  <button 
                    key={preset}
                    className={`${styles.amountBtn} ${amount === preset ? styles.selected : ''}`}
                    onClick={() => setAmount(preset)}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Recipient Name</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Jane Doe" 
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Personal Message (Optional)</label>
              <textarea 
                className={styles.input} 
                rows={3} 
                placeholder="Happy Birthday!"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>

            <Link href={`/checkout?amount=${amount}&type=voucher`} className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>
              Purchase Voucher • ${amount}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
