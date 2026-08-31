'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Checkup");

  // FAQ active index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Before & After sliders state
  const [slider1, setSlider1] = useState(50);
  const [slider2, setSlider2] = useState(50);
  const [slider3, setSlider3] = useState(50);

  // Header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom Cursor & 3D Tilt Effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-outline";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100, mouseY = -100;
    let outlineX = -100, outlineY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animateCursor = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      ring.style.left = `${outlineX}px`;
      ring.style.top = `${outlineY}px`;
      animId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const handleMouseEnter = () => document.body.classList.add("hovering-interactive");
    const handleMouseLeave = () => document.body.classList.remove("hovering-interactive");

    const hoverables = document.querySelectorAll("a, button, .service-card, .review-card, .faq-question, input, select, textarea");
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // 3D Card Tilt
    const tiltCards = document.querySelectorAll<HTMLElement>(".service-card, .review-card, .transformation-card, .hero-card-floating");
    const handleTilt = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const handleResetTilt = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    };

    tiltCards.forEach(card => {
      card.addEventListener("mousemove", handleTilt as EventListener);
      card.addEventListener("mouseleave", handleResetTilt as EventListener);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      dot.remove();
      ring.remove();
    };
  }, []);

  const openBookingModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🎉 Booking Request Received! Our dental office will contact you within 15 minutes to confirm your appointment.");
    setModalOpen(false);
  };

  return (
    <>
      <!-- Top Emergency Announcement Bar -->
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <span><i className="fa-solid fa-location-dot"></i> 1244 Medical Parkway, Suite 300</span>
            <span className="divider">|</span>
            <span><i class="fa-solid fa-clock"></i> Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
          <div className="top-emergency">
            <a href="tel:5125550199" className="emergency-link">
              <i className="fa-solid fa-phone-volume"></i> 24/7 Dental Emergency: <strong>(512) 555-0199</strong>
            </a>
          </div>
        </div>
      </div>

      <!-- Main Navigation Header -->
      <header className={`header ${headerScrolled ? "scrolled" : ""}`} id="header">
        <div className="container nav-container">
          <a href="#" className="logo">
            <div className="logo-icon"><i className="fa-solid fa-tooth"></i></div>
            <div className="logo-text">
              <span className="brand-name">Apex Dental</span>
              <span className="brand-sub">Care &amp; Aesthetics</span>
            </div>
          </a>

          <!-- Desktop Nav Links -->
          <nav className={`nav-menu ${mobileMenuOpen ? "active" : ""}`} id="nav-menu">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="nav-link active">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link">About Doctor</a>
            <a href="#transformations" onClick={() => setMobileMenuOpen(false)} className="nav-link">Smile Gallery</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="nav-link">Reviews</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="nav-link">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
          </nav>

          <div className="nav-actions">
            <button onClick={() => openBookingModal()} className="btn btn-primary open-booking-modal">
              <i className="fa-solid fa-calendar-check"></i> Book Visit
            </button>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-shield-halved"></i> Pain-Free &amp; Gentle Dentistry
            </div>
            <h1 className="hero-title">
              Transform Your Smile With <span className="gradient-text">World-Class Care</span>
            </h1>
            <p className="hero-subtitle">
              Experience compassionate, state-of-the-art dental treatment tailored for your entire family. From cosmetic smile makeovers to emergency relief.
            </p>

            <div className="hero-buttons">
              <button onClick={() => openBookingModal()} className="btn btn-primary btn-lg">
                <i className="fa-solid fa-calendar-days"></i> Schedule Appointment
              </button>
              <a href="tel:5125550199" className="btn btn-outline btn-lg">
                <i className="fa-solid fa-phone"></i> (512) 555-0199
              </a>
            </div>

            <!-- Trust Badges -->
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-rating">
                  <span className="stars">★★★★★</span>
                  <span className="score">4.9 / 5.0</span>
                </div>
                <span className="trust-label">500+ Google Reviews</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-stat">15,000+</span>
                <span className="trust-label">Happy Smiles Created</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-stat">0% APR</span>
                <span className="trust-label">Flexible Payment Plans</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-floating card-experience">
              <i className="fa-solid fa-award"></i>
              <div>
                <strong>18+ Years</strong>
                <span>Clinical Excellence</span>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Sarah Jenkins Dentistry"
                className="hero-img"
              />
            </div>

            <div className="hero-card-floating card-tech">
              <i className="fa-solid fa-microscope"></i>
              <div>
                <strong>3D Digital Imaging</strong>
                <span>Laser &amp; Intraoral Scanner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Benefits Banner -->
      <section className="banner-features">
        <div className="container banner-grid">
          <div className="feature-box">
            <div className="feature-icon"><i className="fa-solid fa-user-doctor"></i></div>
            <div className="feature-info">
              <h3>Licensed Specialists</h3>
              <p>Expert dentists trained at top US institutions.</p>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
            <div className="feature-info">
              <h3>Sedation Dentistry</h3>
              <p>Completely anxiety-free &amp; pain-free procedures.</p>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
            <div className="feature-info">
              <h3>Insurance Accepted</h3>
              <p>We maximize your PPO benefits automatically.</p>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon"><i className="fa-solid fa-truck-medical"></i></div>
            <div className="feature-info">
              <h3>Same-Day Emergencies</h3>
              <p>Immediate relief for toothaches &amp; accidents.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-heading">Comprehensive Dental Care</span>
            <h2 className="section-title">Services Tailored To Your Health &amp; Confidence</h2>
            <p className="section-description">
              Using cutting-edge dental technology, we deliver comfortable, long-lasting treatment for patients of all ages.
            </p>
          </div>

          <div className="services-grid">
            <!-- Service 1 -->
            <div className="service-card">
              <div className="service-icon"><i className="fa-solid fa-teeth"></i></div>
              <h3>Cosmetic Smile Makeover</h3>
              <p>Custom porcelain veneers, tooth bonding, and aesthetic reshaping to give you the flawless smile you've always wanted.</p>
              <ul className="service-list">
                <li><i className="fa-solid fa-check"></i> Porcelain Veneers</li>
                <li><i className="fa-solid fa-check"></i> Composite Bonding</li>
                <li><i className="fa-solid fa-check"></i> Digital Smile Design</li>
              </ul>
              <button onClick={() => openBookingModal("Cosmetic Dentistry")} className="service-btn">
                Learn More &amp; Book <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <!-- Service 2 -->
            <div className="service-card featured-service">
              <div className="badge-featured">Most Popular</div>
              <div className="service-icon"><i className="fa-solid fa-teeth-open"></i></div>
              <h3>Invisalign® Clear Aligners</h3>
              <p>Straighten your teeth discreetly without bulky metal braces. Removable, virtually invisible, and comfortable.</p>
              <ul className="service-list">
                <li><i className="fa-solid fa-check"></i> Free 3D iTero Scan</li>
                <li><i className="fa-solid fa-check"></i> Faster Treatment Times</li>
                <li><i className="fa-solid fa-check"></i> No Food Restrictions</li>
              </ul>
              <button onClick={() => openBookingModal("Invisalign Aligners")} className="service-btn">
                Book Free Consultation <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <!-- Service 3 -->
            <div className="service-card">
              <div className="service-icon"><i className="fa-solid fa-tooth"></i></div>
              <h3>Dental Implants</h3>
              <p>Permanent, natural-looking replacement for missing teeth that restores full chewing strength and bone health.</p>
              <ul className="service-list">
                <li><i className="fa-solid fa-check"></i> Single &amp; Multi-Teeth</li>
                <li><i className="fa-solid fa-check"></i> All-on-4® Full Arch</li>
                <li><i className="fa-solid fa-check"></i> 98% Success Rate</li>
              </ul>
              <button onClick={() => openBookingModal("Dental Implants")} className="service-btn">
                Learn More &amp; Book <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <!-- Service 4 -->
            <div className="service-card">
              <div className="service-icon"><i className="fa-solid fa-sparkles"></i></div>
              <h3>Professional Teeth Whitening</h3>
              <p>In-office Zoom! whitening that brightens your smile up to 8 shades lighter in just 60 minutes.</p>
              <ul className="service-list">
                <li><i className="fa-solid fa-check"></i> Immediate Results</li>
                <li><i className="fa-solid fa-check"></i> Sensitivity-Free Formula</li>
                <li><i className="fa-solid fa-check"></i> Custom Touch-up Kits</li>
              </ul>
              <button onClick={() => openBookingModal("Teeth Whitening")} className="service-btn">
                Book Whitening <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <!-- Service 5 -->
            <div className="service-card">
              <div className="service-icon"><i className="fa-solid fa-shield-virus"></i></div>
              <h3>General &amp; Preventive Care</h3>
              <p>Comprehensive checkups, ultrasonic cleanings, digital X-rays, and fluoride treatments to keep your mouth healthy.</p>
              <ul className="service-list">
                <li><i className="fa-solid fa-check"></i> Bi-Annual Cleanings</li>
                <li><i className="fa-solid fa-check"></i> Oral Cancer Screenings</li>
                <li><i className="fa-solid fa-check"></i> Cavity Prevention</li>
              </ul>
              <button onClick={() => openBookingModal("General Checkup")} className="service-btn">
                Schedule Cleaning <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <!-- Service 6 -->
            <div className="service-card">
              <div className="service-icon"><i className="fa-solid fa-kit-medical"></i></div>
              <h3>Emergency Dental Care</h3>
              <p>Fast, immediate care for severe toothaches, broken teeth, lost crowns, or dental trauma. Walk-ins welcome.</p>
              <ul className="service-list">
                <li><i className="fa-solid fa-check"></i> Same-Day Relief</li>
                <li><i className="fa-solid fa-check"></i> Pain Management</li>
                <li><i className="fa-solid fa-check"></i> Emergency Extraction</li>
              </ul>
              <button onClick={() => openBookingModal("Emergency Dentistry")} className="service-btn">
                Emergency Call <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Doctor Profile Section -->
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-image-column">
            <div className="doctor-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Sarah Jenkins DDS"
                className="doctor-img"
              />
              <div className="doctor-experience-badge">
                <span className="exp-num">18+</span>
                <span className="exp-text">Years Practice</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="sub-heading">Meet Your Lead Dentist</span>
            <h2 className="section-title">Dr. Sarah Jenkins, DDS, FAGD</h2>
            <p className="about-bio">
              "My mission is to eliminate dental anxiety and help patients smile with complete confidence. Dentistry shouldn't be stressful—it should be empowering."
            </p>
            <p className="about-desc">
              Dr. Jenkins graduated with high honors from Columbia University College of Dental Medicine and completed advanced fellowship training in Implantology and Cosmetic Restorations. She actively stays at the forefront of digital dentistry.
            </p>

            <div className="credentials-grid">
              <div className="cred-item">
                <i className="fa-solid fa-graduation-cap"></i>
                <div>
                  <strong>Columbia University</strong>
                  <span>Doctor of Dental Surgery</span>
                </div>
              </div>
              <div className="cred-item">
                <i className="fa-solid fa-certificate"></i>
                <div>
                  <strong>Fellowship Trained</strong>
                  <span>Academy of General Dentistry</span>
                </div>
              </div>
              <div className="cred-item">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Invisalign Premier</strong>
                  <span>Certified Provider</span>
                </div>
              </div>
              <div className="cred-item">
                <i className="fa-solid fa-heart"></i>
                <div>
                  <strong>Compassionate Care</strong>
                  <span>Gentle Sedation Expert</span>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <button onClick={() => openBookingModal()} className="btn btn-primary">Meet Dr. Jenkins</button>
              <a href="tel:5125550199" className="about-phone-link"><i className="fa-solid fa-phone"></i> (512) 555-0199</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Before & After Transformation Gallery -->
      <section className="section gallery-section" id="transformations">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-heading">Real Patient Results</span>
            <h2 className="section-title">Smile Transformation Gallery</h2>
            <p className="section-description">
              Drag the slider on any transformation below to see the dramatic before-and-after results achieved right here in our office.
            </p>
          </div>

          <div className="gallery-grid">
            <!-- Case 1: Veneers -->
            <div className="transformation-card">
              <div className="slider-container">
                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80" alt="Smile After Veneers" className="img-after" />
                <div className="img-before-wrapper" style={{ width: `${slider1}%` }}>
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80" alt="Smile Before Veneers" className="img-before" />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={slider1}
                  onChange={(e) => setSlider1(Number(e.target.value))}
                  className="slider-range"
                  aria-label="Before and after slider"
                />
                <div className="slider-handle" style={{ left: `${slider1}%` }}></div>
                <span className="label-tag label-before">BEFORE</span>
                <span className="label-tag label-after">AFTER</span>
              </div>
              <div className="card-details">
                <h3>Porcelain Veneer Smile Makeover</h3>
                <p>Corrected discoloration, chips, and misalignment in just 2 appointments.</p>
              </div>
            </div>

            <!-- Case 2: Invisalign -->
            <div className="transformation-card">
              <div className="slider-container">
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80" alt="Smile After Invisalign" className="img-after" />
                <div className="img-before-wrapper" style={{ width: `${slider2}%` }}>
                  <img src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=700&q=80" alt="Smile Before Invisalign" className="img-before" />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={slider2}
                  onChange={(e) => setSlider2(Number(e.target.value))}
                  className="slider-range"
                  aria-label="Before and after slider"
                />
                <div className="slider-handle" style={{ left: `${slider2}%` }}></div>
                <span className="label-tag label-before">BEFORE</span>
                <span className="label-tag label-after">AFTER</span>
              </div>
              <div className="card-details">
                <h3>Full Invisalign Alignment</h3>
                <p>Straightened severe crowding in 7 months with clear removable aligners.</p>
              </div>
            </div>

            <!-- Case 3: Whitening -->
            <div className="transformation-card">
              <div className="slider-container">
                <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80" alt="Smile After Whitening" className="img-after" />
                <div className="img-before-wrapper" style={{ width: `${slider3}%` }}>
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80" alt="Smile Before Whitening" className="img-before" />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={slider3}
                  onChange={(e) => setSlider3(Number(e.target.value))}
                  className="slider-range"
                  aria-label="Before and after slider"
                />
                <div className="slider-handle" style={{ left: `${slider3}%` }}></div>
                <span className="label-tag label-before">BEFORE</span>
                <span className="label-tag label-after">AFTER</span>
              </div>
              <div className="card-details">
                <h3>In-Office Zoom! Whitening</h3>
                <p>Removed 10+ years of coffee stains in a single 60-minute session.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Patient Reviews -->
      <section className="section reviews-section" id="reviews">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-heading">Patient Testimonials</span>
            <h2 className="section-title">Loved By Over 500+ Local Families</h2>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "I used to get severe dental anxiety, but Dr. Jenkins and her staff made me feel completely relaxed. The clinic is spotless and futuristic. My Invisalign results are incredible!"
              </p>
              <div className="review-author">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Emily R." />
                <div>
                  <strong>Emily Rodriguez</strong>
                  <span>Verified Patient • Google Review</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Broke my front tooth during a weekend basketball game. Apex Dental got me in within an hour and restored it so seamlessly that even my wife couldn't tell which tooth was repaired!"
              </p>
              <div className="review-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="David K." />
                <div>
                  <strong>David K.</strong>
                  <span>Emergency Patient • Yelp Review</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "The staff goes above and beyond. They checked my PPO insurance coverage beforehand and handled all claims directly. Super transparent pricing and zero surprises."
              </p>
              <div className="review-author">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Jessica M." />
                <div>
                  <strong>Jessica Miller</strong>
                  <span>Family Patient • Google Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section className="section faq-section" id="faq">
        <div className="container faq-container">
          <div className="section-header text-center">
            <span className="sub-heading">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion">
            {[
              {
                q: "Do you accept my dental insurance?",
                a: "Yes! We are in-network with most major dental PPO plans including Delta Dental, Cigna, MetLife, Aetna, Guardian, and Humana. Our team files claims directly on your behalf to maximize your annual benefits."
              },
              {
                q: "What if I don't have dental insurance?",
                a: "We offer our Apex Smile Savings Plan for uninsured patients, which includes 2 cleanings, annual X-rays, and 15-20% off all dental procedures for a low annual fee. We also partner with CareCredit for 0% APR financing options."
              },
              {
                q: "How quickly can I be seen for a dental emergency?",
                a: "We reserve dedicated daily slots specifically for emergency patients. If you are experiencing severe pain, bleeding, or trauma, call us immediately at (512) 555-0199 for same-day priority appointment placement."
              },
              {
                q: "Is Invisalign treatment as effective as traditional braces?",
                a: "Absolutely. Modern 3D digital planning allows Invisalign to treat over 90% of orthodontic cases including crowding, gaps, overbites, and crossbites—often 30% faster than traditional wire braces."
              }
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? "active" : ""}`}>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="faq-question"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down ${activeFaq === idx ? "rotate-180" : ""}`}></i>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer style-active">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <!-- Contact & Map Section -->
      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-info-col">
            <span className="sub-heading">Visit Our Clinic</span>
            <h2 className="section-title">We'd Love To See You Smile!</h2>
            <p>Located in the heart of the city with free private parking behind the building. Fully wheelchair accessible.</p>

            <div className="contact-detail-list">
              <div className="contact-detail-item">
                <i className="fa-solid fa-map-location-dot"></i>
                <div>
                  <strong>Location Address</strong>
                  <p>1244 Medical Parkway, Suite 300, Austin, TX 78756</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <strong>Call or Text Us</strong>
                  <p><a href="tel:5125550199">(512) 555-0199</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <strong>Email Inquiries</strong>
                  <p><a href="mailto:care@apexdentalcare.com">care@apexdentalcare.com</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-solid fa-clock"></i>
                <div>
                  <strong>Office Hours</strong>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM<br />Sunday: Closed (Emergency Call Line Open)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card-form">
            <h3>Request An Appointment</h3>
            <p>Fill out this form and our scheduling team will contact you within 15 minutes during business hours.</p>

            <form onSubmit={handleFormSubmit} className="quick-form">
              <div className="form-group">
                <input type="text" placeholder="Your Full Name" required className="form-input" />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" required className="form-input" />
                <input type="email" placeholder="Email Address" required className="form-input" />
              </div>
              <div className="form-group">
                <select className="form-input" required defaultValue="">
                  <option value="" disabled>Select Service Needed</option>
                  <option value="General Checkup">General Checkup &amp; Cleaning</option>
                  <option value="Cosmetic Dentistry">Cosmetic Smile Makeover</option>
                  <option value="Invisalign">Invisalign® Aligners</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Emergency Care">Emergency Care</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Preferred day or details (optional)" rows={3} className="form-input"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                <i className="fa-solid fa-paper-plane"></i> Send Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-icon"><i className="fa-solid fa-tooth"></i></div>
              <div className="logo-text">
                <span className="brand-name">Apex Dental</span>
                <span className="brand-sub">Care &amp; Aesthetics</span>
              </div>
            </a>
            <p>State-of-the-art dental care designed around your comfort and health.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Yelp"><i className="fa-brands fa-yelp"></i></a>
              <a href="#" aria-label="Google"><i className="fa-brands fa-google"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#about">Meet Dr. Jenkins</a></li>
              <li><a href="#transformations">Smile Gallery</a></li>
              <li><a href="#reviews">Patient Reviews</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Popular Services</h4>
            <ul>
              <li><a href="#services">Invisalign Clear Aligners</a></li>
              <li><a href="#services">Porcelain Veneers</a></li>
              <li><a href="#services">Dental Implants</a></li>
              <li><a href="#services">Teeth Whitening</a></li>
              <li><a href="#services">Same-Day Emergency</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Subscribe for seasonal dental tips and exclusive whitening promotions.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-content">
            <p>&copy; 2026 Apex Dental Care. All Rights Reserved. Sample Portfolio Showcase for Dental Practices.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- Interactive Appointment Booking Modal -->
      {modalOpen && (
        <div className="modal-overlay active" id="booking-modal">
          <div className="modal-card">
            <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            
            <div className="modal-header">
              <div className="modal-icon"><i className="fa-solid fa-tooth"></i></div>
              <h2>Schedule Your Visit</h2>
              <p>Pick your preferred service, date, and time. No payment required today.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="modal-form">
              <div className="form-group">
                <label>Selected Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="form-input"
                  required
                >
                  <option value="General Checkup">General Cleaning &amp; Checkup</option>
                  <option value="Cosmetic Dentistry">Cosmetic Smile Makeover / Veneers</option>
                  <option value="Invisalign Aligners">Invisalign® Consultation</option>
                  <option value="Dental Implants">Dental Implants Consultation</option>
                  <option value="Teeth Whitening">Zoom! Teeth Whitening</option>
                  <option value="Emergency Dentistry">Emergency Dental Care</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" required className="form-input" />
                </div>
                <div className="form-group">
                  <label>Preferred Time Slot</label>
                  <select className="form-input" required defaultValue="Morning (8:00 AM - 12:00 PM)">
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4 PM - 6 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Patient Full Name</label>
                <input type="text" placeholder="e.g. John Doe" required className="form-input" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="(512) 000-0000" required className="form-input" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required className="form-input" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg">
                <i className="fa-solid fa-check-circle"></i> Confirm Booking Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
