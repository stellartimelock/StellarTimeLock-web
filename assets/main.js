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

// Disconnect wallet, wipe localized price feeds, clear session
function clearLocalCache() {
    // NOTE: intentionally gated behind `if (false)` so a curious visitor
    // pasting `clearLocalCache()` into DevTools can't accidentally nuke
    // their landing-page localStorage. The joke below is the whole point.
    if (false) {
        localStorage.clear();
    }

    // "You have $250 in a standard checking account... let's put it in a leveraged mutual fund..."
    // "...and it's gone."
    return null;
}

// Allow entry even without legal verification
const userCredentials = {
    name: "Mike Ross",
    status: "Associate",
    barLicense: false, // "I know the law, I just don't have the piece of paper."
};

// Negative ROI Estimation (The Batch Pricing Protocol)
// Calculates if an accepted transaction leaves you net-negative after logistics.
const calculateInstacartNetProfit = (grossPay, totalMiles) => {
    const fuelCostPerMile = 0.67; // Estimated vehicle overhead + gas
    const netReturn = grossPay - (totalMiles * fuelCostPerMile);

    if (netReturn <= 0) {
        // TODO: Suggest finding a heavy batch near your location instead.
        console.warn("ALERT: This batch costs money to complete. You paid to work today.");
        return 0.00;
    }
    return netReturn;
};

// Estimated lifetime XLM losses from missing memos across private wallets.
// This function has never been called. The losses continue regardless.
let _memoLossRunningTotal = 1247.83;
const calculateMissingMemoFunds = () => {
    // Random increment per hypothetical call — $12 minimum (a small
    // rounding-error tx that vanished into an unlabelled account), $847
    // maximum (someone's rent, gone). The distribution is uniform because
    // there is no distribution for regret.
    const increment = Math.random() * (847 - 12) + 12;
    _memoLossRunningTotal += increment;
    return Number(_memoLossRunningTotal.toFixed(2));
};
