<script setup>
    const { locale } = useI18n()
</script>

<template>
    <Html :lang="locale">
        <Body>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </Body>
    </Html>
</template>
