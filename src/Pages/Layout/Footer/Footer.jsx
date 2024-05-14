import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <div className="pg-footer">
        <footer className="footer">
          <svg
            className="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              className="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            ></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link">
                  <h1>EDUCare</h1>
                </a>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Get Started</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-product">
                    <a>Start</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-product">
                    <a>Documentation</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-product">
                    <a>Installation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Company</h2>
                <ul id="menu-company" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a>Contact</a>
                  </li>
                  <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a>News</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a>Careers</a>
                  </li>
                </ul>
              </div>
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <a >Privacy Notice</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a >Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" class="footer-menu-list">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer">
                      Support Center
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer">
                      Service Status
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a>Security</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a>Blog</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a>Customers</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a>Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-call-to-action">
                <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                <p class="footer-call-to-action-description">
                  {" "}
                  Have a support question?
                </p>
                <a
                  class="footer-call-to-action-button button"
                  
                  target="_self"
                >
                  {" "}
                  Get in Touch{" "}
                </a>
              </div>
              <div class="footer-call-to-action">
                <h2 class="footer-call-to-action-title"> You Call Us</h2>
                <p class="footer-call-to-action-link-wrapper">
                  {" "}
                  <a
                    class="footer-call-to-action-link"
                    
                    target="_self"
                  >
                    {" "}
                    0124-64XXXX{" "}
                  </a>
                </p>
              </div>
            </div>
            <div class="footer-social-links">
              {" "}
              <svg
                class="footer-social-amoeba-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 236 54"
              ></svg>
              <a class="footer-social-link linkedin"  target="_blank">
                <span class="hidden-link-text">Linkedin</span>
                <svg
                  class="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <Facebook style={{ fontSize: "18px", cursor: "pointer" }} />
                </svg>
              </a>
              <a class="footer-social-link twitter" target="_blank">
                <span class="hidden-link-text">Twitter</span>
                <svg
                  class="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <Twitter style={{ fontSize: "18px", cursor: "pointer" }} />
                </svg>
              </a>
              <a class="footer-social-link youtube" target="_blank">
                <span class="hidden-link-text">Youtube</span>
                <svg
                  class="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <Pinterest style={{ fontSize: "18px", cursor: "pointer" }} />
                </svg>
              </a>
              <a class="footer-social-link github" target="_blank">
                <span class="hidden-link-text">Github</span>
                <svg
                  class="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <Instagram style={{ fontSize: "18px", cursor: "pointer" }} />
                </svg>
              </a>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="footer-copyright-wrapper">
              <p class="footer-copyright-text">
                <a class="footer-copyright-link" target="_self">
                  {" "}
                  ©2023. | Designed By: Hello World. | All rights reserved.{" "}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
