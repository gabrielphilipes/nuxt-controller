<script setup>
  import { useI18n } from 'vue-i18n'

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