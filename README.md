# Quizmas 2026

A lightweight, full-screen quiz presentation. It uses plain HTML, CSS, and JavaScript so it can be hosted as a static site or run from a local web server without a build step.

## Run it

Open `index.html` in a browser, or serve this folder with any static file server. The service worker caches the presentation shell when served over HTTPS or localhost, so it can be reopened offline after its first visit. Google Fonts are an optional enhancement; system serif and sans-serif fonts are used as fallbacks.

## Presentation controls

- Right arrow, down arrow, Page Down, Space, or the right side of the screen: next slide
- Left arrow, up arrow, Page Up, Backspace, or the left side of the screen: previous slide
- Home and End: first and last slide
- Touch: swipe left or right

The slide counter and progress bar show the current position. `?` isn't needed: slide position is stored in the URL hash, such as `#4`.

## Content still needed

The project conversation available during initial implementation contained the round names, but not the locked questions, answers, round allocations, or photos. Each round currently has one visibly marked question/answer placeholder. Replace the `rounds` data in `index.html` with the approved content and add any image files beside it, then reference them with relative paths. Keep the Hansel & Gretel connection concealed through question 9; the exact reveal copy and its approved question placement need to come from the locked quiz material.

The Baban image clue is shown as a local-photo placeholder. No external images or invented quiz copy are included.
