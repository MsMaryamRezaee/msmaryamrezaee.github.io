/**
 * ============================================================
 * Minimalist Pill Scrollbar System (Vertical & Horizontal)
 * ============================================================
 * - Unified pill capsule across all devices (desktop and mobile).
 * - Floating inset design: never clings to screen bezels or box frames.
 * - Ultra-lightweight: zero canvas, zero layout thrashing, 120fps smooth.
 * - Applies to global window scroll AND horizontal overflow boxes (like BibTeX).
 * - Pure, elegant, solid pill styling (no glitching, no jitter).
 */

(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // ----------------------------------------------------
  // 1. Global Window Vertical Pill Scrollbar
  // ----------------------------------------------------
  function initVerticalScrollbar() {
    if (document.getElementById('cosmicScrollbar')) {
      return;
    }

    document.documentElement.classList.add('has-cosmic-scrollbar');

    const wrapper = document.createElement('div');
    wrapper.id = 'cosmicScrollbar';
    wrapper.className = 'cosmic-scrollbar-wrapper';
    wrapper.setAttribute('aria-hidden', 'true');

    const track = document.createElement('div');
    track.id = 'cosmicScrollTrack';
    track.className = 'cosmic-scrollbar-track';

    const thumb = document.createElement('div');
    thumb.id = 'cosmicScrollThumb';
    thumb.className = 'cosmic-scrollbar-thumb';

    track.appendChild(thumb);
    wrapper.appendChild(track);
    document.body.appendChild(wrapper);

    let trackHeight = 0;
    let thumbHeight = 36;
    let maxThumbTop = 0;
    let maxScroll = 0;
    let idleTimer = null;
    let isDragging = false;
    let dragStartY = 0;
    let dragStartScrollY = 0;
    let scrollRafId = null;
    let dragRafId = null;
    let pendingScrollY = 0;

    function wakeScrollbar() {
      wrapper.classList.remove('is-idle');
      wrapper.classList.add('is-scrolling');

      if (idleTimer) {
        clearTimeout(idleTimer);
      }

      idleTimer = setTimeout(() => {
        if (!isDragging) {
          wrapper.classList.remove('is-scrolling');
          wrapper.classList.add('is-idle');
        }
      }, 1500);
    }

    function updateGeometry() {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const winHeight = window.innerHeight || document.documentElement.clientHeight;
      maxScroll = Math.max(0, docHeight - winHeight);

      if (maxScroll <= 15) {
        wrapper.classList.remove('is-visible');
        return;
      }

      wrapper.classList.add('is-visible');

      trackHeight = track.clientHeight;
      if (trackHeight <= 0) return;

      const rawThumbHeight = (winHeight / docHeight) * trackHeight;
      thumbHeight = Math.max(36, Math.min(rawThumbHeight, trackHeight * 0.75));
      maxThumbTop = Math.max(1, trackHeight - thumbHeight);

      thumb.style.height = `${thumbHeight}px`;
      updateThumbPosition();
    }

    function updateThumbPosition() {
      if (maxScroll <= 0 || maxThumbTop <= 0) return;
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const progress = Math.max(0, Math.min(1, currentScrollY / maxScroll));
      const currentThumbTop = progress * maxThumbTop;
      thumb.style.transform = `translate3d(-50%, ${currentThumbTop}px, 0)`;
    }

    updateGeometry();
    wrapper.classList.add('is-idle');

    window.addEventListener('scroll', () => {
      if (!scrollRafId) {
        scrollRafId = requestAnimationFrame(() => {
          updateThumbPosition();
          wakeScrollbar();
          scrollRafId = null;
        });
      }
    }, { passive: true });

    thumb.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      thumb.setPointerCapture(e.pointerId);
      isDragging = true;
      dragStartY = e.clientY;
      dragStartScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

      wrapper.classList.add('is-dragging');
      wakeScrollbar();
    });

    thumb.addEventListener('pointermove', (e) => {
      if (!isDragging || maxThumbTop <= 0) return;
      e.preventDefault();

      const deltaY = e.clientY - dragStartY;
      const scrollRatio = deltaY / maxThumbTop;
      pendingScrollY = Math.max(0, Math.min(maxScroll, dragStartScrollY + scrollRatio * maxScroll));

      if (!dragRafId) {
        dragRafId = requestAnimationFrame(() => {
          window.scrollTo(0, pendingScrollY);
          dragRafId = null;
        });
      }

      wakeScrollbar();
    });

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      try {
        thumb.releasePointerCapture(e.pointerId);
      } catch (err) {}
      wrapper.classList.remove('is-dragging');
      wakeScrollbar();
    }

    thumb.addEventListener('pointerup', endDrag);
    thumb.addEventListener('pointercancel', endDrag);

    track.addEventListener('click', (e) => {
      if (e.target === thumb || thumb.contains(e.target) || maxThumbTop <= 0) return;

      const trackRect = track.getBoundingClientRect();
      const clickY = e.clientY - trackRect.top;
      const targetThumbTop = clickY - thumbHeight / 2;
      const progress = Math.max(0, Math.min(1, targetThumbTop / maxThumbTop));

      window.scrollTo({
        top: progress * maxScroll,
        behavior: 'smooth'
      });

      wakeScrollbar();
    });

    document.addEventListener('mousemove', (e) => {
      if (window.innerWidth - e.clientX <= 28) {
        wrapper.classList.remove('is-idle');
        wrapper.classList.add('is-hovered');
      } else if (!isDragging && wrapper.classList.contains('is-hovered')) {
        wrapper.classList.remove('is-hovered');
      }
    }, { passive: true });

    window.addEventListener('resize', updateGeometry, { passive: true });
    window.addEventListener('load', updateGeometry, { passive: true });

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(updateGeometry);
      resizeObserver.observe(document.documentElement);
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }
  }

  // ----------------------------------------------------
  // 2. Horizontal Pill Scrollbar for Boxes (BibTeX, Code Blocks)
  // ----------------------------------------------------
  function initHorizontalScrollbars() {
    const containers = document.querySelectorAll(
      '.bibtex-container, .research-content pre, .horizontal-scroll-container'
    );

    containers.forEach((container) => {
      if (container.dataset.hasHScrollbar) return;
      container.dataset.hasHScrollbar = 'true';

      // Mark container to suppress native scrollbars
      container.classList.add('has-custom-h-scrollbar');

      // Create horizontal pill scrollbar
      const hWrapper = document.createElement('div');
      hWrapper.className = 'cosmic-h-scrollbar';
      hWrapper.setAttribute('aria-hidden', 'true');

      const hTrack = document.createElement('div');
      hTrack.className = 'cosmic-h-track';

      const hThumb = document.createElement('div');
      hThumb.className = 'cosmic-h-thumb';

      hTrack.appendChild(hThumb);
      hWrapper.appendChild(hTrack);

      // Insert directly after container
      container.parentNode.insertBefore(hWrapper, container.nextSibling);

      let isDraggingH = false;
      let dragStartX = 0;
      let dragStartScrollLeft = 0;
      let hMaxScroll = 0;
      let hMaxThumbLeft = 0;
      let hThumbWidth = 36;
      let hTrackWidth = 0;
      let hScrollRaf = null;
      let hDragRaf = null;
      let targetScrollLeft = 0;
      let hIdleTimer = null;

      function updateHGeometry() {
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        hMaxScroll = Math.max(0, scrollWidth - clientWidth);

        if (hMaxScroll <= 5) {
          hWrapper.classList.remove('is-visible');
          return;
        }

        hWrapper.classList.add('is-visible');
        hTrackWidth = hTrack.clientWidth;
        if (hTrackWidth <= 0) return;

        const rawThumbWidth = (clientWidth / scrollWidth) * hTrackWidth;
        hThumbWidth = Math.max(36, Math.min(rawThumbWidth, hTrackWidth * 0.75));
        hMaxThumbLeft = Math.max(1, hTrackWidth - hThumbWidth);

        hThumb.style.width = `${hThumbWidth}px`;
        updateHThumbPosition();
      }

      function updateHThumbPosition() {
        if (hMaxScroll <= 0 || hMaxThumbLeft <= 0) return;
        const currentScrollLeft = container.scrollLeft;
        const progress = Math.max(0, Math.min(1, currentScrollLeft / hMaxScroll));
        const currentThumbLeft = progress * hMaxThumbLeft;
        hThumb.style.transform = `translate3d(${currentThumbLeft}px, -50%, 0)`;
      }

      container.addEventListener('scroll', () => {
        if (!hScrollRaf) {
          hScrollRaf = requestAnimationFrame(() => {
            updateHThumbPosition();
            hWrapper.classList.add('is-scrolling');
            if (hIdleTimer) clearTimeout(hIdleTimer);
            hIdleTimer = setTimeout(() => {
              if (!isDraggingH) hWrapper.classList.remove('is-scrolling');
            }, 1200);
            hScrollRaf = null;
          });
        }
      }, { passive: true });

      hThumb.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        hThumb.setPointerCapture(e.pointerId);
        isDraggingH = true;
        dragStartX = e.clientX;
        dragStartScrollLeft = container.scrollLeft;
        hWrapper.classList.add('is-dragging');
      });

      hThumb.addEventListener('pointermove', (e) => {
        if (!isDraggingH || hMaxThumbLeft <= 0) return;
        e.preventDefault();
        const deltaX = e.clientX - dragStartX;
        const scrollRatio = deltaX / hMaxThumbLeft;
        targetScrollLeft = Math.max(0, Math.min(hMaxScroll, dragStartScrollLeft + scrollRatio * hMaxScroll));

        if (!hDragRaf) {
          hDragRaf = requestAnimationFrame(() => {
            container.scrollLeft = targetScrollLeft;
            hDragRaf = null;
          });
        }
      });

      function endHDrag(e) {
        if (!isDraggingH) return;
        isDraggingH = false;
        try {
          hThumb.releasePointerCapture(e.pointerId);
        } catch (err) {}
        hWrapper.classList.remove('is-dragging');
      }

      hThumb.addEventListener('pointerup', endHDrag);
      hThumb.addEventListener('pointercancel', endHDrag);

      hTrack.addEventListener('click', (e) => {
        if (e.target === hThumb || hThumb.contains(e.target) || hMaxThumbLeft <= 0) return;
        const trackRect = hTrack.getBoundingClientRect();
        const clickX = e.clientX - trackRect.left;
        const targetThumbLeft = clickX - hThumbWidth / 2;
        const progress = Math.max(0, Math.min(1, targetThumbLeft / hMaxThumbLeft));
        container.scrollTo({
          left: progress * hMaxScroll,
          behavior: 'smooth'
        });
      });

      window.addEventListener('resize', updateHGeometry, { passive: true });
      if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(updateHGeometry);
        ro.observe(container);
      }

      updateHGeometry();
    });
  }

  function initAllScrollbars() {
    initVerticalScrollbar();
    initHorizontalScrollbars();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllScrollbars);
  } else {
    initAllScrollbars();
  }
})();
