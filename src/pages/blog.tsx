import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';

import blogStyles from './blog.module.scss'

const BlogPage: React.FC = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						id
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
						featuredImage {
							fluid {
								src
							}
						}
						excert {
							childMarkdownRemark {
								excerpt(pruneLength: 150)
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<ul className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map((edge) => {
					return (
						<li className={blogStyles.post} key={edge.node.id}>
							<h2>
								<Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
							</h2>

							<div className={blogStyles.meta}>
								<span>
									Posted on {edge.node.publishedDate}
								</span>
							</div>
								{edge.node.featuredImage && (
									<img
										/* fluid={edge.node.featuredImage.fluid}
										key={edge.node.featuredImage.fluid.src} */
										alt={edge.node.title}
										src={edge.node.featuredImage.fluid.src}
									/>
								)}

							<p className={blogStyles.excerpt}>{edge.node.excert.childMarkdownRemark.excerpt}</p>

							<div className={blogStyles.button}>
								<Link to={`/blog/${edge.node.slug}`}>Read More</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
};

export default BlogPage;
