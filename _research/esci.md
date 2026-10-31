---
layout: research-item
title: "Sentence-Level Attribution for Black-Box Large Language Model Outputs via Energy-Based Surrogates"
category: preprint
category_label: "Preprint"
date: 2026-03-15
date_display: "March 2026"
venue_short: "IEEE TNNLS 202X"
venue_full: "IEEE Transactions on Neural Networks and Learning Systems, Vol. XX, No. XX, Month 202X"
status: "Under Review"
authors:
  - name: "Maryam Rezaee"
    highlight: true
    role: "Lead Author"
  - name: "Pooriya Safaei"
    highlight: false
  - name: "Maryam Asgarinezhad"
    highlight: false
  - name: "S. Fatemeh Seyyedsalehi"
    highlight: false
    role: "Corresponding Author"
host: "Sharif University of Technology"
summary: "Tackles the critical interpretability challenge of closed-API LLMs. We propose a model-agnostic framework that uses an energy model to score prompt-response consistency, training a lightweight interpreter that explains outputs by quantifying prompt influence without continuous API expenses."
tags:
  - "LLMs"
  - "Interpretability"
  - "XAI"
  - "Energy-Based Models"
  - "Black-Box"
links:
  - name: "Paper"
    url: "/assets/files/research/ESCI-2026-UnderReview.pdf"
    icon: "fa-solid fa-file"
    type: "primary"
  - name: "Code"
    url: "/assets/files/research/ESCI-ACL2026-Draft.pdf"
    icon: "fa-solid fa-code"
    type: "secondary"
bibtex: |
  @article{rezaee2026interpreting,
    title={Interpreting Black-Box LLMs with Sentence-Level Energy Landscapes},
    author={Rezaee, Maryam},
    journal={ACL Rolling Review},
    year={2026}
  }
lab_posts: []
---

## Abstract

The widespread adoption of proprietary Large Language Models (LLMs) via closed APIs poses a major interpretability challenge. To address this, we propose a model-agnostic, post-hoc attribution interpreter operating at the sentence level. We first train an Energy-Based Model (EBM) as a surrogate to score the consistency between prompt and response sentences based on observed LLM generations. This energy landscape then guides a lightweight interpreter network. After model-specific training, the interpreter operates as a standalone tool; it estimates the influence of prompt sentences on a user-specified output sentence without requiring further API queries to the LLM. Experiments show that our EBM overcomes surface-level attributions and captures meaningful generation patterns. Additionally, the interpreter displays competitive performance against other explanation methods, despite its comparatively parameter-efficient size and O(1) inference cost.
