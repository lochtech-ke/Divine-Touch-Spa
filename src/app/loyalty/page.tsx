"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./loyalty.module.css";

const tiers = [
  {
    name: "Bronze",
    icon: "🥉",
    color: "#cd7f32",
    minPoints: 0,
    maxPoints: 499,
    perks: ["5% off all services", "Birthday bonus points", "Early booking access"],
  },
  {
    name: "Silver",
    icon: "🥈",
    color: "#c0c0c0",
    minPoints: 500,
    maxPoints: 1499,
    perks: ["10% off all services", "1 free manicure per quarter", "Priority scheduling", "Exclusive member events"],
  },
  {
    name: "Gold",
    icon: "🥇",
    color: "#ffd700",
    minPoints: 1500,
    maxPoints: Infinity,
    perks: ["15% off all services", "1 free massage per month", "Dedicated therapist assignment", "VIP event invites", "Free gift voucher annually"],
  },
];

const rewards = [
  { id: 1, name: "Free Manicure", points: 200, category: "Nails", popular: true },
  { id: 2, name: "15-min Back Massage Add-on", points: 150, category: "Massage", popular: false },
  { id: 3, name: "$10 Service Credit", points: 100, category: "Credit", popular: true },
  { id: 4, name: "Aromatherapy Upgrade", points: 120, category: "Massage", popular: false },
  { id: 5, name: "Free Facial (45 min)", points: 400, category: "Facial", popular: true },
  { id: 6, name: "Couples Package Discount (20%)", points: 300, category: "Package", popular: false },
];

export default function LoyaltyPage() {
  const [myPoints] = useState(720);
  const [activeTab, setActiveTab] = useState<"overview" | "rewards" | "history">("overview");
  const [redeemed, setRedeemed] = useState<number[]>([]);

  const currentTier = tiers.find(t => myPoints >= t.minPoints && myPoints <= t.maxPoints) || tiers[0];
  const nextTier = tiers[tiers.indexOf(currentTier) + 1];
  const progressPct = nextTier
    ? ((myPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100
    : 100;

  const history = [
    { date: "June 5, 2026", desc: "Swedish Massage", points: +80 },
    { date: "May 28, 2026", desc: "Bridal Makeup", points: +150 },
    { date: "May 15, 2026", desc: "Redeemed: Free Manicure", points: -200 },
    { date: "May 10, 2026", desc: "Hot Stone Massage", points: +95 },
    { date: "April 20, 2026", desc: "Tantric Massage Package", points: +130 },
    { date: "April 5, 2026", desc: "Birthday Bonus", points: +200 },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>
            Divine Touch
            <span>Therapy Spa</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/services">Services</Link>
            <Link href="/book" className="btn btn-primary">Book Now</Link>
            <Link href="/profile">My Account</Link>
          </div>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className="container">
          <h1>Loyalty Rewards</h1>
          <p>The more you indulge, the more you earn. Your journey to wellness has never been more rewarding.</p>
        </div>
      </header>

      <main className="container" style={{ padding: "var(--space-lg) var(--space-sm)" }}>
        {/* Current Status Card */}
        <div className={styles.statusCard}>
          <div className={styles.statusLeft}>
            <div className={styles.tierBadge} style={{ color: currentTier.color }}>
              <span className={styles.tierIcon}>{currentTier.icon}</span>
              <span className={styles.tierName}>{currentTier.name} Member</span>
            </div>
            <div className={styles.pointsDisplay}>
              <span className={styles.pointsNumber}>{myPoints.toLocaleString()}</span>
              <span className={styles.pointsLabel}>Divine Points</span>
            </div>
            {nextTier && (
              <div className={styles.progressSection}>
                <div className={styles.progressInfo}>
                  <span>{myPoints} pts</span>
                  <span>{nextTier.minPoints} pts for {nextTier.name}</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progressPct}%`, backgroundColor: nextTier.color }} />
                </div>
                <p className={styles.progressNote}>
                  Earn <strong>{nextTier.minPoints - myPoints} more points</strong> to reach {nextTier.icon} {nextTier.name}!
                </p>
              </div>
            )}
          </div>
          <div className={styles.statusRight}>
            <h3>Your {currentTier.name} Perks</h3>
            <ul className={styles.perkList}>
              {currentTier.perks.map((perk, i) => (
                <li key={i}><span className={styles.checkmark}>✓</span> {perk}</li>
              ))}
            </ul>
            <Link href="/book" className="btn btn-primary" style={{ marginTop: "1rem" }}>
              Book & Earn Points
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {(["overview", "rewards", "history"] as const).map(t => (
            <button
              key={t}
              className={`${styles.tabBtn} ${activeTab === t ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className={styles.tabContent}>
            <h2>How to Earn Points</h2>
            <div className={styles.earnGrid}>
              {[
                { icon: "💆", action: "Book any service", points: "1 pt per $1 spent" },
                { icon: "⭐", action: "Leave a review", points: "25 pts" },
                { icon: "🎂", action: "Birthday bonus", points: "200 pts" },
                { icon: "👥", action: "Refer a friend", points: "150 pts" },
                { icon: "📲", action: "Download our app", points: "50 pts (coming soon)" },
                { icon: "🛍️", action: "Purchase a gift voucher", points: "75 pts" },
              ].map((item, i) => (
                <div key={i} className={styles.earnCard}>
                  <span className={styles.earnIcon}>{item.icon}</span>
                  <strong>{item.action}</strong>
                  <span className={styles.earnPoints}>{item.points}</span>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "3rem" }}>Membership Tiers</h2>
            <div className={styles.tierGrid}>
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`${styles.tierCard} ${tier.name === currentTier.name ? styles.currentTierCard : ""}`}
                  style={{ borderTopColor: tier.color }}
                >
                  <div className={styles.tierHeader} style={{ color: tier.color }}>
                    {tier.icon} {tier.name}
                  </div>
                  <p className={styles.tierRange}>
                    {tier.maxPoints === Infinity ? `${tier.minPoints}+ pts` : `${tier.minPoints} – ${tier.maxPoints} pts`}
                  </p>
                  <ul className={styles.tierPerks}>
                    {tier.perks.map((perk, j) => <li key={j}>✓ {perk}</li>)}
                  </ul>
                  {tier.name === currentTier.name && (
                    <div className={styles.currentBadge}>Your Current Tier</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rewards Tab */}
        {activeTab === "rewards" && (
          <div className={styles.tabContent}>
            <p className={styles.rewardsIntro}>
              You have <strong>{myPoints} points</strong> to spend. Redeem them for exclusive treats below.
            </p>
            <div className={styles.rewardsGrid}>
              {rewards.map(reward => {
                const canAfford = myPoints >= reward.points;
                const isRedeemed = redeemed.includes(reward.id);
                return (
                  <div key={reward.id} className={`${styles.rewardCard} ${!canAfford ? styles.locked : ""}`}>
                    {reward.popular && <div className={styles.popularBadge}>Popular</div>}
                    <div className={styles.rewardCategory}>{reward.category}</div>
                    <h3 className={styles.rewardName}>{reward.name}</h3>
                    <div className={styles.rewardPoints}>{reward.points} pts</div>
                    <button
                      className={`btn ${canAfford ? "btn-primary" : "btn-secondary"} ${styles.redeemBtn}`}
                      disabled={!canAfford || isRedeemed}
                      onClick={() => setRedeemed(prev => [...prev, reward.id])}
                    >
                      {isRedeemed ? "✓ Redeemed!" : canAfford ? "Redeem" : `Need ${reward.points - myPoints} more`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className={styles.tabContent}>
            <table className={styles.historyTable}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, i) => (
                  <tr key={i}>
                    <td>{item.date}</td>
                    <td>{item.desc}</td>
                    <td className={item.points > 0 ? styles.positive : styles.negative}>
                      {item.points > 0 ? `+${item.points}` : item.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
