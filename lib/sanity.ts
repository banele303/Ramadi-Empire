import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "2693ml9s",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
})

