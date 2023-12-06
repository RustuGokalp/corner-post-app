<template>
  <div>
    <Header />
    <Banner />
    <nuxt />
  </div>
</template>

<script>
import Banner from "~/components/shared/banner";
import Header from "~/components/shared/header";
export default {
  components: {
    Banner,
    Header,
  },
};
</script>

<style>
/* Stil tanımlamaları */
</style>
