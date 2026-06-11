import Link from "next/link";
import styles from "./about.module.css";

const team = [
  { name: "Amara Osei", role: "Founder & Lead Therapist", specialty: "Deep Tissue & Tantric Healing", initials: "AO" },
  { name: "Sarah Jenkins", role: "Senior Massage Therapist", specialty: "Swedish & Hot Stone", initials: "SJ" },
  { name: "Michael Chang", role: "Wellness Specialist", specialty: "Reflexology & Sports Massage", initials: "MC" },
  { name: "Elena Rostova", role: "Beauty & Nail Artist", specialty: "Bridal Makeup & Nail Art", initials: "ER" },
];

const values = [
  { icon: "🌸", title: "Premium Care", desc: "Every treatment is delivered with the highest standard of skill, warmth, and professionalism." },
  { icon: "🌿", title: "Holistic Wellness", desc: "We address body, mind, and spirit through carefully curated treatments and therapies." },
  { icon: "🔒", title: "Safe & Private", desc: "Your comfort and privacy are our foremost priority — always a judgment-free environment." },
  { icon: "✨", title: "Continuous Excellence", desc: "Our therapists undergo regular training to bring you the latest in wellness techniques." },
];

export default function AboutPage() {
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
            <Link href="/contact">Contact</Link>
            <Link href="/book" className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className="container animate-fade-in">
          <p className={styles.eyebrow}>About Us</p>
          <h1>Crafted for Your Wellbeing</h1>
          <p className={styles.subtitle}>
            Since 2018, Divine Touch Therapy Spa has been Nairobi's sanctuary for those who seek genuine relaxation,
            rejuvenation, and professional wellness care.
          </p>
        </div>
      </header>

      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <h2>Our Story</h2>
              <p>
                Divine Touch was founded on a simple belief: every person deserves a space where they can completely
                let go. What began as a single treatment room has grown into a full-service wellness spa offering over
                60 treatments across massage, skincare, nail care, makeup, and body therapy.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Our team of certified therapists brings decades of combined experience from across the globe, blending
                traditional healing arts with modern wellness science. Each visit is a bespoke experience, tailored to
                your unique needs.
              </p>
              <Link href="/book" className="btn btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
                Book Your Experience
              </Link>
            </div>
            <div className={styles.statsGrid}>
              {[
                { number: "6+", label: "Years of Excellence" },
                { number: "2,400+", label: "Happy Clients" },
                { number: "60+", label: "Signature Treatments" },
                { number: "4.9★", label: "Average Rating" },
              ].map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className="text-center">Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <h2 className="text-center">Meet Our Team</h2>
          <p className={styles.teamSubtitle}>Highly trained, deeply passionate, and dedicated to your wellbeing.</p>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.avatar}>{member.initials}</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.specialty}>{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container text-center">
          <p>© 2026 Divine Touch Therapy Spa. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <Link href="/services">Services</Link>
            <Link href="/book">Book Now</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/loyalty">Loyalty</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
