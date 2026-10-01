---
layout: default
title: Contact
description: Communication channels and engagement protocols.
---

<div class="contact-wrapper">
  <div id="contact-particles"></div>

  <div class="contact-grid">

    <div class="contact-channels">
      <h1 class="contact-title">Initialize Contact</h1>
      
      <a class="channel-btn" data-target="info-email" href="mailto:{{site.email}}">
        <i class="fa fa-envelope" aria-hidden="true"></i> Email
      </a>
      
      <a class="channel-btn" data-target="info-telegram" href="https://telegram.me/{{site.telegram_username}}" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-telegram" aria-hidden="true"></i> Telegram
      </a>
      
      <a class="channel-btn" data-target="info-github" href="https://github.com/{{site.github_username}}" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-github-alt" aria-hidden="true"></i> GitHub
      </a>
      
      <a class="channel-btn" data-target="info-tumblr" href="{{site.me_url | default: 'https://me.maryamrezaee.me'}}" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-tumblr" aria-hidden="true"></i> Personal Blog
      </a>
    </div>

    <div class="contact-display">
      <div class="display-screen">
        
        <div class="display-content active" id="info-default">
          <h3><i class="fa fa-terminal" aria-hidden="true"></i> System Ready</h3>
          <p>Hover over a communication channel on the left to view response protocols, engagement guidelines, and direct links.</p>
        </div>

        <div class="display-content" id="info-email">
          <h3>Electronic Mail</h3>
          <p>Email is my preferred channel for professional inquiries and deep-dive discussions. I monitor my inbox frequently; however, since I reserve this space for long-form, thoughtful communication, it may take me a bit of time to craft a comprehensive response.</p>
        </div>

        <div class="display-content" id="info-telegram">
          <h3>Telegram Secure Chat</h3>
          <p>For a more casual, quick chat, hit me up on Telegram. I check it regularly and, given its casual nature, I tend to respond much faster here—unless I am currently buried deep in research or code.</p>
        </div>

        <div class="display-content" id="info-github">
          <h3>GitHub Repositories</h3>
          <p>GitHub isn't a messaging platform, but if you want to find me for collaborative projects, trace my open-source work, or inspect my code quality, this is the repository of truth.</p>
        </div>

        <div class="display-content" id="info-tumblr">
          <h3>Mer of Night</h3>
          <p>Welcome to my personal ecosystem for journaling, poetry, and photography. You can explore the blog to find more personal ways of reaching out; the space has its own dedicated contact page.</p>
        </div>

      </div>
    </div>

  </div>
</div>