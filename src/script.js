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
  
  // Animate menu items
  if (isMenuOpen) {
    const menuItems = dropdown.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      item.style.animation = `slideInRight 0.3s ease forwards ${index * 0.1}s`;
    });
  }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (isMenuOpen && !e.target.closest('.header-nav') && !e.target.closest('.header-dropdown')) {
    toggleDropdown();
  }
});

// Close menu when clicking on a link
dropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleDropdown();
  });
});

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
    if (scrollTop > lastScrollTop) {
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
      // Stagger animation for child elements
      const children = entry.target.querySelectorAll('.stagger-item');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('animate-in');
        }, index * 100);
      });
    }
  });
}, observerOptions);

// Observe all sections and articles
document.querySelectorAll('.section, .services-article, .my-work_articles').forEach(el => {
  el.classList.add('observe-animation');
  observer.observe(el);
});

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

const parallaxElements = document.querySelectorAll('.hero-image, .hero-image2');

const handleParallax = () => {
  const scrolled = window.pageYOffset;
  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
};

window.addEventListener('scroll', debounce(handleParallax, 10));

// ============================
// Image Lazy Loading Enhancement
// ============================

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
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
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ============================
// Enhanced CTA Button Effects
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
// Form Validation (if contact form is added)
// ============================

// Placeholder for future contact form
const initContactForm = () => {
  // Add contact form functionality here
  console.log('Contact form ready for implementation');
};

// ============================
// Performance Monitoring
// ============================

if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.renderTime || entry.loadTime);
      }
    });
  });
  
  perfObserver.observe({ entryTypes: ['largest-contentful-paint'] });
}

// ============================
// Initialize
// ============================

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  updateScrollProgress();
});