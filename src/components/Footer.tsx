import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Footer2: React.FC = () => {
  return (
    <footer className="footer-class">
      {/* orange bg */}
      <div>
        <Logo />
      </div>
      <div>
        <p>Mental Health for everyone</p>
      </div>
      <div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      {/* black bg */}
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/privacyPolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/articles/blogs">Articles</Link>
          </li>
          <li>
            <Link href="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link href="/termsAndConditions">Terms and Conditions</Link>
          </li>
        </ul>
      </div>

      <div>
        <span>Copyright &copy; 2024 </span>
        The Mental Chunks
      </div>
    </footer>
  );
};

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="clearfix site-footer"
      role="contentinfo"
      itemscope
      itemtype="https://schema.org/WPFooter"
    >
      <div className="footer-bar grid col-940">
        <div className="content-outer container">
          <div className="row">
            <nav
              id="footer-site-navigation"
              className="footer-navigation"
              role="navigation"
              aria-label="Footer Menu"
            >
              <h2 className="screen-reader-text">Footer Menu</h2>
              <ul id="footer-menu" className="menu">
                <li
                  id="menu-item-1473"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9 current_page_item menu-item-1473"
                >
                  <a href="https://thementalchunks.com/" aria-current="page">
                    Home
                  </a>
                </li>
                <li
                  id="menu-item-1474"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-1474"
                >
                  <a
                    rel="privacy-policy"
                    href="https://thementalchunks.com/privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li
                  id="menu-item-1475"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1475"
                >
                  <a href="https://thementalchunks.com/about-us/">About Us</a>
                </li>
                <li
                  id="menu-item-1476"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1476"
                >
                  <a
                    href="https://thementalchunks.com/articles/"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Articles
                  </a>
                </li>
                <li
                  id="menu-item-1477"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1477"
                >
                  <a href="https://thementalchunks.com/contact-us/">
                    Contact Us
                  </a>
                </li>
                <li
                  id="menu-item-1478"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1478"
                >
                  <a href="https://thementalchunks.com/terms-and-conditions/">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer-layouts copyright">
              <div className="footer-layouts copyright">
                <span className="copyright_icon_and_year">
                  Copyright &copy; 2024{" "}
                </span>
                The Mental Chunks <span>| Powered by </span>
                <a
                  href="
		https://cyberchimps.com/			"
                  target="_blank"
                >
                  Responsive Theme{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer, Footer2 };
