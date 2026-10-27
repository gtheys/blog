// AIDEV-NOTE: Umami analytics is consent-gated by the terminal-style widget
// rendered here. Choice persists in localStorage key "analytics-consent" ("yes"/"no").
// AIDEV-NOTE: SCRIPT_URL is exposed publicly via Tailscale Funnel (:8444).
(function () {
  var SCRIPT_URL = "https://chicken.tail4250d0.ts.net:8444/script.js";
  var WEBSITE_ID = "a4df53d3-ea1c-42e4-971f-0e34564483c9";
  var KEY = "analytics-consent";

  function loadAnalytics() {
    var s = document.createElement("script");
    s.defer = true;
    s.src = SCRIPT_URL;
    s.dataset.websiteId = WEBSITE_ID;
    document.head.appendChild(s);
  }

  var choice = null;
  try {
    choice = localStorage.getItem(KEY);
  } catch (e) {
    /* storage blocked (private mode) — treat as undecided */
  }

  if (choice === "yes") {
    loadAnalytics();
    return;
  }
  if (choice === "no") return;

  function decide(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {
      /* storage blocked — consent applies to this page only */
    }
    if (value === "yes") loadAnalytics();
    var el = document.getElementById("cookie-term");
    if (el) el.remove();
    document.removeEventListener("keydown", onKey);
  }

  function onKey(e) {
    if (e.key === "y" || e.key === "Y") decide("yes");
    if (e.key === "n" || e.key === "N") decide("no");
  }

  var box = document.createElement("div");
  box.id = "cookie-term";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-label", "Analytics consent");
  box.innerHTML =
    '<div class="ct-titlebar">' +
    '<span class="ct-dot r"></span><span class="ct-dot y"></span><span class="ct-dot g"></span>' +
    '<span class="ct-title">cookies</span>' +
    "</div>" +
    '<div class="ct-body">' +
    '<div class="ct-line"><span class="ct-prompt">&gt;</span> cookies --analytics</div>' +
    '<div class="ct-line">I use analytics only to count visits. OK to enable it?</div>' +
    '<div class="ct-actions">' +
    '<button class="ct-btn" data-v="yes">[<span class="ct-key">y</span>] yes</button>' +
    '<button class="ct-btn" data-v="no">[<span class="ct-key">n</span>] no</button>' +
    "</div>" +
    '<div class="ct-line"><span class="ct-prompt">&gt;</span> <span class="ct-cursor"></span></div>' +
    "</div>";

  box.addEventListener("click", function (e) {
    var btn = e.target.closest(".ct-btn");
    if (btn) decide(btn.dataset.v);
  });
  document.addEventListener("keydown", onKey);
  document.body.appendChild(box);
  var first = box.querySelector(".ct-btn");
  if (first) first.focus();
})();
