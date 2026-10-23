import { defineQuery } from "next-sanity";

// Fetch all projects for the home page
export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(_createdAt asc) {
    _id,
    title,
    slug,
    type,
    coverImage
  }
`);

// Fetch a single project by slug
export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    type,
    images[] {
      caption,
      image
    }
  }
`);

// Fetch site settings (contact info, hero text, CV)
export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    heroText,
    cv,
    phone,
    email,
    instagram,
    linkedin
  }
`);
