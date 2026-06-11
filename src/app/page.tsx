import Link from "next/link";
import styles from "./page.module.css";

const featuredServices = [
  { title: "Swedish Massage", desc: "A classic full-body massage to ease tension and improve circulation.", price: "from $80", duration: "60 min", icon: "💆" },
  { title: "Tantric Yoni Massage", desc: "A deeply relaxing and sensual healing experience for full body restoration.", price: "from $130", duration: "60 min", icon: "🌸" },
  { title: "Bridal Makeup", desc: "Look your absolute best for your special day with our expert artists.", price: "from $150", duration: "90 min", icon: "💄" },
  { title: "Hot Stone Massage", desc: "Melt away stress with heated volcanic stones placed on key body points.", price: "from $95", duration: "60 min", icon: "🔥" },
];

const testimonials = [
  { name: "Amara K.", rating: 5, text: "Absolutely divine experience! The Swedish massage left me feeling brand new. The ambiance is incredibly calming and the therapists are so professional.", service: "Swedish Massage" },
  { name: "Grace W.", rating: 5, text: "Best spa in Nairobi, hands down. I've been coming for my monthly facials for over a year and the quality is consistently exceptional.", service: "Forever Living Facial" },
  { name: "David M.", rating: 5, text: "Booked the hot stone massage for my wife's birthday and she absolutely loved it. The online booking system was super easy to use too!", service: "Hot Stone Massage" },
  { name: "Fatima O.", rating: 5, text: "The nail artists here are incredibly talented. My bridal nails were exactly what I envisioned. Will definitely be back!", service: "Bridal Nails" },
];

const categories = [
  { name: "Massages", count: 14, icon: "💆", color: "#f3e5f5" },
  { name: "Tantric", count: 8, icon: "🌸", color: "#fce4ec" },
  { name: "Nails", count: 10, icon: "💅", color: "#e8eaf6" },
  { name: "Facials", count: 5, icon: "✨", color: "#e0f2f1" },
  { name: "Makeup", count: 3, icon: "💄", color: "#fff3e0" },
  { name: "Waxing", count: 6, icon: "🌿", color: "#f1f8e9" },
];

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navInner}`}>
          <div className={styles.logo}>
            Divine Touch
            <span>Therapy Spa</span>
          </div>
          <div className={styles.navLinks}>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/loyalty">Loyalty</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/book" className="btn btn-primary">Book Now</Link>
            <Link href="/login" className={styles.signInLink}>Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOrbs}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className="corner-brackets animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
            <p className={styles.heroEyebrow}>Nairobi's Premier Wellness Sanctuary</p>
            <h1 className={styles.title}>Revive • Relax • Refresh</h1>
            <p className={styles.subtitle}>
              Discover 60+ bespoke treatments designed to heal your body, calm your mind, and elevate your spirit.
              Your wellness journey begins here.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/book" className="btn btn-primary" id="hero-book-btn">Book an Appointment</Link>
              <Link href="/services" className="btn btn-secondary" id="hero-services-btn">Explore Services</Link>
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}><span>2,400+</span>Happy Clients</div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}><span>60+</span>Treatments</div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}><span>4.9★</span>Rating</div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}><span>6+</span>Years</div>
          </div>
        </div>
      </section>

      <div className="vertical-line" />

      {/* Service Categories */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Explore By Category</h2>
            <p className={styles.sectionSub}>Nine categories of expertly curated treatments await you.</p>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((cat, i) => (
              <Link key={i} href={`/services#cat-${i}`} className={styles.categoryCard} style={{ background: cat.color }}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <strong>{cat.name}</strong>
                <span className={styles.categoryCount}>{cat.count} services</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className={`container ${styles.featured}`}>
        <div className="text-center">
          <h2 className={styles.sectionTitle}>Featured Treatments</h2>
          <p className={styles.sectionSub}>Our most loved, most-requested signature experiences.</p>
        </div>

        <div className={styles.serviceGrid}>
          {featuredServices.map((service, i) => (
            <div key={i} className={`glass ${styles.serviceCard}`}>
              <div className={styles.serviceCardIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className={styles.serviceMeta}>
                <span className={styles.serviceDuration}>⏱ {service.duration}</span>
              </div>
              <div className={styles.serviceFooter}>
                <span className={styles.servicePrice}>{service.price}</span>
                <Link href={`/book?service=${encodeURIComponent(service.title)}`} className={styles.bookLink}>Book Now →</Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/services" className="btn btn-secondary" id="view-all-services-btn">View All 60+ Services</Link>
        </div>
      </section>

      <div className="vertical-line" />

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Why Divine Touch?</h2>
              <p className={styles.sectionSub} style={{ textAlign: 'left', marginBottom: '2rem' }}>
                We go beyond relaxation — we deliver a transformative wellness experience.
              </p>
              {[
                { icon: "🏆", title: "Certified Professionals", desc: "All our therapists are fully certified with 5+ years of hands-on experience." },
                { icon: "🌿", title: "Premium Products", desc: "We use only the finest organic oils and professional-grade skincare products." },
                { icon: "🔐", title: "Private & Discreet", desc: "Complete privacy guaranteed. All service types welcomed without judgment." },
                { icon: "⚡", title: "Easy Online Booking", desc: "Book, reschedule, and manage appointments 24/7 from any device." },
              ].map((item, i) => (
                <div key={i} className={styles.whyItem}>
                  <span className={styles.whyIcon}>{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.whyPromo}>
              <div className={styles.promoCard}>
                <p className={styles.promoEyebrow}>Loyalty Program</p>
                <h3>Earn While You Unwind</h3>
                <p>Earn 1 point for every $1 spent. Redeem for free services, upgrades, and exclusive member perks.</p>
                <div className={styles.tierBadges}>
                  <span style={{ background: '#cd7f32' }}>🥉 Bronze</span>
                  <span style={{ background: '#c0c0c0' }}>🥈 Silver</span>
                  <span style={{ background: '#ffd700' }}>🥇 Gold</span>
                </div>
                <Link href="/loyalty" className="btn btn-primary" id="loyalty-cta-btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                  Join Rewards →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionSub}>Real stories from our divine community.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>{"★".repeat(t.rating)}</div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready for Your Divine Experience?</h2>
          <p>Book online in under 2 minutes. Same-day appointments available.</p>
          <div className={styles.ctaButtons}>
            <Link href="/book" className="btn btn-primary" id="cta-book-btn">Book an Appointment</Link>
            <Link href="/vouchers" className="btn btn-secondary" id="cta-vouchers-btn">Send a Gift Voucher</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>Divine Touch Therapy Spa</div>
              <p>Nairobi's premium wellness sanctuary, dedicated to your ultimate relaxation and rejuvenation since 2018.</p>
              <div className={styles.footerSocials}>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Facebook">👍</a>
                <a href="#" aria-label="WhatsApp">💬</a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/book">Book Appointment</Link></li>
                <li><Link href="/loyalty">Loyalty Rewards</Link></li>
                <li><Link href="/vouchers">Gift Vouchers</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><Link href="/services">Massages</Link></li>
                <li><Link href="/services">Nail Care</Link></li>
                <li><Link href="/services">Facials</Link></li>
                <li><Link href="/services">Makeup</Link></li>
                <li><Link href="/services">Waxing</Link></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className={styles.contactList}>
                <li>📍 Westlands Square, 4th Floor, Nairobi</li>
                <li>📞 +254 700 000 000</li>
                <li>📧 hello@divinetouchspa.co.ke</li>
                <li>⏰ Mon–Sat: 9 AM – 8 PM</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 Divine Touch Therapy Spa. All rights reserved.</p>
            <div className={styles.footerBottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <Link href="/admin">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
