import { defineConfig, envField } from "astro/config";


import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  env: {
      schema: {
          WORDPRESS_URL: envField.string({
              context: "server",
              access: "public"
          }),
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
	},

  vite: {
    plugins: [tailwindcss()]
  }
});