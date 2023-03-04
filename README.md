## Newcastle Sacred Harp Website

Uses Wordpress.com as a headless CMS

Fetches content using the Wordpress.com API:
https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/%24post_ID/

Builds pages using Astro (https://astro.build)

Whenever a page on Wordpress is updated, a webhook is sent to Netlify to trigger a rebuild