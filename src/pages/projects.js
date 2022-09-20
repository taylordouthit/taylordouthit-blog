import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ActionAreaCard from "../components/card"
import FocusSiteBlockerLogo from "../../static/fsb-logo.png"
import PunkPalaceRecordsLogo from "../../static/ppr-logo.png"
import ImagineLogo from "../../static/imagine.png"

const ProjectsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <h1>Projects</h1>
      <div className="projects-container">
        <ActionAreaCard
          className="project-card"
          title="Focus Site Blocker"
          description="A site blocker that allows you to create a list of sites to block."
          image={FocusSiteBlockerLogo}
          alt="Focus Site Blocker Logo"
          link="https://chrome.google.com/webstore/detail/focus-site-blocker/dpjahplifngjidkneihecbbcephoafgj/overview"
        />
        <ActionAreaCard
          className="project-card"
          title="Punk Palace Records"
          description="A fake record label I started with friends for fun."
          image={PunkPalaceRecordsLogo}
          alt="Punk Palace Records Logo"
          link="https://punkpalacerecords.gatsbyjs.io/"
        />
        <ActionAreaCard
          className="project-card"
          title="Imagine"
          description="Short stories inspired by AI artwork"
          image={ImagineLogo}
          alt="Artwork from Midjourney"
          link="https://imagine-short-stories.vercel.app/"
        />
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
