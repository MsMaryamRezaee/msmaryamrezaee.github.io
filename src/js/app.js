/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({/* some options */});

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        // NOTE: This color must be manually synced with $text-primary in _vars.scss
        "value": "#EAEAEA"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        // NOTE: This color must be manually synced with $text-primary in _vars.scss
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
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      nb: 80
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  /* particlesJS.load for FOOTER */
  particlesJS('footer-particles', {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#EAEAEA"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
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
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      "nb": 80
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
/**
   * Reveal-on-scroll animation
   * Inspired by the Neumorphism theme
   */
  const revealElements = document.querySelectorAll('.js-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the element is in view, add the 'is-visible' class
        entry.target.classList.add('is-visible');
        
        // We don't need to keep watching it
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // observes intersections relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the element is visible
  });

  // Tell the observer to watch each of our 'js-reveal' elements
  revealElements.forEach(el => {
    observer.observe(el);
  });

  /**
   * Word-by-Word Reveal Effect (Lighter)
   */
  const sourceElement = document.getElementById('typewriter-source');
  const targetElement = document.getElementById('typewriter-text');

  if (sourceElement && targetElement) {
    // 1. Get the text and split it into words
    const words = sourceElement.textContent.trim().split(/\s+/);

    // 2. Create a <span> for each word and add it to the DOM
    // We do this all at once for performance.
    words.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word;
      targetElement.appendChild(span);
      // Add the space back
      targetElement.appendChild(document.createTextNode(' ')); 
    });

    // 3. Get all the spans we just created
    const spans = targetElement.querySelectorAll('span');

    // 4. Use an observer to start the animation only when it's in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // 5. Stagger the 'is-visible' class addition
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('is-visible');
          }, index * 75); // 75ms delay between each word
        });
        // We're done, so stop observing
        observer.unobserve(targetElement);
      }
    }, { 
      threshold: 0.1 // Start when 10% is visible
    });

    // Start observing the text container
    observer.observe(targetElement);
  }
  
}, false);