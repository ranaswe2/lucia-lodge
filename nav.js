// ============ MOBILE NAV TOGGLE ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  
  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (a.href && !a.href.includes('#') && window.innerWidth <= 920) {
        // Allow navigation, just close menu
      }
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============ MOBILE DROPDOWN TOGGLE ============
const dropdown = document.getElementById('resourcesDropdown');
const dropdownLink = dropdown?.querySelector('a');

if (dropdownLink) {
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 920) {
      e.preventDefault();
      const isActive = dropdown.classList.toggle('active');
      dropdownLink.setAttribute('aria-expanded', String(isActive));
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 920 && dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
    dropdownLink?.setAttribute('aria-expanded', 'false');
  }
});

// Close mobile menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 920) {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    dropdown?.classList.remove('active');
    dropdownLink?.setAttribute('aria-expanded', 'false');
  }
});