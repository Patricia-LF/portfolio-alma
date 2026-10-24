"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Nav({ settings }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="hamburger-btn"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
      >
        <div className="hamb-line"></div>
        <div className="hamb-line"></div>
      </button>

      {/* Top nav links */}
      <nav className="nav-top">
        {isHome ? (
          <Link href="#projects" className="nav-link">
            Projects
          </Link>
        ) : (
          <Link href="/" className="nav-link">
            Start
          </Link>
        )}
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {/* Fullscreen overlay */}
      <div
        className="main-navigation"
        style={{ display: isOpen ? "flex" : "none" }}
        aria-hidden={!isOpen}
      >
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <Image
            src="/assets/icons/close-svgrepo-com.svg"
            alt="Close"
            width={18}
            height={18}
          />
        </button>
        <div className="nav-items-container">
          {isHome ? (
            <Link
              href="/#projects"
              className="nav-link-overlay"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          ) : (
            <Link
              href="/"
              className="nav-link-overlay"
              onClick={() => setIsOpen(false)}
            >
              Start
            </Link>
          )}
          <Link
            href="/#contact"
            className="nav-link-overlay"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div className="navigation-footer">
          {settings?.instagram && (
            <a href={settings.instagram} className="nav-contact-link">
              @hammarensgraf_
            </a>
          )}
          {settings?.email && (
            <a href={`mailto:${settings.email}`} className="nav-contact-link">
              {settings.email}
            </a>
          )}
          {settings?.linkedin && (
            <a href={settings.linkedin} className="nav-contact-link">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </>
  );
}
