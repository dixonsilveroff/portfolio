"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useSubmit } from "@formspree/react";

import AboutSection from "./components/AboutSection";
import BackToTopButton from "./components/BackToTopButton";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import { navItems, projects, serviceItems, socialLinks } from "./data/portfolioData";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "", website: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formServerError, setFormServerError] = useState("");
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? "";
  const formspreeFormKey = formspreeEndpoint.split("/").filter(Boolean).at(-1) ?? "";
  const submitToFormspree = useSubmit(formspreeFormKey || "invalid-form-key");

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
    if (formServerError) {
      setFormServerError("");
    }

    if (value.trim() && name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (event) => {
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
    setFormServerError("");

    try {
      if (!formspreeEndpoint) {
        throw new Error("missing-formspree-endpoint");
      }

      if (!formspreeFormKey) {
        throw new Error("invalid-formspree-endpoint");
      }

      if (formValues.website.trim()) {
        return;
      }

      const result = await submitToFormspree({
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        message: formValues.message.trim(),
        _subject: "New message from portfolio contact form",
      });

      if (result.kind === "error") {
        const nextFieldErrors = { name: "", email: "", message: "" };
        result.getAllFieldErrors().forEach(([field, errors]) => {
          if (field in nextFieldErrors && errors.length > 0) {
            nextFieldErrors[field] = errors[0].message;
          }
        });

        setFormErrors((prev) => ({ ...prev, ...nextFieldErrors }));

        const providerMessage = result.getFormErrors().map((entry) => entry.message).join(" ").trim();
        setFormServerError(providerMessage || "Unable to send your message right now. Please try again in a moment.");
        return;
      }

      setFormSuccess(true);
      setFormValues({ name: "", email: "", message: "", website: "" });
      window.setTimeout(() => setFormSuccess(false), 4000);
    } catch (error) {
      if (error instanceof Error && error.message === "missing-formspree-endpoint") {
        setFormServerError("Contact form is not configured yet. Please add the Formspree endpoint.");
      } else if (error instanceof Error && error.message === "invalid-formspree-endpoint") {
        setFormServerError("Formspree endpoint is invalid. Use a URL like https://formspree.io/f/yourFormId.");
      } else {
        setFormServerError("Unable to send your message right now. Please try again in a moment.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Header
        isSticky={isSticky}
        isHeaderHidden={isHeaderHidden}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        navItems={navItems}
        onScrollToId={scrollToId}
        onToggleTheme={toggleTheme}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />

      <main className="main">
        <HeroSection
          typedText={typedText}
          typingTargetText={typingTargetText}
          socialLinks={socialLinks}
          onScrollToId={scrollToId}
        />
        <ServicesSection serviceItems={serviceItems} />
        <SkillsSection />
        <AboutSection onScrollToId={scrollToId} />
        <WorkSection projects={projects} />
        <ContactSection
          formValues={formValues}
          formErrors={formErrors}
          isSubmitting={isSubmitting}
          formSuccess={formSuccess}
          formServerError={formServerError}
          onInputChange={handleInputChange}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
        />
      </main>

      <Footer navItems={navItems} onScrollToId={scrollToId} />
      <BackToTopButton showBackToTop={showBackToTop} />

      <noscript>
        <p>JavaScript is required for the full experience.</p>
      </noscript>
    </>
  );
}
