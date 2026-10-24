import { client } from "@/sanity/lib/client";
import { projectsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Contact from "@/components/Contact";
import { PortableText } from "@portabletext/react";
import BackToTop from "@/components/BackToTop";

export default async function Home() {
  const [projects, settings] = await Promise.all([
    client.fetch(projectsQuery),
    client.fetch(siteSettingsQuery),
  ]);

  const mainProjects = projects.filter((p) => p.type === "project");
  const concepts = projects.filter((p) => p.type === "concept");

  return (
    <main>
      {/* Hero section */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-title">
            <h2>Alma</h2>
            <h1>Hammar</h1>
          </div>
          <div className="intro">
            {settings?.heroText && <PortableText value={settings.heroText} />}
          </div>
          {settings?.cv?.asset && (
            <a
              href={settings.cv.asset.url}
              download
              className="btn-download"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          )}
        </div>
        <div className="hero-image">
          <Image
            src="/assets/images/alma-tejp.webp"
            alt="Alma Hammar"
            width={400}
            height={500}
            loading="eager"
          />
        </div>
      </section>

      {/* Projects section */}
      <section id="projects">
        <h3>Projects</h3>
        <div className="project-cards-container">
          {mainProjects.map((project) => (
            <div key={project._id} className="project-card">
              <Link href={`/projects/${project.slug.current}`}>
                {project.coverImage ? (
                  <Image
                    src={urlFor(project.coverImage).quality(90).url()}
                    alt={project.title}
                    width={0}
                    height={500}
                    style={{ width: "auto", height: "500px" }}
                    sizes="500px"
                  />
                ) : null}
                <span className="project-name">{project.title}</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Concepts section */}
        <div className="concepts-container">
          <h4>Concepts</h4>
          <div className="project-cards-container">
            {concepts.map((project) => (
              <div key={project._id} className="project-card">
                <Link href={`/projects/${project.slug.current}`}>
                  {project.coverImage ? (
                    <Image
                      src={urlFor(project.coverImage).quality(90).url()}
                      alt={project.title}
                      width={0}
                      height={500}
                      style={{ width: "auto", height: "500px" }}
                      sizes="500px"
                    />
                  ) : null}
                  <span className="project-name">{project.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact settings={settings} />
      <BackToTop />
    </main>
  );
}
