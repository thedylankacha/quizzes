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

The approved questions and answers are in `index.html`. Each round presents all its questions first, then an **Answers** divider. In the answer section, each question appears before its reveal slide, where the same question remains visible with the answer.

The 10 childhood photos for **Guess the Baban** are in `assets/baban/`, with each file named for the person pictured. The Lost in Translation questions use distinct scenic backgrounds inspired by Hawaii, Japan, Germany, the Swahili-speaking region, and the Arab world. The presentation uses a festive burgundy-and-gold winter palette with a holly border. Current Affairs has five story-led questions; its Bond-girl odds answer is provisional and can be updated before quiz night. Iceland media received so far are in `assets/iceland/`: Blue Lagoon (Question 2), Northern Lights (Question 3), Hallgrímskirkja (Question 5), Rainbow Street (Question 6), Basalt (Question 7), Gullfoss (Question 8), Bloody Gate (Question 9), Trolls (Question 10 answer reveal only), ; Hreppar (Question 1) uses a video clip. The Real Housewives of London clip plays on the first Current Affairs answer reveal. The Rainbow Street photo includes the quiz host, as approved. Brennivín (Question 4) still needs a usable photo.

The first nine Hansel & Gretel questions are shown without a connection hint; Question 10 asks what connects their answers.
