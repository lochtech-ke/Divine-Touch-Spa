import Link from "next/link";
import styles from "./services.module.css";
// import prisma from "@/lib/prisma";

const categories = [
  {
    name: "Massages",
    services: [
      { name: "Swedish Massage", price: 80, duration: 60 },
      { name: "Deep Tissue Massage", price: 90, duration: 60 },
      { name: "Thai Massage", price: 100, duration: 90 },
      { name: "Hot Stone Massage", price: 95, duration: 60 },
      { name: "Fertility Massage", price: 110, duration: 60 },
      { name: "Back Massage", price: 50, duration: 30 },
      { name: "Prenatal Massage", price: 85, duration: 60 },
      { name: "Reflexology", price: 60, duration: 45 },
      { name: "Head Massage", price: 40, duration: 30 },
      { name: "Foot Massage", price: 45, duration: 30 },
      { name: "Erotic Massage", price: 150, duration: 60 },
      { name: "Sport Massage", price: 95, duration: 60 },
      { name: "Aromatherapy Massage", price: 85, duration: 60 },
      { name: "Lomi Lomi", price: 110, duration: 60 },
    ]
  },
  {
    name: "Tantric Massages",
    services: [
      { name: "Sensual Massage", price: 120, duration: 60 },
      { name: "Lingam Massage", price: 130, duration: 60 },
      { name: "Tantric Yoni Massage", price: 130, duration: 60 },
      { name: "Nuru (body to body)", price: 180, duration: 60 },
      { name: "4Hands Sensual", price: 200, duration: 60 },
      { name: "4Hands Erotic", price: 250, duration: 60 },
      { name: "4Hands Nuru", price: 300, duration: 60 },
      { name: "Chakra Balancing", price: 100, duration: 60 },
    ]
  },
  {
    name: "Nails Care",
    services: [
      { name: "Ombre", price: 40, duration: 45 },
      { name: "Gum Gel", price: 45, duration: 60 },
      { name: "Tips", price: 30, duration: 45 },
      { name: "Acrylics", price: 50, duration: 60 },
      { name: "Gelpolish", price: 25, duration: 30 },
      { name: "Pedicure", price: 35, duration: 45 },
      { name: "Manicure", price: 25, duration: 30 },
      { name: "Stickons", price: 20, duration: 20 },
      { name: "Nail Polish", price: 15, duration: 20 },
      { name: "Hennah", price: 30, duration: 30 },
    ]
  },
  {
    name: "Facial Removal",
    services: [
      { name: "Threading", price: 15, duration: 15 },
      { name: "Tweezing", price: 15, duration: 15 },
      { name: "Full Face", price: 40, duration: 30 },
    ]
  },
  {
    name: "Make Up",
    services: [
      { name: "Bridal Makeup", price: 150, duration: 90 },
      { name: "Party Makeup", price: 80, duration: 60 },
      { name: "Official Makeup", price: 60, duration: 45 },
    ]
  },
  {
    name: "Waxing",
    services: [
      { name: "Brazilian", price: 50, duration: 30 },
      { name: "Bikini", price: 30, duration: 20 },
      { name: "Full Leg", price: 45, duration: 45 },
      { name: "Underarms", price: 20, duration: 15 },
      { name: "Eye Brows", price: 15, duration: 15 },
      { name: "Vajacial", price: 65, duration: 45 },
    ]
  },
  {
    name: "Body Scrub",
    services: [
      { name: "Coffe Scrub", price: 50, duration: 45 },
      { name: "Spar Salt", price: 50, duration: 45 },
      { name: "Back Scrub", price: 35, duration: 30 },
    ]
  },
  {
    name: "Facials",
    services: [
      { name: "Forever Living", price: 70, duration: 60 },
      { name: "Neutrogena", price: 60, duration: 60 },
      { name: "Simple", price: 50, duration: 45 },
      { name: "Himalaya", price: 55, duration: 60 },
      { name: "Back Facials", price: 65, duration: 45 },
    ]
  },
  {
    name: "Other Services",
    services: [
      { name: "Stretches", price: 30, duration: 30 },
      { name: "Shaving", price: 20, duration: 20 },
      { name: "Armpits", price: 15, duration: 15 },
      { name: "Ultrasound Cavitation", price: 100, duration: 60 },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>
            Divine Touch
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/book" className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </nav>

      <header className={styles.header}>
        <div className="container">
          <h1 className="animate-fade-in">Our Services</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Discover our comprehensive range of treatments designed to relax, revive, and refresh your body and mind.
          </p>
        </div>
      </header>

      <main className="container">
        <div className={styles.catalogLayout}>
          {/* Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <div className={styles.stickySidebar}>
              <h3>Categories</h3>
              <ul className={styles.categoryList}>
                {categories.map((cat, i) => (
                  <li key={i}>
                    <a href={`#cat-${i}`}>{cat.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Service List */}
          <div className={styles.serviceContent}>
            {categories.map((cat, i) => (
              <section key={i} id={`cat-${i}`} className={styles.categorySection}>
                <h2>{cat.name}</h2>
                <div className="vertical-line" style={{ margin: '1rem 0' }}></div>
                
                <div className={styles.serviceGrid}>
                  {cat.services.map((service, j) => (
                    <div key={j} className={styles.serviceCard}>
                      <div className={styles.serviceInfo}>
                        <h4>{service.name}</h4>
                        <span className={styles.duration}>{service.duration} min</span>
                      </div>
                      <div className={styles.servicePrice}>
                        <span>${service.price}</span>
                        <Link href={`/book?service=${encodeURIComponent(service.name)}`} className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>
                          Book
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
