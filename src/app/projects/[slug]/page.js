import { client } from "@/sanity/lib/client";
import {
  projectBySlugQuery,
  projectsQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export async function generateStaticParams() {
  const projects = await client.fetch(projectsQuery);
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const [project, settings] = await Promise.all([
    client.fetch(projectBySlugQuery, { slug }),
    client.fetch(siteSettingsQuery),
  ]);

  if (!project) return <p>Project not found</p>;

  return (
    <main>
      <section className="project">
        <div className="project-container">
          <div className="project-text-container">
            <h4>{project.title}</h4>
            <p className="project-text">{project.description}</p>
          </div>

          <div className="project-img-container">
            {project.images?.map((item, index) => {
              // Render video item
              if (item.video) {
                return (
                  <div
                    key={index}
                    className="gallery-item"
                    data-video={`/assets/motion/${item.video}`}
                  >
                    <Image
                      src={urlFor(item.image).quality(90).url()}
                      alt={item.caption || project.title}
                      width={0}
                      height={400}
                      style={{ width: "auto", height: "400px" }}
                      sizes="400px"
                      className="gallery-img"
                    />
                    <div className="gallery-overlay">
                      <span className="gallery-title">{item.caption}</span>
                    </div>
                  </div>
                );
              }

              // Render image item
              return (
                <div key={index} className="gallery-item">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.caption || project.title}
                    width={800}
                    height={600}
                    className="gallery-img"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-title">{item.caption}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <Lightbox />
        </div>
      </section>
      <Contact settings={settings} />
      <BackToTop />
    </main>
  );
}
