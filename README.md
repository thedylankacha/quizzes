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

## Quiz content and photos

The approved questions and answers are in `index.html`. Each round presents all its questions first, followed by the answer reveals. Round 5 follows the supplied photo order and reveals the corresponding names in the answer section.

The 10 childhood photos for **Guess the Baban** are in `assets/baban/`, with each filename now matching the person pictured and each answer slide using the corresponding photo. Iceland photos received so far are in `assets/iceland/`: Blue Lagoon (Question 2), Northern Lights (Question 3), Hallgrímskirkja (Question 5), Rainbow Street (Question 6), Basalt (Question 7), Gullfoss (Question 8), Bloody Gate (Question 9), and Trolls (Question 10 answer reveal only). The Rainbow Street photo includes the quiz host, as approved. Hreppar (Question 1) and Brennivín (Question 4) show placeholders while their photos are pending.

The first nine Hansel & Gretel questions are shown without a connection hint; Question 10 asks what connects their answers.
