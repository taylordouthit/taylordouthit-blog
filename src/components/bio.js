/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Chip from "@mui/material/Chip"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import LaptopIcon from "@mui/icons-material/Laptop"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <div className="image-summary">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <p>{author?.summary || null} </p>
      </div>
      <div className="socials">
        <Chip
          label="/taylordouthit"
          component="a"
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/taylordouthit/"
          variant="outlined"
          clickable
        />
        <Chip
          label="/taydouthit"
          component="a"
          icon={<TwitterIcon />}
          href="https://twitter.com/taydouthit"
          variant="outlined"
          clickable
        />
        <Chip
          label="/taylordouthit"
          component="a"
          icon={<GitHubIcon />}
          href="https://github.com/taylordouthit/"
          variant="outlined"
          clickable
        />
        <Chip
          label="Projects"
          component="a"
          icon={<LaptopIcon />}
          href="/projects"
          variant="outlined"
          clickable
        />
      </div>
    </div>
  )
}

export default Bio
