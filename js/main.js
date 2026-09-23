/**
 * HAVEN — Digital Experience Studio
 * Master Modular JavaScript (GitHub Pages Compatible)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollEffects();
  initCurrencyPricing();
  initTemplateCatalog();
  initContactForm();
});

/* ==========================================================================
   1. Navbar & Mobile Menu Interaction
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  // Sticky header on scroll
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Mobile menu toggle
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        drawer.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close when clicking links inside drawer
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Active page detection
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();
    if (
      linkPath === currentPath ||
      (currentPath === '' && linkPath === 'index.html') ||
      (currentPath === 'index.html' && (linkPath === 'index.html' || linkPath === './'))
    ) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   2. Scroll Animations & Intersection Observer
   ========================================================================== */
function initScrollEffects() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    reveals.forEach((el) => el.classList.add('active'));
  }
}

/* ==========================================================================
   3. Centralized Country / Currency Pricing Engine
   ========================================================================== */
const HAVEN_PRICING_CONFIG = {
  currencies: {
    PKR: {
      symbol: 'PKR',
      name: 'Pakistani Rupee',
      rateTier1: '35,000',
      rateTier2: '45,000',
      rateTier3: '55,000',
      rateCustom: '75,000',
      format: (val) => `PKR ${val}`,
    },
    USD: {
      symbol: '$',
      name: 'US Dollar',
      rateTier1: '129',
      rateTier2: '159',
      rateTier3: '199',
      rateCustom: '299',
      format: (val) => `$${val}`,
    },
    GBP: {
      symbol: '£',
      name: 'British Pound',
      rateTier1: '99',
      rateTier2: '129',
      rateTier3: '159',
      rateCustom: '249',
      format: (val) => `£${val}`,
    },
    EUR: {
      symbol: '€',
      name: 'Euro',
      rateTier1: '119',
      rateTier2: '149',
      rateTier3: '179',
      rateCustom: '279',
      format: (val) => `€${val}`,
    },
    AED: {
      symbol: 'AED',
      name: 'UAE Dirham',
      rateTier1: '475',
      rateTier2: '585',
      rateTier3: '735',
      rateCustom: '1,095',
      format: (val) => `AED ${val}`,
    },
    SAR: {
      symbol: 'SAR',
      name: 'Saudi Riyal',
      rateTier1: '485',
      rateTier2: '595',
      rateTier3: '745',
      rateCustom: '1,125',
      format: (val) => `SAR ${val}`,
    },
    CAD: {
      symbol: 'CA$',
      name: 'Canadian Dollar',
      rateTier1: '175',
      rateTier2: '215',
      rateTier3: '269',
      rateCustom: '399',
      format: (val) => `CA$${val}`,
    },
    AUD: {
      symbol: 'AU$',
      name: 'Australian Dollar',
      rateTier1: '195',
      rateTier2: '249',
      rateTier3: '299',
      rateCustom: '449',
      format: (val) => `AU$${val}`,
    },
    INR: {
      symbol: '₹',
      name: 'Indian Rupee',
      rateTier1: '10,999',
      rateTier2: '13,999',
      rateTier3: '16,999',
      rateCustom: '22,999',
      format: (val) => `₹${val}`,
    },
    BDT: {
      symbol: '৳',
      name: 'Bangladeshi Taka',
      rateTier1: '14,999',
      rateTier2: '18,999',
      rateTier3: '22,999',
      rateCustom: '31,999',
      format: (val) => `৳${val}`,
    },
    MYR: {
      symbol: 'RM',
      name: 'Malaysian Ringgit',
      rateTier1: '599',
      rateTier2: '749',
      rateTier3: '899',
      rateCustom: '1,399',
      format: (val) => `RM ${val}`,
    },
  },
  defaultCurrency: 'USD',
};

function detectUserCurrency() {
  try {
    const saved = localStorage.getItem('haven_preferred_currency');
    if (saved && HAVEN_PRICING_CONFIG.currencies[saved]) {
      return saved;
    }

    const locale = (navigator.language || '').toLowerCase();
    const timeZone = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();

    if (locale.includes('pk') || timeZone.includes('karachi')) return 'PKR';
    if (locale.includes('gb') || timeZone.includes('london')) return 'GBP';
    if (locale.includes('ae') || timeZone.includes('dubai')) return 'AED';
    if (locale.includes('sa') || timeZone.includes('riyadh')) return 'SAR';
    if (locale.includes('ca') || timeZone.includes('toronto') || timeZone.includes('vancouver')) return 'CAD';
    if (locale.includes('au') || timeZone.includes('sydney') || timeZone.includes('melbourne')) return 'AUD';
    if (locale.includes('in') || timeZone.includes('calcutta') || timeZone.includes('kolkata')) return 'INR';
    if (locale.includes('bd') || timeZone.includes('dhaka')) return 'BDT';
    if (locale.includes('my') || timeZone.includes('kuala_lumpur')) return 'MYR';
    if (
      locale.includes('de') ||
      locale.includes('fr') ||
      locale.includes('es') ||
      locale.includes('it') ||
      locale.includes('nl')
    ) {
      return 'EUR';
    }
  } catch (err) {
    // Ignore and fallback
  }

  return HAVEN_PRICING_CONFIG.defaultCurrency;
}

function updatePricingDisplays(currencyCode) {
  const config = HAVEN_PRICING_CONFIG.currencies[currencyCode] || HAVEN_PRICING_CONFIG.currencies.USD;

  // Update all elements with data-pricing-tier
  document.querySelectorAll('[data-pricing-tier]').forEach((el) => {
    const tier = el.getAttribute('data-pricing-tier');
    if (tier === 'tier1') el.textContent = config.format(config.rateTier1);
    if (tier === 'tier2') el.textContent = config.format(config.rateTier2);
    if (tier === 'tier3') el.textContent = config.format(config.rateTier3);
    if (tier === 'custom') el.textContent = config.format(config.rateCustom);
    if (tier === 'starting') el.textContent = config.format(config.rateTier1);
  });

  // Update currency labels
  document.querySelectorAll('.currency-code-display').forEach((el) => {
    el.textContent = currencyCode;
  });

  // Sync select dropdowns if any
  document.querySelectorAll('.currency-select').forEach((select) => {
    select.value = currencyCode;
  });

  localStorage.setItem('haven_preferred_currency', currencyCode);
}

function initCurrencyPricing() {
  const activeCurrency = detectUserCurrency();
  updatePricingDisplays(activeCurrency);

  // Bind change listener on currency selectors
  document.querySelectorAll('.currency-select').forEach((select) => {
    select.value = activeCurrency;
    select.addEventListener('change', (e) => {
      const selected = e.target.value;
      if (HAVEN_PRICING_CONFIG.currencies[selected]) {
        updatePricingDisplays(selected);
      }
    });
  });
}

/* ==========================================================================
   4. Templates Page Filtering & Search
   ========================================================================== */
function initTemplateCatalog() {
  const filterButtons = document.querySelectorAll('.template-filter-btn');
  const searchInput = document.getElementById('template-search');
  const cards = document.querySelectorAll('.template-card');

  if (!cards.length) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
      const cardName = (card.getAttribute('data-name') || '').toLowerCase();
      const cardDesc = (card.getAttribute('data-description') || '').toLowerCase();

      const matchesCategory =
        activeCategory === 'all' || cardCategory.includes(activeCategory);

      const matchesSearch =
        !searchQuery ||
        cardName.includes(searchQuery) ||
        cardCategory.includes(searchQuery) ||
        cardDesc.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        card.style.opacity = '1';
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });

    const emptyNotice = document.getElementById('templates-empty-state');
    if (emptyNotice) {
      emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  // Category filter clicks
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = (btn.getAttribute('data-filter') || 'all').toLowerCase();
      applyFilters();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

/* ==========================================================================
   5. Contact Form & Template URL Parameter Detection
   ========================================================================== */
function initContactForm() {
  const templateSelect = document.getElementById('selected-template');
  const templateAlert = document.getElementById('template-alert');
  const templateAlertName = document.getElementById('template-alert-name');
  const templateAlertPrice = document.getElementById('template-alert-price');
  const contactForm = document.getElementById('haven-contact-form');
  const formSuccess = document.getElementById('form-success-state');

  // URL Parameter check: ?template=NEXUS
  const params = new URLSearchParams(window.location.search);
  const requestedTemplate = params.get('template');

  if (requestedTemplate && templateSelect) {
    const uppercaseTemplate = requestedTemplate.toUpperCase();

    // Check if matching option exists
    let matched = false;
    for (let i = 0; i < templateSelect.options.length; i++) {
      if (templateSelect.options[i].value.toUpperCase() === uppercaseTemplate) {
        templateSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }

    if (matched && templateAlert && templateAlertName) {
      templateAlert.style.display = 'flex';
      templateAlertName.textContent = uppercaseTemplate;

      const currentCurrency = localStorage.getItem('haven_preferred_currency') || 'USD';
      const conf = HAVEN_PRICING_CONFIG.currencies[currentCurrency] || HAVEN_PRICING_CONFIG.currencies.USD;
      if (templateAlertPrice) {
        templateAlertPrice.textContent = conf.format(conf.rateTier1);
      }
    }
  }

  // Update alert if user changes selection manually
  if (templateSelect && templateAlert) {
    templateSelect.addEventListener('change', () => {
      const val = templateSelect.value;
      if (val && val !== 'Bespoke from Zero' && val !== 'None') {
        templateAlert.style.display = 'flex';
        if (templateAlertName) templateAlertName.textContent = val;
        const currentCurrency = localStorage.getItem('haven_preferred_currency') || 'USD';
        const conf = HAVEN_PRICING_CONFIG.currencies[currentCurrency] || HAVEN_PRICING_CONFIG.currencies.USD;
        if (templateAlertPrice) templateAlertPrice.textContent = conf.format(conf.rateTier1);
      } else {
        templateAlert.style.display = 'none';
      }
    });
  }

  // Handle inquiry submission cleanly
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Submitting Brief...';
      }

      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Submit Project Brief';
        }
        contactForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'block';
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 700);
    });
  }
}
