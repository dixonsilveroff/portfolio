"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#MyServices", label: "Services" },
  { href: "#MySkills", label: "Skills" },
  { href: "#AboutMe", label: "About" },
  { href: "#MyWork", label: "Work" },
  { href: "#ContactMe", label: "Contact" },
];

const serviceItems = [
  {
    icon: "⚡",
    title: "Frontend Development",
    description:
      "I build interactive, performant interfaces from the ground up using React, Next.js, and vanilla JavaScript.",
    details: [
      "Single-page apps & progressive web apps",
      "Component-driven architecture",
      "API integration & state management",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX & Web Design",
    description:
      "I translate designs into responsive, pixel-perfect code - or design from scratch using modern web design principles.",
    details: [
      "Figma to code implementation",
      "WordPress & CMS customization",
      "Responsive layouts across all devices",
    ],
  },
  {
    icon: "🔍",
    title: "Auditing & Optimization",
    description:
      "I analyze existing websites for accessibility, performance, and SEO issues - then fix them.",
    details: [
      "WCAG compliance audits",
      "Core Web Vitals optimization",
      "Cross-browser & device testing",
    ],
  },
  {
    icon: "🚀",
    title: "Performance & SEO",
    description:
      "I ensure your site loads fast, ranks well, and delivers a smooth experience for every visitor.",
    details: [
      "Lighthouse & PageSpeed audits",
      "Lazy loading & code splitting",
      "Structured data & meta optimization",
    ],
  },
];

const projects = [
  {
    role: "Lead Developer",
    name: "SkillBridge",
    description:
      "A companion platform for aspiring tech entrepreneurs. Built a responsive dashboard with curated learning paths, progress tracking, and community features - serving hundreds of users.",
    tech: ["React", "Node.js", "REST API"],
    live: "https://skillbridge-nine.vercel.app/",
    source: "https://github.com/dixonsilveroff",
    image: "/images/skillbridge.webp",
    alt: "SkillBridge dashboard landing page",
  },
  {
    role: "Full-Stack Developer",
    name: "SlickSneaks",
    description:
      "An e-commerce storefront built exclusively for sneaker enthusiasts. Features product filtering, a cart system with persistent state, and a checkout flow powered by Express on the backend.",
    tech: ["React", "Express", "Node.js"],
    live: "https://hng-task-two-tawny.vercel.app/",
    source: "https://github.com/dixonsilveroff",
    image: "/images/slicksneaks.webp",
    alt: "SlickSneaks e-commerce landing page",
  },
  {
    role: "Web Designer",
    name: "ASCE Nigeria",
    description:
      "The official website for ASCE Nigeria International Branch. Designed and built a professional multi-page site with event listings, member resources, and an admin content management system.",
    tech: ["WordPress", "Elementor", "Custom CSS"],
    live: "https://ascenigeria.org",
    source: null,
    image: "/images/ascenigeria.webp",
    alt: "ASCE Nigeria homepage",
  },
];

const socialLinks = [
  {
    href: "https://github.com/dixonsilveroff",
    label: "GitHub",
    icon: "/images/github.svg",
  },
  {
    href: "https://www.linkedin.com/in/therealvict0r/",
    label: "LinkedIn",
    icon: "/images/linkedin.svg",
  },
  {
    href: "https://x.com/dixonsilveroff",
    label: "Twitter / X",
    icon: "/images/twitter.svg",
  },
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const typingTargetText = "Builder. Developer. System Thinker.";

  useEffect(() => {
    document.body.classList.add("loaded");

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = window.localStorage.getItem("theme");
    const shouldUseDark = currentTheme === "dark" || (!currentTheme && prefersDark.matches);

    setIsDarkMode(shouldUseDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    let index = 0;
    setTypedText("");

    const startDelay = window.setTimeout(() => {
      const intervalId = window.setInterval(() => {
        index += 1;
        setTypedText(typingTargetText.slice(0, index));
        if (index >= typingTargetText.length) {
          window.clearInterval(intervalId);
        }
      }, 100);
    }, 500);

    return () => {
      window.clearTimeout(startDelay);
    };
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollTop > 300);
      setIsSticky(scrollTop > 100);

      if (scrollTop > lastScrollTop && scrollTop > 300) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
      lastScrollTop = scrollTop;

      const sectionEls = document.querySelectorAll(".section[id]");
      sectionEls.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onDocClick = (event) => {
      const target = event.target;
      if (
        isMenuOpen &&
        target instanceof Element &&
        !target.closest(".header-nav") &&
        !target.closest(".header-dropdown")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);

    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          const children = entry.target.querySelectorAll(".stagger-item");
          children.forEach((child, index) => {
            window.setTimeout(() => {
              child.classList.add("animate-in");
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    const observedEls = document.querySelectorAll(
      ".section, .services-article, .my-work_articles, .skill-category",
    );

    observedEls.forEach((el) => {
      el.classList.add("observe-animation");
      observer.observe(el);
    });

    return () => {
      observedEls.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const statsSection = document.querySelector(".about-stats");
    if (!statsSection) {
      return;
    }

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll(".stat-number[data-count]");
            counters.forEach((counter) => {
              const target = Number.parseInt(counter.getAttribute("data-count") ?? "0", 10);
              const duration = 1500;
              const startTime = performance.now();

              const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - (1 - progress) ** 3;
                counter.textContent = String(Math.floor(eased * target));

                if (progress < 1) {
                  window.requestAnimationFrame(animate);
                } else {
                  counter.textContent = String(target);
                }
              };

              window.requestAnimationFrame(animate);
            });
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    statObserver.observe(statsSection);

    return () => {
      statObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll(".button-cta");

    const onMouseEnter = (event) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      button.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 600);
    };

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnter);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnter);
      });
    };
  }, []);

  const scrollToId = (event, hash) => {
    if (!hash.startsWith("#")) {
      return;
    }

    event.preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name, value) => {
    const trimmed = value.trim();

    if (!trimmed) {
      if (name === "name") return "Name is required";
      if (name === "email") return "Email is required";
      return "Message is required";
    }

    if (name === "email" && !validateEmail(trimmed)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (value.trim()) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {
      name: validateField("name", formValues.name),
      email: validateField("email", formValues.email),
      message: validateField("message", formValues.message),
    };

    setFormErrors(nextErrors);

    const isValid = Object.values(nextErrors).every((error) => !error);
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    setFormSuccess(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormValues({ name: "", email: "", message: "" });
      window.setTimeout(() => setFormSuccess(false), 4000);
    }, 1500);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header
        className={`header ${isSticky ? "sticky" : ""}`}
        style={{ transform: isHeaderHidden ? "translateY(-100%)" : "translateY(0)" }}
        role="banner"
      >
        <a href="#intro" className="header-name" aria-label="Victor Nwafor - Home" onClick={(event) => scrollToId(event, "#intro")}>
          <strong>{"Victor Nwafor"}</strong>
        </a>

        <nav className="header-nav" role="navigation" aria-label="Main navigation">
          <button className="dark-mode-toggle" type="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
            <span className="sun-icon">☀️</span>
            <span className="moon-icon">🌙</span>
          </button>

          <ul
            className={`header-dropdown ${isMenuOpen ? "open" : ""}`}
            id="myDropdown"
            role="menu"
          >
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  className={activeSection === item.href.slice(1) ? "active-link" : ""}
                  onClick={(event) => scrollToId(event, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* <li role="none">
              <a
                href="/media/cv.pdf"
                className="header-cv_button"
                role="menuitem"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </li> */}
          </ul>

          <button
            className={`header-menu_open ${isMenuOpen ? "active" : ""}`}
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="myDropdown"
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </span>
          </button>
        </nav>
      </header>

      <main className="main">
        <section className="intro section" id="intro">
          <article className="hero-article">
            <div className="hero-text">
              <p className="intro-text greeting">Hi, I&apos;m</p>
              <h1 className="intro-text name">Victor Nwafor</h1>
              <p className="intro-text typing-text" data-text={typingTargetText}>
                <strong>{typedText}</strong>
              </p>
              <p className="tagline">
                I turn ideas into fast, accessible, and pixel-perfect web experiences that users
                love.
              </p>
              <div className="hero-cta-group">
                <a
                  href="#MyWork"
                  className="button-cta button-cta--primary"
                  onClick={(event) => scrollToId(event, "#MyWork")}
                >
                  View My Work
                </a>
                <a
                  href="#ContactMe"
                  className="button-cta button-cta--outline"
                  onClick={(event) => scrollToId(event, "#ContactMe")}
                >
                  Get In Touch
                </a>
              </div>
              <div className="hero-socials">
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <img src={link.icon} alt="" width="22" height="22" />
                  </a>
                ))}
              </div>
            </div>
            <figure>
              <img
                src="/images/victor1_small.webp"
                alt="Victor Nwafor smiling in monotone."
                srcSet="/images/victor1_small.webp 164w, /images/victor1_medium.webp 378w"
                sizes="(min-width: 900px) 200px, 320px"
                className="hero-image"
                width="320"
              />
            </figure>
          </article>
        </section>

        <section className="services section" id="MyServices">
          <h2>What I Do</h2>
          <hr />
          <div className="service-article-container" role="list">
            {serviceItems.map((service) => (
              <article className="services-article stagger-item" role="listitem" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-details">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="MySkills">
          <h2>My Tech Stack</h2>
          <hr />
          <div className="skills-grid">
            <div className="skill-category glass-card stagger-item">
              <h3>Frontend</h3>
              <div className="skill-badges">
                <span className="skill-badge" data-level="95">HTML5</span>
                <span className="skill-badge" data-level="90">CSS3 / Sass</span>
                <span className="skill-badge" data-level="90">JavaScript</span>
                <span className="skill-badge" data-level="85">TypeScript</span>
                <span className="skill-badge" data-level="85">React</span>
                <span className="skill-badge" data-level="80">Next.js</span>
              </div>
            </div>
            <div className="skill-category glass-card stagger-item">
              <h3>Backend</h3>
              <div className="skill-badges">
                <span className="skill-badge" data-level="80">Node.js</span>
                <span className="skill-badge" data-level="75">Express</span>
                <span className="skill-badge" data-level="70">PostgreSQL</span>
                <span className="skill-badge" data-level="70">MongoDB</span>
                <span className="skill-badge" data-level="65">Prisma</span>
              </div>
            </div>
            <div className="skill-category glass-card stagger-item">
              <h3>Tools & Workflow</h3>
              <div className="skill-badges">
                <span className="skill-badge" data-level="90">Git / GitHub</span>
                <span className="skill-badge" data-level="85">VS Code</span>
                <span className="skill-badge" data-level="80">Figma</span>
                <span className="skill-badge" data-level="75">Vercel</span>
                <span className="skill-badge" data-level="70">Docker</span>
                <span className="skill-badge" data-level="80">npm / Webpack</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-me section" id="AboutMe">
          <h2>Who I Am</h2>
          <hr />
          <div className="about-me-wrapper">
            <div className="about-me-head">
              <h3>
                A frontend developer based in Abakaliki, Nigeria - building for the world.
              </h3>
              <figure>
                <img
                  src="/images/victor2.webp"
                  alt="Victor in a peace sign pose."
                  width="230"
                  className="hero-image2"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="about-me-content">
              <p className="about-me_text">
                I fell in love with web development the moment I realized code could turn an idea
                into something people actually use. Since then, I&apos;ve been obsessed with crafting
                interfaces that are <strong>blindingly fast</strong>,
                <strong> accessible to everyone</strong>, and genuinely enjoyable to interact with.
              </p>
              <p className="about-me_text">
                My approach is straightforward: understand the problem, design a clean solution,
                and write code that&apos;s as easy to maintain as it is to use. Whether it&apos;s a startup
                landing page or a full-scale web application, I bring the same attention to detail
                and care.
              </p>
              <div className="about-stats">
                <div className="stat-item glass-card">
                  <span className="stat-number" data-count="15">0</span>
                  <span className="stat-suffix">+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item glass-card">
                  <span className="stat-number" data-count="10">0</span>
                  <span className="stat-suffix">+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item glass-card">
                  <span className="stat-number" data-count="3">0</span>
                  <span className="stat-suffix">+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <a href="#ContactMe" className="button-cta" onClick={(event) => scrollToId(event, "#ContactMe")}>
                Let&apos;s work together
              </a>
            </div>
          </div>
        </section>

        <section className="my-work section" id="MyWork">
          <h2>My Work</h2>
          <hr />
          <p className="section-subtitle">
            Selected projects I&apos;ve built - each solving a real problem.
          </p>
          <div className="my-work-article-wrapper" role="list">
            {projects.map((project) => (
              <article className="my-work_articles project-card" role="listitem" key={project.name}>
                <div className="project-overlay">
                  <span className="project-role">{project.role}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span className="tech-badge" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link--live"
                    >
                      {project.name === "ASCE Nigeria" ? "Live Site ->" : "Live Demo ->"}
                    </a>
                    {project.source ? (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--source"
                      >
                        Source Code
                      </a>
                    ) : null}
                  </div>
                </div>
                <a target="_blank" href={project.live} rel="noopener noreferrer" aria-label={`View ${project.name} project`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </a>
              </article>
            ))}
          </div>
          <a
            href="https://github.com/dixonsilveroff?tab=repositories"
            className="button-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub -&gt;
          </a>
        </section>

        <section className="contact section" id="ContactMe">
          <h2>Get In Touch</h2>
          <hr />
          <p className="section-subtitle">Have a project in mind? Let&apos;s talk about it.</p>
          <div className="contact-wrapper">
            <form className="contact-form glass-card" id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contactName">Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
                <span className="form-error" aria-live="polite">{formErrors.name}</span>
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
                <span className="form-error" aria-live="polite">{formErrors.email}</span>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  value={formValues.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
                <span className="form-error" aria-live="polite">{formErrors.message}</span>
              </div>
              <button
                type="submit"
                className={`button-cta button-cta--primary ${isSubmitting ? "loading" : ""}`}
                id="contactSubmit"
                disabled={isSubmitting}
              >
                <span className="btn-text">Send Message</span>
                <span className="btn-loading" aria-hidden="true">Sending...</span>
              </button>
              {formSuccess ? <div className="form-success">✓ Message sent successfully!</div> : null}
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-info-icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:dixonsilverofficial@gmail.com">dixonsilverofficial@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Abakaliki, Nigeria</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">🟢</span>
                <div>
                  <h3>Availability</h3>
                  <p>Open to freelance &amp; full-time roles</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#intro" className="footer-logo" onClick={(event) => scrollToId(event, "#intro")}>
              {"<VickCodes>"}
            </a>
            <p className="footer-tagline">Crafting the web, one pixel at a time.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <h3>Quick Links</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={(event) => scrollToId(event, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-connect">
            <h3>Connect</h3>
            <div className="footer-social_icons" role="navigation" aria-label="Social media links">
              <a target="_blank" href="https://www.instagram.com/the.real_victor/" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/images/instagram.svg" alt="" width="24" height="24" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/therealvict0r/" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/images/linkedin.svg" alt="" width="24" height="24" />
              </a>
              <a target="_blank" href="https://github.com/dixonsilveroff" rel="noopener noreferrer" aria-label="GitHub">
                <img src="/images/github.svg" alt="" width="24" height="24" />
              </a>
              <a target="_blank" href="https://x.com/dixonsilveroff" rel="noopener noreferrer" aria-label="Twitter / X">
                <img src="/images/twitter.svg" alt="" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 Victor Nwafor. All rights reserved.</p>
        </div>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        aria-label="Back to top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

      <noscript>
        <p>JavaScript is required for the full experience.</p>
      </noscript>
    </>
  );
}
