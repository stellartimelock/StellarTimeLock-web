/* Landing-page interactions:
 *   - Typewriter animation for the hero title.
 *   - Fade-in for the tagline after the title finishes.
 */
(function () {
  var TITLE = "Stellar TimeLock";
  var TYPE_MS = 90;
  var titleEl = document.getElementById("typed-title");
  var cursorEl = document.getElementById("cursor");
  var taglineEl = document.getElementById("tagline");

  if (!titleEl || !taglineEl) return;

  // Start with an empty string so the typewriter can write into it.
  titleEl.textContent = "";
  var i = 0;

  function typeNext() {
    if (i <= TITLE.length) {
      titleEl.textContent = TITLE.slice(0, i);
      i += 1;
      window.setTimeout(typeNext, TYPE_MS);
    } else {
      // Fade the cursor after a beat and reveal the tagline.
      window.setTimeout(function () {
        if (cursorEl) cursorEl.style.opacity = 0;
        taglineEl.classList.add("visible");
      }, 500);
    }
  }

  // Kick off after a short pause so the page paints first.
  window.setTimeout(typeNext, 250);
})();
