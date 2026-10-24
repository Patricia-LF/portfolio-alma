export default {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    {
      name: "heroText",
      title: "Hero text",
      description: "The intro text shown next to the portrait on the home page",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "cv",
      title: "CV",
      description: "Upload a new CV here to replace the download link",
      type: "file",
      options: { accept: ".pdf" },
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      description: "Full URL, e.g. https://instagram.com/hammarensgraf_",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      description: "Full URL",
      type: "url",
    },
  ],
};
