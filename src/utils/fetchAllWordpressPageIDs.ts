import { getAuthenticatedHeaders } from "@/utils/wordpressAuth";
import { WORDPRESS_USE_AUTH, WORDPRESS_URL } from "astro:env/server";

interface WordPressPage {
    ID: number;
    title: string;
}

interface WordPressRawPageResponse {
    found: number;
    dropdown_pages: WordPressPage[];
}

interface WordPressPageResponse {
    pageCount: number;
    pages: WordPressPage[];
}

export const fetchAllWordpressPageIDs = async (): Promise<WordPressPageResponse> => {

    const headers = await getAuthenticatedHeaders();

    // The way to get pages is with the dropdown-pages endpoint for some reason.
    const response = await fetch(
        `https://public-api.wordpress.com/rest/v1.1/sites/${WORDPRESS_URL}/dropdown-pages`,
        { headers }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch page: ${response.statusText}`);
    }

    const { found, dropdown_pages } = await response.json() as WordPressRawPageResponse;

    return {
        pageCount: found,
        pages: dropdown_pages
    };
};