import Link from "next/link";
import Script from "next/script"
import { useEffect } from "react";
export default function Navigation() {

/*
  useEffect(() => {
    // Load the Google Translate API script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the Google Translate API
    window.googleTranslateElementInit = () => {
       window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Replace with your website's default language
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // Replace with your desired layout
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);
*/


  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element"
      );
    };

    return () => {
      // Remove the script and the global function when the component is unmounted
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="container-fluid ">
      <header role="banner" className="fixed-top">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              MyWebClass.org
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Toggle navigation</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item text-body">
                  <a
                    className="nav-link"
                    href="/about/about"
                    alt="Checkout our Content Template"
                  >
                    Content Template
                  </a>
                </li>
              </ul>
            </div>
            <div id="google_translate_element" className="float-end"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}