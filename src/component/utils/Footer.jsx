import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./utils.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo / About Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.footerLogo}>Blozy</h2>
          <p className={styles.footerText}>
            Bringing you the best content and services for your everyday needs.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Follow Us</h3>
          <div className={styles.footerSocials}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Blozy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
