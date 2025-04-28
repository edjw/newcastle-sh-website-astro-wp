import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [tailwind()],
	env: {
		schema: {
			WORDPRESS_CLIENT_ID: envField.string({
				context: "server",
				access: "secret"
			}),
			WORDPRESS_CLIENT_SECRET: envField.string({
				context: "server",
				access: "secret"
			}),
			WORDPRESS_USERNAME: envField.string({
				context: "server",
				access: "secret"
			}),
			WORDPRESS_PASSWORD: envField.string({
				context: "server",
				access: "secret"
			}),
			WORDPRESS_USE_AUTH: envField.boolean({
				context: "server",
				access: "public"
			}),
		}
	}
});
