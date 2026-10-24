export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Project", value: "project" },
          { title: "Concept", value: "concept" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "coverImage",
      title: "Cover image",
      description: "Shown on the home page project card",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "images",
      title: "Gallery images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "video",
              title: "Video filename",
              description:
                "Filename only, e.g. coffee.mp4 (upload the file to public/assets/motion/)",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              description: "Shown on hover",
              type: "string",
            },
          ],
          preview: {
            select: { title: "caption", media: "image" },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: "title", media: "coverImage" },
  },
};
