<template>
  <div
    class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"
  >
    <Post v-for="index in 10" />
  </div>
</template>

<script>
import Post from "~/components/post/post";
export default {
  components: {
    Post,
  },
};
</script>
