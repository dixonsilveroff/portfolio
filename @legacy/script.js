// ============================
// Utility Functions
// ============================

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// ============================
// Navigation & Menu
// ============================

const menuBtn = document.querySelector('.header-menu_open');
const dropdown = document.getElementById('myDropdown');
let isMenuOpen = false;

function toggleDropdown() {
  isMenuOpen = !isMenuOpen;
  dropdown.style.display = isMenuOpen ? 'flex' : 'none';
  menuBtn.classList.toggle('active', isMenuOpen);
  menuBtn.setAttribute('aria-expanded', isMenuOpen);

  if (isMenuOpen) {
    const menuItems = dropdown.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      item.style.animation = `slideInRight 0.3s ease forwards ${index * 0.05}s`;
    });
  }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (isMenuOpen && !e.target.closest('.header-nav') && !e.target.closest('.header-dropdown')) {
    toggleDropdown();
  }
});

// Close menu on link click
dropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleDropdown();
  });
});

// ============================
// Active Nav Highlighting
// ============================

const navLinks = dropdown.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('.section[id]');

const activateNavLink = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
};

window.addEventListener('scroll', debounce(activateNavLink, 50));

// ============================
// Smooth Scrolling
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================
// Scroll Progress Bar
// ============================

const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.prepend(progressBar);

const updateScrollProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
};

window.addEventListener('scroll', debounce(updateScrollProgress, 10));

// ============================
// Sticky Navigation
// ============================

const header = document.querySelector('.header');
let lastScrollTop = 0;

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    header.classList.add('sticky');
    if (scrollTop > lastScrollTop && scrollTop > 300) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
  } else {
    header.classList.remove('sticky');
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop;
};

window.addEventListener('scroll', debounce(handleScroll, 10));

// ============================
// Typing Animation
// ============================

const typingText = document.querySelector('.typing-text');
if (typingText) {
  const text = typingText.getAttribute('data-text') || 'FRONTEND DEV';
  typingText.textContent = '';
  let i = 0;

  const typeWriter = () => {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 500);
}

// ============================
// Intersection Observer for Animations
// ============================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      const children = entry.target.querySelectorAll('.stagger-item');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('animate-in');
        }, index * 100);
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .services-article, .my-work_articles, .skill-category').forEach(el => {
  el.classList.add('observe-animation');
  observer.observe(el);
});

// ============================
// Stat Counter Animation
// ============================

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'), 10);
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(eased * target);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            counter.textContent = target;
          }
        };

        requestAnimationFrame(animate);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
  statObserver.observe(statsSection);
}

// ============================
// Dark Mode Toggle
// ============================

const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '<span class="sun-icon">☀️</span><span class="moon-icon">🌙</span>';
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
header.querySelector('.header-nav').prepend(darkModeToggle);

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  darkModeToggle.classList.add('spin');
  setTimeout(() => darkModeToggle.classList.remove('spin'), 300);
});

// ============================
// Parallax Effect
// ============================

const parallaxElements = document.querySelectorAll('.hero-image');

const handleParallax = () => {
  const scrolled = window.pageYOffset;
  parallaxElements.forEach(el => {
    const speed = 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
};

window.addEventListener('scroll', debounce(handleParallax, 10));

// ============================
// Image Lazy Loading Enhancement
// ============================

if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });
}

// ============================
// Back to Top Button
// ============================

const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '↑';
backToTop.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', debounce(() => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}, 10));

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================
// CTA Ripple Effects
// ============================

document.querySelectorAll('.button-cta').forEach(btn => {
  btn.addEventListener('mouseenter', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

    setTimeout(() => ripple.remove(), 600);
  });
});

// ============================
// Contact Form Validation
// ============================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('contactSubmit');

  const showError = (input, message) => {
    const errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      input.style.borderColor = 'var(--Color-Accent)';
    }
  };

  const clearError = (input) => {
    const errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = '';
      input.style.borderColor = '';
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Real-time validation
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        showError(input, `${input.previousElementSibling.textContent} is required`);
      } else if (input.type === 'email' && !validateEmail(input.value)) {
        showError(input, 'Please enter a valid email address');
      } else {
        clearError(input);
      }
    });

    input.addEventListener('input', () => {
      if (input.value.trim()) {
        clearError(input);
      }
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Name is required');
      isValid = false;
    }
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email is required');
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Message is required');
      isValid = false;
    }

    if (isValid) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        contactForm.reset();

        // Success feedback
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.textContent = '✓ Message sent successfully!';
        successMsg.style.cssText = `
          color: #22c55e;
          font-weight: 600;
          text-align: center;
          padding: 1rem;
          animation: fadeInUp 0.4s ease;
        `;
        contactForm.appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 4000);
      }, 1500);
    }
  });
}

// ============================
// Initialize
// ============================

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  updateScrollProgress();
});