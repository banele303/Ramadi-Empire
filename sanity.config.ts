import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import project from "./sanity/schemas/project"
import post from "./sanity/schemas/post"
import author from "./sanity/schemas/author"
import category from "./sanity/schemas/category"
import blockContent from "./sanity/schemas/blockContent"
import portfolioItem from "./sanity/schemas/portfolioItem"

export default defineConfig({
  name: "default",
  title: "Ramadi Empire",

  projectId: "2693ml9s",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [project, post, author, category, blockContent, portfolioItem],
  },

  basePath: "/studio",

  cors: {
    origin: ["https://your-vercel-domain.vercel.app", "http://localhost:3000"],
    credentials: true,
  },

  auth: {
    loginMethod: "token",
  },
})

