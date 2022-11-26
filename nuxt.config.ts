
export default defineNuxtConfig({
    srcDir: 'src',

    modules: [
        '@nuxtjs/tailwindcss', // https://tailwindcss.com/docs/guides/nuxtjs
        '@pinia/nuxt', // https://pinia.vuejs.org/nuxt.html
        '@nuxtjs/i18n', // https://i18n.nuxtjs.org/
    ],

    css: [
        '@/assets/css/main.css',
    ],

    build: {
        transpile: [
            '@headlessui/vue',
        ],
    },

    // localization - i18n config
    i18n: {
        locales: [
            { code: 'ptBR', file: 'ptBR.json' },
            { code: 'en', file: 'en.json' },
        ],
        defaultLocale: 'pt-BR',
        langDir: 'locales/',
        strategy: 'no_prefix',
    },

    typescript: {
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt'],
            },
        },
    },
})
