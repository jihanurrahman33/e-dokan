import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-primary text-primary-content p-10">
      <aside>
        <Logo />
        <p>
          Ecommerce Ltd.
          <br />
          Providing reliable tech since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/products" className="link link-hover">
          Products
        </Link>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <a
          href="https://www.github.com/jihanurrahman33"
          className="link link-hover"
        >
          Github
        </a>

        <a href="https://www.facebook.com/nishak69" className="link link-hover">
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/md-jihanur-rahman/"
          className="link link-hover"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/nishak_69"
          className="link link-hover"
        >
          Instagram
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
