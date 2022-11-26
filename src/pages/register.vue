<script lang="ts" setup>
    definePageMeta({ layout: 'auth' })
    useHead({ title: 'Cadastre-se e fique no controle' })

    const { t } = useI18n()
</script>

<template>
    <div>
        <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
        >

        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {{ t('auth.register.title') }}
        </h2>

        <p class="mt-2 text-sm text-gray-600">
            {{ t('auth.register.pre-login') }}
            <NuxtLink
                to="/login"
                class="font-medium text-indigo-600 hover:text-indigo-500"
            >
                {{ t('auth.register.login') }}
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
                        {{ t('auth.register.label-name') }}
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

                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                    >
                        {{ t('auth.register.label-email') }}
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

                <div class="flex justify-between w-full">
                    <div>
                        <label
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                        >
                            {{ t('auth.register.label-password') }}
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

                    <div>
                        <label
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                        >
                            {{ t('auth.register.label-password-confirmation') }}
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
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        >
                        <p class="flex space-x-1">
                            <label
                                for="remember-me"
                                class="ml-2 block text-sm text-gray-900"
                            >
                                {{ t('auth.register.label-terms') }}
                            </label>

                            <a
                                href="#"
                                class="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                {{ t('auth.register.terms') }}
                            </a>
                        </p>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {{ t('auth.register.button') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
