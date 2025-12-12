# Extensions Dashboard - Frontend Mentor Solution

This is a solution to the Extensions Dashboard challenge on Frontend Mentor. This project allows users to view, filter, and manage a list of browser extensions with a robust dark/light mode system.

## Table of Contents

- [Extensions Dashboard - Frontend Mentor Solution](#extensions-dashboard---frontend-mentor-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshots](#screenshots)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
      - [1. Tailwind v4 Arbitrary Values \& CSS Variables](#1-tailwind-v4-arbitrary-values--css-variables)

## Overview

### The Challenge

Users should be able to:

- View a list of available extensions in a responsive grid layout.
- Toggle between **Light** and **Dark** themes.
- Filter extensions by status (**All**, **Active**, **Inactive**).
- Toggle the active state of an extension.
- **Remove** an extension from the list (simulated deletion).
- See hover states for interactive elements.

### Screenshots

![Light Mode](./design/desktop-design-light-active.jpg)
_Light Mode Preview_

![Dark Mode](./design/desktop-design-dark-active.jpg)
_Dark Mode Preview_

## My Process

### Built With

- **React** - JS Library
- **Vite** - Frontend Tooling
- **Tailwind CSS v4** - For utility-first styling (using the new `@theme` configuration).
- **CSS Variables** - For strict design system adherence.
- **Mobile-first Workflow**

### What I Learned

This project was a great opportunity to explore **Tailwind CSS v4** and its integration with native CSS variables. Instead of relying solely on Tailwind's default palette, I mapped the design system directly into the Tailwind build.

#### 1. Tailwind v4 Arbitrary Values & CSS Variables

I learned how to bridge standard CSS variables with Tailwind utilities to handle complex gradients and theme-specific colors without a massive configuration file.

```css
/* index.css */
@theme {
  --color-bg-light-main: linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%);
  --color-dark-surface: hsl(224, 26%, 16%);
  /* ... */
}
```
