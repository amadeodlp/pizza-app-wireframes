// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "PizzaCrafters Co.",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    },
    baseURL: "/pizza-app-wireframes/",
  },

  // Configure Nuxt to generate static output
  ssr: false,
  nitro: {
    preset: "static",
  },

  // For static site generation
  generate: {
    routes: ["/", "/PizzaMenu", "/OrderDetails", "/PizzaCustomization"]
  },

  // Disable prerendering to avoid 404 errors
  experimental: {
    payloadExtraction: false
  },

  compatibilityDate: "2025-04-22",
})