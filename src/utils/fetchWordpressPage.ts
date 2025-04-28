import { getAuthenticatedHeaders } from "@/utils/wordpressAuth";

import { WORDPRESS_URL } from "astro:env/server";
import { decode } from "html-entities";

export const fetchWordpressPage = async (WordPressPageID: string, fields = ["ID", "title", "content", "page_template", "slug"]) => {

	const headers = await getAuthenticatedHeaders();

	const pageID = WordPressPageID.toString();

	const response = await fetch(
		`https://public-api.wordpress.com/rest/v1.1/sites/${WORDPRESS_URL}/posts/${pageID}?fields=${fields.join(",")}`,
		{ headers }
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch page: ${response.statusText}`);
	}

	const json = await response.json();

	const { id, title, content, page_template, slug } = json;

	return {
		id,
		title: decode(title),
		content,
		pageTemplate: page_template,
		slug
	};
};
