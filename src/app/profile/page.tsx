"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./profile.module.css";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("bookings");

  const mockUser = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    loyaltyPoints: 450,
    loyaltyTier: "SILVER",
  };

  const mockBookings = [
    { id: "B1", service: "Swedish Massage", date: "2026-06-15", time: "10:30 AM", status: "CONFIRMED" },
    { id: "B2", service: "Ombre Nails", date: "2026-05-20", time: "02:00 PM", status: "COMPLETED" },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>Divine Touch</Link>
          <div className={styles.navLinks}>
            <Link href="/services">Services</Link>
            <Link href="/book" className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </nav>

      <main className="container" style={{ padding: 'var(--space-lg) 0' }}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>{mockUser.name.charAt(0)}</div>
          <div>
            <h1>Welcome back, {mockUser.name}!</h1>
            <p className={styles.email}>{mockUser.email}</p>
          </div>
        </div>

        <div className={styles.dashboard}>
          <aside className={styles.sidebar}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'bookings' ? styles.active : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              My Bookings
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'loyalty' ? styles.active : ''}`}
              onClick={() => setActiveTab('loyalty')}
            >
              Loyalty Rewards
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'settings' ? styles.active : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
            <button className={`${styles.tabBtn} ${styles.logoutBtn}`}>
              Log Out
            </button>
          </aside>

          <section className={styles.content}>
            {activeTab === 'bookings' && (
              <div className="animate-fade-in">
                <h2>Upcoming & Past Bookings</h2>
                {mockBookings.length === 0 ? (
                  <p>You have no bookings yet. <Link href="/book" style={{ color: 'var(--color-primary-dark)' }}>Book an appointment</Link></p>
                ) : (
                  <div className={styles.bookingList}>
                    {mockBookings.map(b => (
                      <div key={b.id} className={styles.bookingCard}>
                        <div>
                          <h3>{b.service}</h3>
                          <p>{b.date} at {b.time}</p>
                        </div>
                        <div className={styles.statusBadge} data-status={b.status}>
                          {b.status}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'loyalty' && (
              <div className="animate-fade-in">
                <h2>Loyalty Rewards</h2>
                <div className={styles.loyaltyCard}>
                  <div className={styles.pointsDisplay}>
                    <span className={styles.points}>{mockUser.loyaltyPoints}</span>
                    <span className={styles.pointsLabel}>Points</span>
                  </div>
                  <div className={styles.tierInfo}>
                    <h3>{mockUser.loyaltyTier} Tier</h3>
                    <p>You are 50 points away from the Gold Tier!</p>
                  </div>
                </div>
                <div className={styles.rewardsList}>
                  <h3>Available Rewards</h3>
                  <div className={styles.rewardItem}>
                    <span>15% off next massage</span>
                    <button className="btn btn-secondary" disabled>300 pts</button>
                  </div>
                  <div className={styles.rewardItem}>
                    <span>Free Manicure</span>
                    <button className="btn btn-primary">400 pts</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="animate-fade-in">
                <h2>Account Settings</h2>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" className={styles.input} defaultValue={mockUser.name} />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" className={styles.input} defaultValue={mockUser.email} />
                </div>
                <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Save Changes</button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
