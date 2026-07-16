# System Template — 100xSystems

Use this template to create a new learning system for 100xSystems.

## How to Use

1. Click "Use this template" at the top of this repository
2. Name it `100xsystems/<your-system-slug>`
3. Clone your new repo
4. Add your curriculum following the structure below
5. Open a PR to [100xsystems/registry](https://github.com/100xsystems/registry)

## Structure

```
<system-slug>/
├── index.md              # System metadata
├── curriculum/
│   └── track-<language>/
│       └── module-1/
│           └── 01-lesson-name/
│               ├── lesson.md
│               ├── tests/
│               │   ├── behavior.test.ts   ← Example included!
│               │   └── fixtures/
│               └── assets/
└── quizzes/
```

## Lesson Structure

Each lesson is a folder containing:
- `lesson.md` — Frontmatter + content
- `tests/behavior.test.ts` — Vitest behavioral tests
- `assets/` — Optional images

## index.md Frontmatter

```yaml
---
title: "System Name"
description: "What users will learn"
difficulty: "Intermediate"
languages: ["TypeScript"]
tracks:
  - slug: "track-typescript"
    title: "TypeScript Track"
    language: "TypeScript"
    difficulty: "Intermediate"
tags: []
estimated_total_time: "10 hours"
---
```
