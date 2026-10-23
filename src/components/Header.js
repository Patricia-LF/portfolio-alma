import Link from "next/link";

export default function Header({ settings }) {
  return (
    <header>
      {/* Fixed signature link */}
      <Link href="/" className="signature-fixed">
        <svg viewBox="0 0 622 214" xmlns="http://www.w3.org/2000/svg">
          {/* Your SVG content here */}
        </svg>
      </Link>

      {/* Hamburger button */}
      <button className="hamburger-btn" aria-label="Open menu">
        <div className="hamb-line"></div>
        <div className="hamb-line"></div>
      </button>

      {/* Top nav links */}
      <nav className="nav-top">
        <Link href="/#projects" className="nav-link">
          Projects
        </Link>
        <Link href="/#contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {/* Fullscreen overlay */}
      <div className="main-navigation" aria-hidden="true">
        <button className="close-btn">✕</button>
        <div className="nav-items-container">
          <Link href="/#projects" className="nav-link-overlay">
            Projects
          </Link>
          <Link href="/#contact" className="nav-link-overlay">
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
    </header>
  );
}
