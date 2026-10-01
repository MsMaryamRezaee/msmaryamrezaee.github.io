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
        <i class="fa fa-envelope" aria-hidden="true"></i> E-Mail | Professional Chat 
      </a>
      
      <a class="channel-btn" data-target="info-telegram" href="https://telegram.me/{{site.telegram_username}}" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-telegram" aria-hidden="true"></i> Telegram | Casual Chat
      </a>
      
      <a class="channel-btn" data-target="info-github" href="https://github.com/{{site.github_username}}" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-github-alt" aria-hidden="true"></i> GitHub | Work Base
      </a>
      
      <a class="channel-btn" data-target="info-tumblr" href="{{site.me_url | default: 'https://me.maryamrezaee.me'}}" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-tumblr" aria-hidden="true"></i> Tumblr | Personal Blog
      </a>
    </div>

    <div class="contact-display">
      <div class="display-screen">
        
        <div class="display-content active" id="info-default">
          <h3><i class="fa fa-terminal" aria-hidden="true"></i> System Ready</h3>
          <p>Hover over a communication channel on the left to view response protocols, engagement guidelines, and direct links.</p>
        </div>

        <div class="display-content" id="info-email">
          <h3>E-Mail | Professional Chat</h3>
          <p>My preferred channel for professional inquiries and discussions. Inbox is frequently monitored; however, since this route is for long-form communication, it may take me a bit of time to respond properly.</p>
        </div>

        <div class="display-content" id="info-telegram">
          <h3>Telegram | Casual Chat</h3>
          <p>For a more casual, quick chat, hit me up on Telegram. I check it regularly and, given its nature, tend to respond much faster through it—unless I happen to be buried deep in work, of course.</p>
        </div>

        <div class="display-content" id="info-github">
          <h3>GitHub | Work Base</h3>
          <p>Not a messaging platform, but if you want to find me for collaborative projects or trace my open-source work, my profile is available—I make most thing public.</p>
        </div>

        <div class="display-content" id="info-tumblr">
          <h3>Tumblr | Personal Blog</h3>
          <p>This would be my personal space for journaling, writing, and art. You can explore the blog to find more personal ways of reaching out; the space has its own dedicated contact page.</p>
        </div>

      </div>
    </div>

  </div>
</div>