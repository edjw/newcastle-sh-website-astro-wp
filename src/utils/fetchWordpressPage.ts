import { getWordPressToken } from "@/utils/wordpressAuth";

import { WORDPRESS_USE_AUTH, WORDPRESS_URL } from "astro:env/server";


export const fetchWordpressPage = async (WordPressPageID: string) => {

	const isPrivateContent = WORDPRESS_USE_AUTH;

	let headers: HeadersInit = {};

	if (isPrivateContent) {
		const token = await getWordPressToken();
		headers = {
			'Authorization': `Bearer ${token}`
		};
	}

	const response = await fetch(
		`https://public-api.wordpress.com/rest/v1.1/sites/${WORDPRESS_URL}/posts/${WordPressPageID}`,
		{ headers }
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch page: ${response.statusText}`);
	}

	const { title, content } = await response.json();

	return {
		title,
		content,
	};
};
