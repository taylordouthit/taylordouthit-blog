import * as React from "react"
import { Link } from "gatsby"

export default function Posts({ posts, includeTags = false }) {
  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title =
          post.frontmatter.title.replace("_", " ") || post.fields.slug
        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>
                  {post.frontmatter.date}
                  <span className="divider">|</span>
                  <span className="ttr">{post.timeToRead} min read </span>
                  {includeTags && (
                    <>
                      <span className="divider">|</span>
                      <span className="tags">
                        {post?.frontmatter?.tags &&
                          post?.frontmatter?.tags
                            ?.split(", ")
                            .map((tag, index) => (
                              <Link
                                key={index}
                                to={tag}
                                itemProp="url"
                                className="tag"
                              >
                                {tag}
                              </Link>
                            ))}
                      </span>
                    </>
                  )}
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}
