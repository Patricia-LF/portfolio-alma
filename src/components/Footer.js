import Image from "next/image";

export default function Footer({ settings }) {
  return (
    <>
      {/* Lightbox */}
      <div className="lightbox" aria-hidden="true">
        <button className="lightbox-close">✕</button>
        <img className="lightbox-img" src={null} alt="" />
        <video
          className="lightbox-video"
          controls
          playsInline
          preload="metadata"
        />
      </div>

      <footer>
        <ul className="footer-links">
          {settings?.instagram && (
            <li className="footer-link">
              <a href={settings.instagram}>
                <Image
                  src="/assets/icons/instagram-2-1-logo-svgrepo-com.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          )}
          {settings?.linkedin && (
            <li className="footer-link">
              <a href={settings.linkedin}>
                <Image
                  src="/assets/icons/linkedin-icon-2-logo-svgrepo-com.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          )}
          {settings?.email && (
            <li className="footer-link">
              <a href={`mailto:${settings.email}`}>
                <Image
                  src="/assets/icons/email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          )}
          {settings?.phone && (
            <li className="footer-link">
              <a href={`tel:${settings.phone}`}>
                <Image
                  src="/assets/icons/phone.png"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          )}
        </ul>

        <div className="date">
          <p>&copy; {new Date().getFullYear()} Alma Hammar</p>
        </div>
      </footer>
    </>
  );
}
