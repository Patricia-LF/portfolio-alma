import Image from "next/image";

export default function Contact({ settings }) {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-info">
        <h3>Contact</h3>

        <ul className="contact-list">
          {settings?.phone && (
            <li className="contact-list-item">
              <a href={`tel:${settings.phone}`} className="contact-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {settings.phone}
              </a>
            </li>
          )}
          {settings?.email && (
            <li className="contact-list-item">
              <a href={`mailto:${settings.email}`} className="contact-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                {settings.email}
              </a>
            </li>
          )}
          {settings?.linkedin && (
            <li className="contact-list-item">
              <a href={settings.linkedin} className="contact-link">
                <Image
                  src="/assets/icons/linkedin-rounded-border-svgrepo-com.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
                linkedin.com/in/alma-hammar-0336011b4
              </a>
            </li>
          )}
          {settings?.instagram && (
            <li className="contact-list-item">
              <a href={settings.instagram} className="contact-link">
                <Image
                  src="/assets/icons/instagram-svgrepo-com.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
                @hammarensgraf_
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className="bye">
        <h1>Thank</h1>
        <h2>you!</h2>
      </div>
    </section>
  );
}
