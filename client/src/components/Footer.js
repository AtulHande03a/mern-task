import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container side-padding-footer">
      <div className="footer-sub-container">
        <nav className="footer-menu">
          <div className="footer-column">
            <ul className="footer-list-items">
              <li>
                <p className="footer-links">About us</p>
              </li>
              <li>
                <p className="footer-links">Events</p>
              </li>
              <li>
                <p className="footer-links">Partnerships & Integrations</p>
              </li>
              <li>
                <p className="footer-links">Take a product tour</p>
              </li>
              <li>
                <p className="footer-links">News</p>
              </li>
              <li>
                <p className="footer-links">Investor Relations</p>
              </li>
              <li>
                <p className="footer-links">
                  Careers <em>We're hiring!!</em>
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>
                <p className="footer-links">Help</p>
              </li>
              <li>
                <p className="footer-links">Terms & conditions</p>
              </li>
              <li>
                <p className="footer-links">Privacy policy</p>
              </li>
              <li>
                <p className="footer-links">Cookie settings</p>
              </li>
              <li>
                <p className="footer-links">Sitemap</p>
              </li>
            </ul>
          </div>
          <div className="footer-column-icons">
            <ul className="fa-icons">
              <p>Follow us</p>
              <div className="fa-social-icons">
                <li>
                  <i className="fa-brands fa-linkedin-in"></i>
                </li>
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </div>
            </ul>
          </div>
        </nav>
        <div className="footer-bottom">
          <div className="footer-brand-logo">
            <h3>
              <span className="ft-brand">Brand</span>
              <span className="ft-name">Name</span>
            </h3>
          </div>
          <div>
            <p className="ft-copyright">@2022 Udemy inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
