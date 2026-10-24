import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header({ settings }) {
  return (
    <header>
      {/* Fixed signature link */}
      <Link href="/" className="signature-fixed">
        <svg viewBox="0 0 622 214" xmlns="http://www.w3.org/2000/svg">
          {/* Your SVG content here */}
        </svg>
      </Link>

      <Nav settings={settings} />
    </header>
  );
}
