import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.containerStyle}>
        <div>
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {/* <ul className={styles.listStyle}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul> */}
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className={styles.socialIconsStyle}>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
