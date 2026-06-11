"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("bookings");

  const mockBookings = [
    { id: "B1", client: "Jane Doe", service: "Swedish Massage", date: "Today", time: "10:30 AM", status: "CONFIRMED" },
    { id: "B2", client: "John Smith", service: "Deep Tissue Massage", date: "Today", time: "01:00 PM", status: "PENDING" },
    { id: "B3", client: "Emily Chen", service: "Bridal Makeup", date: "Tomorrow", time: "09:00 AM", status: "CONFIRMED" },
  ];

  const mockServices = [
    { id: "S1", name: "Swedish Massage", category: "Massages", price: 80, isActive: true },
    { id: "S2", name: "Sensual Massage", category: "Tantric Massages", price: 120, isActive: true },
    { id: "S3", name: "Ombre Nails", category: "Nails Care", price: 40, isActive: false },
  ];

  return (
    <div className={styles.container}>
      {/* Admin Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Divine Touch <span className={styles.adminBadge}>ADMIN</span>
        </div>
        <nav className={styles.navMenu}>
          <button 
            className={`${styles.navItem} ${activeTab === 'bookings' ? styles.active : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            📊 Bookings
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'services' ? styles.active : ''}`}
            onClick={() => setActiveTab('services')}
          >
            💆‍♀️ Services
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'users' ? styles.active : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 Customers
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'vouchers' ? styles.active : ''}`}
            onClick={() => setActiveTab('vouchers')}
          >
            🎁 Vouchers
          </button>
        </nav>
        <Link href="/" className={styles.exitLink}>&larr; Exit to Storefront</Link>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard</h2>
          <div className={styles.adminProfile}>Admin User</div>
        </header>

        <div className={styles.contentArea}>
          {activeTab === 'bookings' && (
            <div className="animate-fade-in">
              <div className={styles.toolbar}>
                <input type="text" placeholder="Search bookings..." className={styles.searchInput} />
                <button className="btn btn-primary">Add Walk-in</button>
              </div>

              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Service</th>
                      <th>Date & Time</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockBookings.map(b => (
                      <tr key={b.id}>
                        <td>{b.id}</td>
                        <td style={{ fontWeight: 500 }}>{b.client}</td>
                        <td>{b.service}</td>
                        <td>{b.date} at {b.time}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles[b.status.toLowerCase()]}`}>
                            {b.status}
                          </span>
                        </td>
                        <td>
                          <button className={styles.actionBtn}>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="animate-fade-in">
              <div className={styles.toolbar}>
                <input type="text" placeholder="Search services..." className={styles.searchInput} />
                <button className="btn btn-primary">+ New Service</button>
              </div>

              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockServices.map(s => (
                      <tr key={s.id}>
                        <td style={{ fontWeight: 500 }}>{s.name}</td>
                        <td>{s.category}</td>
                        <td>${s.price}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${s.isActive ? styles.active_badge : styles.inactive_badge}`}>
                            {s.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td>
                          <button className={styles.actionBtn}>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="animate-fade-in">
              <p>Customer management interface coming soon.</p>
            </div>
          )}
          
          {activeTab === 'vouchers' && (
            <div className="animate-fade-in">
              <p>Voucher and promotion code management coming soon.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
