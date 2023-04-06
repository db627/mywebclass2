/* eslint-disable no-undef,  no-unused-vars */
// Import all of Bootstrap's JS
import { Modal } from "bootstrap";
import * as bootstrap from "bootstrap";



document.addEventListener("DOMContentLoaded", () => {
  allPage.initialize();
  contentPage.initialize();
});

let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    allPage.initialize();
  }, 250);
});

export function createPrivacyModal() {
  const modalHtml = `
    <div class="modal fade" id="privacyModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Privacy Policy</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>This website uses cookies to ensure you get the best experience on our website. To understand what we collect please read our <a href="privacy.html">Privacy Policy</a>!</p>
            <p>Do you agree to our Privacy Policy?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Disagree</button>
            <button type="button" class="btn btn-primary" id="agreeButton">Agree</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append the modal HTML to the body of the document
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function initializePrivacyModal() {
  const privacyModal = new Modal(document.getElementById("privacyModal"));

  // Check if the user has already agreed to the policy
  const agreed = localStorage.getItem("privacyPolicyAgreed") === "true";
  if (!agreed) {
    // Show the modal if the user hasn't agreed
    privacyModal.show();
  }

  // Handle the click event on the Agree button
  const agreeButton = document.getElementById("agreeButton");
  agreeButton.addEventListener("click", () => {
    // Remember the user's choice
    localStorage.setItem("privacyPolicyAgreed", "true");
    // Hide the modal
    privacyModal.hide();
    // Enable Google Analytics tracking
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  });
}

export function loadGoogleAnalytics() {
  // Replace "GA_MEASUREMENT_ID" with your Google Analytics Measurement ID
  const gaMeasurementId = "G-794EBZNLL1";

  // Load the Google Analytics tracking code
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize Google Analytics tracking
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", gaMeasurementId, { anonymize_ip: true });

  // Check if the user has provided consent for Google Analytics tracking
  const consent = localStorage.getItem("googleAnalyticsConsent");
  if (consent === "granted") {
    // Enable Google Analytics tracking if consent has been granted
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  } else if (consent === "denied") {
    // Disable Google Analytics tracking if consent has been denied
    gtag("consent", "update", {
      analytics_storage: "denied",
    });
  } else {
    // Show the privacy modal if no consent has been given
    initializePrivacyModal();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createPrivacyModal();
  loadGoogleAnalytics();
});
