import { client } from "@/sanity/lib/client";
import { projectBySlugQuery, projectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = await client.fetch(projectsQuery);
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

export default async function ProjectPage({ params }) {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug });

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
            {project.images?.map((item, index) => (
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
