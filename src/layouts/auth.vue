<script setup>
    import { useRoute } from 'nuxt/app'
    import { useHead } from '#head'

    const route = useRoute()
    const invert = computed(() => route.name === 'register')

    const appName = import.meta.env.VITE_APP_NAME
    useHead({
        titleTemplate: `%s | ${appName}`,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' },
        ],
    })
</script>

<template>
    <div
        class="flex h-screen w-full"
        :class="{ 'flex-row-reverse': invert }"
    >
        <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <slot />
            </div>
        </div>

        <div class="relative hidden w-0 flex-1 lg:block">
            <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://picsum.photos/1280/1920"
                alt=""
            >
        </div>
    </div>
</template>
