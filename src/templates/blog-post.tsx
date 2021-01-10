import React from 'react';
import Layout from '../components/layout';
//To use rich-text-content
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';

import postStyles from './post.module.scss'


export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			featuredImage {
				fluid {
					src
				}
			}
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				json
			}
		}
	}
`;

const BlogPost = (props) => {
	//For rendering Images
	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img alt={alt} src={url} />;
			}
		}
	};
	return (
		<Layout>
			<div className={postStyles.content}>
				<h1>{props.data.contentfulBlogPost.title}</h1>
				<span className={postStyles.meta}>Posted on {props.data.contentfulBlogPost.publishedDate}</span>
				<div>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>
			</div>
		</Layout>
	);
};

export default BlogPost;
