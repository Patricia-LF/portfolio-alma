import Link from "next/link";
import Nav from "./Nav";

export default function Header({ settings }) {
  return (
    <header>
      {/* Fixed signature link */}
      <Link href="/" className="signature-fixed">
        <span>Alma</span>
        <span>Hammar</span>
      </Link>

      <Nav settings={settings} />
    </header>
  );
}
