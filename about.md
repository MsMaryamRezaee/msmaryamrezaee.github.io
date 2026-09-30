<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>about.md Source Code Utility</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --bg-color: #121221;
            --text-primary: #EAEAEA;
            --text-secondary: #B3B3B3;
            --accent-color: #bb86fc;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-primary);
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
        }

        .container {
            width: 100%;
            max-width: 900px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        h1 {
            color: var(--accent-color);
            margin: 0;
            font-weight: 600;
            text-align: center;
            letter-spacing: 1px;
        }

        p.instructions {
            text-align: center;
            color: var(--text-secondary);
            margin: 0 0 10px 0;
            line-height: 1.5;
        }

        textarea {
            width: 100%;
            height: 500px;
            background-color: rgba(255, 255, 255, 0.05);
            color: var(--text-primary);
            border: 2px solid rgba(187, 134, 252, 0.3);
            border-radius: 8px;
            padding: 20px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
            line-height: 1.6;
            resize: vertical;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.3s ease;
        }

        textarea:focus {
            border-color: var(--accent-color);
        }

        button {
            background-color: transparent;
            color: var(--accent-color);
            border: 2px solid var(--accent-color);
            border-radius: 8px;
            padding: 15px 30px;
            font-size: 1.1rem;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
            display: block;
            margin: 0 auto;
            width: 100%;
            max-width: 400px;
        }

        button:hover {
            background-color: var(--accent-color);
            color: var(--bg-color);
            box-shadow: 0 4px 15px rgba(187, 134, 252, 0.3);
        }

        button:active {
            transform: scale(0.98);
        }

        button.success {
            background-color: #4ade80;
            border-color: #4ade80;
            color: var(--bg-color);
            box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>about.md Source Code</h1>
        <p class="instructions">Click the button below to safely copy the raw code, then paste it directly into your <strong>about.md</strong> file in VS Code.</p>
        
        <textarea id="source-code" readonly>---
layout: page
title: About Me
description: A brief summary of my academic background, research interests, and personal journey into AI.
---

<!-- BIO & IMAGE SECTION -->
<div class="about-hero">
  <div class="about-bio js-reveal">
    <h2>Hello, I'm Maryam.</h2>
    <p>
      [PLACEHOLDER] I am a researcher navigating the chaotic intersection of LLM Interpretability and Cognitively-Inspired AI. I don’t just want models to generate text; I want to understand and control how they do it. My journey began with theoretical narrative algorithms and has evolved into rigorous concept-based interpretability. 
    </p>
    <p>
      [PLACEHOLDER] When I'm not tracing Concept Activation Vectors or debugging neural architectures, you can find me exploring the philosophical implications of artificial reasoning, customizing operating systems, or dissecting literary formulas. My ultimate goal is to bridge the gap between statistical probability and human-aligned logic.
    </p>
  </div>
  
  <div class="about-image-container js-reveal">
    <div class="tech-frame">
      <img src="/assets/img/Profile.jpg" alt="Maryam Rezaee">
    </div>
  </div>
</div>

<hr class="section-divider">

<!-- EDUCATION TIMELINE -->
<div class="about-section">
  <h2 class="section-title">Education & Courses</h2>
  <div class="timeline">
    
    <div class="timeline-item js-reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <span class="timeline-date">2024 - Present</span>
        <h3>M.Sc. in Computer Science</h3>
        <h4>Sharif University of Technology</h4>
        <p>[PLACEHOLDER] Focusing on LLM Interpretability, Generative Models, and Neurosymbolic Architectures. Thesis: Investigating the Mechanisms Behind Output Generation in Large Language Models.</p>
      </div>
    </div>

    <div class="timeline-item js-reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <span class="timeline-date">2019 - 2023</span>
        <h3>B.Sc. in [Your Major]</h3>
        <h4>[Your University]</h4>
        <p>[PLACEHOLDER] Foundation in data structures, algorithms, and cognitive science principles. Capstone project involved [Project Name].</p>
      </div>
    </div>

    <div class="timeline-item js-reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <span class="timeline-date">Summer 2022</span>
        <h3>Advanced Machine Learning Specialization</h3>
        <h4>[Institution / Platform]</h4>
        <p>[PLACEHOLDER] Intensive coursework covering deep learning architectures, reinforcement learning, and statistical modeling.</p>
      </div>
    </div>

  </div>
</div>

<hr class="section-divider">

<!-- TECHNICAL SKILLS (TABS & BARS) -->
<div class="about-section">
  <h2 class="section-title">Technical Proficiency</h2>
  
  <div class="skills-wrapper js-reveal">
    <!-- Tabs Navigation -->
    <div class="skills-tabs">
      <button class="tab-btn active" data-tab="ai-ml">AI & ML</button>
      <button class="tab-btn" data-tab="languages">Languages</button>
      <button class="tab-btn" data-tab="tools">Tools & Systems</button>
    </div>

    <!-- Tab Content: AI & ML -->
    <div class="tab-content active" id="ai-ml">
      <div class="skills-grid">
        <div class="skill-row">
          <span class="skill-name">PyTorch</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 95%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">TensorFlow</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 85%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">Hugging Face</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 90%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">Scikit-Learn</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 80%;"></div></div>
        </div>
      </div>
    </div>

    <!-- Tab Content: Languages -->
    <div class="tab-content" id="languages">
      <div class="skills-grid">
        <div class="skill-row">
          <span class="skill-name">Python</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 98%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">C++ / C</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 70%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">JavaScript / HTML / CSS</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 85%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">Bash / Shell</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 75%;"></div></div>
        </div>
      </div>
    </div>

    <!-- Tab Content: Tools -->
    <div class="tab-content" id="tools">
      <div class="skills-grid">
        <div class="skill-row">
          <span class="skill-name">Git / Version Control</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 90%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">Linux OS Management</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 85%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">Docker</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 60%;"></div></div>
        </div>
        <div class="skill-row">
          <span class="skill-name">LaTeX</span>
          <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 95%;"></div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="section-divider">

<!-- AWARDS AND SPOKEN LANGUAGES (GRID) -->
<div class="about-section bottom-grids">
  
  <div class="grid-column js-reveal">
    <h2 class="section-title">Awards & Honors</h2>
    <ul class="styled-list">
      <li>
        <strong>[PLACEHOLDER] Top 1% in National University Entrance Exam</strong>
        <span>Ranked out of 100,000+ participants nationwide (2019).</span>
      </li>
      <li>
        <strong>[PLACEHOLDER] Research Grant Recipient</strong>
        <span>Awarded by [Institution] for project on Interpretability (2025).</span>
      </li>
      <li>
        <strong>[PLACEHOLDER] Dean's Honor List</strong>
        <span>Achieved top tier GPA across 8 consecutive semesters.</span>
      </li>
    </ul>
  </div>

  <div class="grid-column js-reveal">
    <h2 class="section-title">Spoken Languages</h2>
    <ul class="styled-list">
      <li>
        <strong>Persian</strong>
        <span>Native / Bilingual Proficiency</span>
      </li>
      <li>
        <strong>English</strong>
        <span>Full Professional Proficiency (IELTS/TOEFL: [Score])</span>
      </li>
      <li>
        <strong>[Third Language, e.g., German/Arabic]</strong>
        <span>Elementary Proficiency (A2)</span>
      </li>
    </ul>
  </div>

</div></textarea>
        
        <button id="copy-btn">Copy to Clipboard</button>
    </div>

    <script>
        document.getElementById('copy-btn').addEventListener('click', function() {
            const textArea = document.getElementById('source-code');
            const btn = document.getElementById('copy-btn');
            
            // Select the text area content
            textArea.select();
            textArea.setSelectionRange(0, 99999); // For mobile devices

            try {
                // Execute the copy command
                document.execCommand('copy');
                
                // Deselect the text
                window.getSelection().removeAllRanges();
                
                // Visual feedback
                const originalText = btn.innerText;
                btn.innerText = 'Copied!';
                btn.classList.add('success');
                
                // Revert button back after 2 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('success');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
                btn.innerText = 'Failed to copy';
                setTimeout(() => {
                    btn.innerText = 'Copy to Clipboard';
                }, 2000);
            }
        });
    </script>
</body>
</html>