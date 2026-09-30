---
layout: null
permalink: /cv/
---
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting to CV | Maryam Rezaee</title>
  <link rel="canonical" href="/assets/files/MaryamRezaeeCV2025.pdf">
  
  <!-- Fallback meta-refresh for environments where JavaScript is disabled -->
  <noscript>
    <meta http-equiv="refresh" content="0; url=/assets/files/MaryamRezaeeCV2025.pdf">
  </noscript>

  <!-- Google Font: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg-color: #121221;
      --card-bg: rgba(26, 26, 46, 0.75);
      --border-color: rgba(255, 255, 255, 0.1);
      --text-main: #EAEAEA;
      --text-muted: #9E9EB8;
      --accent-color: #bb86fc;
      --accent-hover: #cf9eff;
      --accent-glow: rgba(187, 134, 252, 0.25);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      overflow-x: hidden;
      background-image: 
        radial-gradient(circle at 50% 20%, rgba(187, 134, 252, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(3, 218, 198, 0.04) 0%, transparent 40%);
    }

    .redirect-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      padding: 40px 32px;
      max-width: 480px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
      animation: fadeIn 0.4s ease-out forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(12px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .icon-container {
      width: 64px;
      height: 64px;
      margin: 0 auto 24px;
      border-radius: 50%;
      background: rgba(187, 134, 252, 0.12);
      border: 1px solid rgba(187, 134, 252, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .icon-container svg {
      width: 30px;
      height: 30px;
      fill: none;
      stroke: var(--accent-color);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .pulse-ring {
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 50%;
      border: 2px solid var(--accent-color);
      opacity: 0;
      animation: pulse 1.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.9);
        opacity: 0.8;
      }
      100% {
        transform: scale(1.35);
        opacity: 0;
      }
    }

    h1 {
      font-size: 1.35rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      margin-bottom: 10px;
      color: #FFFFFF;
    }

    p.status-text {
      font-size: 0.95rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 24px;
    }

    .action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background-color: var(--accent-color);
      color: #121221;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 10px;
      transition: all 0.2s ease;
      box-shadow: 0 4px 14px var(--accent-glow);
      cursor: pointer;
      border: none;
      width: 100%;
    }

    .action-btn:hover {
      background-color: var(--accent-hover);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(187, 134, 252, 0.4);
    }

    .path-indicator {
      display: inline-block;
      margin-top: 20px;
      font-size: 0.8rem;
      color: var(--text-muted);
      background: rgba(255, 255, 255, 0.04);
      padding: 6px 12px;
      border-radius: 6px;
      word-break: break-all;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .preview-badge {
      display: none;
      margin-top: 24px;
      padding: 12px 14px;
      background: rgba(3, 218, 198, 0.08);
      border: 1px solid rgba(3, 218, 198, 0.25);
      border-radius: 8px;
      font-size: 0.85rem;
      color: #70EFDE;
      text-align: left;
      line-height: 1.4;
    }

    .copy-btn {
      margin-top: 10px;
      background: rgba(255, 255, 255, 0.08);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s ease;
      width: 100%;
    }

    .copy-btn:hover {
      background: rgba(255, 255, 255, 0.16);
    }

    .toast {
      position: fixed;
      bottom: 24px;
      background: #2a2a44;
      color: #fff;
      padding: 10px 18px;
      border-radius: 8px;
      font-size: 0.85rem;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease;
      pointer-events: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body>

  <main class="redirect-card">
    <div class="icon-container">
      <div class="pulse-ring"></div>
      <svg viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    </div>

    <h1>Redirecting to CV...</h1>
    <p class="status-text">
      Taking you to Maryam Rezaee's Curriculum Vitae. You will be redirected momentarily.
    </p>

    <a id="cv-link" href="/assets/files/MaryamRezaeeCV2025.pdf" class="action-btn">
      <span>Open CV Document</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>

    <div class="path-indicator">
      Target: <code>/assets/files/MaryamRezaeeCV2025.pdf</code>
    </div>

    <div id="preview-banner" class="preview-badge">
      <strong>Editor Preview Mode Active:</strong>
      <div style="margin-top: 4px; color: #b0e5de;">
        Automatic redirection is paused in this preview pane to prevent a 404 error. On your published GitHub Pages site (at <code>maryamrezaee.me/cv</code>), this page instantly redirects in 0ms.
      </div>
      <button id="copy-code-btn" class="copy-btn" style="margin-top: 10px;">
        Copy Pristine Jekyll Code to Clipboard
      </button>
    </div>
  </main>

  <div id="toast" class="toast">Code copied to clipboard!</div>

  <script>
    (function() {
      const targetUrl = "/assets/files/MaryamRezaeeCV2025.pdf";

      // Detect whether the document is loaded inside a sandboxed editor preview iframe
      // This prevents the editor preview tab from immediately 404ing while testing
      const isEmbeddedPreview = (window.self !== window.top) || 
                                (window.location.hostname === "localhost") || 
                                (window.location.protocol === "file:");

      if (!isEmbeddedPreview) {
        // PRODUCTION MODE on maryamrezaee.me:
        // Use replace() so the user's browser back button doesn't trap them in a redirect loop
        window.location.replace(targetUrl);
      } else {
        // PREVIEW / EDITOR MODE:
        // Show the preview banner and helper utilities
        const banner = document.getElementById("preview-banner");
        if (banner) {
          banner.style.display = "block";
        }
      }

      // Safe clipboard copy mechanism for iframe environments
      const copyBtn = document.getElementById("copy-code-btn");
      if (copyBtn) {
        copyBtn.addEventListener("click", function() {
          const rawCode = [
            '---',
            'layout: null',
            'permalink: /cv/',
            '---',
            '<html lang="en">',
            '<head>',
            '  <meta charset="utf-8">',
            '  <meta http-equiv="refresh" content="0; url=/assets/files/MaryamRezaeeCV2025.pdf">',
            '  <title>Redirecting to CV...</title>',
            '  <script>',
            '    window.location.replace("/assets/files/MaryamRezaeeCV2025.pdf");',
            '  <\/script>',
            '</head>',
            '<body style="background-color: #121221; color: #EAEAEA; font-family: sans-serif; text-align: center; padding-top: 50px;">',
            '  Redirecting to the latest CV...',
            '  <br><br>',
            '  <a href="/assets/files/MaryamRezaeeCV2025.pdf" style="color: #bb86fc;">Click here if you are not redirected automatically.</a>',
            '</body>',
            '</html>'
          ].join('\n');

          const tempTextArea = document.createElement("textarea");
          tempTextArea.value = rawCode;
          tempTextArea.style.position = "fixed";
          tempTextArea.style.left = "-9999px";
          document.body.appendChild(tempTextArea);
          tempTextArea.select();
          
          try {
            document.execCommand("copy");
            const toast = document.getElementById("toast");
            toast.classList.add("show");
            setTimeout(function() {
              toast.classList.remove("show");
            }, 2500);
          } catch (err) {
            console.error("Could not copy text: ", err);
          } finally {
            document.body.removeChild(tempTextArea);
          }
        });
      }
    })();
  </script>
</body>
</html>