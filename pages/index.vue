<template>
  <NuxtLayout name="default">
    <h2>Nuxt 3 with Firebase Functions and Admin SDK</h2>
    <p>
      This project created to replicate the issue with a @nuxtjs/seo package which depends on the "nuxt-og-image" package, which in turn causes deployment issues due to platform-specific dependencies in @css-inline/css-inline and "@resvg/resvg-js" packages.
    </p>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "default"
})
useHead({
  title: "Test Nuxt SEO with Firebase",
});
</script>