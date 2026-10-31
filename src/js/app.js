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
  new SweetScroll({
    offset: -150 /* Stops the scroll early to leave room for the sticky nav */
  });

  
  /* 2. Initialize all Particle instances SAFELY */
  if (document.getElementById('hero-particles')) {
    particlesJS('hero-particles', particleConfig);
  }
  if (document.getElementById('footer-particles')) {
    particlesJS('footer-particles', particleConfig);
  }
  if (document.getElementById('logo-particles')) {
    particlesJS('logo-particles', particleConfig);
    // Force particles.js to instantly recalculate canvas dimensions once layout settles
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
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
  if (document.getElementById('bio-particles')) {
    const bioParticleConfig = JSON.parse(JSON.stringify(particleConfig));
    bioParticleConfig.particles.number.value = 80; // highly populated (normal is 30)
    particlesJS('bio-particles', bioParticleConfig);
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

  
  /* 5. SVG Logo Drawing Animation (Modular) */
  const logoContainers = document.querySelectorAll('.logo-animation-container');

  if (logoContainers.length > 0) {
    const logoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const path = entry.target.querySelector('.logo-path');
        if (path) {
          if (entry.isIntersecting) {
            path.classList.add('is-animating');
          } else {
            path.classList.remove('is-animating');
          }
        }
      });
    }, {
      root: null,
      threshold: 0.5 // Triggers at 50% visibility
    });

    logoContainers.forEach(container => {
      const path = container.querySelector('.logo-path');
      if (path) {
        // Calculate and set dash array independently for every logo on the page
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        logoObserver.observe(container);
      }
    });
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

  /* 8. Contact Page Hover & Reset Interactions */
  const channelBtns = document.querySelectorAll('.channel-btn');
  const displayContents = document.querySelectorAll('.display-content');

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

      // Binds mouse enter, clicks, and instantaneous mobile touches 
      // (passive: true ensures we don't accidentally block the user from scrolling)
      ['mouseenter', 'click', 'touchstart'].forEach(evt => {
        btn.addEventListener(evt, () => {
          activateContactButton(btn);
          activateContactPanel(targetId);
        }, { passive: true });
      });
    });

    // Clicking ANYWHERE else on the page resets the display to default
    document.addEventListener('click', (e) => {
      // Check if the click happened outside the buttons AND outside the display box
      if (!e.target.closest('.contact-channels') && !e.target.closest('.contact-display')) {
        activateContactButton(null);
        activateContactPanel('info-default');
      }
    });
  }

  /* 9. Sticky Navigation Glassmorphism */
  const navHeader = document.querySelector('.nav-header');
  
  if (navHeader) {
    window.addEventListener('scroll', () => {
      // If the user scrolls down more than 50 pixels, turn on the glass effect
      if (window.scrollY > 50) {
        navHeader.classList.add('is-scrolled');
      } else {
        // If they scroll back to the very top, make it fully transparent again
        navHeader.classList.remove('is-scrolled');
      }
    }, { passive: true }); // passive: true keeps the browser scrolling buttery smooth
  }

  // 10. Dynamically locks --news-bar-width to the exact distance from viewport-left
  function syncNewsBarWidth() {
    const bar = document.querySelector('.news-header-bar');
    const wrapper = document.querySelector('.news-title-wrapper');
    if (!bar || !wrapper) return;

    // bar.getBoundingClientRect().left measures from viewport-left
    // unaffected by the wrapper's translateX entry animation
    const visibleWidth = bar.getBoundingClientRect().left + wrapper.offsetWidth;
    wrapper.style.setProperty('--news-bar-width', `${visibleWidth}px`);
  }

  window.addEventListener('resize', syncNewsBarWidth);
  window.addEventListener('DOMContentLoaded', syncNewsBarWidth);


  /* 11. Research Page Category Filtering (Multi-Selection Enabled) */
  const filterBtns = document.querySelectorAll('.research-filter-bar .filter-btn');
  const researchEntries = document.querySelectorAll('.research-entry');
  const researchStream = document.getElementById('researchStream');
  const emptyState = document.getElementById('streamEmptyState');
  const resetBtn = document.getElementById('resetFilterBtn');

  if (filterBtns.length > 0 && researchEntries.length > 0) {
    const allBtn = document.querySelector('.research-filter-bar .filter-btn[data-filter="all"]');

    function getActiveFilters() {
      const active = [];
      filterBtns.forEach(btn => {
        const f = btn.getAttribute('data-filter');
        if (f !== 'all' && btn.classList.contains('active')) {
          active.push(f);
        }
      });
      return active;
    }

    function applyFilters() {
      const activeFilters = getActiveFilters();
      let visibleCount = 0;

      researchEntries.forEach(entry => {
        const category = entry.getAttribute('data-category');
        if (activeFilters.length === 0 || activeFilters.includes(category)) {
          entry.classList.remove('is-hidden');
          visibleCount++;
        } else {
          entry.classList.add('is-hidden');
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }

      if (researchStream) {
        if (visibleCount === 0) {
          researchStream.classList.add('is-empty');
        } else {
          researchStream.classList.remove('is-empty');
        }
      }
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        if (filter === 'all') {
          // Clicking "All" deselects all individual category filters
          filterBtns.forEach(b => b.classList.remove('active'));
          if (allBtn) allBtn.classList.add('active');
        } else {
          // Clicking an individual category toggles it
          if (btn.classList.contains('active')) {
            // Disable this filter
            btn.classList.remove('active');
            // If no filters are active now, fall back to "All"
            const remaining = getActiveFilters();
            if (remaining.length === 0 && allBtn) {
              allBtn.classList.add('active');
            }
          } else {
            // Enable this filter
            btn.classList.add('active');
            // Deactivate "All" since a specific filter is now on
            if (allBtn) {
              allBtn.classList.remove('active');
            }
          }
        }

        applyFilters();
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        if (allBtn) {
          allBtn.classList.add('active');
        }
        applyFilters();
      });
    }
  }

  /* 12. Research BibTeX Citation Copy */
  const copyBibtexBtn = document.getElementById('copyBibtexBtn');
  const bibtexSnippet = document.getElementById('bibtexSnippet');

  if (copyBibtexBtn && bibtexSnippet) {
    copyBibtexBtn.addEventListener('click', () => {
      const text = bibtexSnippet.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const originalHtml = copyBibtexBtn.innerHTML;
        copyBibtexBtn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> <span class="copy-text">Copied!</span>';
        copyBibtexBtn.classList.add('copied');

        setTimeout(() => {
          copyBibtexBtn.innerHTML = originalHtml;
          copyBibtexBtn.classList.remove('copied');
        }, 2200);
      }).catch(err => {
        console.error('Failed to copy BibTeX: ', err);
      });
    });
  }

  /* 13. Discretionary Soft-Hyphenation for Justified Blocks */
  // Under the W3C CSS Text Module specification, browsers intentionally skip
  // automatic hyphenation on Capitalized words / Title-Case terms to avoid
  // breaking proper nouns. Furthermore, words with existing hyphens (e.g. Concept-Based)
  // are only broken at the hyphen.
  // This helper injects discretionary soft hyphens (\u00AD) into long capitalized words,
  // compound terms, and styled text spans inside justified hyphenated containers.
  // Soft hyphens are invisible unless the browser needs to wrap the line at that point.
  (function initJustifiedSoftHyphens() {
    const ACADEMIC_WORDS = {
      'interpretability': 'in-ter-pret-abil-i-ty',
      'interpreting': 'in-ter-pret-ing',
      'interpret': 'in-ter-pret',
      'interpretation': 'in-ter-pre-ta-tion',
      'decomposition': 'de-com-po-si-tion',
      'decomposing': 'de-com-pos-ing',
      'trustworthy': 'trust-wor-thy',
      'generative': 'gen-er-a-tive',
      'bottleneck': 'bot-tle-neck',
      'bottlenecks': 'bot-tle-necks',
      'contrastive': 'con-tras-tive',
      'explanations': 'ex-pla-na-tions',
      'explanation': 'ex-pla-na-tion',
      'architecture': 'ar-chi-tec-ture',
      'architectures': 'ar-chi-tec-tures',
      'architectural': 'ar-chi-tec-tur-al',
      'evaluation': 'eval-u-a-tion',
      'evaluations': 'eval-u-a-tions',
      'evaluating': 'eval-u-at-ing',
      'embedding': 'em-bed-ding',
      'embeddings': 'em-bed-dings',
      'representation': 'rep-re-sen-ta-tion',
      'representations': 'rep-re-sen-ta-tions',
      'classification': 'clas-si-fi-ca-tion',
      'transformers': 'trans-form-ers',
      'transformer': 'trans-form-er',
      'retrieval': 're-triev-al',
      'generation': 'gen-er-a-tion',
      'generations': 'gen-er-a-tions',
      'activation': 'ac-ti-va-tion',
      'activations': 'ac-ti-va-tions',
      'transparent': 'trans-par-ent',
      'transparency': 'trans-par-en-cy',
      'traceability': 'trace-abil-i-ty',
      'traceable': 'trace-a-ble',
      'exploratory': 'ex-plor-a-to-ry',
      'intermediate': 'in-ter-me-di-ate',
      'contradictory': 'con-tra-dic-to-ry',
      'contradiction': 'con-tra-dic-tion',
      'conflicting': 'con-flict-ing',
      'reinforcement': 're-in-force-ment',
      'superposition': 'su-per-po-si-tion',
      'generalization': 'gen-er-al-i-za-tion',
      'generalize': 'gen-er-al-ize',
      'robustness': 'ro-bust-ness',
      'probabilistic': 'prob-a-bi-lis-tic',
      'optimization': 'op-ti-mi-za-tion',
      'optimizing': 'op-ti-miz-ing',
      'hallucinations': 'hal-lu-ci-na-tions',
      'hallucination': 'hal-lu-ci-na-tion',
      'mitigating': 'mit-i-gat-ing',
      'mitigation': 'mit-i-ga-tion',
      'synthesizes': 'syn-the-siz-es',
      'synthesizing': 'syn-the-siz-ing',
      'repositories': 're-pos-i-to-ries',
      'repository': 're-pos-i-to-ry',
      'concept': 'con-cept',
      'concepts': 'con-cepts',
      'conceptual': 'con-cep-tu-al',
      'analysis': 'anal-y-sis',
      'analyses': 'anal-y-ses',
      'distribution': 'dis-tri-bu-tion',
      'distributions': 'dis-tri-bu-tions',
      'attribution': 'at-tri-bu-tion',
      'attributions': 'at-tri-bu-tions',
      'surrogate': 'sur-ro-gate',
      'surrogates': 'sur-ro-gates',
      'interpreter': 'in-ter-pret-er',
      'interpreters': 'in-ter-pret-ers',
      'proprietary': 'pro-pri-e-tary',
      'continuous': 'con-tin-u-ous',
      'competitive': 'com-pet-i-tive',
      'performance': 'per-form-ance',
      'parameter': 'pa-ram-e-ter',
      'parameters': 'pa-ram-e-ters',
      'efficient': 'ef-fi-cient',
      'framework': 'frame-work',
      'frameworks': 'frame-works',
      'consistency': 'con-sis-ten-cy',
      'consistent': 'con-sis-tent',
      'comprehensibility': 'com-pre-hen-si-bil-i-ty',
      'comprehensibilities': 'com-pre-hen-si-bil-i-ties',
      'internationalization': 'in-ter-na-tion-al-i-za-tion',
      'investigating': 'in-ves-ti-gat-ing',
      'investigation': 'in-ves-ti-ga-tion',
      'investigations': 'in-ves-ti-ga-tions',
      'benchmarks': 'bench-marks',
      'benchmark': 'bench-mark',
      'experimental': 'ex-per-i-men-tal',
      'experiments': 'ex-per-i-ments',
      'experiment': 'ex-per-i-ment',
      'seminars': 'sem-i-nars',
      'seminar': 'sem-i-nar',
      'unsupervised': 'un-su-per-vised',
      'supervised': 'su-per-vised',
      'latents': 'la-tents',
      'latent': 'la-tent',
      'ambiguity': 'am-bi-gui-ty',
      'ambiguities': 'am-bi-gui-ties',
      'adversarial': 'ad-ver-sar-i-al',
      'distortions': 'dis-tor-tions',
      'distorted': 'dis-tort-ed',
      'subtly': 'sub-tly',
      'distribute': 'dis-trib-ute',
      'distributed': 'dis-trib-ut-ed',
      'distributing': 'dis-trib-ut-ing',
      'routing': 'rout-ing',
      'failure': 'fail-ure',
      'failures': 'fail-ures'
    };

    function hyphenateWord(token) {
      const match = token.match(/^([^a-zA-Z]*)([a-zA-Z\-]+)([^a-zA-Z]*)$/);
      if (!match) return token;
      const lead = match[1];
      const core = match[2];
      const trail = match[3];

      if (core.length < 6 || core.includes('\u00AD')) return token;

      // Handle compound words with hyphens (e.g. Concept-Based)
      if (core.includes('-')) {
        const parts = core.split('-');
        return lead + parts.map(p => hyphenateWord(p)).join('-') + trail;
      }

      const lower = core.toLowerCase();
      if (ACADEMIC_WORDS[lower]) {
        const pattern = ACADEMIC_WORDS[lower];
        let result = '';
        let pIdx = 0;
        for (let i = 0; i < core.length; i++) {
          result += core[i];
          pIdx++;
          while (pIdx < pattern.length && pattern[pIdx] === '-') {
            result += '\u00AD';
            pIdx++;
          }
        }
        return lead + result + trail;
      }

      // Morphological fallback for other long words
      let res = core
        .replace(/^(anti|auto|contra|counter|hyper|inter|intro|macro|micro|multi|pseudo|retro|semi|super|trans|under)([a-zA-Z]{3,})/i, '$1\u00AD$2')
        .replace(/([a-zA-Z]{3,})(ability|ibility|ational|ation|tional|tion|sional|sion|fully|fulness|lessness|less|ness|ments|ment|ible|able|ical|ally|ative|itative|atory)$/i, '$1\u00AD$2');

      return lead + res + trail;
    }

    const containers = document.querySelectorAll(
      '.research-content, .card-summary, .about-bio p, .highlight-desc, .display-content p, #focus .module-body p, .full-width-cta .cta-text p, .text-justified-hyphens'
    );

    containers.forEach(container => {
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName.toLowerCase();
          if (['code', 'pre', 'script', 'style', 'svg', 'math', 'kbd', 'samp'].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest('pre, code, svg, math')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      const textNodes = [];
      let n;
      while ((n = walker.nextNode())) {
        textNodes.push(n);
      }

      textNodes.forEach(node => {
        const text = node.textContent;
        if (!text || !/[a-zA-Z]{6,}/.test(text)) return;
        const modified = text.split(/(\s+)/).map(token => {
          if (!token || !/[a-zA-Z]/.test(token)) return token;
          return hyphenateWord(token);
        }).join('');
        if (modified !== text) {
          node.textContent = modified;
        }
      });
    });
  })();

}, false);
