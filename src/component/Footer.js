import React from 'react'
import "../style/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div
        style={{
          width: "70%",
          margin: "4rem auto 1rem ",
        }}>
        <img
          className="avatar"
          src="https://marketplace.canva.com/EAF_nRORrNw/1/0/1600w/canva-peach-and-pastel-purple-modern-coming-soon-twitter-header-1w2fzVCaR9A.jpg"
          style={{
            width: "100%",
            height: "20rem",
          }}
        />
      </div>
      <div>
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-column">
              <h4>Get to Know Us</h4>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About E-commerce</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">E-commerce Devices</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Make Money with Us</h4>
              <ul>
                <li>
                  <a href="#">Sell products on E-commerce</a>
                </li>
                <li>
                  <a href="#">Sell on E-commerce Business</a>
                </li>
                <li>
                  <a href="#">Sell apps on E-commerce</a>
                </li>
                <li>
                  <a href="#">Become an Affiliate</a>
                </li>
                <li>
                  <a href="#">Advertise Your Products</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>E-commerce Payment Products</h4>
              <ul>
                <li>
                  <a href="#">E-commerce Business Card</a>
                </li>
                <li>
                  <a href="#">Shop with Points</a>
                </li>
                <li>
                  <a href="#">Reload Your Balance</a>
                </li>
                <li>
                  <a href="#">E-commerce Currency Converter</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Let Us Help You</h4>
              <ul>
                <li>
                  <a href="#">E-commerce and COVID-19</a>
                </li>
                <li>
                  <a href="#">Your Account</a>
                </li>
                <li>
                  <a href="#">Your Orders</a>
                </li>
                <li>
                  <a href="#">Shipping Rates & Policies</a>
                </li>
                <li>
                  <a href="#">Returns & Replacements</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {currentYear} Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
