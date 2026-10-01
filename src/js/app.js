/*
 * =========================================
 * Main Particle Configuration
 * =========================================
 */
const particleConfig = {
  "particles": {
    "number": {
      "value": 30,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": {
      // NOTE: This color must be manually synced with $text-primary in _config/_variables.scss
      "value": "#EAEAEA" 
    },
    "shape": {
      "type": "polygon",
      "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 6 }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": { "enable": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      // NOTE: This color must be manually synced with $text-primary in _config/_variables.scss
      "color": "#EAEAEA", 
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    },
    "nb": 80
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": false, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
      "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
      "repulse": { "distance": 200, "duration": 0.4 },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": true
};


/*
 * =========================================
 * App Initialization
 * =========================================
 */
document.addEventListener("DOMContentLoaded", function () {
  
  /* 1. Initialize SweetScroll */
  new SweetScroll({/* some options */});

  /* 2. Initialize all Particle instances SAFELY */
  if (document.getElementById('hero-particles')) {
    particlesJS('hero-particles', particleConfig);
  }
  if (document.getElementById('footer-particles')) {
    particlesJS('footer-particles', particleConfig);
  }
  if (document.getElementById('logo-particles')) {
    particlesJS('logo-particles', particleConfig);
  }
  if (document.getElementById('nav-particles')) {
    // Clone the config to make specific nav bar adjustments
    const navParticleConfig = JSON.parse(JSON.stringify(particleConfig));
    navParticleConfig.particles.number.value = 80; // Increase number of particles
    navParticleConfig.particles.size.value = 1.5;  // Make them smaller
    particlesJS('nav-particles', navParticleConfig);
  }
  if (document.getElementById('contact-particles')) {
    particlesJS('contact-particles', particleConfig);
  }

  
  /* 3. Reveal-on-scroll animation */
  const revealElements = document.querySelectorAll('.js-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the element is visible
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  
  /* 4. Word-by-Word Reveal Effect (Multi-paragraph support) */
  const sourceElement = document.getElementById('typewriter-source');
  const targetElement = document.getElementById('typewriter-text');

  if (sourceElement && targetElement) {
    // 1. Get the text and split by NEWLINES first (to detect paragraphs)
    const paragraphs = sourceElement.textContent.split(/\n+/).filter(p => p.trim() !== '');

    paragraphs.forEach((paragraphText, index) => {
      // 2. Split this paragraph into words
      const words = paragraphText.trim().split(/\s+/);
      
      words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word;
        targetElement.appendChild(span);
        // Add a space after the word
        targetElement.appendChild(document.createTextNode(' ')); 
      });

      // 3. If this isn't the last paragraph, add a double break (paragraph gap)
      if (index < paragraphs.length - 1) {
        const breakEl = document.createElement('div');
        breakEl.style.height = "20px"; // The height of the gap between paragraphs
        breakEl.style.width = "100%";  // Force a line break
        targetElement.appendChild(breakEl);
      }
    });

    // 4. Get all the spans we just created for the animation
    const spans = targetElement.querySelectorAll('span');

    // 5. Use an observer to start the animation
    const typewriterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('is-visible');
          }, index * 50); // Speed up delay slightly (50ms) so long text doesn't take forever
        });
        typewriterObserver.unobserve(targetElement);
      }
    }, { threshold: 0.1 });

    typewriterObserver.observe(targetElement);
  }

  
  /* 5. SVG Logo Drawing Animation */
  const logoPath = document.querySelector('#logo-path');
  const logoContainer = document.querySelector('.logo-animation-container');

  if (logoPath && logoContainer) {
    const length = logoPath.getTotalLength();
    logoPath.style.strokeDasharray = length;
    logoPath.style.strokeDashoffset = length;

    const logoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          logoPath.classList.add('is-animating');
        } else {
          logoPath.classList.remove('is-animating');
        }
      });
    }, {
      root: null,
      threshold: 0.5 // Triggers at 50% visibility
    });

    logoObserver.observe(logoContainer);
  }


  /* 6. About Page Skills Tabs Logic */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and content
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Show target content
        const targetId = btn.getAttribute('data-tab');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  /* 7. Under Construction Links (WIP) Interception */
  const wipLinks = document.querySelectorAll('.wip-link');
  wipLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Stops the link from navigating anywhere
    });
  });

  /* 8. Contact Page Hover & Lock Interactions */
  const channelBtns = document.querySelectorAll('.channel-btn');
  const displayContents = document.querySelectorAll('.display-content');
  let lockedTargetId = null; // Memory for which panel is locked by a click

  function activateContactPanel(targetId) {
    displayContents.forEach(c => c.classList.remove('active'));
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  }

  function activateContactButton(btnElement) {
    channelBtns.forEach(b => b.classList.remove('active'));
    if (btnElement) {
      btnElement.classList.add('active');
    }
  }

  if (channelBtns.length > 0) {
    channelBtns.forEach(btn => {
      const targetId = btn.getAttribute('data-target');

      // Hover displays the panel temporarily
      btn.addEventListener('mouseenter', () => {
        activateContactButton(btn);
        activateContactPanel(targetId);
      });

      // Click locks the panel into memory
      btn.addEventListener('click', () => {
        lockedTargetId = targetId;
        activateContactButton(btn);
        activateContactPanel(targetId);
      });
    });

    // When the mouse leaves the entire left-side menu
    const contactChannelsContainer = document.querySelector('.contact-channels');
    if (contactChannelsContainer) {
      contactChannelsContainer.addEventListener('mouseleave', () => {
        if (lockedTargetId) {
          // If a user clicked a button, revert to that specific locked display
          const lockedBtn = document.querySelector(`.channel-btn[data-target="${lockedTargetId}"]`);
          activateContactButton(lockedBtn);
          activateContactPanel(lockedTargetId);
        } else {
          // If nothing was clicked yet, revert to the default ready screen
          activateContactButton(null);
          activateContactPanel('info-default');
        }
      });
    }
  }

}, false);