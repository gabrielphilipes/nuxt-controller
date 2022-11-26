<script lang="ts" setup>
    const { t } = useI18n()

    definePageMeta({ layout: 'auth' })
    useHead({ title: 'Acesse sua conta' })
</script>

<template>
    <div>
        <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
        >

        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {{ t('auth.login.title') }}
        </h2>

        <p class="mt-2 text-sm text-gray-600">
            {{ t('auth.login.pre-register') }}
            <NuxtLink
                to="/register"
                class="font-medium text-indigo-600 hover:text-indigo-500"
            >
                {{ t('auth.login.register') }}
            </NuxtLink>
        </p>
    </div>

    <div class="mt-8">
        <div class="mt-6">
            <form
                action="#"
                method="POST"
                class="space-y-6"
            >
                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                    >
                        {{ t('auth.login.label-email') }}
                    </label>

                    <div class="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                    </div>
                </div>

                <div class="space-y-1">
                    <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        {{ t('auth.login.label-password') }}
                    </label>

                    <div class="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        >
                        <label
                            for="remember-me"
                            class="ml-2 block text-sm text-gray-900"
                        >
                            {{ t('auth.login.remember-me') }}
                        </label>
                    </div>

                    <div class="text-sm">
                        <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            {{ t('auth.login.forgot-password') }}
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {{ t('auth.login.button') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
