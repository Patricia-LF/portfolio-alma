import "./globals.css";
import "@/styles/hero.css";
import "@/styles/project-cards.css";
import "@/styles/contact.css";
import "@/styles/footer.css";
import "@/styles/projects.css";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export const metadata = {
  title: "Alma Hammar — Portfolio",
  description: "Graphic design portfolio",
};

export default async function RootLayout({ children }) {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header settings={settings} />
        {children}
        <Footer settings={settings} />
        <ClientScripts />
      </body>
    </html>
  );
}
