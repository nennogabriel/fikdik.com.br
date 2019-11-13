const home = {
  file: "content/index.md",
  label: "Landing Page",
  name: "index",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "index-page"
    },
    { label: "Title", name: "title", widget: "string" },
    { label: "Image", name: "image", widget: "image" },
    { label: "Heading", name: "heading", widget: "string" },
    { label: "Subheading", name: "subheading", widget: "string" },
    {
      label: "Mainpitch",
      name: "mainpitch",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Description", name: "description", widget: "text" }
      ]
    },
    { label: "Description", name: "description", widget: "string" },
    {
      label: "Intro",
      name: "intro",
      widget: "object",
      fields: [
        { label: "Heading", name: "heading", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
        {
          label: "Blurbs",
          name: "blurbs",
          widget: "list",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Text", name: "text", widget: "text" }
          ]
        }
      ]
    },
    {
      label: "Main",
      name: "main",
      widget: "object",
      fields: [
        { label: "Heading", name: "heading", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
        {
          label: "Image1",
          name: "image1",
          widget: "object",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Alt", name: "alt", widget: "string" }
          ]
        },
        {
          label: "Image2",
          name: "image2",
          widget: "object",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Alt", name: "alt", widget: "string" }
          ]
        },
        {
          label: "Image3",
          name: "image3",
          widget: "object",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Alt", name: "alt", widget: "string" }
          ]
        }
      ]
    }
  ]
};

const about = {
  file: "content/about.md",
  label: "About",
  name: "about",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "about-page"
    },
    { label: "Title", name: "title", widget: "string" },
    { label: "Body", name: "body", widget: "markdown" }
  ]
};

const products = {
  file: "content/products.md",
  label: "Products Page",
  name: "products",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "product-page"
    },
    { label: "Title", name: "title", widget: "string" },
    { label: "Image", name: "image", widget: "image" },
    { label: "Heading", name: "heading", widget: "string" },
    { label: "Description", name: "description", widget: "string" },
    {
      label: "Intro",
      name: "intro",
      widget: "object",
      fields: [
        { label: "Heading", name: "heading", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
        {
          label: "Blurbs",
          name: "blurbs",
          widget: "list",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Text", name: "text", widget: "text" }
          ]
        }
      ]
    },
    {
      label: "Main",
      name: "main",
      widget: "object",
      fields: [
        { label: "Heading", name: "heading", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
        {
          label: "Image1",
          name: "image1",
          widget: "object",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Alt", name: "alt", widget: "string" }
          ]
        },
        {
          label: "Image2",
          name: "image2",
          widget: "object",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Alt", name: "alt", widget: "string" }
          ]
        },
        {
          label: "Image3",
          name: "image3",
          widget: "object",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Alt", name: "alt", widget: "string" }
          ]
        }
      ]
    },
    {
      label: "Testimonials",
      name: "testimonials",
      widget: "list",
      fields: [
        { label: "Quote", name: "quote", widget: "string" },
        { label: "Author", name: "author", widget: "string" }
      ]
    },
    { label: "Full_image", name: "full_image", widget: "image" },
    {
      label: "Pricing",
      name: "pricing",
      widget: "object",
      fields: [
        { label: "Heading", name: "heading", widget: "string" },
        { label: "Description", name: "description", widget: "string" },
        {
          label: "Plans",
          name: "plans",
          widget: "list",
          fields: [
            { label: "Plan", name: "plan", widget: "string" },
            { label: "Price", name: "price", widget: "string" },
            {
              label: "Description",
              name: "description",
              widget: "string"
            },
            { label: "Items", name: "items", widget: "list" }
          ]
        }
      ]
    }
  ]
};

export default {
  name: "pages",
  label: "Pages",
  files: [home, products, about]
};