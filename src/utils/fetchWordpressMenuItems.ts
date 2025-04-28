// This fetches the item from the *first menu* in the WordPress site. It assumes there is only one menu.

import { getAuthenticatedHeaders } from "@/utils/wordpressAuth";
import { WORDPRESS_URL } from "astro:env/server";
import { fetchWordpressPage } from "./fetchWordpressPage";
import { slugify } from "@/utils/slugify";

export const fetchWordpressMenuItems = async () => {
    const headers = await getAuthenticatedHeaders();

    const response = await fetch(
        `https://public-api.wordpress.com/rest/v1.1/sites/${WORDPRESS_URL}/menus`,
        { headers }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch page: ${response.statusText}`);
    }

    const json = await response.json();

    const menuIndex = 0; // Only get the first menu

    const items = json.menus[menuIndex].items;

    // Use Promise.all to wait for all the promises in the map to resolve
    const menuItems = await Promise.all(items.map(async (item) => {


        const { title, pageTemplate, slug } = await fetchWordpressPage(item.content_id, ["title", "page_template", "slug"]);

        let newSlug = slugify(slug);

        if (pageTemplate === "homepage") {
            newSlug = "/";
        }

        return {
            id: item.id,
            title: item.name,
            slug: newSlug
        };
    }));


    return menuItems;
};

