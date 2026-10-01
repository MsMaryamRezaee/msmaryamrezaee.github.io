---
layout: default
title: Contact
description: Ways to find me. Do reach out if you’re interested in collaborating.
---

<div class="contact-wrapper">
  <div id="contact-particles"></div>

  <div class="contact-grid">

    <div class="contact-channels">
      <h1 class="contact-title">Contact Channels</h1>
      
      <div class="channel-btn" data-target="info-email">
        <div class="btn-left"><i class="fa-solid fa-envelope" aria-hidden="true"></i> E-Mail</div>
        <div class="btn-right">PROFESSIONAL CHAT</div>
      </div>
      
      <div class="channel-btn" data-target="info-telegram">
        <div class="btn-left"><i class="fa-brands fa-telegram" aria-hidden="true"></i> Telegram</div>
        <div class="btn-right">CASUAL CHAT</div>
      </div>
      
      <div class="channel-btn" data-target="info-github">
        <div class="btn-left"><i class="fa-brands fa-github-alt" aria-hidden="true"></i> GitHub</div>
        <div class="btn-right">WORK BASE</div>
      </div>
      
      <div class="channel-btn" data-target="info-tumblr">
        <div class="btn-left"><i class="fa-brands fa-tumblr" aria-hidden="true"></i> Tumblr</div>
        <div class="btn-right">PERSONAL BLOG</div>
      </div>
    </div>

    <div class="contact-display">
      <div class="display-screen">
        
        <div class="display-content active" id="info-default">
          <h3>
            <span class="title-primary"><i class="fa fa-terminal fa-legacy" aria-hidden="true"></i>System Ready</span>
          </h3>
          <p>Hover over a contact channel to view descriptions and direct links. Click anywhere on the screen to disable selection.</p>
        </div>

        <div class="display-content" id="info-email">
          <h3>
            <span class="title-primary">E-Mail</span>
            <span class="title-secondary">Professional Chat</span>
          </h3>
          <p>My preferred channel for professional inquiries and discussions. Inbox is frequently monitored; however, since this route is for long-form communication, it may take me a bit of time to respond properly.</p>
          <a href="mailto:{{site.email}}" class="action-link" target="_blank" rel="noopener noreferrer">{{site.email}}</a>
        </div>

        <div class="display-content" id="info-telegram">
          <h3>
            <span class="title-primary">Telegram</span>
            <span class="title-secondary">Casual Chat</span>
          </h3>
          <p>For a more casual, quick chat, hit me up on Telegram. I check it regularly and, given its nature, tend to respond much faster through it—unless I happen to be buried deep in work, of course.</p>
          <a href="https://telegram.me/{{site.telegram_username}}" class="action-link" target="_blank" rel="noopener noreferrer">telegram.me/{{site.telegram_username}}</a>
        </div>

        <div class="display-content" id="info-github">
          <h3>
            <span class="title-primary">GitHub</span>
            <span class="title-secondary">Work Base</span>
          </h3>
          <p>Not a messaging platform, but if you want to find me for collaborative projects or trace my open-source work, my profile is available—I make most things public.</p>
          <a href="https://github.com/{{site.github_username}}" class="action-link" target="_blank" rel="noopener noreferrer">github.com/{{site.github_username}}</a>
        </div>

        <div class="display-content" id="info-tumblr">
          <h3>
            <span class="title-primary">Tumblr</span>
            <span class="title-secondary">Personal Blog</span>
          </h3>
          <p>This would be my personal space for journaling, writing, and art. You can explore the blog to find more personal ways of reaching out; the space has its own dedicated contact page.</p>
          <a href="{{site.me_url | default: 'https://me.maryamrezaee.me'}}" class="action-link" target="_blank" rel="noopener noreferrer">tumblr.com/{{site.tumblr_username}}</a>
        </div>

      </div>
    </div>

  </div>
</div>