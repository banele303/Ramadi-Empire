export default {
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Construction", value: "construction" },
          { title: "Tendering", value: "tendering" },
          { title: "Quantity Surveying", value: "quantity-surveying" },
          { title: "Supply Chain", value: "supply-chain" },
        ],
      },
    },
    {
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    },
  ],
}

