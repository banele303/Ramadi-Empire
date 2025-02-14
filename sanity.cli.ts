// import { defineCliConfig } from "sanity/cli"

// export default defineCliConfig({
//   api: {
//     projectId: "2693ml9s",
//     dataset: "production",
//   },
// })



// **/
import { defineCliConfig } from 'sanity/cli'

const projectId = "2693ml9s"
const dataset = "production"

export default defineCliConfig({ api: { projectId, dataset } })