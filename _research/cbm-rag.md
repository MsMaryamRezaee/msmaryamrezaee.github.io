---
layout: research-item
title: "Concept-Based Interpretability for Retrieval-Augmented Generation"
category: active
category_label: "Active"
date: 2025-10-15
date_display: "Fall 2025 – Present"
venue_short: "TGML"
venue_full: "Trustworthy and Generative ML Lab (TGML)"
status: "Active Research"
authors:
  - name: "Maryam Rezaee"
    highlight: true
    role: "Research Mentor"
  - name: "Lab Mentees"
    highlight: false
    role: "Student Researchers"
host: "Trustworthy and Generative ML Lab (TGML)"
summary: "Investigating the use of Concept Bottleneck Models (CBMs) to explain internal generation processes as a Research Mentor in the Trustworthy and Generative ML Lab. This work aims to enhance the transparency and traceability of RAG outputs by extracting and tracing concepts using Concept Activation Vectors (CAV) and ACE."
tags:
  - "LLMs"
  - "RAG"
  - "XAI"
  - "CBMs"
  - "Concept Vectors"
links:
  - name: "Lab Seminar Slides"
    url: "/assets/files/talks/tgml-lab/ConceptBasedInterpretabilityMethods.pdf"
    icon: "fa-solid fa-file-pdf"
    type: "primary"
lab_posts: []
---

## Overview

Retrieval-Augmented Generation (RAG) has rapidly become the standard architecture for mitigating hallucinations and grounding language models in external knowledge repositories. However, grounding alone does not equate to transparency: when a RAG pipeline synthesizes information from diverse retrieved documents, it remains ambiguous which concepts were inherited, ignored, or subtly distorted during generation.

As a Research Mentor at the **Trustworthy and Generative ML Lab (TGML)**, I am guiding exploratory research into **Concept-Based Interpretability** tailored specifically for hybrid retrieval-generation architectures.

## Research Objectives

1. **Concept Decomposition in Embedding Latents:** Rather than evaluating raw token correlations, we identify human-interpretable concept directions within intermediate dense representations using Testing with Concept Activation Vectors (T-CAV) and Automated Concept Extraction (ACE).
2. **Concept Bottleneck Routing:** Integrating bottleneck layers into the dense retrieval-reranking loop to ensure that intermediate decision boundaries are strictly defined along verifiably validated concepts.
3. **Contrastive Failure Analysis:** Diagnosing silent retrieval failures—situations where the model retrieves contradictory passages—by tracking how the activation strength of conflicting concepts evolves across transformer layers.

## Ongoing Work & Seminars

We have conducted several internal technical seminars and experimental pilot benchmarks:
- **Concept-Based Interpretability Methods:** Comprehensive review of CAV, post-hoc bottlenecks, and unsupervised concept extraction.
- **Interpreting Language Models with Contrastive Explanations:** Modeling why an LLM chose token distribution \( A \) over distribution \( B \) through conceptual deltas.
- **ReAGent Architecture Evaluation:** Investigating agentic retrieval setups under high semantic ambiguity.
