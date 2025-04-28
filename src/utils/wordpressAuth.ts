// Get the WordPress token using the client credentials flow so we can make authenticated requests to the WordPress API.

import { WORDPRESS_CLIENT_ID, WORDPRESS_CLIENT_SECRET, WORDPRESS_USERNAME, WORDPRESS_PASSWORD } from "astro:env/server";

export const getWordPressToken = async (): Promise<string> => {
    const response = await fetch('https://public-api.wordpress.com/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: WORDPRESS_CLIENT_ID,
            client_secret: WORDPRESS_CLIENT_SECRET,
            grant_type: 'password',
            username: WORDPRESS_USERNAME,
            password: WORDPRESS_PASSWORD,
        })
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch token: ${response.statusText}\n\nCheck the .env includes the correct client_id, client_secret, username and password`);
    }

    const data = await response.json();

    return data.access_token;
};