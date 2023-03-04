import { WordpressURL } from "../../siteData";
export const fetchWordpressPage = async (WordPressPageID: string) => {
  const { title, content } = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${WordpressURL}/posts/${WordPressPageID}`
  ).then((res) => res.json());

  return {
    title,
    content,
  };
};
