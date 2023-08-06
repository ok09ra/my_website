// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
      preset: 'node',
    },
    srcDir: 'src',
    /* ここから */
    ssr: false,
    app: {
      baseURL: '/my_website/', // ここはリポジトリ名にする(前後のスラッシュは必須)
    },
  });